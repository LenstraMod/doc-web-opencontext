import type { Metadata } from 'next';
import TwoColumnLayout from '@/components/TwoColumnLayout';
import type { CodeEntry } from '@/components/CodeColumn';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Technical documentation for OpenContext — setup guides, CLI commands, and integration references.',
};

/* ─────────────────────────────────────────────────────────────────────────────
   CODE ENTRIES — HOW TO ADD A NEW CLI COMMAND:
   
   1. Find the relevant section below (e.g., quickStartCode, configCode, etc.)
   2. Add a new CodeEntry object to that array:
      { label: 'Your Label', language: 'bash', code: 'opencontext your-command' }
   3. The CodeColumn will automatically render it.
   
   See doc.md § "Code Column Guide" for a full walkthrough.
   ───────────────────────────────────────────────────────────────────────────── */

/** ── SECTION: Quick Start ── */
const quickStartCode: CodeEntry[] = [
  {
    label: 'Initialize OpenContext',
    language: 'bash',
    // ← ADD YOUR INIT COMMAND HERE
    code: 'git init\nnpx opencontext init',
  },
  {
    label: 'Install globally',
    language: 'bash',
    // ← ADD INSTALL COMMANDS HERE
    code: 'npm install -g opencontext\n# or\nbrew install opencontext',
  },
];

/** ── SECTION: Configuration ── */
const configCode: CodeEntry[] = [
  {
    label: 'opencontext.config.yaml',
    language: 'yaml',
    // ← ADD CONFIG EXAMPLES HERE
    code: `jira:\n  project: "ENG"\n  base_url: "https://yourorg.atlassian.net"\nagents:\n  - claude\n  - cursor\nhooks:\n  - pre-commit\n  - post-merge`,
  },
];

/** ── SECTION: CLI Reference ── */
const cliReferenceCode: CodeEntry[] = [
  {
    label: 'Core commands',
    language: 'bash',
    // ← ADD MORE CLI COMMANDS HERE
    code: `opencontext init          # Bootstrap in current repo\nopencontext sync          # Manually sync context\nopencontext status        # Show current context state\nopencontext diff          # Analyze current git diff`,
  },
  {
    label: 'Agent commands',
    language: 'bash',
    // ← ADD AGENT COMMANDS HERE
    code: `opencontext agents list   # List configured agents\nopencontext agents update # Regenerate all agent files`,
  },
];

const docSections = [
  {
    id: 'quick-start',
    title: 'Initializing OpenContext',
    codeEntries: quickStartCode,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Quick Start: Initializing OpenContext
        </h2>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          Get OpenContext running in your repository in under 2 minutes. It hooks into git automatically after initialization.
        </p>
        <ol className="space-y-3 list-decimal list-inside text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li>Ensure you have a git repository initialized (<code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>git init</code> if not).</li>
          <li>Run <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>npx opencontext init</code> to bootstrap the tool.</li>
          <li>Follow the interactive setup to connect your Jira project and preferred AI agents.</li>
          <li>OpenContext will install git hooks and generate your first <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>AGENTS.md</code>.</li>
        </ol>
        <div
          className="mt-6 p-4 rounded-lg text-sm"
          style={{ background: 'rgba(108, 99, 255, 0.08)', border: '1px solid var(--border-accent)', color: 'var(--text-secondary)' }}
        >
          <strong style={{ color: 'var(--accent-secondary)' }}>💡 Tip:</strong> Run{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>opencontext status</code>{' '}
          after init to verify everything is wired up correctly.
        </div>
      </>
    ),
  },
  {
    id: 'configuration',
    title: 'Configuration',
    codeEntries: configCode,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          Configuration
        </h2>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          OpenContext is configured via <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>opencontext.config.yaml</code> in your repository root.
          This file controls Jira integration, which AI agents to generate files for, and which git hooks are used.
        </p>
        <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><strong style={{ color: 'var(--text-primary)' }}>jira.project</strong> — The Jira project key to pull tickets from.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>jira.base_url</strong> — Your Atlassian cloud URL.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>agents</strong> — List of agents to generate instruction files for.</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>hooks</strong> — Git hooks where OpenContext will auto-run.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cli-reference',
    title: 'CLI Reference',
    codeEntries: cliReferenceCode,
    content: (
      <>
        <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          CLI Reference
        </h2>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          OpenContext provides a simple CLI with a small surface area. All commands follow the{' '}
          <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>opencontext [command] [flags]</code>{' '}
          pattern.
        </p>
        <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>init</code> — Bootstrap OpenContext in the current repository.</li>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>sync</code> — Manually trigger a full context synchronization.</li>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>status</code> — Print the current state of context files.</li>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>diff</code> — Analyze the current git diff and output a context summary.</li>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>agents list</code> — List all agent instruction files being managed.</li>
          <li><code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'var(--code-bg)', color: 'var(--accent-secondary)' }}>agents update</code> — Regenerate all agent instruction files.</li>
        </ul>
      </>
    ),
  },
];

export default function DocsPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Docs Header */}
      <div
        className="border-b py-12"
        style={{ borderColor: 'var(--border-subtle)', background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-secondary)' }}>Documentation</span>
          </div>
          <h1 id="docs-headline" className="text-4xl md:text-5xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
            Documentation
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to install, configure, and use OpenContext in your development workflow.
          </p>
        </div>
      </div>

      {/* Doc Sections */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* On-page nav */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {docSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              id={`docs-nav-${section.id}`}
              className="text-sm px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                background: 'rgba(108, 99, 255, 0.08)',
                color: 'var(--accent-secondary)',
                border: '1px solid var(--border-accent)',
              }}
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Two-column doc sections */}
        {docSections.map((section) => (
          <TwoColumnLayout
            key={section.id}
            id={section.id}
            codeEntries={section.codeEntries}
          >
            {section.content}
          </TwoColumnLayout>
        ))}
      </div>
    </div>
  );
}
