import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
const Projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".project-card.svelte-iru6cj{display:flex;flex-direction:column;border-radius:12px;overflow:hidden;box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);background-color:#fff;transition:transform 0.3s, box-shadow 0.3s}.project-card.svelte-iru6cj:hover{transform:translateY(-8px);box-shadow:0 12px 24px rgba(0, 0, 0, 0.2)}.project-image.svelte-iru6cj{width:100%;height:220px;object-fit:cover}.project-content.svelte-iru6cj{padding:20px;display:flex;flex-direction:column;gap:12px}.genre.svelte-iru6cj{font-size:14px;color:#888;text-transform:uppercase;letter-spacing:1px}.title.svelte-iru6cj{font-size:22px;color:#333;margin:0}.description.svelte-iru6cj{font-size:16px;color:#555;line-height:1.6}.project-link.svelte-iru6cj{align-self:start;padding:10px 20px;background-color:#6200ea;color:#fff;border-radius:6px;text-decoration:none;font-weight:bold;transition:background-color 0.3s}.project-link.svelte-iru6cj:hover{background-color:#3700b3}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { link } = $$props;
  let { genre } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0)
    $$bindings.genre(genre);
  $$result.css.add(css$1);
  return `<div class="project-card svelte-iru6cj"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="project-image svelte-iru6cj"> <div class="project-content svelte-iru6cj"><h2 class="genre svelte-iru6cj">${escape(genre)}</h2> <h3 class="title svelte-iru6cj">${escape(title)}</h3> <p class="description svelte-iru6cj">${escape(description)}</p> <a${add_attribute("href", link, 0)} target="_blank" class="project-link svelte-iru6cj">View Project</a></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-11gzplw{max-width:1200px;margin:0 auto;padding:20px}.projects-title.svelte-11gzplw{font-size:36px;text-align:center;margin-bottom:40px;color:#333}.projects-grid.svelte-11gzplw{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;justify-items:center;align-items:stretch}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let genres = {
    "BS": "Business",
    "PER": "Personal",
    "GD": "GameDev"
  };
  let projects = [
    {
      title: "WebForger Studio",
      description: "Started a web development business",
      image: "/images/project-one.jpg",
      link: "https://webforger.net",
      genre: genres["BS"]
    },
    {
      title: "Efficient Crypto Miner",
      description: "Developed a method of mining crypto efficiently",
      image: "/images/project-two.jpg",
      link: "https://github.com/project-two",
      genre: genres["PER"]
    }
  ];
  $$result.css.add(css);
  return `<main class="projects-container svelte-11gzplw"><h1 class="projects-title svelte-11gzplw" data-svelte-h="svelte-1rgxhxg">My Projects</h1> <div class="projects-grid svelte-11gzplw">${each(projects, (project) => {
    return `${validate_component(Projects, "ProjectCard").$$render(
      $$result,
      {
        title: project.title,
        description: project.description,
        image: project.image,
        link: project.link,
        genre: project.genre
      },
      {},
      {}
    )}`;
  })}</div> </main>`;
});
export {
  Page as default
};
