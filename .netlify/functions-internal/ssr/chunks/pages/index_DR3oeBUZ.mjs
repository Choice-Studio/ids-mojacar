/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, m as maybeRenderHead } from '../astro_UmyEbSK9.mjs';
import 'kleur/colors';
import 'html-escaper';
import { useSSRContext, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const pageData = [
	{
		pageName: "home",
		pageHREF: "/",
		subLinks: [
			{
				name: "About",
				href: "/#about"
			},
			{
				name: "Services",
				href: "/#services"
			},
			{
				name: "Featured",
				href: "/#featured"
			}
		]
	},
	{
		pageName: "Bathrooms",
		pageHREF: "/bathrooms",
		subLinks: [
		]
	},
	{
		pageName: "Kitchens",
		pageHREF: "/kitchens",
		subLinks: [
		]
	},
	{
		pageName: "Home Spaces",
		pageHREF: "/home-spaces",
		subLinks: [
		]
	},
	{
		pageName: "contact",
		pageHREF: "/#contact",
		subLinks: [
		]
	}
];

const _imports_0 = "/ids-logo--blue.svg";

const _imports_1 = "/burger-menu--blue.svg";

const _imports_2 = "/X.svg";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = {
  name: "mobileHeader",
  // components: {
  // },
  props: {
    pageName: String
  },
  data() {
    return {
      links: pageData,
      isNavHidden: {
        type: Boolean,
        default: true
      }
    };
  },
  methods: {
    toggleNav() {
      this.isNavHidden = !this.isNavHidden;
    }
  }
  // created () {
  // }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 flex lg:hidden justify-between items-center w-full mx-auto z-10 wrapper py-2" }, _attrs))}><div class="w-12 h-12 grid place-items-center"><a href="/"><img${ssrRenderAttr("src", _imports_0)} alt="IDS logo" class="header__logo"></a></div><img${ssrRenderAttr("src", _imports_1)} alt="menu icon" class="w-8 header__burger-menu"><div class="${ssrRenderClass([[$data.isNavHidden ? "nav--hidden" : "nav-visible"], "origin-top absolute w-full bg-primary top-0 left-0 h-screen px-4 py-12 text-center flex flex-col justify-center items-center gap-16"])}"><img${ssrRenderAttr("src", _imports_2)} alt="close menu icon" class="w-6 header__burger-menu absolute top-4 right-4"><!--[-->`);
  ssrRenderList($data.links, (link) => {
    _push(`<div class="border-t-white border-solid border-t-1"><a${ssrRenderAttr("href", link.pageHREF)} class="${ssrRenderClass([[link.pageName == $props.pageName ? "dot-highlight" : ""], "header-text text-white text-2xl"])}">${ssrInterpolate(link.pageName)}</a></div>`);
  });
  _push(`<!--]--></div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mobileHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const mobileHeader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = {
  name: "Header",
  components: { mobileHeader },
  props: {
    pageName: {
      type: String
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mobileHeader = resolveComponent("mobileHeader");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_mobileHeader, { pageName: $props.pageName }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "client:visible": true, "pageName": page, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Header.vue", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Layout.astro", void 0);

const _sfc_main = {
  name: "mobileHeader",
  // components: {
  // },
  props: {
    title: String,
    body: String,
    buttonText: String,
    buttonHref: String,
    buttonColor: String,
    heroImage: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "hero w-full text-center flex flex-col justify-center items-center h-200 relative",
    style: `background-image: url(/project-images/` + $props.heroImage + `.jpeg?url);`
  }, _attrs))}><div class="dark-overlay absolute top-0 bottom-0 right-0 left-0"></div><div class="wrapper w-full flex flex-col justify-center items-center gap-12"><h1 class="">${ssrInterpolate($props.title)}</h1><p>${ssrInterpolate($props.body)}</p><a href="#about-ids"><button>Learn More</button></a></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let currentPage = pageData[0].pageName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "page": currentPage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:visible": true, "title": "Interior Design Solutions", "body": "A bespoke interior design agency dedicated to transforming bold ideas into unique spaces.", "buttonText": "Learn More", "buttonHref": "#about-ids", "buttonColor": "primary", "heroImage": "40", "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/Hero.vue", "client:component-export": "default" })} </main> ` })} `;
}, "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/pages/index.astro", void 0);

const $$file = "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
