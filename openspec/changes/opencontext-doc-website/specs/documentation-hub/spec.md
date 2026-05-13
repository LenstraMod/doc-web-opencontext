## ADDED Requirements

### Requirement: Two-Column Layout
The documentation page must implement a responsive two-column layout where the left column contains text content and the right column contains code snippets.

#### Scenario: Viewing documentation on desktop
- **WHEN** the viewport is wider than 1024px
- **THEN** the documentation text and code blocks should appear side-by-side.

#### Scenario: Viewing documentation on mobile
- **WHEN** the viewport is narrower than 1024px
- **THEN** the code blocks should stack below the corresponding text sections.

### Requirement: Quick Start Section
The documentation must include a "Quick Start" section titled "Initializing OpenContext".

#### Scenario: User checks the Quick Start section
- **WHEN** the user navigates to the Docs page
- **THEN** they should see an "Initializing OpenContext" section with a placeholder for a `git init` style command in the code column.

### Requirement: Modular Code Blocks
The code column implementation must be modular to allow easy manual updates of CLI commands.

#### Scenario: Developer adds a new command
- **WHEN** a developer wants to add a new command to a doc section
- **THEN** they should be able to do so by editing a specific component or markdown file without restructuring the layout.
