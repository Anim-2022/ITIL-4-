# Project Memory Log

This document tracks the current state, major architectural decisions, and recent milestones. AI agents MUST read this before starting Work.

## Current Phase: Core Logic Refactoring & Smart Search Implementation

- **Goal**: Make the exam logic strictly follow PeopleCert rules, decouple it from generic quiz components, and provide robust search functionality.
- **Milestones Reached**:
  - **Test Unification**: Unified "Standard" and "Fehlendes Wort" (Missing Word) into a single logical block. Built dynamic regex parsing to replace `[___]` markers with an interactive `<select>` dropdown (or standalone options on mobile).
  - **Diagram Integration**: Moved isolated diagram components (`CIModelDiagram`, `SVSDiagram`, `AlignmentDiagram`) directly into the theoretical modules (`contentDE.jsx`/`contentRU.jsx`) for better contextual learning. Redesigned the CI Model into a vertical accordion.
  - **Global Smart Search**: Created `GlobalSearch.jsx`. Implemented an indexing engine that recursively scans React JSX nodes, tracking elements via their `id` attributes.
  - **Smart Source Navigation**: Added logic to the search modal and `App.jsx` to parse `anchorId` from search results, triggering a smooth scroll (`scrollIntoView`) to the exact source within a module upon click. Associated a `Ctrl+K` global hotkey.
  - **Theory Fidelity Enhancements (Module 1)**: Redesigned the "Grundbegriffe" section to a high-fidelity 'Premium' level, utilizing visual cards, a 'balance' metaphor for Costs & Risks, and a dedicated 'Value Formula' block.
  - **Theory Fidelity Enhancements (Module 4)**: Redesigned the SVS and SVC theoretical blocks with a layered architectural pyramid and a distinct 6-step visual flow, highlighting the non-linear "Exam Trap" nature of the SVC.
- **Milestones Reached**:
...
  - **AI Quiz Generation Fix**: Updated deprecated Gemini model identifiers (`gemini-2.0-flash-lite-preview-02-05`) with verified modern versions (`gemini-2.5-flash`, `gemini-3.1-flash-lite-preview`, etc.) via the `ListModels` API. Improved error diagnostics for fallback logic.
- **Status**: Stable. AI Quiz generation fixed and verified. Core features fully operational.
