import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col flex-1 p-4" data-svelte-h="svelte-k9bjmn"><h1>here&#39;s ma header</h1> <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"></div></section> <p>this is where ill place my projectts</p> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center"></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10"><div></div> <div></div></div></section></main>`;
});
export {
  Page as default
};
