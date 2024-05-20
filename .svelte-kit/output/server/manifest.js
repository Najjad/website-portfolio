export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","assets/particles.json","favico.png","favicon.ico","images/.DS_Store","images/profile.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":"_app/immutable/entry/start.5c8f6387.js","app":"_app/immutable/entry/app.274fb537.js","imports":["_app/immutable/entry/start.5c8f6387.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.343aa9c3.js","_app/immutable/entry/app.274fb537.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.204ce088.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
