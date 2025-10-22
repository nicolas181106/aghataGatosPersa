import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto | \xC1gatha Gatos Persas", "description": "Cont\xE1ctanos para m\xE1s informaci\xF3n sobre nuestros gatos persa, adopciones y cuidados. Estamos aqu\xED para ayudarte." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main class="min-h-screen flex flex-col items-center justify-start pt-20 pb-10 text-[#2E2E2E]"> <div class="bg-[#FF6B6B] w-full h-40 flex items-center justify-center shadow-lg"> <h1 class="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">Contacto</h1> </div> <section class="w-full flex justify-center mt-10 px-4"> <form id="contact-form" class="relative w-full max-w-xl bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-8 flex flex-col gap-6 border-t-4 border-[#FF6B6B] transition-transform transform"> <label for="name" class="font-medium text-[#333]">Nombre</label> <input type="text" id="name" name="name" required class="p-3 rounded-md border border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B] outline-none transition-all"> <label for="email" class="font-medium text-[#333]">Correo electr\xF3nico</label> <input type="email" id="email" name="email" required class="p-3 rounded-md border border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B] outline-none transition-all"> <label for="gato" class="font-medium text-[#333]">Gato</label> <select id="gato" name="gato" required class="p-3 rounded-md border border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B] outline-none transition-all cursor-pointer"> <option value="">-- Selecciona un tipo --</option> <option value="Persa Europeo">Gato Persa Europeo</option> <option value="Persa Chinchilla">Gato Persa Chinchilla</option> <option value="Persa Himalayo">Gato Persa Himalayo</option> </select> <label for="message" class="font-medium text-[#333]">Mensaje</label> <textarea id="message" name="message" required rows="5" class="p-3 rounded-md border border-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B] outline-none transition-all resize-none"></textarea> <button type="submit" class="bg-[#FF6B6B] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-[#e65c5c] transition-all duration-300">
Enviar
</button> <!-- Feedback tipo tarjeta flotante --> <div id="form-feedback" class="absolute top-[-60px] left-1/2 -translate-x-1/2 w-full max-w-md text-center font-semibold text-lg rounded-lg p-4 shadow-lg hidden transition-all"></div> </form> </section> <script type="module">
      const form = document.getElementById('contact-form');
      const feedback = document.getElementById('form-feedback');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        feedback.classList.add('hidden');
        feedback.textContent = '';
        feedback.classList.remove('bg-green-100', 'bg-red-100', 'text-green-700', 'text-red-700');

        const formData = new FormData(form);

        try {
          const response = await fetch('/api/form', {
            method: 'POST',
            body: formData
          });

          const message = await response.text();

          if (response.ok) {
            feedback.textContent = message;
            feedback.classList.add('bg-green-100', 'text-green-700');
            feedback.classList.remove('hidden');
            form.reset();
          } else {
            feedback.textContent = message;
            feedback.classList.add('bg-red-100', 'text-red-700');
            feedback.classList.remove('hidden');
          }

          // Animaci\xF3n para que desaparezca despu\xE9s de 4 segundos
          setTimeout(() => feedback.classList.add('hidden'), 4000);
        } catch (err) {
          feedback.textContent = 'Error de conexi\xF3n. Intenta de nuevo.';
          feedback.classList.add('bg-red-100', 'text-red-700');
          feedback.classList.remove('hidden');
          setTimeout(() => feedback.classList.add('hidden'), 4000);
        }
      });
    <\/script> </main> `])), maybeRenderHead()) })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
