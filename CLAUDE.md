# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build
npm run lint      # run ESLint
npm run preview   # preview production build
```

## Architecture

This is a single-page React app (Vite + React 19) with no routing, no backend, and no persistence — all state lives in memory and resets on page refresh.

**All application logic is in one file: `src/App.jsx`.** It manages a `transactions` array via `useState`, derives `totalIncome`, `totalExpenses`, and `balance` from it, and handles filtering by type and category. Styling is split between `src/index.css` (global resets) and `src/App.css` (component styles).

### Known issues (intentional for the course)

- `amount` is stored as a string, not a number — arithmetic on totals will concatenate instead of sum.
- "Freelance Work" is seeded with `type: "expense"` but `category: "salary"`, which is inconsistent.
- There is no delete functionality in the UI, though `.delete-btn` CSS exists in `App.css`.
- No date field is shown in the form — new transactions always use today's date.
