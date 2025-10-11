# Contexor Tasks

This directory contains detailed task breakdowns for each phase of Contexor development.

## Phase Files

### Phase 1: UI Foundation

**File:** `phase-1-ui-foundation.md`
**Status:** Ready to start
**Steps:** 55 detailed steps across 6 stages

This phase focuses on building a fully customizable React widget UI without AI functionality.

## How to Use These Task Files

1. **Open the phase file** you're working on
2. **Follow steps sequentially** - each step builds on the previous
3. **Test after EVERY step** in the Next.js example project
4. **Check off completed steps** with `[x]`
5. **Commit after each logical group** of completed steps

## Testing Workflow

All changes must be tested in `examples/next`:

```bash
# From repository root

# 1. Install dependencies after changes
pnpm install

# 2. Build the contexor package (once implemented)
pnpm build --filter contexor

# 3. Run Next.js dev server to test
pnpm dev --filter next

# 4. Open http://localhost:3000 in browser
```

## Current Setup Status

✅ Monorepo structure with Turborepo
✅ pnpm workspaces configured (apps, packages, examples)
✅ Next.js example project added and working
✅ Next.js example runs from root with `pnpm dev --filter next`
✅ Page updated to indicate Contexor test environment
✅ Phase 1 task breakdown created with 55+ steps

## Next Steps

Ready to start **Phase 1, Stage 1: Project Setup & Infrastructure**!

Begin with Step 1 in `phase-1-ui-foundation.md`:

- Initialize contexor package structure
- Setup TypeScript, Tailwind, and build tooling
- Link package to Next.js example

## Phase Progress Tracking

Track overall progress in `CHANGELOG.md`:

- Move completed items from `[ ]` to `[x]`
- Update "Current Status" section
- Create version entries when phases complete

## Tips for Success

- **Don't skip testing** - The Next.js example is your validation
- **Iterate quickly** - Get it working first, refine later
- **Stay focused** - Phase 1 is UI-only, no AI logic yet
- **Document as you go** - Add comments and JSDoc
- **Ask when stuck** - Better to clarify than guess
