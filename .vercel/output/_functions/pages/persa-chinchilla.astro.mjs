import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
import { $ as $$CardClick } from '../chunks/cardClick_T-Jugcvo.mjs';
import { s as slider4 } from '../chunks/oddie_t0l2Lu0D.mjs';
import { c as ceres } from '../chunks/ceres_D7BwCdMa.mjs';
import { g as gatosChinchilla } from '../chunks/gatos-chinchilla_DO1jgaqT.mjs';
export { renderers } from '../renderers.mjs';

const $$PersaChinchilla = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gato persa europeo | \xC1gatha gatos persas", "description": "Conoce al encantador Gato Persa Europeo, una raza conocida por su belleza y car\xE1cter dulce. Descubre m\xE1s sobre esta maravillosa raza en nuestro criadero.", "keywords": "gato persa europeo, criadero de gatos persa, gatos persa en adopci\xF3n" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardClick", $$CardClick, { "idClick": "oddieClick", "idCerrar": "oddieCerrar", "src": slider4.src, "alt": "Gato persa europeo macho", "nombre": "Oddie", "edad": 9 })} ${renderComponent($$result2, "CardClick", $$CardClick, { "idClick": "ceresClick", "idCerrar": "ceresCerrar", "src": ceres.src, "alt": "Gato persa chinchilla hembra", "nombre": "Ceres", "edad": 1 })} ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-30"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white">
Gato persa chinchilla
</h1> </div> <section class="max-w-[800px] mx-auto px-4 py-10 mt-10 flex flex-col sm:flex-row gap-12 justify-center items-center pop hidden"> <figure class="text-center hover:transform hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer" id="oddieImg"> <h2 class="text-2xl sm:text-3xl font-bold mb-2">Padre</h2> <img${addAttribute(slider4.src, "src")} alt="Padre gato persa europeo" loading="lazy" class="p-2 h-75 w-75 object-cover rounded-2xl bg-[#FF6B6B]"> </figure> <figure class="text-center hover:transform hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer" id="blubeImg"> <h2 class="text-2xl sm:text-3xl font-bold mb-2">Madre</h2> <img${addAttribute(ceres.src, "src")} alt="Madre gato persa europeo" loading="lazy" class="p-2 h-75 w-75 object-cover rounded-2xl bg-[#FF6B6B]"> </figure> </section> ${gatosChinchilla.length === 0 && renderTemplate`<section class="h-full py-20 flex flex-col items-center justify-center text-center px-4 pop"> <h2 class="text-3xl font-semibold mb-4">¡Ups! No hay gatitos disponibles 😿</h2> <p class="text-lg text-gray-700 mb-6 max-w-xl">
Actualmente todos nuestros gatitos chinchilla están adoptados, pero puedes explorar nuestras camadas anteriores o dejarnos tu correo para avisarte cuando tengamos nuevos gatitos.
</p> <div class="flex flex-col sm:flex-row gap-6 mb-10"> <a href="/camadas-anteriores" class="inline-block bg-[#FF6B6B] hover:bg-[#e65c5c] text-white font-semibold py-3 px-6 rounded-full shadow transition duration-300">
Ver camadas anteriores
</a> <a href="/contacto" class="inline-block border-2 border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white font-semibold py-3 px-6 rounded-full shadow transition duration-300">
Avisarme cuando haya gatitos
</a> </div> </section>`} ${gatosChinchilla.map((gato) => renderTemplate`<article class="showImg mt-20 px-4 flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-20 bg-white/90 p-6 rounded-lg shadow-2xl max-w-[350px] md:max-w-[800px] mx-auto hover:transform hover:scale-105 transition-transform duration-300"> <a${addAttribute(`/gatos/${gato.slugChinchilla}`, "href")} class="relative block bg-white rounded-2xl shadow-lg overflow-hidden group hover:scale-110 transition-transform duration-300"> <img${addAttribute(gato.imgSrc.src, "src")}${addAttribute(gato.alt, "alt")} loading="lazy" class="p-2 h-75 w-75 object-cover rounded-2xl bg-[#FF6B6B]"> <span class="absolute inset-0 flex items-start justify-center 
								bg-black/70 text-white text-2xl font-bold pt-5
								translate-y-full group-hover:translate-y-[70%] 
								transition-transform duration-500 ease-in-out">
Cliqueame
</span> </a> <div class="flex flex-col text-left text-lg lg:text-xl"> <p> <strong>Nombre:</strong> ${gato.nombre} </p> <p> <strong>Género:</strong> ${gato.genero} </p> <p> <strong>Edad:</strong>${" "} <span class="edad-gatito"${addAttribute(gato.edad.toISOString(), "data-nacimiento")}>
Calculando...
</span> </p> <div class="flex gap-4 mt-6"> <a href="/contacto" class="text-sm sm:text-base inline-block hover:bg-[#FF6B6B] border-2 border-[#FF6B6B] text-[#FF6B6B] hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow">
Adoptar gatito
</a> <a href="/gatos-disponibles" class="text-sm sm:text-base inline-block border-2 border-[#FF6B6B] bg-[#FF6B6B] hover:bg-[#e65c5c] text-white font-semibold py-2 px-4 rounded-full transition duration-300 shadow">
Ver gatos disponibles
</a> </div> </div> </article>`)} ${renderScript($$result2, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/persa-chinchilla.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result2, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/persa-chinchilla.astro?astro&type=script&index=1&lang.ts")} </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/persa-chinchilla.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/persa-chinchilla.astro";
const $$url = "/persa-chinchilla";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PersaChinchilla,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
