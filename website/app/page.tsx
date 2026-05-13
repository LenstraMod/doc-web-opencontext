import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenContext — Automated Staff Engineer CLI',
  description:
    'OpenContext is a local-first, git-hook-driven CLI tool that acts as your automated Staff Engineer. Synthesize architecture, Jira tickets, and diffs to manage AI agent instructions.',
};

const features = [
  {
    icon: '🧠',
    title: 'Architecture Synthesis',
    description:
      'Automatically reads your codebase structure and synthesizes a rich system architecture context that AI agents can understand.',
  },
  {
    icon: '🎫',
    title: 'Jira Integration',
    description:
      'Pulls relevant Jira tickets and aligns them with your current code changes, giving AI agents full business context.',
  },
  {
    icon: '⚡',
    title: 'Git-Hook Driven',
    description:
      'Runs automatically on git events — no manual triggers. Every commit, push, and merge generates fresh AI context.',
  },
  {
    icon: '🤖',
    title: 'Agent Instruction Management',
    description:
      'Writes and updates AGENTS.md, CLAUDE.md, and other AI agent instruction files so your agents always have the best context.',
  },
  {
    icon: '📊',
    title: 'Diff Analysis',
    description:
      'Analyzes code diffs intelligently, highlighting breaking changes, new patterns, and architectural shifts for agents.',
  },
  {
    icon: '🔒',
    title: 'Local-First Privacy',
    description:
      'All processing happens on your machine. No telemetry, no cloud. Your code never leaves your environment.',
  },
];

export default function HomePage() {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--gradient-hero)' }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(232, 121, 249, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 animate-fade-in-up"
            style={{
              background: 'rgba(108, 99, 255, 0.1)',
              border: '1px solid var(--border-accent)',
              color: 'var(--accent-secondary)',
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: 'var(--accent-primary)' }} />
            Local-First · Git-Hook Driven · Privacy Preserving
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up"
            style={{ color: 'var(--text-primary)', lineHeight: '1.1', animationDelay: '0.1s' }}
          >
            Your Automated
            <br />
            <span className="gradient-text">Staff Engineer</span>
          </h1>

          {/* Sub-headline */}
          <p
            id="hero-description"
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.8', animationDelay: '0.2s' }}
          >
            OpenContext is a CLI tool that synthesizes your system architecture, Jira tickets,
            and code diffs — automatically managing AI agent instructions so your agents always
            have perfect context.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Link
              href="/docs"
              id="hero-cta-docs"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
                color: 'white',
                boxShadow: '0 0 30px var(--accent-glow)',
              }}
            >
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/changelog"
              id="hero-cta-changelog"
              className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 inline-flex items-center gap-2 hover:bg-[rgba(108,99,255,0.1)] hover:-translate-y-0.5"
              style={{
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-accent)',
              }}
            >
              View Changelog
            </Link>
          </div>

          {/* Terminal preview */}
          <div
            id="hero-terminal"
            className="mt-16 max-w-2xl mx-auto rounded-2xl overflow-hidden animate-fade-in-up"
            style={{
              animationDelay: '0.4s',
              background: 'var(--code-bg)',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 80px rgba(0,0,0,0.5)',
            }}
          >
            <div
              className="flex items-center gap-2 px-5 py-3"
              style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-3 text-xs" style={{ color: 'var(--text-muted)' }}>opencontext — bash</span>
            </div>
            <div className="p-6 text-left font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p><span style={{ color: '#28c840' }}>$</span> <span style={{ color: 'var(--text-primary)' }}>opencontext init</span></p>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>✔ Analyzing repository structure...</p>
              <p style={{ color: 'var(--text-muted)' }}>✔ Syncing Jira context (12 tickets found)</p>
              <p style={{ color: 'var(--text-muted)' }}>✔ Generating AI agent instructions...</p>
              <p className="mt-2" style={{ color: '#28c840' }}>✓ AGENTS.md updated — your agents are ready.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Everything Your AI Agents Need
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            OpenContext bridges the gap between your development workflow and AI coding assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              id={`feature-${i + 1}`}
              className="glass-card p-6 transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-[var(--border-accent)]"
              style={{ boxShadow: 'none' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: 'rgba(108, 99, 255, 0.1)' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta-banner" className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(108, 99, 255, 0.05) 0%, rgba(232, 121, 249, 0.05) 100%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to supercharge your AI workflow?
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Get started in under 2 minutes. OpenContext installs with a single command.
          </p>
          <Link
            href="/docs"
            id="cta-banner-btn"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
              color: 'white',
              boxShadow: '0 0 40px var(--accent-glow)',
            }}
          >
            Read the Docs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
