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

This is a single-page React app (Vite + React 19) with no routing, no backend, and no persistence — all state lives in memory and resets on page refresh. Styling is split between `src/index.css` (global resets) and `src/App.css` (component styles).

### Component structure

- **`App`** — owns the `transactions` array (the only shared state). Passes it down and provides `handleAdd` to add new transactions.
- **`Summary`** — receives `transactions`, derives `totalIncome`, `totalExpenses`, and `balance` internally, and renders the three summary cards.
- **`TransactionForm`** — owns its own form field state (description, amount, type, category). Calls the `onAdd` prop with a fully formed transaction object on submit.
- **`TransactionList`** — receives `transactions`, owns its own filter state (filterType, filterCategory), and renders the filtered table.

The `categories` constant is duplicated in `TransactionForm` and `TransactionList` — not yet extracted to a shared location.

### Known issues (intentional for the course)

- "Freelance Work" is seeded with `type: "expense"` but `category: "salary"`, which is inconsistent.
- There is no delete functionality in the UI, though `.delete-btn` CSS exists in `App.css`.
- No date field is shown in the form — new transactions always use today's date.
