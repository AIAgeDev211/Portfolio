import { Section } from "./section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Seven years, three chapters."
      lede="A brief timeline of where I've been. Happy to talk through details, wins, and mistakes."
    >
      <ol className="relative space-y-10 border-l border-border pl-8 md:pl-10">
        {experience.map((item) => (
          <li
            key={item.company + item.period}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center md:-left-[49px]">
              <span className="absolute h-4 w-4 rounded-full bg-accent/20" />
              <span className="relative h-2 w-2 rounded-full bg-accent ring-4 ring-bg" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl tracking-tight">
                {item.role}{" "}
                <span className="text-subtle">· {item.company}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                {item.period}
              </span>
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-subtle md:text-[15px]">
              {item.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-subtle"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
