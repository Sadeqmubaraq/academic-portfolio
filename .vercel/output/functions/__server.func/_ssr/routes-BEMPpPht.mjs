import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ArrowRight, S as BookOpen, f as ListChecks, g as FolderKanban, v as CodeXml } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-Dr0nzTgi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEMPpPht.js
var import_jsx_runtime = require_jsx_runtime();
var mubaraq_photo_default = "/assets/mubaraq-photo-CYXvfU4z.jpg";
var hero_bg_default = "/assets/hero-bg-BgKC48Xd.jpg";
var highlights = [
	{
		icon: BookOpen,
		title: "About Me",
		text: "Education, aspirations & skills",
		to: "/about"
	},
	{
		icon: FolderKanban,
		title: "Projects",
		text: "Selected work & case studies",
		to: "/projects"
	},
	{
		icon: ListChecks,
		title: "Academic Planner",
		text: "Plan & track your tasks",
		to: "/planner"
	},
	{
		icon: CodeXml,
		title: "Contact",
		text: "Let's get in touch",
		to: "/contact"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_bg_default,
				alt: "",
				"aria-hidden": "true",
				width: 1600,
				height: 1e3,
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-float-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent",
							children: "MIVA Open University · B.Sc. Computer Science"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 text-4xl font-extrabold leading-tight sm:text-5xl",
							children: ["Hello, I'm ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-accent",
								children: "Mubaraq Sadeq"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg",
							children: "Welcome to my academic portfolio. I'm a passionate Computer Science student showcasing my educational journey, skills, projects, and academic activities — all in one place."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/projects",
								className: "inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5",
								children: ["View My Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10",
								children: "Get in Touch"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center md:justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-fade-in",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: mubaraq_photo_default,
							alt: "Portrait of Mubaraq Sadeq",
							width: 768,
							height: 768,
							className: "relative h-64 w-64 rounded-3xl border-4 border-primary-foreground/20 object-cover shadow-elegant sm:h-80 sm:w-80"
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-16 sm:px-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold sm:text-3xl",
				children: "A little about me"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground",
				children: "I am an aspiring software developer and technology enthusiast with a strong interest in web development, software engineering, and digital innovation. As a 100-level Computer Science student, I am continuously developing my skills in programming, problem-solving, and modern technologies. I enjoy creating websites, exploring new technologies, and building solutions that can positively impact society."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: highlights.map(({ icon: Icon, title, text, to }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to,
					className: "group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-accent group-hover:text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent",
							children: [
								"Explore",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
							]
						})
					]
				}, title))
			})
		})
	] });
}
//#endregion
export { Index as component };
