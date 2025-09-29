"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  reviewSchema,
  type ReviewFormData,
  type StoredReview
} from "@/lib/validation";

interface ReviewFormProps {
  onSuccess: (review: StoredReview) => void;
}

export function ReviewForm({ onSuccess }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      company: "",
      rating: 5,
      message: ""
    }
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "Impossible d'enregistrer l'avis.");
      }

      const review: StoredReview = {
        ...values,
        createdAt: new Date().toISOString()
      };
      onSuccess(review);
      form.reset({ name: "", company: "", rating: 5, message: "" });
      toast({
        title: "Merci pour votre retour !",
        description: payload.message ?? "Votre avis sera publié rapidement."
      });
    } catch (error) {
      toast({
        title: "Impossible d'enregistrer votre avis",
        description:
          error instanceof Error
            ? error.message
            : "Réessayez dans quelques instants ou contactez-moi par email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom*</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entreprise (optionnel)</FormLabel>
              <FormControl>
                <Input placeholder="Nom de votre entreprise" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note /5*</FormLabel>
              <FormControl>
                <Input type="number" min={1} max={5} step={1} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Votre avis*</FormLabel>
              <FormControl>
                <Textarea placeholder="Partagez votre expérience" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="justify-center">
          {isSubmitting ? "Envoi en cours..." : "Publier mon avis"}
        </Button>
      </form>
    </Form>
  );
}
