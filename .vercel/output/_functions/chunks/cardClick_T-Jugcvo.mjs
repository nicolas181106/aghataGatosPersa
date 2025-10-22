import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardClick = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardClick;
  const { idClick, idCerrar, src, alt, nombre, edad } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(idClick, "id")} class="bg-white/90
		p-6 rounded-lg shadow-2xl
		max-w-[325px] md:max-w-[600px]
		mx-auto
		top-35 sm:top-70 bottom-0 right-0 left-0 z-100
		h-[480px] md:h-[400px] w-full items-center justify-center
		fixed flex flex-col md:flex-row opacity-0 scale-90
		pointer-events-none transition-all duration-300 ease-in-out
		gap-5 md:gap-12"> <button${addAttribute(idCerrar, "id")} aria-label="Cerrar" class="absolute top-4 right-4 z-50
			w-10 h-10 flex items-center justify-center
			bg-[#FF6B6B] hover:bg-red-500 transition
			text-white text-xl font-bold
			rounded-full shadow-lg
			cursor-pointer">
✕
</button> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" class="h-70 w-70 sm:h-75 sm:w-75
			object-cover bg-[#FF6B6B]
			rounded-2xl p-2"> <div class="flex flex-col text-left text-lg lg:text-xl"> <p><strong>${nombre}</strong></p> <p><strong>Edad:</strong> ${edad} años</p> </div> </div>`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/components/cardClick.astro", void 0);

export { $$CardClick as $ };
