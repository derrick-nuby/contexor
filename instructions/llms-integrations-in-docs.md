# Fumadocs Framework: AI

URL: /docs/ui/llms
Source: https://raw.githubusercontent.com/fuma-nama/fumadocs/refs/heads/main/apps/docs/content/docs/ui/(integrations)/llms.mdx

Integrate AI functionality to Fumadocs.

---

title: AI
description: Integrate AI functionality to Fumadocs.

---

## Docs for LLM

You can make your docs site more AI-friendly with dedicated docs content for large language models.

First, make a `getLLMText` function that converts pages into static MDX content:

```ts title="lib/get-llm-text.ts"
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import { remarkInclude } from "fumadocs-mdx/config";
import { source } from "@/lib/source";
import type { InferPageType } from "fumadocs-core/source";

const processor = remark()
  .use(remarkMdx)
  // needed for Fumadocs MDX
  .use(remarkInclude)
  .use(remarkGfm);

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await processor.process({
    path: page.data._file.absolutePath,
    value: page.data.content,
  });

  // note: it doesn't escape frontmatter, it's up to you.
  return `# ${page.data.title}
URL: ${page.url}

${processed.value}`;
}
```

> Modify it to include other remark plugins.

### `llms-full.txt`

A version of docs for AIs to read.

```ts tab="Next.js" title="app/llms-full.txt/route.ts"
import { source } from "@/lib/source";
import { getLLMText } from "@/lib/get-llm-text";

// cached forever
export const revalidate = false;

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
```

```ts tab="React Router" title="app/routes/llms-full.ts"
// make sure to include this route in `routes.ts` & pre-rendering!
import { source } from "@/lib/source";
import { getLLMText } from "@/lib/get-llm-text";

export async function loader() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"));
}
```

```ts tab="Tanstack Start" title="src/routes/llms-full[.]txt.ts"
import { createServerFileRoute } from "@tanstack/react-start/server";
import { source } from "@/lib/source";
import { getLLMText } from "@/lib/get-llm-text";

export const ServerRoute = createServerFileRoute("/llms-full.txt").methods({
  GET: async () => {
    const scan = source.getPages().map(getLLMText);
    const scanned = await Promise.all(scan);
    return new Response(scanned.join("\n\n"));
  },
});
```

### `*.mdx`

Allow people to append `.mdx` to a page to get its Markdown/MDX content.

On Next.js, you can make a route handler to return page content, and redirect users to that route.

```ts tab="app/llms.mdx/[[...slug]]/route.ts"
import { type NextRequest, NextResponse } from "next/server";
import { getLLMText } from "@/lib/get-llm-text";
import { source } from "@/lib/source";
import { notFound } from "next/navigation";

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page));
}

export function generateStaticParams() {
  return source.generateParams();
}
```

```ts tab="next.config.ts"
import type { NextConfig } from "next";

const config: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/:path*",
      },
    ];
  },
};
```

### Page Actions

Common page actions for AI, require `*.mdx` to be implemented first.

![AI Page Actions](/docs/ai-page-actions.png)

<CodeBlockTabs defaultValue="npm">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx @fumadocs/cli add ai-page-actions
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx @fumadocs/cli add ai-page-actions
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx @fumadocs/cli add ai-page-actions
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun x @fumadocs/cli add ai-page-actions
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Use it in your docs page like:

```tsx title="app/docs/[[...slug]]/page.tsx"
<div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
  <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
  <ViewOptions
    markdownUrl={`${page.url}.mdx`}
    githubUrl={`https://github.com/${owner}/${repo}/blob/dev/apps/docs/content/docs/${page.path}`}
  />
</div>
```

## AI Search

![AI Search](/docs/ai-search.png)

You can install the AI search dialog using Fumadocs CLI:

<CodeBlockTabs defaultValue="npm">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx @fumadocs/cli add ai-search
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx @fumadocs/cli add ai-search
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx @fumadocs/cli add ai-search
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun x @fumadocs/cli add ai-search
    ```
  </CodeBlockTab>
</CodeBlockTabs>

By default, it's configured for Inkeep AI. Since it's connected via Vercel AI SDK, you can connect to your own AI models easily.

> Note that Fumadocs doesn't provide the AI model, it's up to you.
