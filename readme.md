import os

# Content for the README.md based on the OpenContext PRD and recent updates

readme_content = """# 🛠️ OpenContext

> **Automated Staff Engineer CLI** — Bridging the gap between Specs, Tasks, and Code.

OpenContext is a local-first, git-hook-driven tool designed to eliminate "context blindness" in AI-assisted development. It synthesizes system architecture (Ground Truth), Jira tickets (Goals), and Git diffs (Changes) to ensure AI agents stay within architectural boundaries.

---

## 🚀 Key Features

- **Local AI Inference:** 100% private processing via Ollama. Your codebase never leaves your machine.
- **Ground Truth RAG:** Extracts and vectorizes technical specs from `.md`, `.pdf`, and `.docx`.
- **Jira Integration:** Automatically maps active tasks to code changes via branch naming conventions.
- **Agent Orchestration:** Continuously updates `AGENTS.md` and instruction files to prevent technical debt and architectural drift.
- **Git-Hook Driven:** Seamlessly integrates into your workflow to track staged changes automatically.

---

## 🛠️ Tech Stack

- **CLI:** (Kotlin Multiplatform / Luau / Node.js)
- **Database:** Supabase (Backend & Vector Storage via LanceDB)
- **Local LLM:** Ollama
- **Docs Web:** Next.js / Vite (Connected to Supabase)

---

## 📖 Getting Started

### 1. Installation

_Instructions for installing the CLI will go here._

### 2. Initialization

```bash
# Initialize OpenContext in your project
opencontext init
```
