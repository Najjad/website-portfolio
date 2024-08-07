

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.342a52df.js","_app/immutable/chunks/scheduler.46401592.js","_app/immutable/chunks/index.b0c1f6c3.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.9aee4f8e.css"];
export const fonts = [];
