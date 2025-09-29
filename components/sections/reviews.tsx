"use client";

import { useEffect, useState } from "react";

import { ReviewForm } from "@/components/forms/review-form";
import { Section } from "@/components/layout/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { StoredReview } from "@/lib/validation";

interface ReviewsSectionProps {
  initialReviews: StoredReview[];
  initialAverage: number;
}

export function ReviewsSection({ initialReviews, initialAverage }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<StoredReview[]>(initialReviews);
  const [average, setAverage] = useState(initialAverage);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews", { cache: "no-store" });
        if (!response.ok) return;
        const payload = await response.json();
        setReviews(payload.reviews ?? []);
        setAverage(payload.average ?? 0);
      } catch (error) {
        console.error("Unable to fetch reviews", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSuccess = (review: StoredReview) => {
    const nextReviews = [review, ...reviews];
    setReviews(nextReviews);
    const avg =
      nextReviews.length > 0
        ? Number(
            (
              nextReviews.reduce((acc, item) => acc + item.rating, 0) / nextReviews.length
            ).toFixed(1)
          )
        : 0;
    setAverage(avg);
  };

  return (
    <Section
      id="avis"
      eyebrow="Avis clients"
      title="Votre retour compte pour bâtir une relation durable"
      description="Publiez un avis pour partager votre expérience : la qualité de service et la collaboration sont au cœur de ma démarche."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/60">Note moyenne</p>
              <p className="text-5xl font-semibold text-white">{average || "—"}/5</p>
            </div>
            <Badge variant="accent" className="text-base">
              {reviews.length} avis
            </Badge>
          </div>
          <div className="grid gap-4">
            {reviews.length === 0 && (
              <Card className="bg-white/5 p-6 text-sm text-white/70">
                Aucun avis pour le moment. Soyez la première entreprise à partager son retour !
              </Card>
            )}
            {reviews.map((review) => (
              <Card key={`${review.name}-${review.createdAt}`} className="bg-white/5 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    {review.company && (
                      <p className="text-xs uppercase tracking-wide text-white/50">{review.company}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sky-200">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>{index < review.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70">{review.message}</p>
                <p className="mt-4 text-xs text-white/40">
                  {new Date(review.createdAt).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })}
                </p>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Laisser un avis</h3>
            <p className="mt-2 text-sm text-white/70">
              Votre retour est précieux pour m’améliorer en continu et aider les entreprises à se projeter.
            </p>
            <div className="mt-6">
              <ReviewForm onSuccess={handleSuccess} />
            </div>
          </div>
          <Accordion type="single" collapsible className="rounded-3xl border border-white/10 bg-white/5">
            <AccordionItem value="guidelines">
              <AccordionTrigger>Comment vos avis sont utilisés ?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Chaque avis est relu avant publication pour garantir qualité et authenticité. En cas de besoin,
                  je vous contacte pour clarifier certains points.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
