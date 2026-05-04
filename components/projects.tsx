"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BookHeart,
  Github,
  HeartPulse,
  LayoutGrid,
  LineChart,
  MapPin,
  MessageSquare,
  Monitor,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UsersRound,
  type LucideIcon
} from "lucide-react";
import { Section } from "./section";
import { projects, type Project } from "@/lib/data";

type Filter = "all" | "web" | "mobile";

const filters: { id: Filter; label: string; Icon: LucideIcon }[] = [
  { id: "all", label: "All", Icon: LayoutGrid },
  { id: "web", label: "Web", Icon: Monitor },
  { id: "mobile", label: "Mobile", Icon: Smartphone }
];

const iconMap: Record<Project["icon"], LucideIcon> = {
  "book-heart": BookHeart,
  "users-round": UsersRound,
  "shopping-bag": ShoppingBag,
  "line-chart": LineChart,
  "heart-pulse": HeartPulse,
  "map-pin": MapPin,
  "sparkles": Sparkles,
  "message-square": MessageSquare
};

const categoryImage: Record<Project["category"], string> = {
  web: "/image/Web+AI.png",
  mobile: "/image/Mobile+AI.png"
};

const categoryLabel: Record<Project["category"], string> = {
  web: "Web",
  mobile: "Mobile"
};

function Cover({
  project,
  large
}: {
  project: Project;
  large: boolean;
}) {
  const Icon = iconMap[project.icon];
  const CategoryIcon = project.category === "mobile" ? Smartphone : Monitor;
  return (
    <div
      className={`relative w-full overflow-hidden ${
        large ? "aspect-[16/10] md:aspect-auto md:h-full" : "aspect-[4/3]"
      }`}
    >
      <Image
        src={project.image || categoryImage[project.category]}
        alt={`${project.title} cover`}
        fill
        sizes={large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-overlay`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent" />

      <div className="pointer-events-none absolute bottom-4 right-4">
        <div
          className={`flex items-center justify-center rounded-2xl border border-border bg-surface/85 text-fg shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] backdrop-blur transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-[-4deg] ${
            large ? "h-16 w-16 md:h-20 md:w-20" : "h-12 w-12 md:h-14 md:w-14"
          }`}
        >
          <Icon size={large ? 30 : 22} strokeWidth={1.6} />
        </div>
      </div>

      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-subtle">
        <CategoryIcon size={10} strokeWidth={2} />
        {categoryLabel[project.category]}
      </span>
      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-bg/100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-subtle">
        {project.motif}
      </span>

      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/80">
        {project.year}
      </span>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const flagships = projects.filter((p) => p.flagship);
  const rest = useMemo(
    () =>
      projects.filter(
        (p) => !p.flagship && (filter === "all" || p.category === filter)
      ),
    [filter]
  );
  const counts = useMemo(
    () => ({
      all: projects.filter((p) => !p.flagship).length,
      web: projects.filter((p) => !p.flagship && p.category === "web").length,
      mobile: projects.filter((p) => !p.flagship && p.category === "mobile")
        .length
    }),
    []
  );

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="AI-powered web and mobile apps I've shipped."
      lede="A sampler across browsers and pockets — full case studies available on request. Filter by surface below."
    >
      {flagships.map((flagship) => (
        <article
          key={flagship.title}
          className="card card-hover group relative mb-5 grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
        >
          <Cover project={flagship} large />

          <div className="flex flex-col p-6 sm:p-7 md:p-10">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-accent">
              <Sparkles size={12} /> Flagship · {flagship.year}
            </span>

            <h3 className="mt-5 font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
              {flagship.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle sm:text-[15px] md:text-base">
              {flagship.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {flagship.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-subtle"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
              <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                {flagship.role}
              </span>
              <span className="h-3 w-px bg-border" />
              {/* {flagship.live && (
                <a
                  href={flagship.live}
                  className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-1.5 text-xs font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  Visit site
                  <ArrowUpRight size={13} />
                </a>
              )}
              {flagship.repo && (
                <a
                  href={flagship.repo}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent/40"
                >
                  <Github size={13} /> Source
                </a>
              )} */}
            </div>
          </div>
        </article>
      ))}

      <div
        role="tablist"
        aria-label="Filter projects by surface"
        className="mb-6 flex flex-wrap items-center gap-2"
      >
        {filters.map(({ id, label, Icon }) => {
          const active = filter === id;
          const count = counts[id];
          return (
            <button
              key={id}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-border bg-surface text-subtle hover:border-accent/30 hover:text-fg"
              }`}
            >
              <Icon size={13} strokeWidth={2} />
              {label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-mono ${
                  active
                    ? "bg-accent/15 text-accent"
                    : "bg-muted text-subtle"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {rest.length === 0 ? (
        <p className="card p-8 text-center text-sm text-subtle">
          No projects in this category yet.
        </p>
      ) : (
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => {
          const onMove = (e: React.MouseEvent<HTMLElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty(
              "--mx",
              `${((e.clientX - rect.left) / rect.width) * 100}%`
            );
            e.currentTarget.style.setProperty(
              "--my",
              `${((e.clientY - rect.top) / rect.height) * 100}%`
            );
          };
          return (
            <article
              key={p.title}
              onMouseMove={onMove}
              className="card card-hover group relative flex flex-col overflow-hidden"
            >
              <div className="card-glow pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-[1] flex flex-1 flex-col">
              <Cover project={p} large={false} />

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center justify-between text-xs text-subtle">
                  <span>{p.role}</span>
                  <div className="flex items-center gap-3">
                    {p.live && (
                      <a
                        aria-label={`${p.title} live`}
                        href={p.live}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-subtle transition-colors hover:border-accent/40 hover:text-fg"
                      >
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                    {p.repo && (
                      <a
                        aria-label={`${p.title} source`}
                        href={p.repo}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-subtle transition-colors hover:border-accent/40 hover:text-fg"
                      >
                        <Github size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight md:text-[28px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-subtle md:text-[15px]">
                  {p.description}
                </p>

                <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-subtle"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </article>
          );
        })}
      </div>
      )}
    </Section>
  );
}
