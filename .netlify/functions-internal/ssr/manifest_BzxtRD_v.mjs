import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_UmyEbSK9.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DSUOG8yz.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CqNbDgwe.mjs","/src/pages/index.astro":"chunks/pages/index_CywD_K5K.mjs","\u0000@astrojs-manifest":"manifest_BzxtRD_v.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_5SSppkEi.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_nkBwXsbQ.mjs","C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/Hero.vue":"_astro/Hero.DBH_h_Bf.js","C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Header.vue":"_astro/Header.CSwB_mya.js","C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/layouts/Footer.vue":"_astro/Footer.CBAq3Mtw.js","C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ServiceCard.vue":"_astro/ServiceCard.BLe7Ym93.js","C:/Users/jacob/OneDrive/01 - Freelancing/01 - Coding/02 - Client Projects/ids-mojacar/src/components/ProjectThumbnail.vue":"_astro/ProjectThumbnail.B_0wjkZz.js","@astrojs/vue/client.js":"_astro/client.Da7nPqE4.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/montserrat-v26-latin-regular.BfmCfwfZ.woff2","/_astro/montserrat-v26-latin-200.Co0glrxx.woff2","/_astro/mulish-v13-latin-300italic.BiyvZPAr.woff2","/_astro/mulish-v13-latin-regular.M3OQmH06.woff2","/_astro/montserrat-v26-latin-italic.DK-gMZXQ.woff2","/_astro/montserrat-v26-latin-200italic.BGwqYsvp.woff2","/_astro/index.DSUOG8yz.css","/burger-menu--blue.svg","/burger-menu.svg","/favicon.svg","/ids-logo--blue.svg","/ids-logo.svg","/X.svg","/_astro/client.Da7nPqE4.js","/_astro/Footer.CBAq3Mtw.js","/_astro/Header.CSwB_mya.js","/_astro/Hero.DBH_h_Bf.js","/_astro/index.BJ6ymOuD.css","/_astro/pageData.Cb6RXj4E.js","/_astro/ProjectThumbnail.B_0wjkZz.js","/_astro/runtime-core.esm-bundler.DWtTxSr5.js","/_astro/ServiceCard.BLe7Ym93.js","/_astro/_plugin-vue_export-helper.DlAUqK2U.js","/project-images/1.jpg","/project-images/10.JPG","/project-images/100.jpeg","/project-images/101.jpeg","/project-images/102.jpeg","/project-images/103.jpeg","/project-images/104.jpeg","/project-images/105.jpeg","/project-images/106.jpg","/project-images/107.jpg","/project-images/108.jpg","/project-images/109.jpg","/project-images/11.jpg","/project-images/110.jpg","/project-images/111.jpg","/project-images/112.jpg","/project-images/113.jpg","/project-images/114.jpg","/project-images/115.jpg","/project-images/116.jpg","/project-images/117.jpg","/project-images/118.jpg","/project-images/119.jpg","/project-images/12.jpg","/project-images/120.jpg","/project-images/121.jpg","/project-images/122.jpg","/project-images/123.jpg","/project-images/13.jpg","/project-images/14.jpg","/project-images/15.jpg","/project-images/16.jpg","/project-images/17.jpg","/project-images/18.jpg","/project-images/19.jpg","/project-images/2.jpg","/project-images/20.jpg","/project-images/21.jpg","/project-images/22.jpg","/project-images/23.jpg","/project-images/25.jpg","/project-images/26.jpg","/project-images/27.jpg","/project-images/28.jpg","/project-images/29.jpg","/project-images/3.jpg","/project-images/30.jpg","/project-images/31.jpg","/project-images/32.jpg","/project-images/33.jpeg","/project-images/34.jpeg","/project-images/35.jpeg","/project-images/36.jpeg","/project-images/37.jpeg","/project-images/38.jpeg","/project-images/39.jpeg","/project-images/4.jpg","/project-images/40.jpeg","/project-images/41.jpeg","/project-images/42.jpeg","/project-images/43.jpeg","/project-images/44.jpeg","/project-images/45.jpeg","/project-images/46.jpeg","/project-images/47.jpeg","/project-images/48.jpeg","/project-images/49.jpeg","/project-images/5.jpg","/project-images/50.jpeg","/project-images/51.jpeg","/project-images/52.jpeg","/project-images/53.jpeg","/project-images/54.jpeg","/project-images/55.jpeg","/project-images/56.jpeg","/project-images/57.jpeg","/project-images/58.jpeg","/project-images/59.jpeg","/project-images/6.JPG","/project-images/60.jpeg","/project-images/61.jpeg","/project-images/62.jpeg","/project-images/63.jpeg","/project-images/64.jpeg","/project-images/65.jpeg","/project-images/66.jpeg","/project-images/67.jpeg","/project-images/68.jpeg","/project-images/69.jpeg","/project-images/7.JPG","/project-images/70.jpeg","/project-images/71.jpeg","/project-images/72.jpeg","/project-images/73.jpeg","/project-images/74.jpeg","/project-images/75.jpeg","/project-images/76.jpeg","/project-images/77.jpeg","/project-images/78.jpeg","/project-images/79.jpeg","/project-images/8.JPG","/project-images/80.jpeg","/project-images/81.jpeg","/project-images/82.jpeg","/project-images/83.jpeg","/project-images/84.jpeg","/project-images/85.jpeg","/project-images/86.jpeg","/project-images/87.jpeg","/project-images/88.jpeg","/project-images/89.jpeg","/project-images/9.JPG","/project-images/90.jpeg","/project-images/91.jpeg","/project-images/92.jpeg","/project-images/93.jpeg","/project-images/94.jpeg","/project-images/95.jpeg","/project-images/96.jpeg","/project-images/97.jpeg","/project-images/98.jpeg","/project-images/99.jpeg"],"buildFormat":"directory"});

export { manifest };
