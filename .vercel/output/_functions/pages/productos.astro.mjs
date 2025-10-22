import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../renderers.mjs';

const imgRascador = new Proxy({"src":"/_astro/rascador.De7a_Yx1.jpg","width":470,"height":470,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/rascador.jpg";
							}
							
							return target[name];
						}
					});

const imgJuguete = new Proxy({"src":"/_astro/juguete.B6wqaYHQ.jpg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/juguete.jpg";
							}
							
							return target[name];
						}
					});

const imgComedero = new Proxy({"src":"/_astro/comedero.CUFikdyg.jpg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/comedero.jpg";
							}
							
							return target[name];
						}
					});

const imgCama = new Proxy({"src":"/_astro/cama.CZYQbR7h.jpg","width":894,"height":752,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/cama.jpg";
							}
							
							return target[name];
						}
					});

const imgArena = new Proxy({"src":"/_astro/arenero.CVBS66Cl.jpg","width":2560,"height":2560,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/arenero.jpg";
							}
							
							return target[name];
						}
					});

const $$Productos = createComponent(($$result, $$props, $$slots) => {
  const productos = [
    {
      a: "rascadores",
      img: imgRascador,
      alt: "rascador para gato persa",
      h2: "Rascadores para gatos persas",
      p: "Mant\xE9n sus u\xF1as sanas y ofr\xE9cele un espacio propio para estirarse y liberar estr\xE9s."
    },
    {
      a: "juguetes",
      img: imgJuguete,
      alt: "juguetes para gatos persas",
      h2: "Juguetes para mantenerlos activos",
      p: "Estimulaci\xF3n mental y f\xEDsica con pelotas, ca\xF1as o ratones de tela ideales para gatos persas."
    },
    {
      a: "comida",
      img: imgComedero,
      alt: "comida para gato persa",
      h2: "Comida, comederos y accesorios de alimentaci\xF3n",
      p: "Facilita la alimentaci\xF3n diaria y evita molestias digestivas, sobre todo en gatos de cara chata."
    },
    {
      a: "camas",
      img: imgCama,
      alt: "camas para gatos persas",
      h2: "Camas c\xF3modas y acogedoras",
      p: "Un lugar c\xE1lido y c\xF3modo para descansar y dormir, adaptado al tama\xF1o de tu gato persa."
    },
    {
      a: "areneros",
      img: imgArena,
      alt: "areneros para gatos persas",
      h2: "Areneros y accesorios de higiene",
      p: "Mant\xE9n la higiene de tu gato con areneros f\xE1ciles de limpiar y adaptados a gatos persas."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos | \xC1gatha Gatos Persas", "description": "Productos y accesorios recomendados para gatos persa: rascadores, juguetes, comederos, camas y areneros.", "keywords": "productos gatos persa, rascadores gatos persa, juguetes gatos persa, comederos gatos persa, camas gatos persa, areneros gatos persa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-16"> <div class="bg-[#FF6B6B] h-40 flex items-center justify-center mt-20"> <h1 class="text-3xl font-extrabold text-white text-center">
Productos para gatos persas
</h1> </div> <section class="max-w-[1300px] mx-auto p-6 sm:p-10 mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${productos.map((producto) => renderTemplate`<a${addAttribute(`/productos/${producto.a}`, "href")} class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col pop hover:-translate-y-2 border-transparent hover:border-[1px] hover:border-[#FF6B6B]"> <div class="relative"> <img${addAttribute(producto.img.src, "src")}${addAttribute(producto.alt, "alt")} class="w-full h-64 object-cover rounded-t-2xl"> </div> <div class="p-5 flex flex-col flex-1"> <h2 class="text-lg font-bold mb-2 text-[#FF6B6B]">${producto.h2}</h2> <p class="text-sm text-gray-700 flex-1">${producto.p}</p> <div class="mt-4"> <span class="inline-block bg-[#FF6B6B] text-white font-semibold py-2 px-4 rounded hover:bg-[#e55a5a] text-center transition-colors">
Ver más →
</span> </div> </div> </a>`)} </section> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/productos.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Productos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
