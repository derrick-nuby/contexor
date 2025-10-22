/**
 * Position of the widget on the screen
 */
export type WidgetPosition =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

/**
 * Theme configuration for the widget
 */
export interface ContextorTheme {
  /** Whether to inherit CSS variables from the host application (default: false) */
  inheritHostTheme?: boolean;
  /** Primary color in HSL format (e.g., "240 5.9% 10%") */
  primaryColor?: string;
  /** Primary foreground color in HSL format */
  primaryForeground?: string;
  /** Background color in HSL format */
  backgroundColor?: string;
  /** Foreground (text) color in HSL format */
  foregroundColor?: string;
  /** Border radius (e.g., "0.5rem", "8px") */
  borderRadius?: string;
}

/**
 * Branding configuration for the widget
 */
export interface ContextorBranding {
  /** Logo URL to display in the header */
  logoUrl?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Widget title displayed in the header */
  title?: string;
  /** Avatar URL for the assistant */
  avatarUrl?: string;
  /** Avatar fallback text (usually initials) */
  avatarFallback?: string;
}

/**
 * Behavior configuration for the widget
 */
export interface ContextorBehavior {
  /** Whether the widget should be open by default */
  defaultOpen?: boolean;
  /** Welcome message to display when there are no messages */
  welcomeMessage?: string;
  /** Placeholder text for the message input */
  placeholder?: string;
  /** Suggested questions to display in the welcome screen */
  suggestedQuestions?: string[];
  /** Whether to enable keyboard shortcuts */
  enableKeyboardShortcuts?: boolean;
}

/**
 * Position offset configuration
 */
export interface PositionOffset {
  /** Horizontal offset (e.g., "20px", "1rem") */
  x?: string;
  /** Vertical offset (e.g., "20px", "1rem") */
  y?: string;
}

/**
 * Message type
 */
export interface Message {
  /** Unique message ID */
  id: string;
  /** Message role (user or assistant) */
  role: "user" | "assistant";
  /** Message content */
  content: string;
  /** Timestamp */
  timestamp?: Date;
}

/**
 * Main configuration interface for the Contexor widget
 */
export interface ContextorConfig {
  /** Widget position on the screen */
  position?: WidgetPosition;
  /** Position offset from the edge */
  positionOffset?: PositionOffset;
  /** Theme customization */
  theme?: ContextorTheme;
  /** Branding customization */
  branding?: ContextorBranding;
  /** Behavior customization */
  behavior?: ContextorBehavior;
  /** Custom z-index for the widget */
  zIndex?: number;
  /** Custom class name for the root element */
  className?: string;
}

/**
 * Props for the main ContextorWidget component
 */
export interface ContextorWidgetProps {
  /** Configuration object */
  config?: ContextorConfig;
  /** Callback when a message is sent */
  onSendMessage?: (message: string) => void;
  /** Messages to display */
  messages?: Message[];
  /** Whether the assistant is currently responding */
  isLoading?: boolean;
  /** Error message to display */
  error?: string | null;
  /** Callback to retry after an error */
  onRetry?: () => void;
}
