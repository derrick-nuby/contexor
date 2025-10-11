# Phase 1: UI Foundation - Task Breakdown

**Goal:** Create a fully customizable, embeddable React widget UI without AI functionality.

**Test Environment:** All tasks must be tested in `examples/next` after implementation.

---

## Stage 1: Project Setup & Infrastructure (Steps 1-10)

### Step 1: Initialize contexor package structure

- [ ] Create `packages/contexor/` directory structure
- [ ] Create `src/`, `src/components/`, `src/lib/`, `src/types/` directories
- [ ] Test: Directory structure exists

### Step 2: Setup package.json for contexor

- [ ] Create `packages/contexor/package.json` with name, version, scripts
- [ ] Add React 18+ and React DOM as peer dependencies
- [ ] Add initial dev dependencies (TypeScript, etc.)
- [ ] Set `main`, `module`, and `types` entry points
- [ ] Test: `pnpm install` runs successfully from root

### Step 3: Configure TypeScript

- [ ] Create `packages/contexor/tsconfig.json`
- [ ] Configure JSX support, module resolution
- [ ] Set up path aliases if needed
- [ ] Configure build output directory
- [ ] Test: TypeScript compiles without errors

### Step 4: Setup Tailwind CSS

- [ ] Install `tailwindcss`, `autoprefixer`, `postcss`
- [ ] Create `packages/contexor/tailwind.config.js`
- [ ] Create `packages/contexor/postcss.config.js`
- [ ] Create `packages/contexor/src/styles/globals.css` with Tailwind directives
- [ ] Configure content paths for component scanning
- [ ] Test: Tailwind builds CSS successfully

### Step 5: Add build tooling (tsup or Vite)

- [ ] Install build tool (recommend `tsup` for library builds)
- [ ] Configure build for ESM and CJS outputs
- [ ] Setup CSS bundling
- [ ] Add build script to package.json
- [ ] Test: `pnpm build` creates dist/ with JS and CSS

### Step 6: Setup shadcn/ui infrastructure

- [ ] Run `npx shadcn@latest init` in packages/contexor
- [ ] Configure components.json for package
- [ ] Create `src/components/ui/` directory
- [ ] Install Radix UI dependencies needed
- [ ] Test: shadcn config is valid

### Step 7: Add utility libraries

- [ ] Install `clsx` and `tailwind-merge`
- [ ] Create `src/lib/utils.ts` with `cn()` helper
- [ ] Create `src/lib/theme.ts` for theme utilities
- [ ] Test: Utilities can be imported

### Step 8: Link package to Next.js example

- [ ] Add `"contexor": "workspace:*"` to examples/next/package.json
- [ ] Run `pnpm install` from root
- [ ] Test: Next.js example can import from "contexor"

### Step 9: Create TypeScript types for configuration

- [ ] Create `src/types/index.ts`
- [ ] Define `ContextorConfig` interface with all customization options
- [ ] Define `ContextorTheme` interface
- [ ] Define position, branding, behavior types
- [ ] Export all types
- [ ] Test: Types can be imported in Next.js example

### Step 10: Setup hot module reload for development

- [ ] Configure watch mode in build script
- [ ] Test: Changes in contexor package reflect in Next.js dev server
- [ ] Document the dev workflow in package README

---

## Stage 2: Core UI Components - shadcn Primitives (Steps 11-20)

### Step 11: Add Dialog component from shadcn

- [ ] Run `npx shadcn@latest add dialog`
- [ ] Verify Dialog component in `src/components/ui/dialog.tsx`
- [ ] Test: Import and render Dialog in Next.js example

### Step 12: Add Button component from shadcn

- [ ] Run `npx shadcn@latest add button`
- [ ] Verify Button component
- [ ] Test: Render Button in Next.js example

### Step 13: Add ScrollArea component from shadcn

- [ ] Run `npx shadcn@latest add scroll-area`
- [ ] Verify ScrollArea component
- [ ] Test: Render ScrollArea with sample content in Next.js

### Step 14: Add Input/Textarea component from shadcn

- [ ] Run `npx shadcn@latest add textarea`
- [ ] Verify Textarea component
- [ ] Test: Render Textarea in Next.js example

### Step 15: Add Avatar component (optional, for branding)

- [ ] Run `npx shadcn@latest add avatar`
- [ ] Verify Avatar component
- [ ] Test: Render Avatar with custom image

### Step 16: Customize shadcn theme colors

- [ ] Update Tailwind config with CSS variables for theming
- [ ] Add default color scheme to globals.css
- [ ] Test: Components render with default theme

### Step 17: Test all shadcn components together

- [ ] Create test page in Next.js with all components
- [ ] Verify accessibility (keyboard navigation, ARIA)
- [ ] Test: All components work without errors

### Step 18: Create component variants if needed

- [ ] Use `cva` (class-variance-authority) for variants
- [ ] Document available variants
- [ ] Test: Variants render correctly

### Step 19: Test responsive behavior

- [ ] Test all components on mobile viewport
- [ ] Test on tablet viewport
- [ ] Test on desktop viewport
- [ ] Test: Components are responsive

### Step 20: Verify dark mode support

- [ ] Test all components in dark mode
- [ ] Verify color contrast meets WCAG standards
- [ ] Test: Dark mode works properly

---

## Stage 3: Custom Widget Components (Steps 21-35)

### Step 21: Create ToggleButton component

- [ ] Create `src/components/ToggleButton.tsx`
- [ ] Implement fixed position button (bottom-right default)
- [ ] Add open/close icon toggle
- [ ] Accept custom icon, size, colors
- [ ] Test: Button appears and toggles in Next.js example

### Step 22: Style ToggleButton with customization

- [ ] Add hover, focus, active states
- [ ] Support custom positioning props
- [ ] Support offset configuration
- [ ] Add smooth transitions
- [ ] Test: All style variations work

### Step 23: Create ChatContainer component

- [ ] Create `src/components/ChatContainer.tsx`
- [ ] Use Dialog primitive from shadcn
- [ ] Configure size and positioning
- [ ] Add header with title and close button
- [ ] Test: Container opens/closes properly

### Step 24: Style ChatContainer

- [ ] Add responsive sizing
- [ ] Configure backdrop blur/overlay
- [ ] Add smooth open/close animations
- [ ] Support custom dimensions
- [ ] Test: Animations are smooth, no jank

### Step 25: Create MessageList component

- [ ] Create `src/components/MessageList.tsx`
- [ ] Use ScrollArea primitive
- [ ] Implement message bubbles (user vs assistant)
- [ ] Add auto-scroll to bottom
- [ ] Test: Messages render and scroll

### Step 26: Style MessageList

- [ ] Style user messages (aligned right, custom color)
- [ ] Style assistant messages (aligned left)
- [ ] Add timestamps (optional)
- [ ] Add avatars for assistant
- [ ] Test: Messages look good with multiple items

### Step 27: Create MessageInput component

- [ ] Create `src/components/MessageInput.tsx`
- [ ] Use Textarea component
- [ ] Add send button
- [ ] Implement auto-resize on typing
- [ ] Handle Enter key to send (Shift+Enter for new line)
- [ ] Test: Input works correctly

### Step 28: Style MessageInput

- [ ] Add focus states
- [ ] Style send button with hover effect
- [ ] Add character counter (optional)
- [ ] Support custom placeholder
- [ ] Test: All interactions feel smooth

### Step 29: Create Header component

- [ ] Create `src/components/Header.tsx`
- [ ] Display custom logo/avatar
- [ ] Display custom title
- [ ] Add close button
- [ ] Test: Header renders with customization

### Step 30: Style Header

- [ ] Add branding colors support
- [ ] Support custom logo sizing
- [ ] Add subtle border/shadow
- [ ] Test: Header looks polished

### Step 31: Create WelcomeMessage component

- [ ] Create `src/components/WelcomeMessage.tsx`
- [ ] Display custom welcome text
- [ ] Show suggested questions (optional)
- [ ] Add animation on first render
- [ ] Test: Welcome message appears when empty

### Step 32: Create EmptyState component

- [ ] Create `src/components/EmptyState.tsx`
- [ ] Show when no messages exist
- [ ] Display custom empty state text
- [ ] Test: Empty state displays correctly

### Step 33: Create LoadingState component

- [ ] Create `src/components/LoadingState.tsx`
- [ ] Add typing indicator animation
- [ ] Use when "assistant" is "thinking"
- [ ] Test: Loading animation is smooth

### Step 34: Create ErrorState component

- [ ] Create `src/components/ErrorState.tsx`
- [ ] Display error messages
- [ ] Add retry button
- [ ] Test: Errors display properly

### Step 35: Test all custom components together

- [ ] Render full widget in Next.js example
- [ ] Test all states (empty, loading, error, with messages)
- [ ] Test: Everything works harmoniously

---

## Stage 4: Main Widget Integration (Steps 36-45)

### Step 36: Create ContextorWidget main component

- [ ] Create `src/components/ContextorWidget.tsx`
- [ ] Compose all sub-components
- [ ] Manage open/close state
- [ ] Accept config props
- [ ] Test: Widget renders with default config

### Step 37: Implement configuration system

- [ ] Create default configuration in `src/lib/theme.ts`
- [ ] Merge user config with defaults
- [ ] Validate configuration
- [ ] Test: Config merging works correctly

### Step 38: Implement positioning logic

- [ ] Support all corner positions
- [ ] Apply offset configurations
- [ ] Handle responsive positioning
- [ ] Test: Widget positions correctly

### Step 39: Implement theme customization

- [ ] Support custom colors (primary, background, text)
- [ ] Generate CSS variables from config
- [ ] Apply theme to all components
- [ ] Test: Custom colors apply correctly

### Step 40: Implement branding customization

- [ ] Support custom logo URL
- [ ] Support custom title
- [ ] Support custom favicon for toggle button
- [ ] Test: Branding elements display

### Step 41: Implement behavior customization

- [ ] Support defaultOpen prop
- [ ] Support welcome message
- [ ] Support placeholder text
- [ ] Test: Behavior props work

### Step 42: Add keyboard accessibility

- [ ] Support Escape key to close
- [ ] Support Tab navigation
- [ ] Support Enter to send message
- [ ] Add focus trap in dialog
- [ ] Test: Keyboard navigation works perfectly

### Step 43: Add ARIA labels and screen reader support

- [ ] Add proper ARIA labels to all interactive elements
- [ ] Add role attributes
- [ ] Add live regions for messages
- [ ] Test: Screen reader announces content correctly

### Step 44: Implement Z-index management

- [ ] Support custom z-index prop
- [ ] Ensure widget stays on top
- [ ] Test: Widget doesn't conflict with host page

### Step 45: Create main export file

- [ ] Create `src/index.tsx`
- [ ] Export ContextorWidget as default
- [ ] Export types
- [ ] Export configuration utilities
- [ ] Test: Package exports work in Next.js example

---

## Stage 5: Testing & Refinement (Steps 46-50)

### Step 46: Test in Next.js example - Basic Integration

- [ ] Import ContextorWidget in `examples/next/src/app/page.tsx`
- [ ] Render with minimal config
- [ ] Verify widget appears and functions
- [ ] Test: Widget works in Next.js

### Step 47: Test all customization options

- [ ] Create test page with all config options
- [ ] Test each position option
- [ ] Test custom colors
- [ ] Test custom logo and title
- [ ] Test custom messages and placeholders
- [ ] Test: All customization works

### Step 48: Test responsive behavior

- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Test: Widget is fully responsive

### Step 49: Test browser compatibility

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Test: Works in all modern browsers

### Step 50: Performance testing and bundle size

- [ ] Build production bundle
- [ ] Check bundle size (goal: <50KB gzipped)
- [ ] Test render performance (no jank)
- [ ] Test memory usage
- [ ] Optimize if needed
- [ ] Test: Performance meets goals

---

## Stage 6: Documentation & Polish (Bonus Steps 51-55)

### Step 51: Create comprehensive README for package

- [ ] Document installation
- [ ] Document all configuration options
- [ ] Add code examples
- [ ] Add API reference
- [ ] Test: Docs are clear and complete

### Step 52: Create Storybook setup (optional but recommended)

- [ ] Install Storybook in monorepo
- [ ] Create stories for all components
- [ ] Add controls for customization
- [ ] Test: Storybook showcases components

### Step 53: Add JSDoc comments to all exports

- [ ] Document all props
- [ ] Document all types
- [ ] Add usage examples in comments
- [ ] Test: IDE shows helpful tooltips

### Step 54: Create demo page in Next.js example

- [ ] Create multiple widget instances with different configs
- [ ] Showcase all customization options
- [ ] Add code snippets
- [ ] Test: Demo is impressive and clear

### Step 55: Final polish and review

- [ ] Code review for consistency
- [ ] Check for TODOs or FIXMEs
- [ ] Verify all files have proper formatting
- [ ] Update CHANGELOG.md with completed Phase 1
- [ ] Test: Everything is production-ready

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

- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Feature works as expected
- [ ] Documented in code comments

---

## Success Criteria for Phase 1 Completion

- [x] All 50+ steps completed
- [ ] Widget can be embedded with single component import
- [ ] All customization options from CHANGELOG work
- [ ] Fully responsive on all screen sizes
- [ ] Fully accessible (keyboard + screen reader)
- [ ] Works in all modern browsers
- [ ] Bundle size < 50KB gzipped
- [ ] Comprehensive documentation
- [ ] Demo showcases all features
- [ ] Ready for Phase 2 (AI functionality)

---

## Notes

- **Iterative approach:** Don't try to perfect each component immediately. Get it working, then refine.
- **Test continuously:** Use the Next.js example as your playground after every single change.
- **Commit often:** Commit after each completed step or logical group of changes.
- **Ask for help:** If stuck on any step, consult documentation or ask for guidance.
- **Stay focused:** This is UI-only. No AI logic, no API calls, no context gathering yet.
