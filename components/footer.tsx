import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="container-prose flex flex-col items-start justify-between gap-5 text-sm text-subtle md:flex-row md:items-center">
        <div>
          <p>
            © {year} {profile.name}. Designed &amp; built with care.
          </p>
          <p className="mt-1 text-xs text-subtle/80">
            Next.js · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={profile.social.github}
            aria-label="GitHub"
            className="transition-colors hover:text-fg"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.social.linkedin}
            aria-label="LinkedIn"
            className="transition-colors hover:text-fg"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline transition-colors hover:text-fg"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
