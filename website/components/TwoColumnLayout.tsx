import { ReactNode } from 'react';
import CodeColumn, { CodeEntry } from './CodeColumn';

interface TwoColumnLayoutProps {
  /** Documentation text content (left column) */
  children: ReactNode;
  /** Array of CodeEntry objects for the right column. 
   *  To add CLI commands, pass them here as CodeEntry objects. */
  codeEntries: CodeEntry[];
  /** Optional id for the section wrapper */
  id?: string;
}

/**
 * TwoColumnLayout — Responsive doc layout with text on left, code on right.
 * 
 * On desktop (≥ lg): side-by-side columns (text | code)
 * On mobile (< lg): code stacks below text
 */
export default function TwoColumnLayout({ children, codeEntries, id }: TwoColumnLayoutProps) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-10"
      style={{ borderBottom: '1px solid var(--border-subtle)' }}
    >
      {/* Left: Documentation text */}
      <div className="prose-custom max-w-none">
        {children}
      </div>

      {/* Right: Code column — sticky on desktop so it follows while user scrolls text */}
      <div className="lg:sticky lg:top-24">
        <CodeColumn entries={codeEntries} />
      </div>
    </section>
  );
}
