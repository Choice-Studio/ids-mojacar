/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_BfQSMgDm.mjs';
import 'kleur/colors';
import 'html-escaper';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const pageData = [
	{
		pageName: "Home",
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
		pageName: "Contact",
		pageHREF: "/#contact",
		subLinks: [
		]
	}
];

const _imports_0 = "/ids-logo.svg";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = {
  name: "Footer",
  props: {},
  data() {
    return {
      links: pageData,
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary w-full text-white py-10" }, _attrs))}><div class="wrapper"><div class="grid grid-cols-2 gap-12"><div class=""><div><p>Tel</p><div class="h-px w-20 bg-white my-3"></div><p>+44 780 058 090</p></div><div class="my-8"><p>Email</p><div class="h-px w-20 bg-white my-3"></div><p>example@gmail.com</p></div></div><ul class="main-list"><!--[-->`);
  ssrRenderList($data.links, (link) => {
    _push(`<li><a${ssrRenderAttr("href", link.pageHREF)}>${ssrInterpolate(link.pageName)}</a>`);
    if (link.subLinks) {
      _push(`<ul class=""><!--[-->`);
      ssrRenderList(link.subLinks, (sublink) => {
        _push(`<li><a${ssrRenderAttr("href", sublink.href)}>${ssrInterpolate(sublink.name)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div class="grid grid-cols-2 mt-20"><div class="grid place-items-center col-span-1"><img${ssrRenderAttr("src", _imports_0)} alt="IDS Logo" class="w-40 opacity-50"></div><div class="flex items-end justify-end col-span-1"><p class="text-right"> \xA9 ${ssrInterpolate($data.currentYear)} Interior Design Solutions, All rights reserved </p></div></div></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, page } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <!-- <MobileHeader
        client:visible
        pageName={page}
      /> --> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Footer.vue", "client:component-export": "default" })}  </body></html>`;
}, "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Layout.astro", void 0);

const _sfc_main$2 = {
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "hero w-full text-center flex flex-col justify-center items-center h-200 relative",
    style: `background-image: url(/project-images/` + $props.heroImage + `.jpeg?url);`
  }, _attrs))}><div class="dark-overlay absolute top-0 bottom-0 right-0 left-0"></div><div class="wrapper w-full flex flex-col justify-center items-center gap-12"><h1 class="">${ssrInterpolate($props.title)}</h1><p>${ssrInterpolate($props.body)}</p><a href="#about-ids"><button>Learn More</button></a></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$1 = {
  name: "ServiceCard",
  props: {
    imageHref: String,
    imageAlt: String,
    title: String,
    body: String,
    buttonText: String,
    buttonHref: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper grid grid-cols-1 gap-8 text-center" }, _attrs))}><div class=""><img${ssrRenderAttr("src", "/project-images/" + $props.imageHref + ".jpeg?url")} alt="A picture of a house front porch. Walls are painted blue and white." class="aspect-square w-full"></div><div class="grid grid-cols-1 gap-8 place-items-center"><h3 class="text-4xl">${ssrInterpolate($props.title)}</h3><p>${$props.body}</p><a${ssrRenderAttr("href", $props.buttonHref)}><button>${ssrInterpolate($props.buttonText)}</button></a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const projectData = [
	{
		id: 0,
		projectTitle: "Pueblo Casita Renovation",
		projectType: "kitchen",
		imageFile: "84.jpeg",
		projectHref: "pueblo-casita-renovation"
	},
	{
		id: 1,
		projectTitle: "Cheltenham Hotel Renovation",
		projectType: "home-space",
		imageFile: "36.jpeg",
		projectHref: "cheltenham-hotel-renovation"
	},
	{
		id: 2,
		projectTitle: "Kitchen Hong Kong",
		projectType: "kitchen",
		imageFile: "41.jpeg",
		projectHref: "kitchen-hong-kong"
	},
	{
		id: 3,
		projectTitle: "Villa Menorca",
		projectType: "bathroom",
		imageFile: "97.jpeg",
		projectHref: "villa-menorca"
	}
];

const _sfc_main = {
  name: "ProjectThumbnail",
  props: {
    projectID: Number
  },
  data() {
    return {
      projects: projectData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex flex-col items-start justify-end h-96 w-full relative text-white text-left p-4 project-thumbnail",
    style: `background-image: url(/project-images/` + $data.projects[$props.projectID].imageFile + `?url);`
  }, _attrs))}><div class="dark-overlay absolute top-0 bottom-0 right-0 left-0"></div><h3 class="text-2xl">${ssrInterpolate($data.projects[$props.projectID].projectTitle)}</h3><p class="text-lg my-3">${[
    $data.projects[$props.projectID].projectType == "kitchen" ? "Kitchen Renovation" : $data.projects[$props.projectID].projectType == "bathroom" ? "Bathroom Renovation" : $data.projects[$props.projectID].projectType == "home-space" ? "Home Space Renovation" : ""
  ]}</p><div class="flex items-center justify-center flex-col gap-1"><a${ssrRenderAttr("href", "/projects/" + $data.projects[$props.projectID].projectHref)} class="uppercase text-sm"> View Project </a><div class="h-px w-28 bg-white"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ProjectThumbnail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectThumbnail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  let currentPage = pageData[0].pageName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "page": currentPage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mb-64"> ${renderComponent($$result2, "Hero", Hero, { "client:visible": true, "title": "Interior Design Solutions", "body": "A bespoke interior design agency dedicated to transforming bold ideas into unique spaces.", "buttonText": "Learn More", "buttonHref": "#about-ids", "buttonColor": "primary", "heroImage": "40", "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/Hero.vue", "client:component-export": "default" })} <section class="mt-36"> <div id="about-ids" class="wrapper grid grid-cols-1 gap-8"> <div class=""> <img src="/project-images/72.jpeg?url" alt="A picture of a house front porch. Walls are painted blue and white." class="aspect-square w-full"> </div> <div class="text-center"> <h2 class="text-5xl">IDS</h2> <p class="mt-8">
Established by Gary Moores and Mirko Lucchini, IDS unites top-tier
            interior design experts to transform your home.
<br> <br>
We are committed to meticulously managing each project to guarantee outstanding
            quality and harmonious results.
</p> </div> </div> </section> <section class="bg-primary w-full py-12 my-36 text-center text-white"> <div class="wrapper grid grid-cols-1"> <div> <h3 class="text-l highlight--underline">
Considering a makeover for your space?
</h3> <p class="my-14">
Renovating a space can be daunting, but it often helps to talk to an
            expert. IDS offers multiple solutions for you to get in touch.
</p> </div> <div class="grid grid-cols-2 gap-16 mx-4"> <div class="flex flex-col items-center gap-3"> <p>Tel</p> <div class="bg-white h-px w-2/3"></div> <p>+44 780 058 090</p> </div> <div class="flex flex-col items-center gap-3"> <p>Email</p> <div class="bg-white h-px w-2/3"></div> <p>example@gmail.com</p> </div> </div> </div> </section> <section class="grid grid-cols-1 gap-32"> ${renderComponent($$result2, "ServiceCard", ServiceCard, { "title": "Bathrooms", "body": "Transform your bathroom into a haven of relaxation with our bespoke design solutions. In the hustle and bustle of daily life. your bathroom should be more than just a functional space - it should be your personal retreat.", "imageHref": "101", "imageAlt": "A picture of a renovated bathroom interior design.", "buttonHref": "/bathrooms", "buttonText": "Our Bathroom Projects", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ServiceCard.vue", "client:component-export": "default" })} ${renderComponent($$result2, "ServiceCard", ServiceCard, { "title": "Kitchens", "body": "The kitchen is more than just a place to cook. IDS is passionate about designing kithens that are not only functional but also form the centrepiece of your home.", "imageHref": "43", "imageAlt": "A picture of a renovated kitchen interior design.", "buttonHref": "/kitchens", "buttonText": "Our Kitchen Projects", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ServiceCard.vue", "client:component-export": "default" })} ${renderComponent($$result2, "ServiceCard", ServiceCard, { "title": "Home Spaces", "body": "We believe that your home should be a reflect of your unique style and vision. That's why we specialise in creating spaces that are not only aesthetically please but also harmoniously connected throughout.", "imageHref": "80", "imageAlt": "A picture of a renovated living room interior design.", "buttonHref": "/home-spaces", "buttonText": "Our Home Spaces", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ServiceCard.vue", "client:component-export": "default" })} </section> <section class="bg-primary py-12 text-white text-center mt-36"> <div class="wrapper"> <h3 class="highlight--underline text-xl">Finding your vision</h3> <div class="grid grid-cols 1 mt-12 gap-12"> <img src="/project-images/106.jpg?url" alt="3D render of bathroom interior design" class="h-80 w-full"> <p>
Leveraging 3D models, we offer the unique opportunity to visualize
            and experience your living space before any physical work begins.
<br> <br>
This allows you to explore every aspect of the design to ensure it aligns
            perfectly with your vision.
</p> <a href="/#contact"><button class="button--white">Contact Us & Learn More</button></a> </div> </div> </section> <section class="mt-36"> <div class="wrapper"> <h4 class="text-center text-xl">Featured</h4> <div class="grid grid-cols-1 gap-2 relative mt-4"> ${renderComponent($$result2, "ProjectThumbnail", ProjectThumbnail, { "projectID": "0", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ProjectThumbnail.vue", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectThumbnail", ProjectThumbnail, { "projectID": "1", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ProjectThumbnail.vue", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectThumbnail", ProjectThumbnail, { "projectID": "2", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ProjectThumbnail.vue", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectThumbnail", ProjectThumbnail, { "projectID": "3", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ProjectThumbnail.vue", "client:component-export": "default" })} </div> </div> </section> </main>  ` })}`;
}, "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/pages/index.astro", void 0);

const $$file = "C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
