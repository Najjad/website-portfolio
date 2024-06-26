

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.054376fc.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.b0c1f6c3.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.ed68d58c.js","_app/immutable/chunks/singletons.c4ceb337.js"];
export const stylesheets = ["_app/immutable/assets/0.a693fc8b.css"];
export const fonts = [];
