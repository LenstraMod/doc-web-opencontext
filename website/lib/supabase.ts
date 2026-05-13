import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _client: SupabaseClient | null = null;

/**
 * Returns a Supabase client if credentials are properly configured,
 * otherwise returns null (allows graceful fallback in server components).
 *
 * Usage:
 *   import { getSupabase } from '@/lib/supabase';
 *   const supabase = getSupabase();
 *   if (!supabase) { return fallbackData; }
 *   const { data } = await supabase.from('changelog').select('*');
 */
export function getSupabase(): SupabaseClient | null {
  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const isConfigured =
    url &&
    key &&
    url !== 'your-supabase-url-here' &&
    key !== 'your-supabase-anon-key-here' &&
    key !== 'your-supabase-publishable-key-here' &&
    url.startsWith('http');

  if (!isConfigured) {
    // Not configured — will use fallback data
    return null;
  }

  _client = createClient(url!, key!);
  return _client;
}

/** Direct client export for convenience (may be null if not configured) */
export const supabase = typeof window !== 'undefined' ? getSupabase() : null;
