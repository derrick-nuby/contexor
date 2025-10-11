import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Loading state component with typing indicator
 */
export function LoadingState() {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-muted px-4 py-3 w-fit">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "h-2 w-2 rounded-full bg-muted-foreground animate-pulse",
              i === 1 && "animation-delay-150",
              i === 2 && "animation-delay-300"
            )}
            style={{
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">Thinking...</span>
    </div>
  );
}
