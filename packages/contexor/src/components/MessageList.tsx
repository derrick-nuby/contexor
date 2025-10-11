import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Message, ContextorConfig } from "@/types";
import { LoadingState } from "./LoadingState";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
  branding: Required<ContextorConfig>["branding"];
  className?: string;
}

/**
 * Message list component with user and assistant messages
 */
export function MessageList({
  messages,
  isLoading = false,
  branding,
  className,
}: MessageListProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <ScrollArea className={cn("flex-1", className)}>
      <div
        ref={scrollRef}
        className="flex flex-col gap-4 p-4"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            branding={branding}
          />
        ))}
        {isLoading && (
          <div className="flex items-start gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={branding.avatarUrl}
                alt={branding.avatarFallback}
              />
              <AvatarFallback className="text-xs">
                {branding.avatarFallback}
              </AvatarFallback>
            </Avatar>
            <LoadingState />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}

interface MessageBubbleProps {
  message: Message;
  branding: Required<ContextorConfig>["branding"];
}

function MessageBubble({ message, branding }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex items-start gap-2",
        isUser && "flex-row-reverse"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={branding.avatarUrl}
            alt={branding.avatarFallback}
          />
          <AvatarFallback className="text-xs">
            {branding.avatarFallback}
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "rounded-2xl px-4 py-2 max-w-[80%] break-words",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        {message.timestamp && (
          <time className="mt-1 text-xs opacity-70">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        )}
      </div>
    </div>
  );
}
