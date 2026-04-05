---
description: # Automated SaaS Build Workflow
---


## Phase 1 — PLAN (Gemini does this)
Trigger: Any new feature request
1. Gemini reads the feature description
2. Gemini creates .agent/plans/[feature-name].md
3. Plan includes: UI mockup description, API contracts, DB schema
4. Tags each task [CLAUDE-TASK] or [CODEX-REVIEW]

## Phase 2 — BUILD (Claude Code does this)
Trigger: Plan file exists in .agent/plans/
1. Claude reads the plan
2. Implements all [CLAUDE-TASK] items
3. Writes tests alongside code
4. Saves completion note to .agent/completed/

## Phase 3 — REVIEW (Codex does this)
Trigger: Completion note in .agent/completed/
1. Codex reads all [CODEX-REVIEW] tagged files
2. Runs security + quality checks
3. Saves result to .agent/reviews/[feature-name]-review.md
4. PASS = done, FAIL = Claude fixes and resubmits