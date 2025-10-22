import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DRKKe9Ez.mjs';
import { manifest } from './manifest_kH5ggSRM.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/form.astro.mjs');
const _page2 = () => import('./pages/camadas-anteriores.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/footer/aviso-legal.astro.mjs');
const _page5 = () => import('./pages/footer/politica-cookies.astro.mjs');
const _page6 = () => import('./pages/footer/politica-privacidad.astro.mjs');
const _page7 = () => import('./pages/gatos/_slugchinchilla_.astro.mjs');
const _page8 = () => import('./pages/gatos/_slugeuropeo_.astro.mjs');
const _page9 = () => import('./pages/gatos-disponibles.astro.mjs');
const _page10 = () => import('./pages/informacion/como-cuidar-el-pelaje-de-un-gato-persa.astro.mjs');
const _page11 = () => import('./pages/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido.astro.mjs');
const _page12 = () => import('./pages/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario.astro.mjs');
const _page13 = () => import('./pages/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa.astro.mjs');
const _page14 = () => import('./pages/informacion.astro.mjs');
const _page15 = () => import('./pages/persa-chinchilla.astro.mjs');
const _page16 = () => import('./pages/persa-europeo.astro.mjs');
const _page17 = () => import('./pages/persa-himalayo.astro.mjs');
const _page18 = () => import('./pages/productos/comida.astro.mjs');
const _page19 = () => import('./pages/productos/juguetes.astro.mjs');
const _page20 = () => import('./pages/productos/rascadores.astro.mjs');
const _page21 = () => import('./pages/productos.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/form.ts", _page1],
    ["src/pages/camadas-anteriores.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/footer/aviso-legal.astro", _page4],
    ["src/pages/footer/politica-cookies.astro", _page5],
    ["src/pages/footer/politica-privacidad.astro", _page6],
    ["src/pages/gatos/[slugChinchilla].astro", _page7],
    ["src/pages/gatos/[slugEuropeo].astro", _page8],
    ["src/pages/gatos-disponibles.astro", _page9],
    ["src/pages/informacion/como-cuidar-el-pelaje-de-un-gato-persa.astro", _page10],
    ["src/pages/informacion/como-puedo-mantener-a-mi-gato-persa-activo-y-entretenido.astro", _page11],
    ["src/pages/informacion/con-que-frecuencia-debo-llevar-a-mi-gato-persa-al-veterinario.astro", _page12],
    ["src/pages/informacion/que-tipo-de-alimentacion-es-mejor-para-un-gato-persa.astro", _page13],
    ["src/pages/informacion.astro", _page14],
    ["src/pages/persa-chinchilla.astro", _page15],
    ["src/pages/persa-europeo.astro", _page16],
    ["src/pages/persa-himalayo.astro", _page17],
    ["src/pages/productos/comida.astro", _page18],
    ["src/pages/productos/juguetes.astro", _page19],
    ["src/pages/productos/rascadores.astro", _page20],
    ["src/pages/productos.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2da042a2-92bb-4afd-9992-938057226701",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
