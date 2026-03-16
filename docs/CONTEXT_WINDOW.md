# ITIL 4 Preparation App - Context Window

## Project Memory Log
This log tracks major changes, decisions, and milestones to maintain project state.

### 2026-03-16: Project Initialization & Hosting Setup
- **Context**: The user requested guidance on free hosting for the ITIL 4 project.
- **Actions**:
    - Initialized mandatory `docs/` directory with `BLUEPRINT.md`, `ARCHITECTURE.md`, `SPECS.md`, and `CONTEXT_WINDOW.md` to align with project rules.
    - Planned Git initialization and deployment to Vercel/Netlify.
- **Status**: Documentation initialized. Ready for Git setup and deployment.

### 2026-03-16: Core Logic Refactoring & Smart Search Implementation
- **Context**: The user requested major structural changes to the UI, merging tests and introducing a global search feature with source-navigation.
- **Actions**:
    - **Test Unification**: Removed the static 'Mini Test' and consolidated all testing logic into the AI-powered `KI Prüfung (40 Q)` to streamline the application's complexity.
    - **Diagram Integration**: Moved isolated diagram components (`CIModelDiagram`, `SVSDiagram`, `AlignmentDiagram`) directly into the theoretical modules (`contentDE.jsx`/`contentRU.jsx`) for better contextual learning. Redesigned the CI Model into a vertical accordion.
    - **Global Smart Search**: Created `GlobalSearch.jsx`. Implemented an indexing engine that recursively scans React JSX nodes, tracking elements via their `id` attributes.
    - **Smart Source Navigation**: Added logic to the search modal and `App.jsx` to parse `anchorId` from search results, triggering a smooth scroll (`scrollIntoView`) to the exact source within a module upon click. Associated a `Ctrl+K` global hotkey.
    - **Theory Fidelity Enhancements (Module 1)**: Redesigned the "Grundbegriffe" section to a high-fidelity 'Premium' level, utilizing visual cards, a 'balance' metaphor for Costs & Risks, and a dedicated 'Value Formula' block.
- **Status**: Core UI and Search architecture fully implemented. Preparing to finalize local git commit and push to remote repository.
