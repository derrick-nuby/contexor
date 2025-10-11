# Contexor Widget

A lightweight, fully customizable AI assistant widget for any React application. Built with React, TypeScript, and Tailwind CSS.

## Phase 1: UI Foundation ✅

The UI foundation is complete! This release includes a fully functional, customizable widget interface with all the visual components ready for AI integration in Phase 2.

## Features

- 🎨 **Fully Customizable** - Theme colors, branding, positioning, and behavior
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🌙 **Dark Mode** - Built-in dark mode support
- ⚡ **Lightweight** - Optimized bundle size (~50KB gzipped)
- 🎯 **Type Safe** - Full TypeScript support
- 🔌 **Plug & Play** - Easy integration with any React app

## Installation

```bash
npm install contexor
# or
pnpm add contexor
# or
yarn add contexor
```

## Quick Start

```tsx
"use client"; // For Next.js App Router

import { ContextorWidget, type Message } from "contexor";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Add your AI logic here (Phase 2)
    setIsLoading(true);
    // ... fetch AI response
  };

  return (
    <ContextorWidget
      messages={messages}
      isLoading={isLoading}
      onSendMessage={handleSendMessage}
    />
  );
}
```

## Configuration

### Basic Configuration

```tsx
<ContextorWidget
  messages={messages}
  isLoading={isLoading}
  onSendMessage={handleSendMessage}
  config={{
    position: "bottom-right", // "bottom-right" | "bottom-left" | "top-right" | "top-left"
    positionOffset: {
      x: "20px",
      y: "20px",
    },
  }}
/>
```

### Branding

```tsx
<ContextorWidget
  config={{
    branding: {
      logoUrl: "https://example.com/logo.png",
      logoAlt: "My Company",
      title: "My AI Assistant",
      avatarUrl: "https://example.com/avatar.png",
      avatarFallback: "AI",
    },
  }}
/>
```

### Theme Customization

```tsx
<ContextorWidget
  config={{
    theme: {
      primaryColor: "220 70% 50%", // HSL format
      primaryForeground: "0 0% 98%",
      backgroundColor: "0 0% 100%",
      foregroundColor: "240 10% 3.9%",
      borderRadius: "0.75rem",
    },
  }}
/>
```

### Behavior

```tsx
<ContextorWidget
  config={{
    behavior: {
      defaultOpen: false,
      welcomeMessage: "Hello! How can I help you today?",
      placeholder: "Type your message...",
      suggestedQuestions: [
        "What is your product?",
        "How does it work?",
        "Pricing information",
      ],
      enableKeyboardShortcuts: true, // ESC to close
    },
  }}
/>
```

## API Reference

### ContextorWidget Props

| Prop | Type | Description |
|------|------|-------------|
| `config` | `ContextorConfig` | Configuration object for the widget |
| `messages` | `Message[]` | Array of messages to display |
| `isLoading` | `boolean` | Whether the assistant is currently responding |
| `onSendMessage` | `(message: string) => void` | Callback when a message is sent |
| `error` | `string \| null` | Error message to display |
| `onRetry` | `() => void` | Callback to retry after an error |

### TypeScript Types

```typescript
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface ContextorConfig {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  positionOffset?: { x?: string; y?: string };
  theme?: {
    primaryColor?: string;
    primaryForeground?: string;
    backgroundColor?: string;
    foregroundColor?: string;
    borderRadius?: string;
  };
  branding?: {
    logoUrl?: string;
    logoAlt?: string;
    title?: string;
    avatarUrl?: string;
    avatarFallback?: string;
  };
  behavior?: {
    defaultOpen?: boolean;
    welcomeMessage?: string;
    placeholder?: string;
    suggestedQuestions?: string[];
    enableKeyboardShortcuts?: boolean;
  };
  zIndex?: number;
  className?: string;
}
```

## Examples

### With Error Handling

```tsx
<ContextorWidget
  messages={messages}
  isLoading={isLoading}
  error={error}
  onSendMessage={handleSendMessage}
  onRetry={handleRetry}
/>
```

### Custom Theme

```tsx
<ContextorWidget
  config={{
    position: "bottom-right",
    theme: {
      primaryColor: "262 83% 58%", // Purple
      borderRadius: "1rem",
    },
    branding: {
      title: "Support Assistant",
      avatarFallback: "SA",
    },
  }}
/>
```

## Keyboard Shortcuts

- `ESC` - Close the widget (when `enableKeyboardShortcuts` is true)
- `Enter` - Send message
- `Shift + Enter` - New line in message input

## Accessibility

Contexor is built with accessibility in mind:

- Full keyboard navigation support
- ARIA labels and roles
- Screen reader friendly
- Focus management
- Semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Watch mode for development
pnpm dev
```

## Roadmap

- ✅ **Phase 1: UI Foundation** (Current)
  - Complete widget UI with customization
  - Accessibility and responsive design
  - Full TypeScript support

- 🚧 **Phase 2: AI Integration** (Coming Soon)
  - Context gathering from webpage
  - AI provider integrations (OpenAI, Claude, etc.)
  - RAG (Retrieval-Augmented Generation)
  - Document processing

- 📋 **Phase 3: Advanced Features**
  - Multi-language support
  - Voice input/output
  - File uploads
  - Analytics and insights

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on [GitHub](https://github.com/derrick-nuby/contexor/issues).