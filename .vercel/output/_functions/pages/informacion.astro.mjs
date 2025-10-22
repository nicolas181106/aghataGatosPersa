import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_CjjOvSKY.mjs';
import { i as imgGatoPelaje } from '../chunks/gatoConPelajePregunta_CXwpMbjO.mjs';
import { i as imgDurmiendo } from '../chunks/gatoDurmiendo_Ctfrl-Kb.mjs';
import { i as imgGatoComiendo } from '../chunks/gatoComiendo_BkSFlkeB.mjs';
import { i as imgGatoJugando } from '../chunks/gatoPersaJugando_Bd7D86mX.mjs';
export { renderers } from '../renderers.mjs';

const $$Informacion = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      a: "como-cuidar-el-pelaje-de-un-gato-persa",
      img: imgGatoPelaje,
      alt: "gato con pelaje",
      h2: "\xBFC\xF3mo cuidar el pelaje de un gato persa?",
      p: "El pelaje largo del gato persa es una de sus caracter\xEDsticas m\xE1s distintivas y tambi\xE9n uno de los aspectos que requiere mayor atenci\xF3n por parte de sus cuidadores. Para mantener su manto en \xF3ptimas condiciones, es fundamental realizar un cepillado diario. Esto no solo evita la formaci\xF3n de..."
    },
    {
      a: "con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario",
      img: imgDurmiendo,
      alt: "gato persa durmiendo",
      h2: "\xBFCon qu\xE9 frecuencia debo llevar a mi gato persa al veterinario?",
      p: "Los gatos persas deben visitar al veterinario al menos una vez al a\xF1o para realizar un chequeo general, aplicar vacunas y asegurarse de que todo est\xE9 bien con su salud. Estos controles preventivos permiten detectar a tiempo cualquier anomal\xEDa que no sea visible a simple vista..."
    },
    {
      a: "que-tipo-de-alimentacion-es-mejor-para-un-gato-persa",
      img: imgGatoComiendo,
      alt: "gato persa comiendo",
      h2: "\xBFQu\xE9 tipo de alimentaci\xF3n es mejor para un gato persa?",
      p: "Una alimentaci\xF3n adecuada es fundamental para la salud del gato persa. Su dieta debe ser rica en prote\xEDnas de alta calidad para mantener su musculatura y energ\xEDa diaria. Opta por alimentos formulados espec\xEDficamente para razas de pelo largo, ya que contienen ingredientes que ayudan a..."
    },
    {
      a: "como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido",
      img: imgGatoJugando,
      alt: "gato persa jugando",
      h2: "\xBFC\xF3mo puedo mantener a mi gato persa activo y entretenido?",
      p: "Aunque el gato persa es una raza tranquila y reservada, eso no significa que no necesite actividad. Es esencial estimularlo a diario, aunque sea con juegos suaves y de baja intensidad. Juguetes como varitas con plumas, pelotas con cascabeles o ratones de tela pueden..."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Informaci\xF3n | \xC1gatha Gatos Persas", "description": "Informaci\xF3n y preguntas frecuentes sobre gatos persa", "keywords": "gatos persa, preguntas frecuentes, cuidados de gatos persa, informaci\xF3n sobre gatos persa, preguntas frecuentes gatos persa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-10"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white text-center">
Información y preguntas frecuentes
</h1> </div> <section aria-label="Preguntas frecuentes" class="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 max-w-[1300px] mx-auto p-6 sm:p-10 mt-10"> ${articles.map((article) => renderTemplate`<a${addAttribute(`/informacion/${article.a}`, "href")} class="bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 pop"> <img${addAttribute(article.img.src, "src")}${addAttribute(article.alt, "alt")} class="w-full h-56 object-cover"> <div class="p-5"> <h2 class="text-xl font-bold mb-3 text-[#FF6B6B]">${article.h2}</h2> <p class="text-[15px] sm:text-[16px] text-[#2E2E2E]">${article.p}</p> <p class="mt-4 font-semibold text-[#FF6B6B]">Leer más...</p> </div> </a>`)} </section> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/informacion.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/informacion.astro";
const $$url = "/informacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Informacion,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
