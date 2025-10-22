import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../renderers.mjs';

const img = new Proxy({"src":"/_astro/gato2.C-ZA6uAc.jpg","width":1000,"height":1499,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato2.jpg";
							}
							
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/gato1.z4uYISwx.jpg","width":500,"height":333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato1.jpg";
							}
							
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/gato3.TxZPslRh.jpg","width":736,"height":937,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato3.jpg";
							}
							
							return target[name];
						}
					});

const $$GatosDisponibles = createComponent(($$result, $$props, $$slots) => {
  const razas = [
    {
      a: "../persa-europeo",
      imgSrc: img,
      alt: "Gato Persa Europeo",
      h1: "Persa Europeo"
    },
    {
      a: "../persa-chinchilla",
      imgSrc: img2,
      alt: "Gato Persa Chinchilla",
      h1: "Persa Chinchilla"
    },
    {
      a: "../persa-himalayo",
      imgSrc: img3,
      alt: "Gato Persa Himalayo",
      h1: "Persa Himalayo"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gatos disponibles | \xC1gatha Gatos Persas", "description": "Descubre nuestros adorables gatos persa disponibles. Cada uno con su propia personalidad y encanto.", "keywords": "gatos persa, gatos disponibles, criadero de gatos persa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-[#2E2E2E] min-h-screen pb-10 backdrop-blur-[5px]"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white">Gatos disponibles</h1> </div> <section arial-label="Selecciona una raza de gato persa"> <div class="max-w-screen-xl mx-auto px-4 py-10"> <h2 class="text-3xl font-bold mb-6 text-[#2E2E2E] text-[25px]">
Seleccione una raza
</h2> </div> <div class="flex flex-wrap justify-center gap-10 mt-10 max-w-screen-xl max-h-screen-xl mx-auto px-4"> ${razas.map((razas2) => renderTemplate`<a${addAttribute(razas2.a, "href")}> <article class="group pop bg-[#FFE2E2] shadow-2xl p-2 h-100 border-2 border-[#fb9898] hover:border-[#ff5858] rounded-lg flex items-center justify-start flex-col hover:transform hover:scale-105 transition-transform duration-300 hover:cursor-pointer"> <div class="overflow-hidden rounded-2xl"> <img${addAttribute(razas2.imgSrc.src, "src")}${addAttribute(razas2.alt, "alt")} class="h-80 w-80 object-cover rounded-2xl group-hover:scale-105 transition-all duration-300 ease-in-out"> </div> <div class="bg-[#FF6B6B] w-full text-center p-2 rounded-lg mt-2 pulsar"> <h1 class="text-2xl text-white"> ${razas2.h1} </h1> </div> </article> </a>`)} </div> </section> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/gatos-disponibles.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/gatos-disponibles.astro";
const $$url = "/gatos-disponibles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$GatosDisponibles,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
