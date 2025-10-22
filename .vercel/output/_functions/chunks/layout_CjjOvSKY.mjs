import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, k as renderComponent, n as renderSlot, o as renderHead, h as addAttribute } from './astro/server_B9RIwROo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer sm:footer-horizontal bg-[#FF6B6B] text-neutral-content p-10 sm:justify-items-center"> <nav> <h6 class="footer-title">Links</h6> <a href="/gatos-disponibles" class="link link-hover">Gatos</a> <a href="/informacion" class="link link-hover">Información</a> <a href="/productos" class="link link-hover">Productos</a> <a href="/contacto" class="link link-hover">Contacto</a> </nav> <nav> <h6 class="footer-title">Legal</h6> <a href="/footer/aviso-legal" class="link link-hover">Aviso Legal</a> <a href="/footer/politica-privacidad" class="link link-hover">Política de Privacidad</a> <a href="/footer/politica-cookies" class="link link-hover">Política de Cookies</a> </nav> </footer> <footer class="footer bg-[#e65e5e] px-10 py-4"> <aside class="grid-flow-col items-center"> <p>© 2025 Ágatha Gatos Persa. Todos los derechos reservados.</p> </aside> </footer>`;
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/components/footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<nav class="fixed top-0 w-full z-50 bg-[#FFE2E2]/80 shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center max-md:justify-between h-20 items-center"> <a href="/" class="text-lg font-bold text-[#2E2E2E] sm:hidden">\xC1gatha Gatos Persas</a> <div class="sm:hidden"> <button id="menu-btn" class="text-[#2E2E2E] focus:outline-none"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <ul class="hidden sm:flex items-center justify-center gap-5 sm:gap-10 md:gap-20 text-[18px] md:text-[20px] text-[#2E2E2E] font-semibold"> <li><a class="hover:text-[#FF4C4C]" href="/">Inicio</a></li> <li class="group relative"> <a href="/gatos-disponibles" class="hover:text-[#FF6B6B] flex items-center gap-1">Gatos</a> <div class="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-lg rounded-md min-w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 origin-top scale-y-0 group-hover:scale-y-100 z-10"> <ul class="py-2"> <li><a href="/persa-europeo" class="block px-4 py-2 hover:bg-[#FFE2E2]">Persa Europeo</a></li> <li><a href="/persa-chinchilla" class="block px-4 py-2 hover:bg-[#FFE2E2]">Persa Chinchilla</a></li> <li><a href="/persa-himalayo" class="block px-4 py-2 hover:bg-[#FFE2E2]">Persa Himalayo</a></li> </ul> </div> </li> <li class="group relative"> <a href="/informacion" class="hover:text-[#FF6B6B] flex items-center gap-1">Informaci\xF3n</a> <div class="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-lg rounded-md min-w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 origin-top scale-y-0 group-hover:scale-y-100 z-10"> <ul class="py-2"> <li><a href="/informacion/como-cuidar-el-pelaje-de-un-gato-persa" class="block px-4 py-2 hover:bg-[#FFE2E2]">Cuidar pelaje</a></li> <li><a href="/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido" class="block px-4 py-2 hover:bg-[#FFE2E2]">Mantener activo</a></li> <li><a href="/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario" class="block px-4 py-2 hover:bg-[#FFE2E2]">Visitas veterinario</a></li> <li><a href="/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa" class="block px-4 py-2 hover:bg-[#FFE2E2]">Alimentaci\xF3n</a></li> </ul> </div> </li> <li class="group relative"> <a href="/productos" class="hover:text-[#FF6B6B] flex items-center gap-1">Productos</a> <div class="absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-lg rounded-md min-w-max opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 origin-top scale-y-0 group-hover:scale-y-100 z-10"> <ul class="py-2"> <li><a href="/productos/rascadores" class="block px-4 py-2 hover:bg-[#FFE2E2]">Rascadores</a></li> <li><a href="/productos/juguetes" class="block px-4 py-2 hover:bg-[#FFE2E2]">Juguetes</a></li> <li><a href="/productos/comida" class="block px-4 py-2 hover:bg-[#FFE2E2]">Comida</a></li> <li><a href="/productos/camas" class="block px-4 py-2 hover:bg-[#FFE2E2]">Camas</a></li> <li><a href="/productos/areneros" class="block px-4 py-2 hover:bg-[#FFE2E2]">Areneros</a></li> </ul> </div> </li> <li><a class="hover:text-[#FF4C4C]" href="/contacto">Contacto</a></li> </ul> </div> <ul id="mobile-menu" class="hidden flex-col sm:hidden bg-white w-full text-[#2E2E2E] font-semibold"> <li><a class="block px-4 py-3 hover:bg-[#FFE2E2]" href="/">Inicio</a></li> <li><a class="block px-4 py-3 hover:bg-[#FFE2E2]" href="/gatos-disponibles">Gatos</a></li> <li><a class="block px-4 py-3 hover:bg-[#FFE2E2]" href="/informacion">Informaci\xF3n</a></li> <li><a class="block px-4 py-3 hover:bg-[#FFE2E2]" href="/productos">Productos</a></li> <li><a class="block px-4 py-3 hover:bg-[#FFE2E2]" href="/contacto">Contacto</a></li> </ul> </nav> <script>
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/components/header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="cookie-banner" class="fixed bottom-5 left-5 right-5 bg-gray-900 text-white p-5 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4 hidden z-50"> <p class="text-sm md:text-base">
Utilizamos cookies para mejorar tu experiencia y mostrar anuncios relevantes.
<a href="/footer/politica-cookies" class="text-green-400 underline hover:text-green-300">M\xE1s informaci\xF3n</a>.
</p> <button id="btn" class="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
Aceptar
</button> </div> <script>
    if (!localStorage.getItem('cookies-aceptadas')) {
      document.getElementById('cookie-banner').classList.remove('hidden');
    }

    const button = document.getElementById('btn');

    button.addEventListener('click', () => {
        localStorage.setItem('cookies-aceptadas', 'true');
        document.getElementById('cookie-banner').classList.add('hidden');
    });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/components/cookies.astro", void 0);

const logo2 = new Proxy({"src":"/_astro/logoAnimated.DFOKPDK2.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/logoAnimated.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es-ES" data-astro-cid-mmggtga4> <head><link rel="icon" type="image/svg+xml"', '><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="keywords" content="gatos, persa, \xE1gatha, criadero, gatos persa, gatos en adopci\xF3n, gatos en venta, gatos en familia"><meta name="author" content="Nicol\xE1s Adri\xE1n Bernal Berm\xFAdez"><meta name="google-site-verification" content="s0VQNm2tjEeD8Go7xJi3d3VYa0AAYv1QnVlOMysa2iY"><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url" content="https://agathagatospersa.netlify.app/"><meta property="og:image" content="https://agathagatospersa.netlify.app/assets/img/banner.png"><meta property="og:image:alt" content="Banner de \xC1gatha Gatos Persa"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@AgathaGatosPersa"><meta name="twitter:creator" content="@AgathaGatosPersa"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image" content="/assets/img/banner.png"><meta name="twitter:image:alt" content="Banner de \xC1gatha Gatos Persa"><meta name="google-adsense-account" content="ca-pub-1412633306454408"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1412633306454408" crossorigin="anonymous"><\/script><script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"><\/script><title>', "</title>", "</head> <body data-astro-cid-mmggtga4> ", " ", " ", " ", " ", " </body></html>"])), addAttribute(logo2.src, "href"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), renderComponent($$result, "amp-auto-ads", "amp-auto-ads", { "type": "adsense", "data-ad-client": "ca-pub-1412633306454408", "data-astro-cid-mmggtga4": true }), renderComponent($$result, "Header", $$Header, { "data-astro-cid-mmggtga4": true }), renderComponent($$result, "Cookies", $$Cookies, { "data-astro-cid-mmggtga4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-mmggtga4": true }));
}, "C:/Users/Nicol\xE1s/Desktop/TODO/SOFTWARES/PROGRAMACI\xD3N/VISUAL STUDIO CODE/Mis p\xE1ginas web/agathaGatos/src/layouts/layout.astro", void 0);

export { $$Layout as $, logo2 as l };
