import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://cwoltjrvlzilainpzccv.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3b2x0anJ2bHppbGFpbnB6Y2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjc1MTAsImV4cCI6MjA3NTk0MzUxMH0.v25Bi89FWzW_X_CRLANtrzSHemnGdc2E5qLEprAG__Q";
const supabase = createClient(supabaseUrl, supabaseKey);

const POST = async ({ request }) => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
