import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'OpenContext — Automated Staff Engineer CLI',
    template: '%s | OpenContext',
  },
  description:
    'OpenContext is a local-first, git-hook-driven CLI tool that acts as an automated Staff Engineer. It synthesizes system architecture, Jira tickets, and code diffs to manage AI agent instructions.',
  keywords: ['opencontext', 'staff engineer', 'CLI', 'AI agents', 'git hooks', 'developer tools'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opencontext.dev',
    siteName: 'OpenContext',
    title: 'OpenContext — Automated Staff Engineer CLI',
    description: 'Synthesize system architecture, Jira tickets, and code diffs to manage AI agent instructions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenContext — Automated Staff Engineer CLI',
    description: 'Synthesize system architecture, Jira tickets, and code diffs to manage AI agent instructions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
