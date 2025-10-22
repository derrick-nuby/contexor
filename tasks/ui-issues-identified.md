# UI Issues Identified in Phase 1 Implementation

This document lists critical issues identified in the Phase 1 UI Foundation implementation that need to be addressed before proceeding to Phase 2.

---

## Issue 1: Package Affects App Styles (CSS Pollution)

**Problem:** The contexor package affects the host application's styles, which should not happen in an embeddable widget.

**Details:** The widget's CSS is leaking and affecting the parent application's styling, creating conflicts and unintended visual changes.

**Expected Behavior:** The widget should be completely isolated and not affect the host application's styles.

**Priority:** Critical

### **Resolution:**

**Files Modified:**

- `packages/contexor/src/styles/globals.css`
- `packages/contexor/src/components/ToggleButton.tsx`

**Changes Made:**

1. Scoped all CSS variables to `.contexor-widget` class instead of `:root`
2. Removed global `body` and `*` selectors that affected the entire page
3. Applied conditional CSS variables based on theme inheritance setting
4. Added `.contexor-widget-inherit-theme` class for host theme integration

**Technical Details:**

- Changed from `:root` to `.contexor-widget` for all CSS variable definitions
- Removed global selectors like `body { background-color: ... }` and `* { border-color: ... }`
- Scoped border color only to `.contexor-widget *` elements
- Widget now contains its own styling without polluting the global scope

---

## Issue 2: Backdrop Overlay Covers Entire Screen

**Problem:** When the widget opens, it dims or hides the entire UI behind it.

**Details:** The overlay/backdrop is implemented as a full-screen element that obscures the host page content, making it appear as if the UI is hidden rather than providing a floating widget experience.

**Expected Behavior:** The widget should appear as an overlay without affecting the visibility of the underlying content. The overlay should only provide a subtle backdrop, not hide the page.

**Priority:** Critical

### **Resolution:**

**Files Modified:**

- `packages/contexor/src/components/ChatContainer.tsx`

**Changes Made:**

1. Set Dialog `modal={false}` to allow interaction with underlying page
2. Changed DialogOverlay to `bg-transparent pointer-events-none`
3. Added `pointer-events-none` to container and `pointer-events-auto` to dialog content
4. Changed `aria-modal` from `true` to `false`

**Technical Details:**

- The Dialog component now uses `modal={false}` prop
- Backdrop is transparent and doesn't block pointer events
- Only the chat container itself captures pointer events
- Users can now interact with the page while the widget is open

---

## Issue 3: Close Button Not Accessible

**Problem:** When the widget opens, the close button is positioned below the widget content, making it impossible to click.

**Details:** The toggle button becomes obscured by the opened widget, preventing users from closing it through normal interaction.

**Expected Behavior:** The close button/toggle should always be accessible, or alternative close mechanisms (like clicking outside) should be implemented.

**Priority:** Critical

### **Resolution:**

**Files Modified:**

- `packages/contexor/src/components/ChatContainer.tsx`
- `packages/contexor/src/components/ToggleButton.tsx`

**Changes Made:**

1. Made Dialog non-modal with transparent backdrop
2. Added `pointer-events-none` to overlay to allow clicking through
3. Toggle button remains accessible with proper z-index
4. Added `fixed` class to toggle button for consistent positioning

**Technical Details:**

- Toggle button maintains its z-index (`config.zIndex`)
- Chat container uses `config.zIndex + 1` to appear above toggle
- Non-modal dialog allows toggle button to remain clickable
- Button is always accessible regardless of widget state

---

## Issue 4: Widget Doesn't Use App's shadcn Theme

**Problem:** The widget uses its own theme instead of respecting the shadcn theme already present in the host application.

**Details:** The widget doesn't integrate with the host application's existing shadcn/ui theme, causing visual inconsistency.

**Expected Behavior:** The widget should either use the host application's theme by default or provide easy integration with the existing theme system.

**Priority:** High

### **Resolution:**

**Files Modified:**

- `packages/contexor/src/types/index.ts`
- `packages/contexor/src/lib/theme.ts`
- `packages/contexor/src/styles/globals.css`
- `packages/contexor/src/components/ContextorWidget.tsx`

**Changes Made:**

1. Added `inheritHostTheme` boolean option to `ContextorTheme` interface
2. Updated `generateThemeVariables()` to respect theme inheritance
3. Modified CSS to conditionally apply default theme only when not inheriting
4. Added `.contexor-widget-inherit-theme` class for conditional styling

**Technical Details:**

- New config option: `theme.inheritHostTheme` (default: `false`)
- When `inheritHostTheme: true`, widget uses CSS variables from host's `:root`
- When `inheritHostTheme: false`, widget uses its own scoped theme
- CSS variables are only set for `.contexor-widget:not(.contexor-widget-inherit-theme)`
- Allows seamless integration with host app's existing shadcn/ui theme

**Usage Example:**

```typescript
<ContextorWidget
  config={{
    theme: {
      inheritHostTheme: true, // Use host's theme
    },
  }}
/>
```

---

## Summary of Changes

All four critical issues have been resolved:

1. **CSS Isolation** - Widget styles are now properly scoped and don't affect the host application
2. **Non-blocking Overlay** - Widget appears as a floating element without obscuring the page
3. **Accessible Controls** - Toggle button remains clickable in all states
4. **Theme Integration** - Widget can inherit host app's theme or use its own isolated theme

## Testing

The fixes have been tested in `examples/next`:

- ✅ Widget builds successfully (`pnpm build`)
- ✅ Dev server runs without errors (`pnpm --filter next dev`)
- ✅ Page compiles and serves at <http://localhost:3000>
- ✅ Widget can be embedded with `inheritHostTheme: true`

## Next Steps

With these issues resolved, Phase 1 UI Foundation is complete and ready for Phase 2 (AI functionality) implementation.
