import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/layout_CjjOvSKY.mjs';
import { i as imgGatoJugando } from '../../chunks/gatoPersaJugando_Bd7D86mX.mjs';
export { renderers } from '../../renderers.mjs';

const imgJuguetes = new Proxy({"src":"/_astro/gatoJugando2.BdpYQiDx.webp","width":900,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gatoJugando2.webp";
							}
							
							return target[name];
						}
					});

const $$ComoPuedoMantenerAMiGatoPersaActivoYEntretenido = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "C\xF3mo mantener activo a un gato persa: juegos, rutinas y consejos", "description": "Descubre c\xF3mo mantener a tu gato persa estimulado y feliz con juegos, rutinas y enriquecimiento sensorial adaptados a su personalidad.", "keywords": "juego gato persa, actividad gato persa, entretenimiento felino" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="backdrop-blur-[5px] min-h-screen mt-35 pb-10 max-sm:p-4"> <article class="max-w-[800px] mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5 sm:mt-20 pop"> <img${addAttribute(imgGatoJugando.src, "src")} alt="Gato persa jugando" class="w-full h-[280px] object-cover"> <div class="p-6"> <h1 class="text-3xl sm:text-4xl font-bold mb-3 text-gray-800 leading-tight">
Cómo mantener activo a un gato persa: juegos, rutinas y consejos
</h1> <p class="text-lg text-gray-700 font-medium mb-6">
Aunque el gato persa es una raza tranquila, también necesita estimulación diaria para mantenerse sano y feliz. Con la combinación adecuada de juegos, espacios y rutinas, tu persa podrá disfrutar de una vida activa y equilibrada.
</p> <div class="prose max-w-none prose-lg text-gray-800 leading-relaxed"> <h2>Juegos suaves y estimulación diaria</h2> <p>
El <strong>gato persa</strong> puede ser calmado por naturaleza, pero eso no significa que deba llevar una vida sedentaria. Juguetes como varitas con plumas, pelotas con cascabel o ratones de tela mantienen su interés y fomentan el ejercicio suave. 
                        Marcas como <em>KONG</em>, <em>Catit</em> o <em>Trixie</em> ofrecen opciones seguras y duraderas.
</p> <p>
Los juguetes interactivos que liberan premios, como el <em>Catit Senses Food Tree</em>, ayudan a ejercitar su cuerpo y mente al mismo tiempo, incentivando el juego de forma más estratégica.
</p> <h2>Espacios para explorar y trepar</h2> <p>
Aunque no es tan ágil como otras razas, el gato persa disfruta observando desde lugares altos y moviéndose por su territorio. Un árbol para gatos con varias plataformas, estantes elevados o redes seguras pueden proporcionarle horas de entretenimiento.
</p> <p>
Si cuentas con un balcón o terraza segura, habilítalo como zona de exploración para que disfrute del aire libre con seguridad, usando redes protectoras y camitas confortables.
</p> <img${addAttribute(imgJuguetes.src, "src")} alt="Gato persa con juguetes" class="rounded-lg shadow-md w-full object-cover my-6"> <h2>Compañía y rutinas diarias</h2> <p>
Dedica entre 15 y 20 minutos al día para jugar, acariciar y hablar con tu gato persa. Esta interacción fortalece vuestro vínculo y lo mantiene emocionalmente equilibrado. Mantener horarios estables para comida, juego y descanso le aporta seguridad.
</p> <p>
Si pasas mucho tiempo fuera, considera la compañía de otro gato compatible o juguetes automáticos como el <em>PetSafe Bolt</em>, que lanza luces láser de forma aleatoria para mantenerlo activo.
</p> <h2>Enriquecimiento sensorial</h2> <p>
Estimula sus sentidos con música suave, aromas como la hierba gatera o la valeriana, y diferentes texturas en mantas o cojines. Dejarle una ventana con vista al exterior y una repisa acolchada para observar aves y la calle también es una forma sencilla y efectiva de mantenerlo entretenido.
</p> </div> </div> <div class="w-full flex justify-end mt-8 text-[#FF6B6B] p-6"> <a href="/informacion" class="hover:underline mt-4 px-4 py-2 rounded bg-[#FF6B6B]/10 hover:bg-[#FF6B6B]/20 transition-colors">
← Volver
</a> </div> </article> </main> ` })}`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/pages/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido.astro", void 0);

const $$file = "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/pages/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido.astro";
const $$url = "/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ComoPuedoMantenerAMiGatoPersaActivoYEntretenido,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
