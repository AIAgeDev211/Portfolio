import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border py-20 md:py-32">
      <div className="container-prose">
        <div className="mb-12 flex flex-col items-start gap-3 md:mb-16">
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h2 className="section-heading">{title}</h2>
          {lede && (
            <p className="max-w-2xl text-base leading-relaxed text-subtle md:text-lg">
              {lede}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
