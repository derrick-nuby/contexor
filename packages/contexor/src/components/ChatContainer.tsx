import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { ContextorConfig } from "@/types";
import { getPositionStyles } from "@/lib/theme";

interface ChatContainerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  config: Required<ContextorConfig>;
}

/**
 * Chat container component using Dialog primitive
 */
export function ChatContainer({
  isOpen,
  onOpenChange,
  children,
  config,
}: ChatContainerProps) {
  const positionStyles = getPositionStyles(
    config.position,
    config.positionOffset
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/40 backdrop-blur-sm" />
        <div
          className="fixed z-50"
          style={{
            ...positionStyles,
            zIndex: config.zIndex + 1,
          }}
        >
          <div
            className={cn(
              "flex flex-col overflow-hidden rounded-lg border bg-background shadow-2xl",
              "w-[380px] h-[600px] max-h-[80vh]",
              "sm:w-[400px] sm:h-[650px]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "data-[state=closed]:slide-out-to-bottom-8 data-[state=open]:slide-in-from-bottom-8"
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-dialog-title"
          >
            {children}
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
}
