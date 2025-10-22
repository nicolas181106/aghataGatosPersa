import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
import { i as imgGatoComiendo } from '../../chunks/gatoComiendo_BkSFlkeB.mjs';
export { renderers } from '../../renderers.mjs';

const imgBol = new Proxy({"src":"/_astro/gato-comiendo2.CSXv_szR.jpg","width":626,"height":417,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato-comiendo2.jpg";
							}
							
							return target[name];
						}
					});

const $$QueTipoDeAlimentacionEsMejorParaUnGatoPersa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Qu\xE9 tipo de alimentaci\xF3n es mejor para un gato persa | \xC1gatha Gatos Persas", "description": "Recomendaciones sobre la alimentaci\xF3n adecuada para gatos persas.", "keywords": "alimentaci\xF3n gato persa, dieta gato persa, comida gato persa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] min-h-screen mt-35 pb-10 max-sm:p-4"> <article class="max-w-[800px] mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5 sm:mt-20 pop"> <img${addAttribute(imgGatoComiendo.src, "src")} alt="Gato persa comiendo" class="w-full h-[280px] object-cover"> <div class="p-6"> <h1 class="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 leading-tight">
Qué tipo de alimentación es mejor para un gato persa
</h1> <p class="text-lg text-gray-700 font-medium mb-6">
La alimentación adecuada es esencial para mantener a un gato persa sano, activo y con un pelaje brillante. Esta raza requiere una dieta equilibrada, rica en nutrientes y adaptada a sus necesidades específicas.
</p> <div class="prose max-w-none prose-lg text-gray-800 leading-relaxed"> <h2>Dieta rica en proteínas</h2> <p>
Los gatos persas necesitan proteínas de alta calidad para conservar su musculatura y energía diaria. Lo ideal es optar por piensos formulados para razas de pelo largo, ya que ayudan a reducir la formación de bolas de pelo y mantienen el pelaje sedoso.
                        Algunas marcas recomendadas por veterinarios incluyen <strong>Royal Canin Persian</strong>, <strong>Hill's Science Plan</strong> y <strong>Purina Pro Plan</strong>.
</p> <h2>Comida seca y húmeda: el equilibrio perfecto</h2> <p>
La comida seca es beneficiosa para la salud dental, mientras que la comida húmeda ayuda a mantener una buena hidratación. Combinar ambos formatos, ofreciendo húmeda una o dos veces por semana, es una estrategia muy saludable.
                        Marcas como <strong>Applaws</strong> y <strong>Almo Nature</strong> destacan por su calidad y alto contenido en proteínas naturales.
</p> <div class="my-6"> <img${addAttribute(imgBol.src, "src")} alt="Bol de comida para gato persa" class="rounded-lg shadow-md w-full object-cover"> </div> <h2>Suplementos y agua siempre fresca</h2> <p>
Los ácidos grasos esenciales como el omega 3 y omega 6 son grandes aliados para un pelaje brillante y una piel sana. Suplementos como <strong>Dermocanis Omega</strong> o <strong>Viacutan Plus</strong> pueden ser útiles en casos específicos.
                        Además, el agua limpia y fresca debe estar siempre disponible. Una fuente para gatos puede incentivar su consumo y prevenir problemas urinarios.
</p> </div> </div> <div class="w-full flex justify-end mt-8 text-[#FF6B6B] p-6"> <a href="/informacion" class="hover:underline mt-4 px-4 py-2 rounded bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 transition-colors">
← Volver
</a> </div> </article> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa.astro";
const $$url = "/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$QueTipoDeAlimentacionEsMejorParaUnGatoPersa,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
