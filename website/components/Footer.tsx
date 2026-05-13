'use client';

import Link from 'next/link';

const footerLinks = [
  { href: 'https://github.com/Fission-AI/OpenSpec', label: 'GitHub', external: true },
  { href: '/docs', label: 'Docs', external: false },
  { href: '/changelog', label: 'Changelog', external: false },
  { href: '/about', label: 'About', external: false },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-8 mt-20"
      style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} OpenContext. Built for the Refactory Hackathon.
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-secondary)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent-secondary)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
