"use client";

import { useEffect, useState } from "react";
import { Sparkles, FileText } from "lucide-react";

type Trace = {
  prompt: string;
  answer: string;
  cites: string[];
};

const TRACES: Trace[] = [
  {
    prompt: "What's our refund window?",
    answer: "30 days from purchase, full refund — no questions for first-time buyers.",
    cites: ["policies/refunds.md §4", "PR #482"]
  },
  {
    prompt: "Who shipped the auth rewrite?",
    answer: "Maya led; merged 2025-11-04 after a two-week migration window.",
    cites: ["CHANGELOG.md", "PR #612"]
  },
  {
    prompt: "Latest churn number?",
    answer: "2.1% monthly, down from 3.4% after the onboarding redesign.",
    cites: ["metrics/q1.csv", "Linear ENG-204"]
  }
];

const TYPE_MS = 18;
const HOLD_MS = 2400;

export function RagTrace() {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<"prompt" | "answer" | "hold">("prompt");

  useEffect(() => {
    const trace = TRACES[idx];
    const target = phase === "prompt" ? trace.prompt : trace.answer;

    if (phase === "hold") {
      const t = setTimeout(() => {
        setShown("");
        setPhase("prompt");
        setIdx((i) => (i + 1) % TRACES.length);
      }, HOLD_MS);
      return () => clearTimeout(t);
    }

    if (shown.length < target.length) {
      const t = setTimeout(
        () => setShown(target.slice(0, shown.length + 1)),
        TYPE_MS
      );
      return () => clearTimeout(t);
    }

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setShown("");
        setPhase("answer");
      }, 600);
      return () => clearTimeout(t);
    }

    if (phase === "answer") {
      const t = setTimeout(() => setPhase("hold"), 200);
      return () => clearTimeout(t);
    }
  }, [shown, phase, idx]);

  const trace = TRACES[idx];

  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px]">
      <div className="rounded-2xl border border-white/10 bg-bg/70 p-3.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[9px] font-medium uppercase tracking-widest text-accent">
            <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
            Live · grounded
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-subtle">
            sonnet 4.6
          </span>
        </div>

        <div className="font-mono text-[11px] leading-relaxed">
          <div className="text-subtle">
            <span className="text-accent">›</span>{" "}
            {phase === "prompt" ? (
              <>
                {shown}
                <span className="ml-0.5 inline-block h-3 w-[2px] -translate-y-[1px] animate-pulse bg-accent align-middle" />
              </>
            ) : (
              <span className="text-fg/80">{trace.prompt}</span>
            )}
          </div>

          {phase !== "prompt" && (
            <div className="mt-2 text-fg">
              {shown}
              {phase === "answer" && shown.length < trace.answer.length && (
                <span className="ml-0.5 inline-block h-3 w-[2px] -translate-y-[1px] animate-pulse bg-fg align-middle" />
              )}
              {phase === "answer" && shown.length === trace.answer.length && (
                <span className="ml-0.5 inline-block h-3 w-[2px] -translate-y-[1px] bg-fg align-middle" />
              )}
              {phase === "hold" && (
                <span className="ml-0.5 inline-block h-3 w-[2px] -translate-y-[1px] bg-fg/40 align-middle" />
              )}
            </div>
          )}
        </div>

        {phase === "hold" && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {trace.cites.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-surface/60 px-1.5 py-0.5 font-mono text-[9px] text-subtle"
              >
                <FileText size={9} />
                {c}
              </span>
            ))}
          </div>
        )}

        <div className="mt-2.5 flex items-center gap-1 border-t border-border/50 pt-2 font-mono text-[8px] uppercase tracking-widest text-subtle/70">
          <Sparkles size={8} className="text-accent/80" />
          embed → retrieve → rerank → cite
        </div>
      </div>
    </div>
  );
}
