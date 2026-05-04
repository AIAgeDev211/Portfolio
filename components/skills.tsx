import {
  Cloud,
  Database,
  Globe,
  Smartphone,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { Section } from "./section";
import { skills } from "@/lib/data";

const groupIcon: Record<string, LucideIcon> = {
  "AI / ML": Sparkles,
  Web: Globe,
  Mobile: Smartphone,
  "Data & Backend": Database,
  "Tooling & Cloud": Cloud
};

const levelDot: Record<string, string> = {
  core: "bg-accent",
  strong: "bg-fg/60",
  working: "bg-subtle/40"
};

const levelLabel: Record<string, string> = {
  core: "Core",
  strong: "Strong",
  working: "Working"
};

function SkillChip({ name, level }: { name: string; level?: string }) {
  const l = level ?? "working";
  return (
    <span
      title={levelLabel[l]}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-fg"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${levelDot[l]}`} />
      {name}
    </span>
  );
}

export function Skills() {
  const [featured, ...rest] = skills;
  const FeaturedIcon = groupIcon[featured.title] ?? Sparkles;

  return (
    <Section
      id="skills"
      eyebrow="Stack"
      title="Tools I reach for, grouped the way I actually use them."
      lede="I care more about making the right thing than defending a tech choice — but here are the languages, frameworks, and services I move fastest in."
    >
      <div className="mb-6 flex flex-wrap items-center gap-5 text-xs text-subtle">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Core — daily driver
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-fg/60" />
          Strong — ship with confidence
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-subtle/40" />
          Working — productive, still deepening
        </span>
      </div>

      <div className="card relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
            <FeaturedIcon size={22} strokeWidth={1.8} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-accent">
                <Sparkles size={10} /> Primary focus
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl tracking-tight md:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-subtle md:text-[15px]">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.skills.map((s) => (
                <SkillChip key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((group) => {
          const Icon = groupIcon[group.title] ?? Sparkles;
          return (
            <div
              key={group.title}
              className="card p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-fg">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-xl tracking-tight">
                  {group.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-subtle">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <SkillChip key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
