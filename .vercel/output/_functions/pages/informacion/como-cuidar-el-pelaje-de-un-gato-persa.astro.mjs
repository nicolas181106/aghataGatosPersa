import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
import { i as imgGatoPelaje } from '../../chunks/gatoConPelajePregunta_CXwpMbjO.mjs';
export { renderers } from '../../renderers.mjs';

const imgGatoPelaje2 = new Proxy({"src":"/_astro/gato-persa-pelaje2.DO7iPTXf.jpeg","width":1200,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato-persa-pelaje2.jpeg";
							}
							
							return target[name];
						}
					});

const $$ComoCuidarElPelajeDeUnGatoPersa = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "C\xF3mo cuidar el pelaje de un gato persa: consejos y trucos de expertos", "description": "Descubre c\xF3mo mantener el pelaje de tu gato persa suave, brillante y sin enredos, con consejos de cepillado, ba\xF1os, alimentaci\xF3n y m\xE1s." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] min-h-screen mt-35 pb-10 max-sm:p-4"> <article class="max-w-[800px] mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5 sm:mt-20 pop"> <img${addAttribute(imgGatoPelaje.src, "src")} alt="Gato persa con pelaje brillante" class="w-full h-[280px] object-cover"> <div class="p-6"> <h1 class="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 leading-tight">
Cómo cuidar el pelaje de un gato persa: consejos y trucos de expertos
</h1> <p class="text-lg text-gray-700 font-medium mb-6">
El pelaje del gato persa es su corona, pero mantenerlo sedoso y libre de enredos requiere dedicación. Te contamos las mejores prácticas para que luzca siempre impecable.
</p> <div class="prose max-w-none prose text-gray-800 leading-relaxed"> <p>
Con su manto largo y suave, el <strong>gato persa</strong> es una de las razas más admiradas en el mundo felino. Sin embargo, esa belleza requiere <strong>cuidados constantes</strong> para prevenir enredos, suciedad y pérdida de brillo.
</p> <h2>El cepillado diario: la base de un pelaje perfecto</h2> <p>
Cepillar a tu gato persa una vez al día evita la formación de nudos y bolas de pelo. Usa un cepillo de púas metálicas suaves y realiza movimientos lentos para no irritar la piel. Este hábito no solo mejora el aspecto del pelo, sino que también fortalece el vínculo con tu mascota.
</p> <h2>Baños regulares con productos adecuados</h2> <p>
Aunque no necesitan baños frecuentes, un lavado mensual con champú especial para pelo largo ayuda a mantenerlo limpio y brillante. Es importante secarlo bien para evitar humedad en la piel, usando una toalla y, si es necesario, un secador en modo suave.
</p> <img${addAttribute(imgGatoPelaje2.src, "src")} alt="Pelaje brillante de un gato persa después del cepillado" class="rounded-lg shadow-md w-full object-cover my-6"> <h2>La alimentación también influye</h2> <p>
Una dieta rica en <strong>omega 3 y omega 6</strong> mantiene la piel saludable y el pelo más sedoso. Opta por piensos premium formulados para razas de pelo largo y consulta con tu veterinario sobre posibles suplementos.
</p> <h2>Chequeos veterinarios: prevención ante todo</h2> <p>
Revisiones regulares permiten detectar problemas de piel, alergias o parásitos a tiempo. Un pelaje opaco puede ser síntoma de problemas internos que necesitan atención profesional.
</p> </div> </div> <div class="w-full flex justify-end mt-8 text-[#FF6B6B] p-6"> <a href="/informacion" class="hover:underline mt-4 px-4 py-2 rounded bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 transition-colors">
← Volver
</a> </div> </article> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/informacion/como-cuidar-el-pelaje-de-un-gato-persa.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/informacion/como-cuidar-el-pelaje-de-un-gato-persa.astro";
const $$url = "/informacion/como-cuidar-el-pelaje-de-un-gato-persa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ComoCuidarElPelajeDeUnGatoPersa,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
