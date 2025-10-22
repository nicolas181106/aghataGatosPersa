import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
import { i as imgDurmiendo } from '../../chunks/gatoDurmiendo_Ctfrl-Kb.mjs';
export { renderers } from '../../renderers.mjs';

const imgChequeo = new Proxy({"src":"/_astro/gato-veterinario.B1uE6gtW.jpg","width":512,"height":512,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gato-veterinario.jpg";
							}
							
							return target[name];
						}
					});

const $$ConQueFrecuenciaDeboLlevarAMiGatoPersaAlVeterinario = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Con qu\xE9 frecuencia debo llevar a mi gato persa al veterinario", "description": "Frecuencia recomendada para las visitas veterinarias en gatos persas y consejos para mantener su salud \xF3ptima.", "keywords": "frecuencia veterinario gato persa, salud gato persa, cuidados veterinarios" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] min-h-screen mt-35 pb-10 max-sm:p-4"> <article class="max-w-[800px] mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5 sm:mt-20 pop"> <img${addAttribute(imgDurmiendo.src, "src")} alt="Gato persa descansando" class="w-full h-[280px] object-cover"> <div class="p-6"> <h1 class="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 leading-tight">
Con qué frecuencia debo llevar a mi gato persa al veterinario
</h1> <p class="text-lg text-gray-700 font-medium mb-6">
Las visitas al veterinario son esenciales para asegurar la salud y bienestar de tu gato persa. Esta raza, por su constitución y características, requiere chequeos regulares para prevenir y detectar posibles problemas de salud a tiempo.
</p> <div class="prose max-w-none prose-lg text-gray-800 leading-relaxed"> <h2>Chequeos generales anuales</h2> <p>
Los <strong>gatos persas</strong> deben acudir al veterinario al menos una vez al año. En estas revisiones se realizan exámenes físicos, se aplican vacunas necesarias y se evalúa el estado general de su salud.
                        Estas visitas ayudan a detectar problemas que podrían pasar desapercibidos en casa.
</p> <h2>Atención ante señales de alerta</h2> <p>
Si tu gato presenta pérdida de apetito, cambios en el comportamiento, pelaje opaco, letargo o cualquier síntoma inusual, no esperes al próximo chequeo. Los gatos tienden a ocultar su malestar, por lo que actuar rápido puede marcar la diferencia.
</p> <div class="my-6"> <img${addAttribute(imgChequeo.src, "src")} alt="Chequeo veterinario de un gato persa" class="rounded-lg shadow-md w-full object-cover"> </div> <h2>Gatos mayores y condiciones especiales</h2> <p>
Si tu gato persa tiene más de 8 años o padece alguna enfermedad crónica, es recomendable aumentar la frecuencia de las visitas a cada seis meses. Un seguimiento cercano permite controlar mejor su estado y adaptar tratamientos de forma oportuna.
</p> <h2>La prevención es la clave</h2> <p>
Además de reaccionar ante problemas de salud, las visitas periódicas sirven para prevenir enfermedades. Las vacunas, desparasitaciones y controles preventivos son la base para que tu gato persa viva una vida larga y saludable.
</p> </div> </div> <div class="w-full flex justify-end mt-8 text-[#FF6B6B] p-6"> <a href="/informacion" class="hover:underline mt-4 px-4 py-2 rounded bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 transition-colors">
← Volver
</a> </div> </article> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario.astro";
const $$url = "/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConQueFrecuenciaDeboLlevarAMiGatoPersaAlVeterinario,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
