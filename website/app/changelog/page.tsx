import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchChangelog, type ChangelogEntry } from '@/lib/changelog';

// Always fetch fresh data from Supabase on every request
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'CLI version history, release notes, and upcoming features for OpenContext.',
};

// Fallback data shown when Supabase is not yet configured
const fallbackChangelog: ChangelogEntry[] = [
  {
    id: 'upcoming',
    version: 'v0.4.0',
    release_date: '2026-06-01',
    title: 'Vector Context Engine',
    description: 'Introducing semantic vector search over your codebase for smarter, more precise AI context.',
    type: 'upcoming',
    changes: [
      'LanceDB integration for local vector storage',
      'Semantic search over code chunks',
      'Automatic re-embedding on file change',
      'Cross-repository context linking',
    ],
    created_at: '',
  },
  {
    id: 'v0-3-0',
    version: 'v0.3.0',
    release_date: '2026-05-13',
    title: 'Multi-Agent Support',
    description: 'OpenContext now manages instruction files for multiple AI agent types simultaneously.',
    type: 'major',
    changes: [
      'Support for Claude, Cursor, and Copilot agent files',
      'Per-agent context customization',
      'Agent file diff viewer in CLI',
      'Fix: Jira ADF parser crash on empty descriptions',
    ],
    created_at: '',
  },
  {
    id: 'v0-2-0',
    version: 'v0.2.0',
    release_date: '2026-04-20',
    title: 'Jira Integration',
    description: 'Full Jira ticket ingestion with Atlassian Document Format parsing.',
    type: 'minor',
    changes: [
      'Jira REST API v3 integration',
      'ADF (Atlassian Document Format) parser',
      'Ticket-to-context mapping algorithm',
      'Configurable ticket filters (by sprint, label, assignee)',
    ],
    created_at: '',
  },
  {
    id: 'v0-1-0',
    version: 'v0.1.0',
    release_date: '2026-03-01',
    title: 'Initial Release',
    description: 'The first public release of OpenContext — git-hook driven agent context management.',
    type: 'patch',
    changes: [
      'opencontext init command',
      'Automatic AGENTS.md generation',
      'Git hook installation (pre-commit, post-merge)',
      'Repository structure analysis',
    ],
    created_at: '',
  },
];

const typeConfig: Record<ChangelogEntry['type'], { label: string; color: string; bg: string; border: string }> = {
  upcoming: {
    label: 'Upcoming',
    color: '#e879f9',
    bg: 'rgba(232, 121, 249, 0.08)',
    border: 'rgba(232, 121, 249, 0.3)',
  },
  major: {
    label: 'Major',
    color: '#6c63ff',
    bg: 'rgba(108, 99, 255, 0.08)',
    border: 'rgba(108, 99, 255, 0.3)',
  },
  minor: {
    label: 'Minor',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.08)',
    border: 'rgba(56, 189, 248, 0.3)',
  },
  patch: {
    label: 'Patch',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.08)',
    border: 'rgba(52, 211, 153, 0.3)',
  },
};

function formatDate(dateStr: string): string {
  if (!dateStr) return 'TBD';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function ChangelogPage() {
  // Attempt to fetch from Supabase; fall back to static data gracefully
  let entries: ChangelogEntry[];
  try {
    const remote = await fetchChangelog();
    entries = remote.length > 0 ? remote : fallbackChangelog;
  } catch {
    entries = fallbackChangelog;
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Header */}
      <div
        className="border-b py-12"
        style={{ borderColor: 'var(--border-subtle)', background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-secondary)' }}>Changelog</span>
          </div>
          <h1 id="changelog-headline" className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
            Changelog
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            CLI version history, release notes, and upcoming features.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-8"
            style={{ background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}
          />

          <div className="space-y-12">
            {entries.map((entry, i) => {
              const cfg = typeConfig[entry.type] ?? typeConfig.patch;
              return (
                <div
                  key={entry.id}
                  id={`changelog-${entry.id}`}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-3.5 md:left-5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: entry.type === 'upcoming' ? cfg.bg : 'var(--bg-primary)',
                      borderColor: cfg.color,
                      boxShadow: i === 0 ? `0 0 15px ${cfg.color}50` : 'none',
                    }}
                  >
                    {entry.type === 'upcoming' && (
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: cfg.color }} />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="glass-card p-6 transition-all duration-300 hover:translate-x-1 hover:border-[var(--border-accent)]"
                  >
                    {/* Card header */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <span
                          className="font-mono text-xl font-bold"
                          style={{ color: cfg.color }}
                        >
                          {entry.version}
                        </span>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {formatDate(entry.release_date)}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {entry.title}
                    </h2>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {entry.description}
                    </p>

                    {/* Change list */}
                    <ul className="space-y-1.5">
                      {entry.changes.map((change, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cfg.color }} />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
