import { createClient } from '@supabase/supabase-js'

// Note: Use this client ONLY in server environments (API routes, Server Actions)
// as it bypasses Row Level Security (RLS).
export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)
