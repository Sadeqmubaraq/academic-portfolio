import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as Target, m as GraduationCap, n as Wrench, p as Heart } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-Dr0nzTgi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Blk3_zGy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var skills = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"Web Design",
	"Basic Python Programming",
	"Graphic Design",
	"Photography",
	"Video Editing",
	"Problem Solving"
];
var hobbies = [
	"Learning new technologies",
	"Building websites",
	"Photography",
	"Videography",
	"Designing graphics",
	"Reading technology articles",
	"Playing games",
	"Listening to music"
];
function PageHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold sm:text-4xl",
				children: "About Me"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-primary-foreground/80",
				children: "A closer look at my education, goals, skills, and the things I love doing outside the classroom."
			})]
		})
	});
}
function About() {
	const [activeLevels, setActiveLevels] = (0, import_react.useState)({
		"100 Level": true,
		"200 Level": false,
		"300 Level": false,
		"400 Level": false
	});
	const toggleLevel = (level) => {
		setActiveLevels((prev) => ({
			...prev,
			[level]: !prev[level]
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "Educational Background"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-muted-foreground",
					children: "I am currently studying for a Bachelor of Science (B.Sc.) degree in Computer Science at MIVA Open University. My academic journey focuses on programming, database systems, web technologies, and software development."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-x-auto rounded-2xl border border-border shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[520px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-secondary text-secondary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Institution"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Programme"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Level"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 font-semibold",
									children: "Status"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "bg-card",
							children: [
								"100 Level",
								"200 Level",
								"300 Level",
								"400 Level"
							].map((level) => {
								const isActive = activeLevels[level];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 font-medium",
											children: "MIVA Open University"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: "B.Sc. Computer Science"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: level
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => toggleLevel(level),
												className: `inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${isActive ? "bg-success/15 text-success hover:bg-success/25" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`,
												children: "Ongoing"
											})
										})
									]
								}, level);
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Career Aspirations"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-muted-foreground",
				children: "My goal is to become a successful software engineer and technology professional who develops innovative digital solutions. I aim to improve my expertise in full-stack web development, mobile applications, artificial intelligence, and other emerging technologies."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Technical Skills"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-wrap gap-2.5",
				children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition-colors hover:border-accent hover:text-accent",
					children: skill
				}, skill))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Hobbies & Interests"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: hobbies.map((hobby) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 shrink-0 rounded-full bg-gradient-accent" }), hobby]
				}, hobby))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "My Learning Inspiration"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-muted-foreground",
					children: "A short video on why I love computer science and web development."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "h-full w-full",
						src: "https://www.youtube.com/embed/nKIu9yen5nc",
						title: "Why I love Computer Science",
						loading: "lazy",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				})
			] })
		]
	})] });
}
//#endregion
export { About as component };
