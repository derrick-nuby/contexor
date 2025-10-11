import * as React from "react";
import { MessageSquare } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

/**
 * Empty state component displayed when there are no messages
 */
export function EmptyState({
  message = "No messages yet. Start a conversation!",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
      <div className="rounded-full bg-muted p-3">
        <MessageSquare className="h-6 w-6 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
