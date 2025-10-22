import * as React from "react";
import { ToggleButton } from "./ToggleButton";
import { ChatContainer } from "./ChatContainer";
import { Header } from "./Header";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { WelcomeMessage } from "./WelcomeMessage";
import { ErrorState } from "./ErrorState";
import { mergeConfig, generateThemeVariables } from "@/lib/theme";
import type { ContextorWidgetProps } from "@/types";

/**
 * Main Contexor widget component
 */
export function ContextorWidget({
  config: userConfig,
  onSendMessage,
  messages = [],
  isLoading = false,
  error = null,
  onRetry,
}: ContextorWidgetProps) {
  const config = mergeConfig(userConfig);
  const [isOpen, setIsOpen] = React.useState(config.behavior.defaultOpen ?? false);
  const [inputValue, setInputValue] = React.useState("");

  const themeVariables = generateThemeVariables(config.theme);

  const handleSend = React.useCallback(() => {
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onSendMessage]);

  const handleQuestionClick = React.useCallback(
    (question: string) => {
      if (onSendMessage) {
        onSendMessage(question);
      }
    },
    [onSendMessage]
  );

  // Keyboard shortcuts
  React.useEffect(() => {
    if (!(config.behavior.enableKeyboardShortcuts ?? true)) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, config.behavior.enableKeyboardShortcuts]);

  const hasMessages = messages.length > 0;

  const widgetClassName = config.theme.inheritHostTheme
    ? "contexor-widget contexor-widget-inherit-theme"
    : "contexor-widget";

  return (
    <div
      className={widgetClassName}
      style={themeVariables as React.CSSProperties}
    >
      <ToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        config={config}
      />

      <ChatContainer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        config={config}
      >
        <Header branding={config.branding} />

        <div className="flex flex-col flex-1 min-h-0">
          {error ? (
            <div className="flex-1 flex items-center justify-center p-4">
              <ErrorState message={error} onRetry={onRetry} />
            </div>
          ) : hasMessages ? (
            <MessageList
              messages={messages}
              isLoading={isLoading ?? false}
              branding={config.branding}
              className="flex-1"
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <WelcomeMessage
                message={config.behavior.welcomeMessage ?? "Hello! How can I help you today?"}
                suggestedQuestions={config.behavior.suggestedQuestions ?? []}
                onQuestionClick={handleQuestionClick}
              />
            </div>
          )}

          <MessageInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            placeholder={config.behavior.placeholder ?? "Type your message..."}
            disabled={isLoading ?? false}
          />
        </div>
      </ChatContainer>
    </div>
  );
}
