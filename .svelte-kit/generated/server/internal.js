
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<link rel=\"icon\" href=\"/images/favicon.ico\" />\r\n\t<title>Najjad's Portfolio</title>\r\n\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js\"\r\n\t\tintegrity=\"sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A==\"\r\n\t\tcrossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>\r\n\t<link\r\n\t\thref=\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap\"\r\n\t\trel=\"stylesheet\">\r\n\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css\"\r\n\t\tintegrity=\"sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==\"\r\n\t\tcrossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t" + head + "\r\n</head>\r\n\r\n<body data-sveltekit-preload-data=\"hover\" class=\"bg-slate-950 text-white relative\">\r\n\t<div style=\"display: contents\" class=\"relative z-[1]\">" + body + "</div>\r\n\r\n\t<div class=\"absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70\">\r\n\t\t<div id=\"particles-js\" class=\"absolute inset-0\" />\r\n\t</div>\r\n\t<script>\r\n\t\tparticlesJS.load(\"particles-js\", \"assets/particles.json\", function () {\r\n\t\t\tconsole.log(\"callback - particles.js config loaded\");\r\n\t\t});\r\n\t</script>\r\n</body>\r\n\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "178295g"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
