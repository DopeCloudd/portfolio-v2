"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import Link from "next/link";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error ?? "Impossible d'envoyer votre message.");
      }

      form.reset();
      toast({
        title: "Message envoyé",
        description: "Je reviens vers vous sous 24 heures ouvrées.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Merci de réessayer ou d'envoyer un email direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom*</FormLabel>
              <FormControl>
                <Input placeholder="Nom et prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  placeholder="vous@entreprise.fr"
                  type="email"
                  {...field}
                />
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
              <FormLabel>Votre besoin*</FormLabel>
              <FormControl>
                <Textarea placeholder="Décrivez votre projet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="justify-center"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>
        <Button asChild className="hidden md:inline-flex" variant="secondary">
          <Link
            href="https://calendly.com/welance-mail/parlez-nous-de-votre-projet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pas le temps d&apos;écrire ? Réservez un créneau en 1 clic
          </Link>
        </Button>
      </form>
    </Form>
  );
}
