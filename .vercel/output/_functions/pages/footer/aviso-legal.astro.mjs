import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../../renderers.mjs';

const $$AvisoLegal = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      h1: "Objeto",
      p: "El presente Aviso Legal regula el uso del sitio web agathagatospersa.com, propiedad de Nicol\xE1s Adri\xE1n Bernal Berm\xFAdez. La navegaci\xF3n por este sitio web atribuye la condici\xF3n de usuario e implica la aceptaci\xF3n plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal."
    },
    {
      h1: "Propiedad intelectual",
      p: "Todos los contenidos de la web (textos, im\xE1genes, logotipos, v\xEDdeos, etc.) son propiedad del titular o tienen licencia de uso. Est\xE1 prohibida su reproducci\xF3n, distribuci\xF3n o transformaci\xF3n sin autorizaci\xF3n expresa."
    },
    {
      h1: "Enlaces externos",
      p: "Este sitio puede contener enlaces a sitios de terceros. No nos responsabilizamos del contenido, seguridad o funcionamiento de dichos sitios."
    },
    {
      h1: "Responsabilidad",
      p: "El titular no se hace responsable de posibles errores en los contenidos, falta de disponibilidad del sitio o transmisi\xF3n de virus. El uso de este sitio web se realiza bajo responsabilidad del usuario."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aviso legal | \xC1gatha Gatos Persas", "description": "Aviso legal de \xC1gatha Gatos Persas", "keywords": "gatos persa, aviso legal, legal, aviso" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-10"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white text-center">
Aviso legal
</h1> </div> <section arial-label="Aviso legal" class="max-w-[325px] sm:max-w-[600px] md:max-w-[700px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto p-6 sm:p-20 mt-10 bg-white/90 rounded-lg shadow-lg pop"> ${articles.map((articles2) => renderTemplate`<h1 class="text-3xl font-bold mb-4 text-[#FF6B6B]">${articles2.h1}</h1>
				<p class="mb-8 text-[15px] sm:text-[20px]">${articles2.p}</p>`)} </section> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/footer/aviso-legal.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/footer/aviso-legal.astro";
const $$url = "/footer/aviso-legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AvisoLegal,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
