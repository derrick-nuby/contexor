# Phase 1: UI Foundation - Task Breakdown

**Goal:** Create a fully customizable, embeddable React widget UI without AI functionality.

**Test Environment:** All tasks must be tested in `examples/next` after implementation.

---

## Stage 1: Project Setup & Infrastructure (Steps 1-10)

### Step 1: Initialize contexor package structure

- [x] Create `packages/contexor/` directory structure
- [x] Create `src/`, `src/components/`, `src/lib/`, `src/types/` directories
- [x] Test: Directory structure exists

### Step 2: Setup package.json for contexor

- [x] Create `packages/contexor/package.json` with name, version, scripts
- [x] Add React 18+ and React DOM as peer dependencies
- [x] Add initial dev dependencies (TypeScript, etc.)
- [x] Set `main`, `module`, and `types` entry points
- [x] Test: `pnpm install` runs successfully from root

### Step 3: Configure TypeScript

- [x] Create `packages/contexor/tsconfig.json`
- [x] Configure JSX support, module resolution
- [x] Set up path aliases if needed
- [x] Configure build output directory
- [x] Test: TypeScript compiles without errors

### Step 4: Setup Tailwind CSS

- [x] Install `tailwindcss`, `autoprefixer`, `postcss`
- [x] Create `packages/contexor/tailwind.config.js`
- [x] Create `packages/contexor/postcss.config.js`
- [x] Create `packages/contexor/src/styles/globals.css` with Tailwind directives
- [x] Configure content paths for component scanning
- [x] Test: Tailwind builds CSS successfully

### Step 5: Add build tooling (tsup or Vite)

- [x] Install build tool (recommend `tsup` for library builds)
- [x] Configure build for ESM and CJS outputs
- [x] Setup CSS bundling
- [x] Add build script to package.json
- [x] Test: `pnpm build` creates dist/ with JS and CSS

### Step 6: Setup shadcn/ui infrastructure

- [x] Run `npx shadcn@latest init` in packages/contexor
- [x] Configure components.json for package
- [x] Create `src/components/ui/` directory
- [x] Install Radix UI dependencies needed
- [x] Test: shadcn config is valid

### Step 7: Add utility libraries

- [x] Install `clsx` and `tailwind-merge`
- [x] Create `src/lib/utils.ts` with `cn()` helper
- [x] Create `src/lib/theme.ts` for theme utilities
- [x] Test: Utilities can be imported

### Step 8: Link package to Next.js example

- [x] Add `"contexor": "workspace:*"` to examples/next/package.json
- [x] Run `pnpm install` from root
- [x] Test: Next.js example can import from "contexor"

### Step 9: Create TypeScript types for configuration

- [x] Create `src/types/index.ts`
- [x] Define `ContextorConfig` interface with all customization options
- [x] Define `ContextorTheme` interface
- [x] Define position, branding, behavior types
- [x] Export all types
- [x] Test: Types can be imported in Next.js example

### Step 10: Setup hot module reload for development

- [x] Configure watch mode in build script
- [x] Test: Changes in contexor package reflect in Next.js dev server
- [x] Document the dev workflow in package README

---

## Stage 2: Core UI Components - shadcn Primitives (Steps 11-20)

### Step 11: Add Dialog component from shadcn

- [x] Run `npx shadcn@latest add dialog`
- [x] Verify Dialog component in `src/components/ui/dialog.tsx`
- [x] Test: Import and render Dialog in Next.js example

### Step 12: Add Button component from shadcn

- [x] Run `npx shadcn@latest add button`
- [x] Verify Button component
- [x] Test: Render Button in Next.js example

### Step 13: Add ScrollArea component from shadcn

- [x] Run `npx shadcn@latest add scroll-area`
- [x] Verify ScrollArea component
- [x] Test: Render ScrollArea with sample content in Next.js

### Step 14: Add Input/Textarea component from shadcn

- [x] Run `npx shadcn@latest add textarea`
- [x] Verify Textarea component
- [x] Test: Render Textarea in Next.js example

### Step 15: Add Avatar component (optional, for branding)

- [x] Run `npx shadcn@latest add avatar`
- [x] Verify Avatar component
- [x] Test: Render Avatar with custom image

### Step 16: Customize shadcn theme colors

- [x] Update Tailwind config with CSS variables for theming
- [x] Add default color scheme to globals.css
- [x] Test: Components render with default theme

### Step 17: Test all shadcn components together

- [x] Create test page in Next.js with all components
- [x] Verify accessibility (keyboard navigation, ARIA)
- [x] Test: All components work without errors

### Step 18: Create component variants if needed

- [x] Use `cva` (class-variance-authority) for variants
- [x] Document available variants
- [x] Test: Variants render correctly

### Step 19: Test responsive behavior

- [x] Test all components on mobile viewport
- [x] Test on tablet viewport
- [x] Test on desktop viewport
- [x] Test: Components are responsive

### Step 20: Verify dark mode support

- [x] Test all components in dark mode
- [x] Verify color contrast meets WCAG standards
- [x] Test: Dark mode works properly

---

## Stage 3: Custom Widget Components (Steps 21-35)

### Step 21: Create ToggleButton component

- [x] Create `src/components/ToggleButton.tsx`
- [x] Implement fixed position button (bottom-right default)
- [x] Add open/close icon toggle
- [x] Accept custom icon, size, colors
- [x] Test: Button appears and toggles in Next.js example

### Step 22: Style ToggleButton with customization

- [x] Add hover, focus, active states
- [x] Support custom positioning props
- [x] Support offset configuration
- [x] Add smooth transitions
- [x] Test: All style variations work

### Step 23: Create ChatContainer component

- [x] Create `src/components/ChatContainer.tsx`
- [x] Use Dialog primitive from shadcn
- [x] Configure size and positioning
- [x] Add header with title and close button
- [x] Test: Container opens/closes properly

### Step 24: Style ChatContainer

- [x] Add responsive sizing
- [x] Configure backdrop blur/overlay
- [x] Add smooth open/close animations
- [x] Support custom dimensions
- [x] Test: Animations are smooth, no jank

### Step 25: Create MessageList component

- [x] Create `src/components/MessageList.tsx`
- [x] Use ScrollArea primitive
- [x] Implement message bubbles (user vs assistant)
- [x] Add auto-scroll to bottom
- [x] Test: Messages render and scroll

### Step 26: Style MessageList

- [x] Style user messages (aligned right, custom color)
- [x] Style assistant messages (aligned left)
- [x] Add timestamps (optional)
- [x] Add avatars for assistant
- [x] Test: Messages look good with multiple items

### Step 27: Create MessageInput component

- [x] Create `src/components/MessageInput.tsx`
- [x] Use Textarea component
- [x] Add send button
- [x] Implement auto-resize on typing
- [x] Handle Enter key to send (Shift+Enter for new line)
- [x] Test: Input works correctly

### Step 28: Style MessageInput

- [x] Add focus states
- [x] Style send button with hover effect
- [x] Add character counter (optional)
- [x] Support custom placeholder
- [x] Test: All interactions feel smooth

### Step 29: Create Header component

- [x] Create `src/components/Header.tsx`
- [x] Display custom logo/avatar
- [x] Display custom title
- [x] Add close button
- [x] Test: Header renders with customization

### Step 30: Style Header

- [x] Add branding colors support
- [x] Support custom logo sizing
- [x] Add subtle border/shadow
- [x] Test: Header looks polished

### Step 31: Create WelcomeMessage component

- [x] Create `src/components/WelcomeMessage.tsx`
- [x] Display custom welcome text
- [x] Show suggested questions (optional)
- [x] Add animation on first render
- [x] Test: Welcome message appears when empty

### Step 32: Create EmptyState component

- [x] Create `src/components/EmptyState.tsx`
- [x] Show when no messages exist
- [x] Display custom empty state text
- [x] Test: Empty state displays correctly

### Step 33: Create LoadingState component

- [x] Create `src/components/LoadingState.tsx`
- [x] Add typing indicator animation
- [x] Use when "assistant" is "thinking"
- [x] Test: Loading animation is smooth

### Step 34: Create ErrorState component

- [x] Create `src/components/ErrorState.tsx`
- [x] Display error messages
- [x] Add retry button
- [x] Test: Errors display properly

### Step 35: Test all custom components together

- [x] Render full widget in Next.js example
- [x] Test all states (empty, loading, error, with messages)
- [x] Test: Everything works harmoniously

---

## Stage 4: Main Widget Integration (Steps 36-45)

### Step 36: Create ContextorWidget main component

- [x] Create `src/components/ContextorWidget.tsx`
- [x] Compose all sub-components
- [x] Manage open/close state
- [x] Accept config props
- [x] Test: Widget renders with default config

### Step 37: Implement configuration system

- [x] Create default configuration in `src/lib/theme.ts`
- [x] Merge user config with defaults
- [x] Validate configuration
- [x] Test: Config merging works correctly

### Step 38: Implement positioning logic

- [x] Support all corner positions
- [x] Apply offset configurations
- [x] Handle responsive positioning
- [x] Test: Widget positions correctly

### Step 39: Implement theme customization

- [x] Support custom colors (primary, background, text)
- [x] Generate CSS variables from config
- [x] Apply theme to all components
- [x] Test: Custom colors apply correctly

### Step 40: Implement branding customization

- [x] Support custom logo URL
- [x] Support custom title
- [x] Support custom favicon for toggle button
- [x] Test: Branding elements display

### Step 41: Implement behavior customization

- [x] Support defaultOpen prop
- [x] Support welcome message
- [x] Support placeholder text
- [x] Test: Behavior props work

### Step 42: Add keyboard accessibility

- [x] Support Escape key to close
- [x] Support Tab navigation
- [x] Support Enter to send message
- [x] Add focus trap in dialog
- [x] Test: Keyboard navigation works perfectly

### Step 43: Add ARIA labels and screen reader support

- [x] Add proper ARIA labels to all interactive elements
- [x] Add role attributes
- [x] Add live regions for messages
- [x] Test: Screen reader announces content correctly

### Step 44: Implement Z-index management

- [x] Support custom z-index prop
- [x] Ensure widget stays on top
- [x] Test: Widget doesn't conflict with host page

### Step 45: Create main export file

- [x] Create `src/index.tsx`
- [x] Export ContextorWidget as default
- [x] Export types
- [x] Export configuration utilities
- [x] Test: Package exports work in Next.js example

---

## Stage 5: Testing & Refinement (Steps 46-50)

### Step 46: Test in Next.js example - Basic Integration

- [x] Import ContextorWidget in `examples/next/src/app/page.tsx`
- [x] Render with minimal config
- [x] Verify widget appears and functions
- [x] Test: Widget works in Next.js

### Step 47: Test all customization options

- [x] Create test page with all config options
- [x] Test each position option
- [x] Test custom colors
- [x] Test custom logo and title
- [x] Test custom messages and placeholders
- [x] Test: All customization works

### Step 48: Test responsive behavior

- [x] Test on mobile (320px, 375px, 414px)
- [x] Test on tablet (768px, 1024px)
- [x] Test on desktop (1280px, 1920px)
- [x] Test: Widget is fully responsive

### Step 49: Test browser compatibility

- [x] Test in Chrome
- [x] Test in Firefox
- [x] Test in Safari
- [x] Test in Edge
- [x] Test: Works in all modern browsers

### Step 50: Performance testing and bundle size

- [x] Build production bundle
- [x] Check bundle size (goal: <50KB gzipped)
- [x] Test render performance (no jank)
- [x] Test memory usage
- [x] Optimize if needed
- [x] Test: Performance meets goals

---

## Stage 6: Documentation & Polish (Bonus Steps 51-55)

### Step 51: Create comprehensive README for package

- [x] Document installation
- [x] Document all configuration options
- [x] Add code examples
- [x] Add API reference
- [x] Test: Docs are clear and complete

### Step 52: Create Storybook setup (optional but recommended)

- [x] Install Storybook in monorepo
- [x] Create stories for all components
- [x] Add controls for customization
- [x] Test: Storybook showcases components

### Step 53: Add JSDoc comments to all exports

- [x] Document all props
- [x] Document all types
- [x] Add usage examples in comments
- [x] Test: IDE shows helpful tooltips

### Step 54: Create demo page in Next.js example

- [x] Create multiple widget instances with different configs
- [x] Showcase all customization options
- [x] Add code snippets
- [x] Test: Demo is impressive and clear

### Step 55: Final polish and review

- [x] Code review for consistency
- [x] Check for TODOs or FIXMEs
- [x] Verify all files have proper formatting
- [x] Update CHANGELOG.md with completed Phase 1
- [x] Test: Everything is production-ready

---

## Testing Protocol

**After EVERY step:**

1. Run `pnpm install` from root to ensure workspace links
2. Run `pnpm build` in packages/contexor to build the package
3. Run `pnpm dev --filter next` from root to start Next.js dev server
4. Verify the change works in the browser at http://localhost:3000
5. Check console for any errors
6. Test in Chrome DevTools mobile view

**Before marking step as complete:**

- [x] No TypeScript errors
- [x] No console errors
- [x] Feature works as expected
- [x] Documented in code comments

---

## Success Criteria for Phase 1 Completion

- [x] All 50+ steps completed
- [x] Widget can be embedded with single component import
- [x] All customization options from CHANGELOG work
- [x] Fully responsive on all screen sizes
- [x] Fully accessible (keyboard + screen reader)
- [x] Works in all modern browsers
- [x] Bundle size < 50KB gzipped
- [x] Comprehensive documentation
- [x] Demo showcases all features
- [x] Ready for Phase 2 (AI functionality)

---

## Notes

- **Iterative approach:** Don't try to perfect each component immediately. Get it working, then refine.
- **Test continuously:** Use the Next.js example as your playground after every single change.
- **Commit often:** Commit after each completed step or logical group of changes.
- **Ask for help:** If stuck on any step, consult documentation or ask for guidance.
- **Stay focused:** This is UI-only. No AI logic, no API calls, no context gathering yet.
