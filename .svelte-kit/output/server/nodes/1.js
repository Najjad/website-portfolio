

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.16fc366e.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.204ce088.js","_app/immutable/chunks/singletons.74a7ba2d.js"];
export const stylesheets = [];
export const fonts = [];
