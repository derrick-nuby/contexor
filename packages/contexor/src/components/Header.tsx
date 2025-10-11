import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ContextorConfig } from "@/types";

interface HeaderProps {
  branding: Required<ContextorConfig>["branding"];
}

/**
 * Header component for the chat widget
 */
export function Header({ branding }: HeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b px-4 py-3">
      {(branding.logoUrl || branding.avatarUrl) && (
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={branding.logoUrl || branding.avatarUrl}
            alt={branding.logoAlt}
          />
          <AvatarFallback className="text-xs">
            {branding.avatarFallback}
          </AvatarFallback>
        </Avatar>
      )}
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-none">{branding.title}</h2>
      </div>
    </div>
  );
}
