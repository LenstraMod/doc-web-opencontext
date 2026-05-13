# OpenContext Documentation Website — Developer Guide

> **Purpose**: This guide is for developers maintaining or extending the OpenContext documentation website.
> It covers the project structure, how to add CLI commands to the docs, and how to set up Supabase.

---

## Project Structure

```
website/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navigation + Footer + metadata)
│   ├── globals.css             # Global styles (CSS variables, animations, utilities)
│   ├── page.tsx                # Home page (/)
│   ├── docs/
│   │   └── page.tsx            # Documentation page (/docs) ← two-column layout lives here
│   ├── about/
│   │   └── page.tsx            # About Us page (/about)
│   └── changelog/
│       └── page.tsx            # Changelog page (/changelog)
│
├── components/                 # Reusable React components
│   ├── Navigation.tsx          # Top navigation bar (responsive, mobile hamburger)
│   ├── CodeColumn.tsx          # Code block with copy button & syntax highlighting
│   └── TwoColumnLayout.tsx     # Two-column docs layout (text | code)
│
├── lib/                        # Utility/service layer
│   ├── supabase.ts             # Supabase client initialization
│   └── changelog.ts            # Changelog data service (fetches from Supabase)
│
├── .env.local                  # ← YOUR environment variables (not committed)
├── .env.local.example          # Template for environment variables
└── doc.md                      # This file
```

---

## Code Column Guide

> **How to manually add CLI commands to the documentation.**

All CLI commands displayed in the Docs page are defined as `CodeEntry` arrays in:

```
app/docs/page.tsx
```

### Step-by-Step: Adding a New Command

1. **Open** `app/docs/page.tsx`

2. **Find the relevant code array** near the top of the file (after the imports):
   - `quickStartCode` — commands for the "Initializing OpenContext" section
   - `configCode` — configuration file examples
   - `cliReferenceCode` — core CLI commands

   Each array looks like this:
   ```typescript
   const quickStartCode: CodeEntry[] = [
     {
       label: 'Initialize OpenContext',  // shown in the code block header
       language: 'bash',                // syntax highlighting language
       code: 'git init\nnpx opencontext init',  // ← your command here
     },
   ];
   ```

3. **Add a new entry** to the relevant array:
   ```typescript
   {
     label: 'Your Section Label',
     language: 'bash',   // or 'yaml', 'typescript', etc.
     code: 'opencontext your-new-command --flag value',
   },
   ```

4. **To add a completely new documentation section**:
   - Add a new `CodeEntry[]` array constant (e.g., `const advancedCode: CodeEntry[] = [...]`)
   - Add a new entry to the `docSections` array:
     ```typescript
     {
       id: 'advanced-usage',         // URL anchor (#advanced-usage)
       title: 'Advanced Usage',       // shown in the on-page nav
       codeEntries: advancedCode,     // ← your new code array
       content: (                     // JSX for the left text column
         <>
           <h2>Advanced Usage</h2>
           <p>Your documentation text here...</p>
         </>
       ),
     },
     ```

### CodeEntry Interface Reference

```typescript
interface CodeEntry {
  label?: string;     // Header text shown above code block (optional)
  language?: string;  // Prism language for highlighting (default: 'bash')
  code: string;       // The actual command/snippet to display
}
```

---

## Supabase Setup Guide

> **For beginners** — A complete guide to connecting your Supabase project.

### Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click **"New Project"**
3. Choose your organization, give the project a name (e.g., `opencontext-docs`)
4. Set a secure database password and select a region close to your users
5. Click **"Create new project"** and wait ~2 minutes for setup

### Step 2: Find Your API Keys

1. In the Supabase Dashboard, click your project
2. Go to **Settings** (gear icon in the left sidebar)
3. Click **"API"** in the settings submenu
4. You will see two values you need:
   - **Project URL** → This is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon / public key** (under "Project API Keys") → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

> ⚠️ **Never use the `service_role` key** on the frontend. Always use `anon` for client-side code.

### Step 3: Create Your `.env.local` File

1. In the `website/` directory, copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. Save the file. The app will now use these values automatically.

> ℹ️ `.env.local` is already in `.gitignore` — it will **not** be committed to git.

### Step 4: Create the Database Tables

1. In the Supabase Dashboard, go to **SQL Editor**
2. Click **"New query"**
3. Paste and run the following SQL:

```sql
-- Create the changelog table
CREATE TABLE changelog (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  version      TEXT NOT NULL,
  release_date DATE NOT NULL,
  title        TEXT NOT NULL,
  description  TEXT NOT NULL,
  type         TEXT CHECK (type IN ('major', 'minor', 'patch', 'upcoming')),
  changes      TEXT[] NOT NULL DEFAULT '{}',
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE changelog ENABLE ROW LEVEL SECURITY;

-- Allow public (unauthenticated) read access
CREATE POLICY "Public read access"
  ON changelog
  FOR SELECT
  USING (true);
```

4. Click **"Run"** to execute

### Step 5: Seed Your First Changelog Entry (Optional)

Run this in the Supabase SQL Editor to add a test entry:

```sql
INSERT INTO changelog (version, release_date, title, description, type, changes)
VALUES (
  'v0.3.0',
  '2026-05-13',
  'Multi-Agent Support',
  'OpenContext now manages instruction files for multiple AI agent types.',
  'major',
  ARRAY[
    'Support for Claude, Cursor, and Copilot agent files',
    'Per-agent context customization',
    'Fix: Jira ADF parser crash on empty descriptions'
  ]
);
```

### Step 6: Verify the Connection

Start the development server:
```bash
cd website
npm run dev
```

Navigate to [http://localhost:3000/changelog](http://localhost:3000/changelog). If your Supabase connection is working, you will see entries from the database. If it falls back to the static demo data, check that your `.env.local` values are correct.

---

## Running Locally

```bash
cd website
npm install
npm run dev
# → http://localhost:3000
```

## Adding a New Page

1. Create a new directory in `app/` (e.g., `app/faq/`)
2. Add a `page.tsx` file with your page component and `export const metadata`
3. Add the route to the `navLinks` array in `components/Navigation.tsx`

---

*Generated by Antigravity as part of the opencontext-doc-website change.*
