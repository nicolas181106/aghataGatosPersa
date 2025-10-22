import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
export { renderers } from '../../renderers.mjs';

const $$PoliticaPrivacidad = createComponent(($$result, $$props, $$slots) => {
  const articles = [
    {
      h1: "\xBFQu\xE9 datos recopilamos?",
      p: "Este sitio no recopila datos personales de forma autom\xE1tica. Solo se recopilan datos si el usuario contacta voluntariamente."
    },
    {
      h1: "Finalidad del tratamiento",
      p: "Responder consultas o comunicaciones enviadas de forma voluntaria por el usuario."
    },
    {
      h1: "Legitimaci\xF3n",
      p: "Consentimiento del usuario al contactarnos."
    },
    {
      h1: "Conservaci\xF3n de datos",
      p: "Los datos enviados por correo o formulario se conservar\xE1n solo el tiempo necesario para responder la solicitud, y luego ser\xE1n eliminados."
    },
    {
      h1: "Cesiones",
      p: "No se ceden datos a terceros."
    },
    {
      h1: "Derechos",
      p: "Puedes solicitar en cualquier momento el acceso, rectificaci\xF3n o eliminaci\xF3n de tus datos escribiendo a nuestro email."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pol\xEDtica de pivacidad | \xC1gatha Gatos Persas", "description": "Pol\xEDtica de privacidad de \xC1gatha Gatos Persas", "keywords": "gatos persas, pol\xEDtica de privacidad, pol\xEDtica, privacidad" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] text-[#2E2E2E] min-h-screen pb-10"> <div class="bg-[#FF6B6B] h-40 mt-20 flex items-center justify-center"> <h1 class="text-[30px] font-bold text-white text-center">
Política de privacidad
</h1> </div> <section arial-label="Política de privacidad" class="max-w-[325px] sm:max-w-[600px] md:max-w-[700px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto p-6 sm:p-20 mt-10 bg-white/90 rounded-lg shadow-lg pop"> ${articles.map((articles2) => renderTemplate`<h1 class="text-3xl font-bold mb-4 text-[#FF6B6B]">${articles2.h1}</h1>
				<p class="mb-8 text-[15px] sm:text-[20px]">${articles2.p}</p>`)} </section> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/footer/politica-privacidad.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/footer/politica-privacidad.astro";
const $$url = "/footer/politica-privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PoliticaPrivacidad,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
