# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Roadmap

## Phase 1: UI Foundation (v0.1.0)

**Goal:** Create a fully customizable, embeddable widget UI without AI functionality.

### Planned Features

#### Core UI Package

- [ ] Widget container with open/close functionality
- [ ] Chat interface layout (message list, input area)
- [ ] Responsive design that works on mobile and desktop
- [ ] Accessibility support (ARIA labels, keyboard navigation)

#### Customization API

- [ ] **Branding**
  - Custom logo/icon
  - Widget title/name
  - Brand colors (primary, secondary, accent)
  - Custom fonts
- [ ] **Positioning**
  - Corner placement (bottom-right, bottom-left, top-right, top-left)
  - Offset from edges (x, y margins)
  - Z-index control
- [ ] **Styling**
  - Widget size (width, height, max-height)
  - Border radius and shadows
  - Animation preferences (slide, fade, none)
  - Dark/light theme with auto-detection
  - Custom CSS class injection
- [ ] **Behavior**
  - Initial state (open/closed)
  - Welcome message
  - Placeholder text
  - Toggle button appearance

#### Integration Methods

- [ ] NPM package with React component
- [ ] Vanilla JavaScript via CDN script tag
- [ ] Framework-specific examples (Next.js, React, Vue, Svelte)

#### Developer Experience

- [ ] TypeScript definitions for all customization options
- [ ] Storybook for UI component development
- [ ] Interactive documentation site showing all customization options
- [ ] Code playground for testing configurations

### Success Criteria

- Widget can be embedded in any website with a single script tag or component
- All visual aspects are customizable without touching source code
- Works across modern browsers (Chrome, Firefox, Safari, Edge)
- Bundle size < 50KB gzipped

---

## Phase 2: AI Functionality (v0.2.0)

**Goal:** Add context-aware AI capabilities while maintaining the flexible UI from Phase 1.

### Planned Features

#### AI Integration

- [ ] **API Configuration**
  - Support for OpenAI API (GPT-3.5, GPT-4)
  - Support for Anthropic Claude API
  - Support for other OpenAI-compatible endpoints
  - Client-side API key management (secure storage options)
  - Model selection per provider
- [ ] **Context Gathering**
  - Extract visible text from current page
  - Parse page metadata (title, description, keywords)
  - Capture document structure (headings, sections)
  - Optional: Scrape linked documents/pages
  - Configurable context limits
- [ ] **Prompt Configuration**
  - Custom system prompt
  - Default context instructions
  - Conversation memory (session-based)
  - Token usage tracking and limits

#### Chat Functionality

- [ ] Send user messages to configured AI provider
- [ ] Stream responses for better UX
- [ ] Display formatted markdown responses
- [ ] Code syntax highlighting
- [ ] Loading states and error handling
- [ ] Rate limiting and retry logic
- [ ] Conversation history persistence (localStorage)

#### Advanced Features

- [ ] Multi-language support
- [ ] Voice input/output (optional)
- [ ] File upload for context (PDFs, docs)
- [ ] Suggested questions based on page content
- [ ] Analytics hooks (custom events)

### Success Criteria

- Widget provides accurate, context-aware answers
- Responses feel natural and relevant to the current page
- API key is never exposed in client-side code (encryption options)
- Graceful degradation when AI service is unavailable
- Clear error messages for configuration issues

---

## Phase 3: Advanced Features (v0.3.0)

**Goal:** Enterprise features and advanced customization.

### Planned Features

- [ ] Admin dashboard for widget configuration
- [ ] Usage analytics and insights
- [ ] A/B testing support for prompts
- [ ] Multi-site management
- [ ] Webhook integrations
- [ ] Custom function calling / actions
- [ ] Search integration with site content
- [ ] Feedback collection system
- [ ] GDPR compliance tools

---

## [0.0.1-canary.1] - 2024-08

### Added

- Initial monorepo setup with Turborepo
- Package structure for core widget
- Placeholder directories for docs, web app, and framework examples
- Basic project documentation

### Changed

- Migrated from default Turborepo template
- Configured pnpm workspace
- Set up development scripts

---

## Development Notes

### Current Status

- **Active Phase:** Pre-Phase 1 (Foundation setup)
- **Next Milestone:** Complete Phase 1 UI foundation
- **Branch:** `develop`

### Contributing

When adding features:

1. Update the appropriate phase section with `[x]` when completed
2. Move completed items to a new version section at the top
3. Include migration notes if breaking changes occur
4. Update the main README.md to reflect new capabilities

### Version Numbering

- **0.1.x** - Phase 1 (UI Foundation)
- **0.2.x** - Phase 2 (AI Functionality)
- **0.3.x** - Phase 3 (Advanced Features)
- **1.0.0** - First stable release (after Phase 2 completion and production testing)
