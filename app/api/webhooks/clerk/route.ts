import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/utils/supabase/admin'

export async function POST(req: Request) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the endpoint
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env.local')
    }

    // Get the headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload)

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET)

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return new Response('Error occured', {
            status: 400,
        })
    }

    // Process the webhook
    if (evt.type === 'user.created') {
        const { id, email_addresses, first_name, last_name } = evt.data

        const email = email_addresses && email_addresses[0] ? email_addresses[0].email_address : ''
        const name = `${first_name || ''} ${last_name || ''}`.trim()

        try {
            // Insert user into Supabase
            const { error } = await supabaseAdmin.from('users').insert({
                user_id: id,
                email: email,
                name: name,
            })

            if (error) {
                console.error('Supabase Insertion Error:', error)
                return new Response('Error syncing user to database', { status: 500 })
            }

            console.log(`Successfully synced user ${id} to Supabase users table`)
        } catch (dbError) {
            console.error('Database Sync Exception:', dbError)
            return new Response('Internal Server Error', { status: 500 })
        }
    }

    return new Response('', { status: 200 })
}
