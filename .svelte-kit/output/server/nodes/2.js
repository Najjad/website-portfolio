

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6d6e3c5f.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.b0c1f6c3.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
