import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]" />

      <div className="container-prose relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Let&rsquo;s build something
          </span>

          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            Have a project in mind?
            <br />
            <span className="text-subtle">Let&rsquo;s make it </span>
            <span className="shimmer-text">feel effortless</span>.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle sm:mt-8 sm:text-lg md:text-xl">
            I&rsquo;m currently {profile.availability.toLowerCase()}. Drop me a line
            — I read and reply to every message, usually within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex max-w-full items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              <Mail size={15} className="shrink-0" />
              <span className="truncate">{profile.email}</span>
              <ArrowUpRight
                size={15}
                className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={profile.social.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/40"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
