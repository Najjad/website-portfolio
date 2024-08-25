import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => `<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
	<meta charset="utf-8" />\r
	<link rel="icon" href="/images/favicon.ico" />\r
	<title>Najjad's Portfolio</title>\r
	<link rel="preconnect" href="https://fonts.googleapis.com">\r
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
	<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"\r
		integrity="sha512-Kef5sc7gfTacR7TZKelcrRs15ipf7+t+n7Zh6mKNJbmW+/RRdCW9nwfLn4YX0s2nO6Kv5Y2ChqgIakaC6PW09A=="\r
		crossorigin="anonymous" referrerpolicy="no-referrer"><\/script>\r
	<link\r
		href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap"\r
		rel="stylesheet">\r
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"\r
		integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="\r
		crossorigin="anonymous" referrerpolicy="no-referrer" />\r
	<meta name="viewport" content="width=device-width" />\r
	` + head + '\r\n</head>\r\n\r\n<body data-sveltekit-preload-data="hover" class="bg-slate-950 text-white relative">\r\n	<div style="display: contents" class="relative z-[1]">' + body + '</div>\r\n\r\n	<div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">\r\n		<div id="particles-js" class="absolute inset-0" />\r\n	</div>\r\n	<script>\r\n		particlesJS.load("particles-js", "assets/particles.json", function () {\r\n			console.log("callback - particles.js config loaded");\r\n		});\r\n	<\/script>\r\n</body>\r\n\r\n</html>\r\n',
    error: ({ status, message }) => '<!DOCTYPE html>\r\n<html lang="en">\r\n	<head>\r\n		<meta charset="utf-8" />\r\n		<title>' + message + `</title>\r
\r
		<style>\r
			body {\r
				--bg: white;\r
				--fg: #222;\r
				--divider: #ccc;\r
				background: var(--bg);\r
				color: var(--fg);\r
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r
				display: flex;\r
				align-items: center;\r
				justify-content: center;\r
				height: 100vh;\r
				margin: 0;\r
			}\r
\r
			.error {\r
				display: flex;\r
				align-items: center;\r
				max-width: 32rem;\r
				margin: 0 1rem;\r
			}\r
\r
			.status {\r
				font-weight: 200;\r
				font-size: 3rem;\r
				line-height: 1;\r
				position: relative;\r
				top: -0.05rem;\r
			}\r
\r
			.message {\r
				border-left: 1px solid var(--divider);\r
				padding: 0 0 0 1rem;\r
				margin: 0 0 0 1rem;\r
				min-height: 2.5rem;\r
				display: flex;\r
				align-items: center;\r
			}\r
\r
			.message h1 {\r
				font-weight: 400;\r
				font-size: 1em;\r
				margin: 0;\r
			}\r
\r
			@media (prefers-color-scheme: dark) {\r
				body {\r
					--bg: #222;\r
					--fg: #ddd;\r
					--divider: #666;\r
				}\r
			}\r
		</style>\r
	</head>\r
	<body>\r
		<div class="error">\r
			<span class="status">` + status + '</span>\r\n			<div class="message">\r\n				<h1>' + message + "</h1>\r\n			</div>\r\n		</div>\r\n	</body>\r\n</html>\r\n"
  },
  version_hash: "19yorsk"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
