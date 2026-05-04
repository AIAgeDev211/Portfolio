"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Workflow } from "lucide-react";
import { Section } from "./section";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "End-to-end thinking",
    body: "Comfortable across the stack — from database modeling to micro-interactions."
  },
  {
    icon: Smartphone,
    title: "Native & cross-platform",
    body: "Ship SwiftUI, Jetpack Compose, and React Native Expo with equal conviction."
  },
  {
    icon: Code2,
    title: "Typed by default",
    body: "TypeScript everywhere. Strict, boring, predictable — so product velocity stays high."
  },
  {
    icon: Workflow,
    title: "Calm delivery",
    body: "Small PRs, clean migrations, thorough tests. The kind of release you sleep through."
  }
];

const gallery = [
  {
    src: "https://picsum.photos/seed/workspace-desk/1000/1400",
    alt: "A calm, focused workspace",
    caption: "Studio hours"
  },
  {
    src: "https://picsum.photos/seed/code-editor/900/700",
    alt: "Code in progress",
    caption: "Deep work"
  },
  {
    src: "https://picsum.photos/seed/sketch-book/900/700",
    alt: "Sketching flows",
    caption: "Before the keyboard"
  }
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A founder-engineer who sweats the details."
      lede={profile.bio}
    >
      <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border md:row-span-2"
        >
          <div className="relative h-full min-h-[360px] w-full md:min-h-[520px]">
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <span className="font-mono text-[11px] uppercase tracking-widest text-subtle">
                {gallery[0].caption}
              </span>
              <p className="mt-2 max-w-sm font-display text-2xl leading-tight tracking-tight md:text-3xl">
                Calm tools, quiet craft, deliberate choices.
              </p>
            </div>
          </div>
        </motion.div>

        {gallery.slice(1).map((g, i) => (
          <motion.div
            key={g.src}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: 0.05 * (i + 1),
              ease: "easeOut"
            }}
            className="relative overflow-hidden rounded-3xl border border-border md:col-span-2"
          >
            <div className="relative aspect-[16/9] w-full md:aspect-auto md:h-full">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-widest text-white/90">
                {g.caption}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.15 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            className="card card-hover p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/15">
              <p.icon size={18} />
            </div>
            <h3 className="mt-4 font-display text-lg tracking-tight">
              {p.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-subtle">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
