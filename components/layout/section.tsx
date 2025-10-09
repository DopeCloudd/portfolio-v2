import type { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends PropsWithChildren {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
  variant?: "default" | "surface" | "contrast" | "muted" | "light";
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center",
  variant = "default"
}: SectionProps) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const variantStyles = {
    default: {
      wrapper: "",
      eyebrow: "border-white/10 bg-white/5 text-white/70",
      titleWrapper: "text-white",
      titleSpan: "from-sky-400 via-blue-400 to-violet-400",
      description: "text-white/70"
    },
    surface: {
      wrapper: "section-variant-surface",
      eyebrow: "border-white/10 bg-white/5 text-white/70",
      titleWrapper: "text-white",
      titleSpan: "from-sky-400 via-blue-400 to-violet-400",
      description: "text-white/70"
    },
    contrast: {
      wrapper: "section-variant-contrast",
      eyebrow: "border-white/10 bg-white/10 text-white/80",
      titleWrapper: "text-white",
      titleSpan: "from-cyan-200 via-sky-300 to-violet-300",
      description: "text-white/80"
    },
    muted: {
      wrapper: "section-variant-muted",
      eyebrow: "border-white/10 bg-white/5 text-white/70",
      titleWrapper: "text-white",
      titleSpan: "from-blue-200 via-sky-200 to-emerald-200",
      description: "text-white/75"
    },
    light: {
      wrapper: "section-variant-light text-slate-900",
      eyebrow: "border-slate-200 bg-white text-slate-600",
      titleWrapper: "text-slate-900",
      titleSpan: "from-slate-900 via-slate-700 to-sky-600",
      description: "text-slate-600"
    }
  } satisfies Record<Exclude<SectionProps["variant"], undefined>, {
    wrapper: string;
    eyebrow: string;
    titleWrapper: string;
    titleSpan: string;
    description: string;
  }>;

  const styles = variantStyles[variant] ?? variantStyles.default;

  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-32 py-24 md:py-28",
        styles.wrapper,
        className
      )}
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <header className={cn("mx-auto max-w-3xl", alignment)}>
          {eyebrow && (
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                styles.eyebrow
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "mt-4 text-3xl font-semibold leading-tight md:text-4xl",
              styles.titleWrapper
            )}
          >
            <span
              className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                styles.titleSpan
              )}
            >
              {title}
            </span>
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-base text-balance",
                styles.description
              )}
            >
              {description}
            </p>
          )}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
