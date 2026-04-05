---
description: Automated loop to coordinate Gemini, Claude Code, and Codex.
---
# The Baton-Passing Loop

This workflow automates the coordination between specialized agentic states.

## Step 1: Planning (Gemini/Antigravity)
- **Goal**: Update the master plan in `.agent/plans/` based on new requirements.
- **Action**: Use Gemini to create/update plans and tag tasks with `[CLAUDE-TASK]`, `[GEMINI-TASK]`, and `[CODEX-REVIEW]`.

## Step 2: Handoff to Builder (Claude Code)
- **Goal**: Implement backend logic, API routes, and DB schema.
// turbo
- **Action**: run_command
```bash
claude "Read the current plan at .agent/plans/auth.md and implement all tasks marked [CLAUDE-TASK]. Save your work summary to .agent/completed/auth.md."
```

## Step 3: Handoff to Reviewer (Codex)
- **Goal**: Ensure security, type safety, and code quality of the backend.
// turbo
- **Action**: run_command
```bash
codex "Analyze all [CODEX-REVIEW] tags in .agent/completed/auth.md and perform a full backend review. Output results to .agent/reviews/auth.md."
```

## Step 4: UI Finalization (Gemini/Antigravity)
- **Goal**: Implement high-impact UI once the backend contracts are stable.
- **Action**: Use Gemini to build components in `/components` and pages in `/app`.

---

// turbo-all
## Full Automation Script
To run the full loop, execute:
```bash
gemini "Update plan for $FEATURE"; claude "Implement tasks for $FEATURE"; codex "Review $FEATURE"
```
