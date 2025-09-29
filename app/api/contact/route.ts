import { NextResponse } from "next/server";

import { sendMail } from "@/lib/mailer";
import { contactSchema } from "@/lib/validation";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);

    await sendMail({
      subject: `Nouveau message de ${data.name}`,
      text: `Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      html: `<p><strong>Nom:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p>${data.message}</p>`
    });

    return NextResponse.json({ message: "Message envoyé avec succès." });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: "Validation échouée." }, { status: 400 });
    }

    console.error("/api/contact error", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi du message. Merci de réessayer ou de me contacter directement par email."
      },
      { status: 500 }
    );
  }
}
