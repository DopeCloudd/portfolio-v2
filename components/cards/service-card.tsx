"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
}

export function ServiceCard({ title, description, icon, index = 0 }: ServiceCardProps) {
  const accentGradients = [
    "from-sky-500/60 via-cyan-400/50 to-blue-500/50",
    "from-purple-500/60 via-fuchsia-400/50 to-sky-400/50",
    "from-emerald-500/60 via-teal-400/50 to-sky-400/50"
  ];
  const gradient = accentGradients[index % accentGradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className="h-full bg-white/[0.04] backdrop-blur">
        <CardHeader className="flex-row items-start gap-4">
          <span
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-black/10`}
          >
            {icon}
          </span>
          <div>
            <h3 className="bg-gradient-to-r from-white via-sky-100 to-sky-300 bg-clip-text text-lg font-semibold text-transparent">
              {title}
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
