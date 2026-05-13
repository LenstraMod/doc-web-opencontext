import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The mission, vision, and story behind OpenContext — the automated Staff Engineer CLI built at the Refactory Hackathon.',
};

const values = [
  {
    icon: '🧭',
    title: 'Context is Everything',
    description:
      'Great software is built with great understanding. We believe AI agents deserve the same rich context a senior engineer would have.',
  },
  {
    icon: '🔒',
    title: 'Privacy by Default',
    description:
      'Your code is yours. OpenContext runs entirely locally — zero telemetry, zero cloud, zero compromises.',
  },
  {
    icon: '⚙️',
    title: 'Developer Experience First',
    description:
      'We build tools that developers actually want to use. Low friction, high value, seamlessly integrated.',
  },
  {
    icon: '🤝',
    title: 'Human + AI Collaboration',
    description:
      "OpenContext doesn't replace engineers — it amplifies them, creating a synergy between human creativity and AI capability.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        id="about-hero"
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))' }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(232, 121, 249, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-secondary)' }}>About Us</span>
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(108, 99, 255, 0.1)',
              border: '1px solid var(--border-accent)',
              color: 'var(--accent-secondary)',
            }}
          >
            🏆 Built at the Refactory Hackathon
          </div>

          <h1
            id="about-headline"
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{ color: 'var(--text-primary)', lineHeight: '1.1' }}
          >
            Building the AI Dev{' '}
            <span className="gradient-text">Workflow of the Future</span>
          </h1>

          <p className="text-lg max-w-2xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            OpenContext was born from a simple frustration: AI coding agents are powerful, but they lack context.
            They don't know your architecture, your tickets, your team's decisions. We set out to fix that.
          </p>
        </div>
      </section>

      {/* Story */}
      <section id="our-story" className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              The Problem We Saw
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Modern development teams are adopting AI coding assistants at lightning speed. But there&apos;s a gap:
                these agents are working in the dark. They see a snippet of code, maybe a file — but not the
                system architecture, not the Jira ticket driving the feature, not the last three PRs that shaped
                the surrounding code.
              </p>
              <p>
                The result? Suggestions that miss the point. Code that technically works but architecturally
                diverges. Hours spent re-explaining context to an agent that forgets everything between sessions.
              </p>
              <p>
                <strong style={{ color: 'var(--text-primary)' }}>OpenContext is the Staff Engineer that never forgets.</strong>{' '}
                It watches your repo, synthesizes context from every source of truth — git, Jira, architecture docs —
                and keeps your AI agents perpetually informed.
              </p>
            </div>
          </div>
          <div
            className="glass-card p-8 relative overflow-hidden"
            style={{ background: 'rgba(108, 99, 255, 0.05)', border: '1px solid var(--border-accent)' }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32"
              style={{ background: 'radial-gradient(circle, rgba(108, 99, 255, 0.15), transparent)', filter: 'blur(30px)' }}
            />
            <blockquote className="text-lg italic leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              &ldquo;What if every AI agent on your team had the institutional knowledge of a 10-year Staff Engineer,
              updated in real-time?&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--accent-secondary)' }}>
              — The OpenContext Vision
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="py-20"
        style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Our Mission
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            To make AI-assisted development as effective as pair programming with a Staff Engineer,
            by ensuring every AI agent always has perfect, up-to-date context about your entire system.
          </p>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          What We Believe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              id={`value-${i + 1}`}
              className="glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-accent)]"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="about-cta" className="py-16 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Ready to get started?
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
          Explore the documentation and set up OpenContext in your repo today.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/docs"
            id="about-cta-docs"
            className="px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)', color: 'white', boxShadow: '0 0 25px var(--accent-glow)' }}
          >
            Read the Docs
          </Link>
          <Link
            href="/changelog"
            id="about-cta-changelog"
            className="px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-[rgba(108,99,255,0.08)] hover:-translate-y-0.5"
            style={{ border: '1px solid var(--border-accent)', color: 'var(--accent-secondary)' }}
          >
            View Changelog
          </Link>
        </div>
      </section>
    </div>
  );
}
