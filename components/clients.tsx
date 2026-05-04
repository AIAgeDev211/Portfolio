"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  Compass,
  Flame,
  HeartPulse,
  Trees,
  Waves
} from "lucide-react";

const clients = [
  { name: "Northwind", Icon: Trees },
  { name: "Harbor Labs", Icon: Anchor },
  { name: "Ember Co.", Icon: Flame },
  { name: "Sable Health", Icon: HeartPulse },
  { name: "Drift", Icon: Waves },
  { name: "Pocket Atlas", Icon: Compass }
];

export function Clients() {
  return (
    <section
      aria-label="Trusted by"
      className="border-b border-border py-14"
    >
      <div className="container-prose">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-subtle">
            Trusted by teams at
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px 80px 0px", amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid w-full grid-cols-2 items-center gap-x-10 gap-y-6 sm:grid-cols-3 md:w-auto md:grid-cols-6 md:gap-10"
          >
            {clients.map(({ name, Icon }) => (
              <li
                key={name}
                className="flex items-center justify-center gap-2 text-subtle transition-colors hover:text-fg"
              >
                <Icon size={16} strokeWidth={1.8} />
                <span className="font-display text-sm tracking-tight">
                  {name}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
