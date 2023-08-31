import { c as createAstro, b as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro.e7fdf2fa.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                           */
const endpoints = {
  mount: "https://api.kimu.pro/v1",
  register: "/auth/",
  me: "/me",
  pages: "/pages",
  background: "/backgrounds"
};

async function apiWrapper(url, method, body, token) {
  try {
    const response = await fetch(endpoints.mount + url, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Authorization": token ?? ""
      },
      credentials: "include"
    });
    return response.ok ? response : null;
  } catch (error) {
    return null;
  }
}

async function getPage(id) {
  const response = await apiWrapper(endpoints.pages + "/" + id, "GET", null);
  if (!response || !response.ok)
    return null;
  return await response.json();
}

async function getMe(token) {
  const response = await apiWrapper(endpoints.me, "GET", null, token);
  if (!response || !response.ok)
    return null;
  const userData = await response.json();
  return userData;
}

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  let userData = null;
  const accessToken = Astro2.cookies.get("access_token");
  const token = accessToken ? accessToken.value : void 0;
  if (token) {
    userData = await getMe(token);
  }
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4><head><!-- Hiiiiiiiiiiiiiiiiiiiii :3 --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Simple and open social media sharing platform."><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/ico" href="/favicon.ico"><!-- Social Metadata --><meta name="description" content="Kimsu social, the free and open social sharing website. Share all your socials in a single page :3"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="notk1mu"><meta property="og:title" content="Kimsu Social"><meta property="og:type" content="website"><meta property="og:url" content="https://social.kimu.pro/"><meta property="og:image" content="https://cdn.discordapp.com/attachments/1112890871109664848/1146827759021203527/kimsu_social_banner_og_image.png"><meta property="og:description" content="Kimsu social, the free and open social sharing website. Share all your socials in a single page :3"><title>${title}</title>${renderHead()}</head><body data-astro-cid-sckkx6r4><header class="flex a-center space-between gap-x blur-bg-m" data-astro-cid-sckkx6r4><a class="h-100 flex a-center gap-m" href="/" data-astro-cid-sckkx6r4><img class="h-100" src="/takeout.webp" data-astro-cid-sckkx6r4><h2 class="title" data-astro-cid-sckkx6r4>Kimsu</h2></a>${userData ? renderTemplate`<button class="user-button has-dropdown hoverme h-100 flex a-center gap-m padding-s radius-s" data-astro-cid-sckkx6r4><h3 data-astro-cid-sckkx6r4>${userData.username}</h3><img class="h-100 circle"${addAttribute(userData.avatar_uri, "src")} data-astro-cid-sckkx6r4><div class="dropdown column radius-s overflow-hidden blur-bg-m" data-astro-cid-sckkx6r4><a${addAttribute("/" + userData.id, "href")} data-astro-cid-sckkx6r4><h4 data-astro-cid-sckkx6r4>Page</h4></a><a href="/create" data-astro-cid-sckkx6r4><h4 data-astro-cid-sckkx6r4>Page writter</h4></a><a href="/settings" data-astro-cid-sckkx6r4><h4 data-astro-cid-sckkx6r4>Settings</h4></a></div></button>` : renderTemplate`<a href="https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify" data-astro-cid-sckkx6r4><button class="discord flex a-center hoverme default-border" data-astro-cid-sckkx6r4>Login</button></a>`}</header><div class="filler" data-astro-cid-sckkx6r4></div>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kimsu Social", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="grid" data-astro-cid-j7pv25f6><div class="presentation flex a-center gap-x radius-m padding-x light-border blur-bg-s" data-astro-cid-j7pv25f6><img class="logo" src="/takeout.webp" data-astro-cid-j7pv25f6><h1 class="title" data-astro-cid-j7pv25f6>Kimsu</h1></div><div class="info-window blur-bg-s" data-astro-cid-j7pv25f6><div class="info-bar flex a-center gap-m radius-top-m" data-astro-cid-j7pv25f6><div class="flex a-center gap-s" data-astro-cid-j7pv25f6><div class="roundy circle" data-astro-cid-j7pv25f6></div><div class="roundy circle" data-astro-cid-j7pv25f6></div><div class="roundy circle" data-astro-cid-j7pv25f6></div></div><p data-astro-cid-j7pv25f6>Kimsu-social.sh</p></div><div class="info-content flex column gap-xx padding-x light-border radius-bottom-m" data-astro-cid-j7pv25f6><div data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>What is Kimsu?</h2><br data-astro-cid-j7pv25f6><div class="separator-line-s margin-m" data-astro-cid-j7pv25f6></div><br data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>Kimsu brings you a fast, customizable and free way to share all your socials in a single page.</p><br data-astro-cid-j7pv25f6><p data-astro-cid-j7pv25f6>You can customize everything to your liking without paying anything.</p><br data-astro-cid-j7pv25f6><p class="blinker" data-astro-cid-j7pv25f6>Stop building and hosting your own pages to focus on other things, like playing league of legends</p></div><div class="flex gap-m" data-astro-cid-j7pv25f6><a href="/create" data-astro-cid-j7pv25f6><button class="hoverme default-border" data-astro-cid-j7pv25f6>Go!</button></a><a href="/about" data-astro-cid-j7pv25f6><button class="hoverme default-border" data-astro-cid-j7pv25f6>About</button></a></div></div></div><div class="card" data-astro-cid-j7pv25f6></div></main>` })}`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/index.astro", void 0);

const $$file$4 = "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

/** @returns {void} */
function noop() {}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

/** @returns {boolean} */
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

function null_to_empty(value) {
	return value == null ? '' : value;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

/* src/components/svelte-components/components/TitleBar.svelte generated by Svelte v4.2.0 */

const css$6 = {
	code: ".title-bar.svelte-97q8sy{white-space:nowrap;overflow-x:auto}.buttons.svelte-97q8sy{gap:var(--title-buttons-gap)}.button.svelte-97q8sy{height:var(--bar-button-size);width:var(--bar-button-size)}.std-button.svelte-97q8sy{border:1px solid var(--title-color);background-color:var(--text-color);border-radius:50%}.win32-bar.svelte-97q8sy{flex-direction:row-reverse;justify-content:space-between}.win32-button.svelte-97q8sy{border-radius:0}.macOS-button.svelte-97q8sy{border-bottom:var(--border2);border-left:var(--border1);border-radius:50%;border-right:var(--border2);border-top:var(--border1)}.macOS-button.svelte-97q8sy:nth-child(1n){background-color:#f68181}.macOS-button.svelte-97q8sy:nth-child(2n){background-color:#f6c381}.macOS-button.svelte-97q8sy:nth-child(3n){background-color:#94f681}.neo-bar.svelte-97q8sy{border-bottom:var(--border1)}.neo-button.svelte-97q8sy{background-color:var(--text-color);border-top:var(--border1);border-left:var(--border1);border-right:var(--border2);border-bottom:var(--border2)}.neo-button.svelte-97q8sy:nth-child(1n){border-radius:var(--border-radius)}.neo-button.svelte-97q8sy:nth-child(2n){border-radius:0 0 50% 50%}.neo-button.svelte-97q8sy:nth-child(3n){border-radius:.3rem}.cute-bar.svelte-97q8sy{flex-direction:row-reverse;justify-content:space-between}.cute-button.svelte-97q8sy{background-color:var(--text-color)}.cute-button.svelte-97q8sy:hover{animation:svelte-97q8sy-boioioing .4s cubic-bezier(0.47, 0, 0.745, 0.715)}@keyframes svelte-97q8sy-boioioing{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}",
	map: null
};

const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title } = $$props;
	let { type } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	$$result.css.add(css$6);
	return `<div class="${"title-bar flex " + escape(type, true) + "-bar" + " svelte-97q8sy"}"><div class="buttons flex a-center svelte-97q8sy"><button class="${"button " + escape(type, true) + "-button padding-0" + " svelte-97q8sy"}"></button> <button class="${"button " + escape(type, true) + "-button padding-0" + " svelte-97q8sy"}"></button> <button class="${"button " + escape(type, true) + "-button padding-0" + " svelte-97q8sy"}"></button></div> <p>${escape(title)}</p> </div>`;
});

/* src/components/AsyncText.svelte generated by Svelte v4.2.0 */

const AsyncText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { text } = $$props;
	let { loading } = $$props;
	let { erroed } = $$props;
	let { succsex } = $$props;
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
	if ($$props.erroed === void 0 && $$bindings.erroed && erroed !== void 0) $$bindings.erroed(erroed);
	if ($$props.succsex === void 0 && $$bindings.succsex && succsex !== void 0) $$bindings.succsex(succsex);

	return `${loading
	? `Loading...`
	: `${succsex
		? `Done!`
		: `${erroed ? `Error :c` : `${escape(text)}`}`}`}`;
});

/* src/components/Settings.svelte generated by Svelte v4.2.0 */

const css$5 = {
	code: ".window-content.svelte-1hflwx0.svelte-1hflwx0{backdrop-filter:blur(1px);background-color:#1414208c}.user-image-container.svelte-1hflwx0.svelte-1hflwx0{height:7rem;width:7rem;background-position:center;background-size:cover}.user-pfp.svelte-1hflwx0.svelte-1hflwx0{cursor:pointer;position:relative}.change-pfp.svelte-1hflwx0.svelte-1hflwx0{position:absolute;height:100%;width:100%;top:0;left:0;background-color:transparent}.upload-svg.svelte-1hflwx0.svelte-1hflwx0{display:grid;place-content:center;filter:blur(5px);opacity:0}.upload-svg.svelte-1hflwx0 svg.svelte-1hflwx0{height:4rem;width:4rem}.upload-pfp.svelte-1hflwx0.svelte-1hflwx0{all:unset;position:absolute;height:100%;width:100%;top:0;left:0;background-color:transparent;border:none;opacity:0;z-index:10}.user-pfp.svelte-1hflwx0:hover .change-pfp.svelte-1hflwx0{background-color:rgba(0, 0, 0, 0.4);box-shadow:inset 0 0 2rem black}.user-pfp.svelte-1hflwx0:hover .upload-svg.svelte-1hflwx0{filter:blur(0);opacity:1}@media screen and (max-width: 500px){.user-info.svelte-1hflwx0.svelte-1hflwx0{flex-direction:column}}",
	map: null
};

const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { user } = $$props;
	delete user.id;
	let [loading, erroed, succsex] = [false, false, false];
	let { token } = $$props;

	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
	if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
	$$result.css.add(css$5);

	return `<div class="window">${validate_component(TitleBar, "TitleBar").$$render(
		$$result,
		{
			type: "std",
			title: user.username + ".sh"
		},
		{},
		{}
	)} <div class="window-content gap-x padding-x svelte-1hflwx0"><div class="user-info flex a-center gap-x svelte-1hflwx0"><div class="user-pfp grid place-center svelte-1hflwx0"><div class="user-image-container circle svelte-1hflwx0" style="${"background-image: url(" + escape(user.avatar_uri, true) + ");"}"></div> <input class="upload-pfp svelte-1hflwx0" type="file"> <div class="change-pfp circle svelte-1hflwx0" data-svelte-h="svelte-1304fq2"><xml class="upload-svg h-100 w-100 svelte-1hflwx0" version="1.0" encoding="utf-8"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1hflwx0"><path d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 8V3M18 3L16 5M18 3L20 5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></xml></div></div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-h7fq4i">Username</h2> <input class="w-100" type="text" maxlength="31"${add_attribute("value", user.username, 0)}></div></div> <button class="${"hoverme to-right " + escape(loading ? "button-loading" : "", true) + " " + escape(erroed ? "button-error" : "", true) + " " + escape(succsex ? "button-success" : "", true)}">${validate_component(AsyncText, "AsyncText").$$render(
		$$result,
		{
			text: "Update!",
			erroed,
			loading,
			succsex
		},
		{},
		{}
	)}</button></div> </div>`;
});

const $$Astro$3 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const accessToken = Astro2.cookies.get("access_token");
  if (!accessToken)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  const token = accessToken.value;
  if (!token)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  const user = await getMe(token);
  if (!user)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kimsu | Settings", "data-astro-cid-376iicvc": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="grid place-center" data-astro-cid-376iicvc><div class="settings" data-astro-cid-376iicvc>${renderComponent($$result2, "Settings", Settings, { "user": user, "token": token, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/components/Settings.svelte", "client:component-export": "default", "data-astro-cid-376iicvc": true })}</div></main><img class="konata" src="/konata_eepy.png" data-astro-cid-376iicvc>` })}`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/settings/index.astro", void 0);

const $$file$3 = "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/settings/index.astro";
const $$url$3 = "/settings";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const statusMap = {
  twitter: { svg: "/socials/twitter.svg", url: "https://twitter.com/" },
  discord: { svg: "/socials/discord.svg", url: "https://discord.gg/" },
  twitch: { svg: "/socials/twitch.svg", url: "https://www.twitch.tv/" },
  youtube: { svg: "/socials/youtube.svg", url: "https://www.youtube.com/@" },
  github: { svg: "/socials/github.svg", url: "https://github.com/" },
  instagram: { svg: "/socials/instagram.svg", url: "https://www.instagram.com/" },
  linkedin: { svg: "/socials/linkedin.svg", url: "https://www.linkedin.com/in/" },
  website: { svg: "/socials/default.svg", url: "" }
};
const mappedStatusMap = statusMap;
const defaultSocialIcon = { svg: "/socials/default.svg", url: "" };

/* src/components/svelte-components/components/SocialCard.svelte generated by Svelte v4.2.0 */

const css$4 = {
	code: ".card.svelte-dcib4e{height:3rem;border-radius:var(--border-radius);padding:var(--padding)}img.svelte-dcib4e{filter:drop-shadow(0 0 .8px var(--text-color))}",
	map: null
};

const SocialCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css$4);
	return `<a${add_attribute("href", data.url, 0)} target="_blank"><button class="card button-w-bg w-100 flex a-center gap-m padding-m svelte-dcib4e"${add_attribute("style", `background-color: ${data.color }; transition: all .2s;`, 0)}><img class="svg-icon h-100 svelte-dcib4e"${add_attribute("src", mappedStatusMap[data.mode].svg || defaultSocialIcon.svg, 0)}${add_attribute("alt", data.mode || "custom" + " social card", 0)}> <h2 data-svelte-h="svelte-p3qaxe">|</h2> <h2>${escape(data.name)}</h2></button> </a>`;
});

/* src/components/svelte-components/components/SocialIcon.svelte generated by Svelte v4.2.0 */

const SocialIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { type } = $$props;
	if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
	return `<img${add_attribute("src", mappedStatusMap[type].svg || defaultSocialIcon.svg, 0)}${add_attribute("alt", type + " social icon", 0)}>`;
});

const socialOptions = [
	{
		type: "twitter",
		name: "Twitter"
	},
	{
		type: "twitch",
		name: "Twitch"
	},
	{
		type: "youtube",
		name: "Youtube"
	},
	{
		type: "discord",
		name: "Discord"
	},
	{
		type: "github",
		name: "Github"
	},
	{
		type: "instagram",
		name: "Instagram"
	},
	{
		type: "linkedin",
		name: "Linkedin"
	}
];

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const showSocialSelect = writable(false);

const showSocialSaving = writable("");

const userPageData = writable();

/* src/components/svelte-components/components/SelectSocial.svelte generated by Svelte v4.2.0 */

const css$3 = {
	code: "section.svelte-1o192bz{position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);z-index:200}.social-type.svelte-1o192bz{height:2.5rem;width:2.5rem;background-color:var(--select-color);border:none;padding:.35rem}.custom-url.svelte-1o192bz{background-color:var(--select-color);border:none}.filler.svelte-1o192bz{position:fixed;top:0;left:0;height:100dvh;width:100dvw;background-color:rgba(0, 0, 0, 0.7);z-index:150}",
	map: null
};

const SelectSocial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$3);

	return `<section class="flex column gap-m svelte-1o192bz"><h1 data-svelte-h="svelte-16bu0ub">Add a social card</h1> <div class="flex column a-center gap-m"><div class="flex wrap gap-s">${each(socialOptions, option => {
		return `<button class="social-type radius-s svelte-1o192bz">${validate_component(SocialIcon, "SocialIcon").$$render($$result, { type: option.type }, {}, {})} </button>`;
	})}</div> <h2 data-svelte-h="svelte-1lmkkh5">--- or ---</h2> <button class="custom-url w-100 svelte-1o192bz" data-svelte-h="svelte-wu9u08"><h3>Custom URL</h3></button></div></section>   <div role="dialog" class="filler blur-bg-s svelte-1o192bz"></div>`;
});

/* src/components/svelte-components/components/SaveSocial.svelte generated by Svelte v4.2.0 */

const css$2 = {
	code: "section.svelte-1d2onfc{position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);z-index:200}h1.svelte-1d2onfc:first-letter{text-transform:uppercase}.filler.svelte-1d2onfc{position:fixed;top:0;left:0;height:100dvh;width:100dvw;background-color:rgba(0, 0, 0, 0.7);z-index:150}",
	map: null
};

const SaveSocial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $showSocialSaving, $$unsubscribe_showSocialSaving;
	let $$unsubscribe_userPageData;
	$$unsubscribe_showSocialSaving = subscribe(showSocialSaving, value => $showSocialSaving = value);
	$$unsubscribe_userPageData = subscribe(userPageData, value => value);
	const socialData = mappedStatusMap[$showSocialSaving] || defaultSocialIcon;

	let socialEntry = {
		mode: $showSocialSaving,
		name: "",
		url: "",
		color: "#000000",
		hover: "#000000"
	};

	$$result.css.add(css$2);
	$$unsubscribe_showSocialSaving();
	$$unsubscribe_userPageData();

	return `<section class="flex column gap-m svelte-1d2onfc"><h1 class="svelte-1d2onfc">${escape(socialData
	? `${$showSocialSaving} link`
	: `Custom website`)}</h1> <div class="flex column gap-m"><input maxlength="20" placeholder="link name"${add_attribute("value", socialEntry.name, 0)}> <input maxlength="255"${add_attribute(
		"placeholder",
		socialData
		? `${$showSocialSaving} username`
		: `website url`,
		0
	)}${add_attribute("value", socialEntry.url, 0)}></div> <div class="flex gap-x"><input type="color"${add_attribute("value", socialEntry.color, 0)}> <input type="color"${add_attribute("value", socialEntry.hover, 0)}></div> <button data-svelte-h="svelte-1fvykzo">Save!</button></section>   <div role="dialog" class="filler blur-bg-s svelte-1d2onfc"></div>`;
});

/* src/components/CreatePage.svelte generated by Svelte v4.2.0 */

const css$1 = {
	code: "section.svelte-14xf7hk.svelte-14xf7hk{width:70%;z-index:50}.user-info.svelte-14xf7hk.svelte-14xf7hk{height:4rem}.user-info.svelte-14xf7hk img.svelte-14xf7hk{height:100%}.remove-social.svelte-14xf7hk.svelte-14xf7hk{opacity:0;position:absolute;height:100%;width:0;bottom:0;right:0%;background-color:#f68181;border-left:1px solid var(--text-color);border-radius:0 var(--border-radius) var(--border-radius) 0;padding:0}.social-object.svelte-14xf7hk:hover .remove-social.svelte-14xf7hk{opacity:1;width:3rem}.background.svelte-14xf7hk.svelte-14xf7hk{position:fixed;height:100vh;width:100vw;top:0;left:0;background-position:center;background-size:cover;z-index:40}@media screen and (max-width: 700px){section.svelte-14xf7hk.svelte-14xf7hk{width:100%}.remove-social.svelte-14xf7hk.svelte-14xf7hk{opacity:1;width:3rem}}",
	map: null
};

const CreatePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $userPageData, $$unsubscribe_userPageData;
	let $showSocialSelect, $$unsubscribe_showSocialSelect;
	let $showSocialSaving, $$unsubscribe_showSocialSaving;
	$$unsubscribe_userPageData = subscribe(userPageData, value => $userPageData = value);
	$$unsubscribe_showSocialSelect = subscribe(showSocialSelect, value => $showSocialSelect = value);
	$$unsubscribe_showSocialSaving = subscribe(showSocialSaving, value => $showSocialSaving = value);
	let [loading, erroed, succsex] = [false, false, false];
	let { pageData } = $$props;
	userPageData.set(pageData);
	let { user } = $$props;
	let { token } = $$props;

	if ($$props.pageData === void 0 && $$bindings.pageData && pageData !== void 0) $$bindings.pageData(pageData);
	if ($$props.user === void 0 && $$bindings.user && user !== void 0) $$bindings.user(user);
	if ($$props.token === void 0 && $$bindings.token && token !== void 0) $$bindings.token(token);
	$$result.css.add(css$1);
	$$unsubscribe_userPageData();
	$$unsubscribe_showSocialSelect();
	$$unsubscribe_showSocialSaving();

	return `<section class="${"h-100 radius-m " + escape($userPageData.page.theme, true) + " svelte-14xf7hk"}" style="${"--accent-color: " + escape($userPageData.page.accent_color, true) + "; --bg-color-dark: " + escape($userPageData.page.bg_color, true) + "; --title-color: " + escape($userPageData.page.title_color, true) + "; --text-color: " + escape($userPageData.page.text_color, true) + ";"}"><div class="window h-100">${validate_component(TitleBar, "TitleBar").$$render(
		$$result,
		{
			type: $userPageData.page.theme,
			title: "Kimsu page writer"
		},
		{},
		{}
	)} <div class="window-content overflow-y-scroll gap-x padding-x"><div class="user-info flex a-center gap-x svelte-14xf7hk"><img class="circle svelte-14xf7hk"${add_attribute("src", user.avatar_uri, 0)} alt="your profile"> <h1>${escape(user.username)}</h1></div> <div class="separator-line-s"></div> <div class="flex column gap-x"><div class="flex wrap gap-xx"><div class="flex column gap-m"><h2 data-svelte-h="svelte-1f06jx9">Theme</h2> <select class="hoverme"><option value="std" data-svelte-h="svelte-2xnxb4">std</option><option value="win32" data-svelte-h="svelte-1uipqcw">win32</option><option value="macOS" data-svelte-h="svelte-1pk801o">macOS</option><option value="neo" data-svelte-h="svelte-l7tk26">neo</option><option value="cute" data-svelte-h="svelte-1gg6rwy">cute</option></select></div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-jrwi3i">Colors</h2> <div class="flex gap-x"><input class="hoverme" type="color"${add_attribute("value", $userPageData.page.accent_color, 0)}> <input class="hoverme" type="color"${add_attribute("value", $userPageData.page.bg_color, 0)}></div></div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-tsl3ch">Text colors</h2> <div class="flex gap-x"><input class="hoverme" type="color"${add_attribute("value", $userPageData.page.title_color, 0)}> <input class="hoverme" type="color"${add_attribute("value", $userPageData.page.text_color, 0)}></div></div></div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-18pwt3w">About you</h2> <textarea placeholder="Tell others about yourself" maxlength="190">${escape($userPageData.page.about || "")}</textarea></div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-oxgqqu">Socials</h2> ${each($userPageData.page.socials, (social, i) => {
		return `<div class="social-object overflow-hidden relative svelte-14xf7hk">${validate_component(SocialCard, "SocialCard").$$render($$result, { data: social }, {}, {})} <button class="remove-social svelte-14xf7hk" data-svelte-h="svelte-10yjhfm">X</button> </div>`;
	})} ${$userPageData.page.socials.length < 10
	? `<button class="hoverme" data-svelte-h="svelte-qs899p">Add Social +</button>`
	: ``}</div> <div class="flex column gap-m"><h2 data-svelte-h="svelte-1f4rkpr">Background image</h2> <input accept="image/png, image/jpeg, image/webp" alt="Upload" class="hoverme" id="files" type="file"> <p class="tiny" data-svelte-h="svelte-1qp562g">max is 10mb (png and jpeg)</p></div></div> <button class="${escape(loading ? "button-loading" : "", true) + " " + escape(erroed ? "button-error" : "", true) + " " + escape(succsex ? "button-success" : "", true)}">${validate_component(AsyncText, "AsyncText").$$render(
		$$result,
		{
			text: "Save Page -w-",
			erroed,
			loading,
			succsex
		},
		{},
		{}
	)}</button></div></div></section> <div class="background svelte-14xf7hk" style="${"background-image: url(" + escape($userPageData.background.background, true) + ");"}"></div> ${$showSocialSelect
	? `${validate_component(SelectSocial, "AddSocial").$$render($$result, {}, {}, {})}`
	: ``} ${$showSocialSaving
	? `${validate_component(SaveSocial, "SaveSocial").$$render($$result, {}, {}, {})}`
	: ``}`;
});

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const accessToken = Astro2.cookies.get("access_token");
  if (!accessToken)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  const token = accessToken.value;
  if (!token)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  const self = await getMe(token);
  if (!self)
    return Astro2.redirect("https://discord.com/oauth2/authorize?client_id=1144209801409212507&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify", 308);
  let userPage = await getPage(self.id);
  if (!userPage)
    userPage = {
      page: {
        theme: "win32",
        bg_color: "#241F31",
        accent_color: "#8193f6",
        title_color: "#ffffff",
        text_color: "#F6F5F4",
        about: "",
        socials: []
      },
      user: self,
      background: {
        background: ""
      }
    };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kimsu | Create page", "data-astro-cid-ac7zqq4b": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex column a-center gap-xx" data-astro-cid-ac7zqq4b>${renderComponent($$result2, "CreatePage", CreatePage, { "user": self, "pageData": userPage, "token": token, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/components/CreatePage.svelte", "client:component-export": "default", "data-astro-cid-ac7zqq4b": true })}</main>` })}`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/create/index.astro", void 0);

const $$file$2 = "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/create/index.astro";
const $$url$2 = "/create";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kimsu Auth", "data-astro-cid-ishsxver": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="grid" data-astro-cid-ishsxver><h1 id="status" data-astro-cid-ishsxver>Logging in...</h1></main>` })}`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/auth/index.astro", void 0);

const $$file$1 = "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/auth/index.astro";
const $$url$1 = "/auth";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

/* src/components/Page.svelte generated by Svelte v4.2.0 */

const css = {
	code: "section.svelte-qt4p62.svelte-qt4p62{height:fit-content;max-height:100%;width:50%;z-index:50}.window.svelte-qt4p62.svelte-qt4p62{height:fit-content;max-height:100%}.user-info.svelte-qt4p62.svelte-qt4p62{height:4rem}.user-info.svelte-qt4p62 img.svelte-qt4p62{height:100%}.user-about.svelte-qt4p62.svelte-qt4p62{max-height:7rem;white-space:break-spaces}.background.svelte-qt4p62.svelte-qt4p62{position:fixed;height:100vh;width:100vw;top:0;left:0;background-position:center;background-size:cover;z-index:40}@media screen and (max-width: 900px){section.svelte-qt4p62.svelte-qt4p62{width:70%}}@media screen and (max-width: 700px){section.svelte-qt4p62.svelte-qt4p62{width:100%}}",
	map: null
};

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const { background, page, user } = data;
	console.log(page);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);

	return `<section class="${escape(null_to_empty(page.theme), true) + " svelte-qt4p62"}" style="${"--accent-color: " + escape(page.accent_color, true) + "; --bg-color-dark: " + escape(page.bg_color, true) + "; --title-color: " + escape(page.title_color, true) + "; --text-color: " + escape(page.text_color, true) + ";"}"><div class="window svelte-qt4p62">${validate_component(TitleBar, "TitleBar").$$render($$result, { type: page.theme, title: user.username }, {}, {})} <div class="window-content overflow-y-scroll gap-x padding-x"><div class="user-info flex a-center gap-x svelte-qt4p62"><img class="circle svelte-qt4p62"${add_attribute("src", user.avatar_uri, 0)} alt="your profile"> <h1>${escape(user.username)}</h1></div> <div class="separator-line-s"></div> ${page.about
	? `<div class="flex column gap-m"><h2 data-svelte-h="svelte-1m5bb3f">About me</h2> <p class="user-about overflow-y-scroll svelte-qt4p62">${escape(page.about)}</p></div> <div class="separator-line-s"></div>`
	: ``} <div class="flex column gap-x"><div class="flex column gap-m"><h2 data-svelte-h="svelte-oxgqqu">Socials</h2> ${each(page.socials, social => {
		return `${validate_component(SocialCard, "SocialCard").$$render($$result, { data: social }, {}, {})}`;
	})}</div></div></div></div></section> <div class="background svelte-qt4p62" style="${"background-image: url(" + escape(background.background, true) + ");"}"></div>`;
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.params;
  if (!id)
    return Astro2.redirect("/", 308);
  const pageData = await getPage(id);
  const accessToken = Astro2.cookies.get("access_token");
  if (accessToken) {
    const token = accessToken.value;
    if (!pageData && token)
      return Astro2.redirect("/create", 308);
  }
  if (!pageData)
    return Astro2.redirect("/", 308);
  return renderTemplate`${maybeRenderHead()}<main class="flex column a-center gap-xx" data-astro-cid-tssbdkv6>${renderComponent($$result, "Page", Page, { "data": pageData, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/components/Page.svelte", "client:component-export": "default", "data-astro-cid-tssbdkv6": true })}</main>`;
}, "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/[id]/index.astro", void 0);

const $$file = "/home/kimu/Documents/Dev/WebDev/Astro/kimsu/test/src/pages/[id]/index.astro";
const $$url = "/[id]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, TitleBar as T, index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
