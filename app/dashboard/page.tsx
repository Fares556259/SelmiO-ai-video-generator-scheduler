import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { supabaseAdmin } from '@/utils/supabase/admin'
import { LayoutDashboard, Video, CalendarClock } from 'lucide-react'

export default async function DashboardPage() {
    const user = await currentUser()

    if (!user) {
        redirect('/')
    }

    // Fallback Sync: Ensure user exists in Supabase "users" table
    // This helps when running locally and webhooks are not being forwarded
    try {
        const { data: existingUser, error: checkError } = await supabaseAdmin
            .from('users')
            .select('user_id')
            .eq('user_id', user.id)
            .single()

        if (!existingUser && checkError?.code === 'PGRST116') {
            // PGRST116 means zero rows returned (user not in DB yet)
            const email = user.emailAddresses[0]?.emailAddress || ''
            const name = `${user.firstName || ''} ${user.lastName || ''}`.trim()

            const { error: insertError } = await supabaseAdmin.from('users').insert({
                user_id: user.id,
                email: email,
                name: name,
            })

            if (insertError) {
                console.error('Error inserting user at dashboard sync:', insertError)
            } else {
                console.log(`Successfully synced user ${user.id} to Supabase on first dashboard load`)
            }
        }
    } catch (err) {
        console.error('Error syncing user on dashboard:', err)
    }

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-12">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2">Dashboard</h1>
                        <p className="text-zinc-400">Welcome back, {user.firstName || 'Creator'}!</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2">
                            <Video className="w-4 h-4" />
                            New Video
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                            <LayoutDashboard className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Projects Overview</h3>
                        <p className="text-zinc-400 text-sm">You have 0 active video projects.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                            <CalendarClock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Scheduled Posts</h3>
                        <p className="text-zinc-400 text-sm">No videos currently scheduled.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-transparent border border-purple-500/30 flex flex-col items-center text-center">
                        <h3 className="text-lg font-bold text-purple-300 mb-2">Upgrade to Pro</h3>
                        <p className="text-purple-200/60 text-sm mb-4">Unlock unlimited AI generations and multi-platform scheduling.</p>
                        <button className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors w-full">
                            View Plans
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
