import type { ContextorConfig } from "@/types";

/**
 * Default configuration for the Contexor widget
 */
export const defaultConfig: Required<ContextorConfig> = {
  position: "bottom-right",
  positionOffset: {
    x: "20px",
    y: "20px",
  },
  theme: {
    inheritHostTheme: false,
    primaryColor: "240 5.9% 10%",
    primaryForeground: "0 0% 98%",
    backgroundColor: "0 0% 100%",
    foregroundColor: "240 10% 3.9%",
    borderRadius: "0.5rem",
  },
  branding: {
    logoUrl: undefined,
    logoAlt: "Assistant",
    title: "AI Assistant",
    avatarUrl: undefined,
    avatarFallback: "AI",
  },
  behavior: {
    defaultOpen: false,
    welcomeMessage: "Hello! How can I help you today?",
    placeholder: "Type your message...",
    suggestedQuestions: [],
    enableKeyboardShortcuts: true,
  },
  zIndex: 9999,
  className: "",
};

/**
 * Deep merge two objects
 */
function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>
): T {
  const output = { ...target };

  for (const key in source) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key]) &&
      key in target
    ) {
      output[key] = deepMerge(
        target[key] as Record<string, any>,
        source[key] as Record<string, any>
      ) as T[Extract<keyof T, string>];
    } else {
      output[key] = source[key] as T[Extract<keyof T, string>];
    }
  }

  return output;
}

/**
 * Merges user configuration with default configuration
 */
export function mergeConfig(
  userConfig: ContextorConfig = {}
): Required<ContextorConfig> {
  return deepMerge(defaultConfig, userConfig);
}

/**
 * Generates CSS variables from theme configuration
 * If inheritHostTheme is true, only custom overrides are applied
 */
export function generateThemeVariables(
  theme: ContextorConfig["theme"]
): Record<string, string> {
  if (!theme) return {};

  const variables: Record<string, string> = {};

  // If inheriting host theme, only apply explicit custom values
  // Otherwise, apply all theme values
  if (!theme.inheritHostTheme) {
    if (theme.primaryColor) {
      variables["--primary"] = theme.primaryColor;
    }
    if (theme.primaryForeground) {
      variables["--primary-foreground"] = theme.primaryForeground;
    }
    if (theme.backgroundColor) {
      variables["--background"] = theme.backgroundColor;
    }
    if (theme.foregroundColor) {
      variables["--foreground"] = theme.foregroundColor;
    }
    if (theme.borderRadius) {
      variables["--radius"] = theme.borderRadius;
    }
  } else {
    // When inheriting, only apply custom overrides that differ from defaults
    // This allows the widget to use host's CSS variables but with optional overrides
    if (theme.primaryColor && theme.primaryColor !== defaultConfig.theme.primaryColor) {
      variables["--primary"] = theme.primaryColor;
    }
    if (theme.primaryForeground && theme.primaryForeground !== defaultConfig.theme.primaryForeground) {
      variables["--primary-foreground"] = theme.primaryForeground;
    }
    if (theme.backgroundColor && theme.backgroundColor !== defaultConfig.theme.backgroundColor) {
      variables["--background"] = theme.backgroundColor;
    }
    if (theme.foregroundColor && theme.foregroundColor !== defaultConfig.theme.foregroundColor) {
      variables["--foreground"] = theme.foregroundColor;
    }
    if (theme.borderRadius && theme.borderRadius !== defaultConfig.theme.borderRadius) {
      variables["--radius"] = theme.borderRadius;
    }
  }

  return variables;
}

/**
 * Gets position styles based on configuration
 */
export function getPositionStyles(
  position: ContextorConfig["position"],
  offset: ContextorConfig["positionOffset"]
): React.CSSProperties {
  const styles: React.CSSProperties = {
    position: "fixed",
  };

  const xOffset = offset?.x || "20px";
  const yOffset = offset?.y || "20px";

  switch (position) {
    case "bottom-right":
      styles.bottom = yOffset;
      styles.right = xOffset;
      break;
    case "bottom-left":
      styles.bottom = yOffset;
      styles.left = xOffset;
      break;
    case "top-right":
      styles.top = yOffset;
      styles.right = xOffset;
      break;
    case "top-left":
      styles.top = yOffset;
      styles.left = xOffset;
      break;
  }

  return styles;
}
