import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as ExternalLink, h as Github } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-Dr0nzTgi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DZZkoh4d.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "Olabi Studio",
		image: "/assets/project-olabi-S1G7zgf5.jpg",
		description: "A creative studio website built with TypeScript, showcasing modern web design skills with an elegant layout, smooth interactions, and a fully responsive interface.",
		tags: [
			"TypeScript",
			"React",
			"Responsive"
		],
		demo: "https://olabi-studio.vercel.app",
		code: "https://github.com/Sadeqmubaraq/Olabi-Studio-"
	},
	{
		title: "Jewels by Sapphire (JBS)",
		image: "/assets/project-jbs-CmW1eHtF.jpg",
		description: "A luxury jewelry e-commerce landing page for a Lagos & Abuja brand, featuring an elegant dark-and-gold theme, product collection, customer reviews, and store info. Built with TypeScript and a modern responsive layout.",
		tags: [
			"TypeScript",
			"React",
			"Responsive"
		],
		demo: "https://jbs-swart.vercel.app",
		code: "https://github.com/Sadeqmubaraq/JBS"
	},
	{
		title: "Academic Planner App",
		image: "/assets/project-planner-HpfEDvWf.jpg",
		description: "An interactive task management dashboard that lets students add, complete, and delete academic tasks. Built with JavaScript DOM manipulation and persistent local storage.",
		tags: [
			"JavaScript",
			"HTML5",
			"CSS Grid"
		],
		demo: "/planner",
		code: "https://github.com/Sadeqmubaraq"
	}
];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold sm:text-4xl",
				children: "Projects"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-primary-foreground/80",
				children: "A selection of projects that showcase my skills in HTML, CSS, and JavaScript."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: projects.map((project) => {
				const isInternal = project.demo.startsWith("/");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: `Screenshot of ${project.title}`,
							width: 1024,
							height: 640,
							loading: "lazy",
							className: "h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-semibold",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: project.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
									children: tag
								}, tag))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.demo,
									target: isInternal ? void 0 : "_blank",
									rel: isInternal ? void 0 : "noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-lg bg-gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), " Live Demo"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.code,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " Code"]
								})]
							})
						]
					})]
				}, project.title);
			})
		})
	})] });
}
//#endregion
export { Projects as component };
