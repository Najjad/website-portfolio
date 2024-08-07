import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
const Projects_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".project-card.svelte-19cgbkz{border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:transform 0.2s}.project-card.svelte-19cgbkz:hover{transform:scale(1.05)}.project-image.svelte-19cgbkz{width:100%;height:200px;object-fit:cover}.project-content.svelte-19cgbkz{padding:16px}.project-link.svelte-19cgbkz{display:inline-block;margin-top:8px;color:#6200ea;text-decoration:none}.project-link.svelte-19cgbkz:hover{text-decoration:underline}",
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
  return `<div class="project-card svelte-19cgbkz"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="project-image svelte-19cgbkz"> <div class="project-content svelte-19cgbkz"><h2>${escape(genre)}</h2> <h3>${escape(title)}</h3> <p>${escape(description)}</p> <a${add_attribute("href", link, 0)} target="_blank" class="project-link svelte-19cgbkz">View Project</a></div></div> <div class="genre" data-svelte-h="svelte-yg0u0o"></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-1ep9qaj{padding:16px}.projects-title.svelte-1ep9qaj{text-align:center;margin-bottom:24px}.projects-grid.svelte-1ep9qaj{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:16px}",
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
  return `<main class="projects-container svelte-1ep9qaj"><h1 class="projects-title svelte-1ep9qaj" data-svelte-h="svelte-1rgxhxg">My Projects</h1> <div class="projects-grid svelte-1ep9qaj">${each(projects, (project) => {
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
