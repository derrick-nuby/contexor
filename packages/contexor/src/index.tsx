import "./styles/globals.css";

export { ContextorWidget } from "./components/ContextorWidget";
export type {
  ContextorConfig,
  ContextorTheme,
  ContextorBranding,
  ContextorBehavior,
  ContextorWidgetProps,
  Message,
  WidgetPosition,
} from "./types";
export { mergeConfig, defaultConfig } from "./lib/theme";
