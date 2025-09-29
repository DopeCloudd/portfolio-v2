import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center"
}: SectionProps) {
  const alignment = align === "left" ? "text-left" : "text-center";
  return (
    <section id={id} className={cn("scroll-mt-32", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <header className={cn("mx-auto max-w-3xl", alignment)}>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {description && (
            <p className="mt-4 text-base text-white/70 text-balance">{description}</p>
          )}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
