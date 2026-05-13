'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/about', label: 'About Us' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" id="nav-logo" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, var(--accent-primary), #e879f9)', boxShadow: '0 0 20px var(--accent-glow)' }}
          >
            <span className="text-white font-bold text-sm">OC</span>
          </div>
          <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
            Open<span className="gradient-text">Context</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
                  borderBottom: isActive ? '1px solid var(--accent-primary)' : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/fadhilr2/opencontext"
            id="nav-github-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
              color: 'white',
              boxShadow: '0 0 15px var(--accent-glow)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px var(--accent-glow)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px var(--accent-glow)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--text-secondary)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border-subtle)', background: 'rgba(10, 10, 15, 0.95)' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-sm font-medium"
                style={{
                  color: isActive ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(108, 99, 255, 0.1)' : 'transparent',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
