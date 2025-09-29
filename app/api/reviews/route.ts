import { promises as fs } from "fs";
import { join } from "path";

import { NextResponse } from "next/server";

import { sendMail } from "@/lib/mailer";
import {
  reviewSchema,
  reviewStorageSchema,
  type StoredReview
} from "@/lib/validation";
import { ZodError } from "zod";

const REVIEWS_PATH = join(process.cwd(), "data", "reviews.json");

async function readReviews(): Promise<StoredReview[]> {
  try {
    const raw = await fs.readFile(REVIEWS_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return reviewStorageSchema.parse(parsed);
  } catch (error) {
    console.warn("Unable to read reviews.json", error);
    return [];
  }
}

async function writeReviews(reviews: StoredReview[]) {
  await fs.writeFile(REVIEWS_PATH, JSON.stringify(reviews, null, 2), "utf8");
}

export async function GET() {
  const reviews = await readReviews();
  const average =
    reviews.length > 0
      ? Number(
          (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
        )
      : 0;

  return NextResponse.json({ reviews, average });
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = reviewSchema.parse(payload);
    const nextReview: StoredReview = {
      ...data,
      createdAt: new Date().toISOString()
    };

    const reviews = await readReviews();

    try {
      await writeReviews([nextReview, ...reviews]);
      return NextResponse.json({ message: "Avis enregistré." }, { status: 201 });
    } catch (fileError) {
      console.error("Impossible de persister l'avis, fallback email", fileError);
      await sendMail({
        subject: `Nouvel avis de ${data.name}`,
        text: `Nom: ${data.name}\nEntreprise: ${data.company ?? "N/A"}\nNote: ${data.rating}\n\n${data.message}`
      });
      return NextResponse.json(
        {
          message:
            "Avis reçu. Nous vous contacterons rapidement (sauvegarde alternative effectuée)."
        },
        { status: 202 }
      );
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Validation échouée." }, { status: 400 });
    }

    console.error("/api/reviews error", error);
    return NextResponse.json({ error: "Impossible d'enregistrer l'avis." }, { status: 500 });
  }
}
