import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90",
  accent:
    "inline-flex items-center rounded-full border border-sky-500/50 bg-sky-500/20 px-3 py-1 text-xs font-medium text-sky-100"
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <div className={cn(badgeVariants[variant], className)} {...props} />;
}
