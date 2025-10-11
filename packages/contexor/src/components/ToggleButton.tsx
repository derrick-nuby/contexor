import * as React from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContextorConfig } from "@/types";
import { getPositionStyles } from "@/lib/theme";

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
  config: Required<ContextorConfig>;
}

/**
 * Toggle button component for opening/closing the chat widget
 */
export function ToggleButton({ isOpen, onClick, config }: ToggleButtonProps) {
  const positionStyles = getPositionStyles(
    config.position,
    config.positionOffset
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "h-14 w-14 bg-primary text-primary-foreground hover:bg-primary/90",
        config.className
      )}
      style={{
        ...positionStyles,
        zIndex: config.zIndex,
      }}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      aria-expanded={isOpen}
    >
      {isOpen ? (
        <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
      ) : (
        <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
      )}
    </button>
  );
}
