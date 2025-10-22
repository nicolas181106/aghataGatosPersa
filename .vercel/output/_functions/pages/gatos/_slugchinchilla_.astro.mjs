import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
import { g as gatosChinchilla } from '../../chunks/gatos-chinchilla_DO1jgaqT.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return gatosChinchilla.map((gato) => ({
    params: { slugChinchilla: gato.slugChinchilla },
    props: { gato }
  }));
}
const $$slugChinchilla = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slugChinchilla;
  const { slugChinchilla } = Astro2.params;
  const gato = gatosChinchilla.find((g) => g.slugChinchilla === slugChinchilla);
  if (!gato) {
    throw new Error(`Gato no encontrado: ${slugChinchilla}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${gato.nombre} | \xC1gatha Gatos Persa`, "description": `Conoce a ${gato.nombre}, un adorable gato persa.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-10"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white text-center"> ${gato.nombre} </h1> </div> <section aria-label="Perfil de gato" class="max-w-[350px] sm:max-w-3xl mx-auto p-6 sm:p-12 mt-16 bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-[#ffeaea] pop"> <div class="flex flex-col sm:flex-row items-center gap-8"> <img${addAttribute(gato.imgSrc.src, "src")}${addAttribute(gato.nombre, "alt")} class="w-64 h-64 rounded-xl object-cover ring-4 ring-[#FF6B6B] shadow-md"> <div class="text-center sm:text-left"> <h2 class="text-3xl font-semibold text-[#FF6B6B] mb-4">${gato.nombre}</h2> <p class="text-xl mb-2"> <strong>Edad:</strong> <span class="edad-gatito"${addAttribute(gato.edad.toISOString(), "data-nacimiento")}></span> </p> <p class="text-xl"><strong>Género:</strong> ${gato.genero}</p> </div> </div> <div class="mt-8"> <p class="text-lg text-gray-800 leading-relaxed text-center sm:text-justify">${gato.texto}</p> </div> <div class="w-full flex justify-end mt-8 text-[#FF6B6B]"> <a${addAttribute(`/persa-${gato.raza}`, "href")} class="hover:underline mt-4 px-4 py-2 rounded bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 transition-colors">← Volver</a> </div> </section> ${renderScript($$result2, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/gatos/[slugChinchilla].astro?astro&type=script&index=0&lang.ts")} </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/gatos/[slugChinchilla].astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/gatos/[slugChinchilla].astro";
const $$url = "/gatos/[slugChinchilla]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slugChinchilla,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
