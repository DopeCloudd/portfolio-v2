import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "Le nom est requis." })
    .min(2, "Nom trop court."),
  email: z
    .string({ required_error: "L'email est requis." })
    .email("Email invalide."),
  message: z
    .string({ required_error: "Le message est requis." })
    .min(20, "Merci de détailler votre projet (20 caractères minimum).")
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const reviewSchema = z.object({
  name: z
    .string({ required_error: "Indiquez votre nom." })
    .min(2, "Nom trop court."),
  company: z.string().optional(),
  rating: z
    .coerce.number({ required_error: "Attribuez une note." })
    .min(1, "Note minimale 1.")
    .max(5, "Note maximale 5."),
  message: z
    .string({ required_error: "Partagez votre retour." })
    .min(20, "Merci de détailler votre avis (20 caractères minimum).")
});

export type ReviewFormData = z.infer<typeof reviewSchema>;

export const reviewStorageSchema = z.array(
  reviewSchema.extend({
    createdAt: z.string()
  })
);

export type StoredReview = z.infer<typeof reviewStorageSchema>[number];
