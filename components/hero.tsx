"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles
} from "lucide-react";
import { profile } from "@/lib/data";
import { RagTrace } from "./rag-trace";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  console.log("Hero section initialized");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--sx", `${x}%`);
      el.style.setProperty("--sy", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="grain relative overflow-hidden border-b border-border"
    >
      {/* animated gradient mesh */}
      <div
        aria-hidden
        className="mesh-gradient animate-mesh-drift pointer-events-none absolute -inset-20 opacity-90"
      />
      {/* neural lattice overlay (token / embedding field) */}
      <div className="pointer-events-none absolute inset-0 bg-neural opacity-60 mask-radial-fade" />
      {/* cursor-following spotlight */}
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute inset-0 transition-opacity duration-300"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:max-w-7xl md:px-8 md:py-36">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="pill">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
              <Sparkles size={12} className="text-accent" />
              {profile.availability}
            </div>

            <h1 className="mt-6 font-display font-medium leading-[1.05] tracking-[-0.02em] [font-size:clamp(1.85rem,5vw,4rem)]">
              Hi, I&rsquo;m{" "}
              <span className="shimmer-text">
                {profile.name.split(" ")[0]}
              </span>
              .
              <br />
              <span className="text-subtle">I build</span>{" "}
              <span className="relative inline-block md:whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-accent via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                  production AI
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-1 bottom-1 -z-0 hidden h-[10px] rounded-sm bg-accent/15 md:block"
                />
              </span>{" "}
              <span className="text-subtle">— grounded RAG, agents, and on-device models — at</span>{" "}
              <span className="shimmer-text">OpenClaw</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-subtle sm:text-lg md:mt-8 md:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">See selected work</span>
                <ArrowDownRight
                  size={16}
                  className="relative transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent/40"
              >
                <Mail size={15} className="shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-subtle">
              <a
                aria-label="GitHub"
                href={profile.social.github}
                className="transition-colors hover:text-fg"
              >
                <Github size={18} />
              </a>
              <a
                aria-label="LinkedIn"
                href={profile.social.linkedin}
                className="transition-colors hover:text-fg"
              >
                <Linkedin size={18} />
              </a>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-subtle/80">
                <MapPin size={12} />
                {profile.location}
              </span>
            </div>
          </motion.div>

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-accent/30 via-fuchsia-500/20 to-indigo-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-1">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover object-[center_top]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />
                <RagTrace />
              </div>
              <div className="flex items-center justify-between border-t border-border bg-surface px-5 py-3">
                <div>
                  <div className="font-display text-sm tracking-tight">
                    {profile.name}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-subtle">
                    {profile.role}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-[10px] uppercase tracking-widest text-subtle">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4"
        >
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className="card group relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-subtle/70">
                0{i + 1}
              </div>
              <div className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-subtle sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
