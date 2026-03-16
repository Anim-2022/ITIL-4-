# ITIL 4 Preparation App - Architecture Overview

## Component Structure
The application follows a standard React component hierarchy.

- `src/App.jsx`: Main entry point and router/provider container.
- `src/components/`: Reusable UI components.
  - `quiz/`: Logic and UI for the exam simulation.
  - `tools/`: Global tools like `GlobalSearch.jsx` (which recursively parses JSX for content indexing) and `Glossary.jsx`.
- `src/data/`: Static content and translations.
  - `contentRU.jsx`: Russian study materials.
  - `contentDE.jsx`: German study materials.
  - `translations.js`: UI string keys for i18n.

## State Management
- **Local State**: Managed via `useState`.
- **Global State**: Used for language selection and global search modal state (`isSearchOpen`).
- **I18n**: Custom implementation using centralized translation files and a shared language state.
- **Navigation & Routing**: Manual tab switching (`activeTab`) enhanced with anchor-based smooth scrolling (`pendingAnchor`) for jumping to specific `<div id="...">` sections within modules.

## Styling
- **Tailwind CSS 4**: Modern CSS-in-JS alternatives are avoided in favor of Tailwind's utility-first approach and performance.
- **Responsive Design**: Fully mobile-responsive layout for on-the-go learning.
