import * as React from "react";
import { Sparkles } from "lucide-react";

interface WelcomeMessageProps {
  message: string;
  suggestedQuestions?: string[];
  onQuestionClick?: (question: string) => void;
}

/**
 * Welcome message component displayed when there are no messages
 */
export function WelcomeMessage({
  message,
  suggestedQuestions = [],
  onQuestionClick,
}: WelcomeMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="rounded-full bg-primary/10 p-4">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{message}</h3>
        <p className="text-sm text-muted-foreground">
          Ask me anything to get started.
        </p>
      </div>
      {suggestedQuestions.length > 0 && (
        <div className="mt-4 flex flex-col gap-2 w-full">
          {suggestedQuestions.map((question, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onQuestionClick?.(question)}
              className="rounded-lg border border-border bg-background px-4 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {question}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
