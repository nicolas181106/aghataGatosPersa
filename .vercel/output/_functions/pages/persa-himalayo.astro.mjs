import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../renderers.mjs';

const gatosHimalayo = [
];

const $$PersaHimalayo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gato persa himalayo | \xC1gatha Gatos Persas", "description": "Conoce al encantador Gato Persa Himalayo, una raza \xFAnica con un pelaje impresionante y una personalidad cari\xF1osa. Descubre m\xE1s sobre esta maravillosa raza en nuestro criadero." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-30"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white">Gato persa himalayo</h1> </div> ${gatosHimalayo.length === 0 && renderTemplate`<section class="h-full py-20 flex flex-col items-center justify-center text-center px-4 pop"> <h2 class="text-3xl font-semibold mb-4">¡Ups! No hay gatitos disponibles 😿</h2> <p class="text-lg text-gray-700 mb-6 max-w-xl">
Actualmente todos nuestros gatitos himalayos están adoptados, pero puedes explorar nuestras camadas anteriores o dejarnos tu correo para avisarte cuando tengamos nuevos gatitos.
</p> <div class="flex flex-col sm:flex-row gap-6 mb-10"> <a href="/camadas-anteriores" class="inline-block bg-[#FF6B6B] hover:bg-[#e65c5c] text-white font-semibold py-3 px-6 rounded-full shadow transition duration-300">
Ver camadas anteriores
</a> <a href="/contacto" class="inline-block border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white font-semibold py-3 px-6 rounded-full shadow transition duration-300">
Avisarme cuando haya gatitos
</a> </div> </section>`} </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/persa-himalayo.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/persa-himalayo.astro";
const $$url = "/persa-himalayo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PersaHimalayo,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
