import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest.27fe5c29.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro.e7fdf2fa.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint@_@js.c9ce816a.mjs');
const _page1  = () => import('./chunks/index@_@astro.496c2743.mjs');
const _page2  = () => import('./chunks/index@_@astro.3cf8c64b.mjs');
const _page3  = () => import('./chunks/index@_@astro.9613b506.mjs');
const _page4  = () => import('./chunks/index@_@astro.86d53bde.mjs');
const _page5  = () => import('./chunks/index@_@astro.ee7c561b.mjs');
const _page6  = () => import('./chunks/index@_@astro.0d5e1917.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.4/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/settings/index.astro", _page2],["src/pages/create/index.astro", _page3],["src/pages/about/index.astro", _page4],["src/pages/auth/index.astro", _page5],["src/pages/[id]/index.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
