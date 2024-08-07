

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6f2f3080.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.b0c1f6c3.js","_app/immutable/chunks/stores.0f4af29c.js","_app/immutable/chunks/singletons.41269b11.js"];
export const stylesheets = [];
export const fonts = [];
