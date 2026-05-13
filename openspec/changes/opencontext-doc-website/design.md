## Context

The OpenContext project requires a professional documentation website. Currently, there is no web presence. The site needs to be fast, responsive, and easy to maintain, specifically allowing for manual updates of CLI commands in the documentation.

## Goals / Non-Goals

**Goals:**
- Implement a 4-page responsive website (Home, Docs, About, Changelog).
- Integrate Supabase for dynamic content like changelog entries.
- Create a reusable Two-Column Layout component for documentation.
- Provide a clear developer guide for future maintenance.
- Use Tailwind CSS for styling to ensure rapid development and consistent design.

**Non-Goals:**
- Full user authentication for the website (read-only for users).
- Complex CMS integration (Supabase serves as a simple backend).
- Automated CI/CD setup (focus on the code and local development).

## Decisions

- **Framework**: Next.js (App Router). Rationale: Excellent routing, SEO support, and ease of integrating Supabase.
- **Styling**: Tailwind CSS. Rationale: User requested Tailwind CSS for modern styling and efficient development.
- **Backend**: Supabase. Rationale: Provides a quick way to store and fetch changelog data without a complex backend setup.
- **Docs Layout**: A `TwoColumnLayout` component will be created. It will accept `children` (text) and a `code` prop (for the right column). This ensures modularity as requested.
- **Code Highlighting**: Use a lightweight library like `prismjs` or `react-syntax-highlighter` within the `CodeColumn` component.
- **Content Management**: Documentation text will be stored in Markdown files within the project for easy editing, while Changelog entries will be fetched from Supabase.

## Risks / Trade-offs

- **Supabase Dependency**: The changelog depends on Supabase being online. A fallback (local JSON) could be implemented if high availability is critical.
- **Tailwind CSS Learning Curve**: While powerful, developers need to be familiar with Tailwind utility classes. However, it ensures a more maintainable design system than ad-hoc Vanilla CSS.
- **Manual Command Updates**: While modular, updating commands still requires code changes. This is acceptable per the user request for "manual pasting".
