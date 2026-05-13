'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface CodeEntry {
  /** Optional label shown above the code block (e.g. "bash", "Initialize") */
  label?: string;
  /** The programming language for syntax highlighting */
  language?: string;
  /** The actual CLI command or code snippet to display */
  code: string;
}

interface CodeColumnProps {
  /** Array of code entries to display. Add new CLI commands here. */
  entries: CodeEntry[];
  className?: string;
}

/**
 * CodeColumn — Modular code display component.
 *
 * HOW TO ADD A NEW CLI COMMAND:
 * 1. Find the page file that renders this component (e.g., app/docs/page.tsx)
 * 2. Locate the `entries` prop passed to <CodeColumn />
 * 3. Add a new object to the array:
 *    { label: 'Your Label', language: 'bash', code: 'your command here' }
 * See doc.md for the full guide.
 */
export default function CodeColumn({ entries, className = '' }: CodeColumnProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {entries.map((entry, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden"
          style={{
            background: 'var(--code-bg)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ borderBottom: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="flex items-center gap-2">
              {/* Traffic light dots */}
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              </div>
              {entry.label && (
                <span className="text-xs font-mono ml-2" style={{ color: 'var(--text-muted)' }}>
                  {entry.label}
                </span>
              )}
            </div>
            {/* Copy button */}
            <button
              id={`copy-btn-${index}`}
              onClick={() => handleCopy(entry.code, index)}
              className="text-xs px-3 py-1 rounded-md transition-all duration-200 flex items-center gap-1.5"
              style={{
                color: copiedIndex === index ? '#28c840' : 'var(--text-muted)',
                background: copiedIndex === index ? 'rgba(40, 200, 64, 0.1)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${copiedIndex === index ? 'rgba(40,200,64,0.3)' : 'transparent'}`,
              }}
            >
              {copiedIndex === index ? (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copy
                </>
              )}
            </button>
          </div>

          {/* Code block */}
          <SyntaxHighlighter
            language={entry.language ?? 'bash'}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1rem 1.25rem',
              background: 'transparent',
              fontSize: '0.85rem',
              lineHeight: '1.6',
            }}
            wrapLongLines
          >
            {entry.code}
          </SyntaxHighlighter>
        </div>
      ))}
    </div>
  );
}
