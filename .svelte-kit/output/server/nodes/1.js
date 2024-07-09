

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c2661407.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.b0c1f6c3.js","_app/immutable/chunks/stores.95186d01.js","_app/immutable/chunks/singletons.0bed8aa9.js"];
export const stylesheets = [];
export const fonts = [];
