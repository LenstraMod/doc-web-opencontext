import { getSupabase } from '@/lib/supabase';

export interface ChangelogEntry {
  id: string;
  version: string;
  release_date: string;
  title: string;
  description: string;
  type: 'major' | 'minor' | 'patch' | 'upcoming';
  changes: string[];
  created_at: string;
}

/**
 * Fetch all changelog entries from Supabase, sorted by release date descending.
 * Returns an empty array if Supabase is not configured (triggers fallback data in the page).
 *
 * Supabase table schema (run in Supabase SQL editor):
 *
 *   create table changelog (
 *     id          uuid primary key default gen_random_uuid(),
 *     version     text not null,
 *     release_date date not null,
 *     title       text not null,
 *     description text not null,
 *     type        text check (type in ('major','minor','patch','upcoming')),
 *     changes     text[] not null default '{}',
 *     created_at  timestamptz default now()
 *   );
 *
 *   -- Enable RLS and grant public read access:
 *   alter table changelog enable row level security;
 *   create policy "Public read" on changelog for select using (true);
 */
export async function fetchChangelog(): Promise<ChangelogEntry[]> {
  const supabase = getSupabase();

  if (!supabase) {
    // Supabase not configured — return empty so the page uses its fallback data
    return [];
  }

  const { data, error } = await supabase
    .from('changelog')
    .select('*')
    .order('release_date', { ascending: false });

  if (error) {
    console.error('[changelog service] Supabase error:', error.message);
    return [];
  }

  return (data as ChangelogEntry[]) ?? [];
}
