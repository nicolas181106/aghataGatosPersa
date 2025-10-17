import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const nombre = formData.get("name")?.toString().trim();
    const correo = formData.get("email")?.toString().trim();
    const gato = formData.get("gato")?.toString().trim() || "";
    const mensaje = formData.get("message")?.toString().trim();

    if (!nombre || !correo || !gato || !mensaje) {
      return new Response("Rellene todos los campos", { status: 400 });
    }

    const { error } = await supabase.from("formulario").insert([{ nombre, correo, gato, mensaje }]);

    if (error) return new Response(error.message, { status: 500 });

    return new Response("Formulario enviado con éxito", { status: 200 });
  } catch (err) {
    return new Response("Error en el servidor: " + (err instanceof Error ? err.message : String(err)), { status: 500 });
  }
};
