"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  value: string;
  stack: string[];
  link?: string;
  repo?: string;
  tone?: number;
}

export function ProjectCard({
  title,
  description,
  role,
  value,
  stack,
  link,
  repo,
  tone = 0
}: ProjectCardProps) {
  const badgePalette = [
    "border-sky-500/40 bg-sky-500/10 text-sky-100",
    "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
  ];
  const roleStyles = badgePalette[tone % badgePalette.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="h-full"
    >
      <Card className="h-full border border-white/10 bg-white/[0.04] backdrop-blur">
        <CardHeader>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-xl font-semibold text-transparent">
              {title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${roleStyles}`}
            >
              {role}
            </span>
          </div>
          <p className="text-sm text-white/70">{description}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm font-medium text-white/80">{value}</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item} variant="accent">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
        {(link || repo) && (
          <CardFooter className="justify-between text-sm text-white/70">
            {link ? (
              <Link
                href={link}
                className="inline-flex items-center gap-2 text-sky-300 transition hover:text-sky-200"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Voir le projet
              </Link>
            ) : (
              <span />
            )}
            {repo && (
              <Link
                href={repo}
                className="inline-flex items-center gap-2 text-white/60 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                Code source
              </Link>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
