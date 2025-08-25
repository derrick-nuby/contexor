import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { AISearchTrigger } from '@/components/ai';
import { Sparkles } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import SearchDialog from "@/components/search";


export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      searchToggle={{
        components: {
          lg: (
            <div className="flex gap-1.5 max-md:hidden">
              <div className="flex-1" >
                hello
              </div>
              <AISearchTrigger
                aria-label="Ask AI"
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                    size: 'icon',
                    className: 'text-fd-muted-foreground',
                  }),
                )}
              >
                <Sparkles className="size-4" />
              </AISearchTrigger>
            </div>
          ),
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
