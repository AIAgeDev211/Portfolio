"use client";

import {
  Boxes,
  Brain,
  Cpu,
  Database,
  GitBranch,
  Mic,
  Network,
  Scale,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon
} from "lucide-react";

const items: { label: string; Icon: LucideIcon }[] = [
  { label: "Claude Sonnet 4.6", Icon: Brain },
  { label: "Claude Opus 4.x", Icon: Brain },
  { label: "GPT-5 · GPT-4o", Icon: Brain },
  { label: "Gemini 2.5", Icon: Brain },
  { label: "Anthropic SDK", Icon: Sparkles },
  { label: "OpenAI SDK", Icon: Sparkles },
  { label: "Vercel AI SDK", Icon: Sparkles },
  { label: "Tool use", Icon: Workflow },
  { label: "Structured outputs", Icon: GitBranch },
  { label: "MCP", Icon: Network },
  { label: "Streaming", Icon: Zap },
  { label: "RAG", Icon: Boxes },
  { label: "pgvector", Icon: Database },
  { label: "Pinecone", Icon: Database },
  { label: "Hybrid search", Icon: Boxes },
  { label: "Reranking", Icon: Boxes },
  { label: "LangChain", Icon: Workflow },
  { label: "LlamaIndex", Icon: Workflow },
  { label: "Whisper", Icon: Mic },
  { label: "Evals", Icon: Scale },
  { label: "Core ML · MLX", Icon: Cpu }
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section
      aria-label="AI stack"
      className="relative overflow-hidden border-y border-border bg-surface/40 py-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent md:w-40" />

      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {loop.map(({ label, Icon }, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-subtle"
          >
            <Icon size={16} strokeWidth={1.8} />
            <span className="font-display text-base tracking-tight md:text-lg">
              {label}
            </span>
            <span className="ml-10 h-1 w-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </section>
  );
}
