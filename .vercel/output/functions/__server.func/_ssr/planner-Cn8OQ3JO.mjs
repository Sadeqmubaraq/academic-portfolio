import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as CircleCheckBig, d as ListTodo, o as Plus, r as Trash2, x as Check } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-Dr0nzTgi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/planner-Cn8OQ3JO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "mivapt-tasks";
function Planner() {
	const [tasks, setTasks] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) setTasks(JSON.parse(stored));
		} catch {}
		setLoaded(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks, loaded]);
	function addTask(e) {
		e.preventDefault();
		const text = input.trim();
		if (!text) return;
		const newTask = {
			id: crypto.randomUUID(),
			text,
			completed: false
		};
		setTasks((prev) => [newTask, ...prev]);
		setInput("");
	}
	function toggleTask(id) {
		setTasks((prev) => prev.map((t) => t.id === id ? {
			...t,
			completed: !t.completed
		} : t));
	}
	function deleteTask(id) {
		setTasks((prev) => prev.filter((t) => t.id !== id));
	}
	function clearCompleted() {
		setTasks((prev) => prev.filter((t) => !t.completed));
	}
	const completedCount = tasks.filter((t) => t.completed).length;
	const activeCount = tasks.length - completedCount;
	const visible = tasks.filter((t) => filter === "all" ? true : filter === "active" ? !t.completed : t.completed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold sm:text-4xl",
				children: "Academic Planner"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-primary-foreground/80",
				children: "Organise your academic life. Add tasks, mark them as completed, and remove them when you're done. Your tasks are saved on this device."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 text-center shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-bold",
							children: tasks.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Total"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 text-center shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-bold text-accent",
							children: activeCount
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Active"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 text-center shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-bold text-success",
							children: completedCount
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Completed"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: addTask,
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "e.g. Submit web development assignment",
					maxLength: 120,
					"aria-label": "New task",
					className: "flex-1 rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: [
						{
							key: "all",
							label: "All"
						},
						{
							key: "active",
							label: "Active"
						},
						{
							key: "completed",
							label: "Completed"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(f.key),
						className: `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${filter === f.key ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`,
						children: f.label
					}, f.key))
				}), completedCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: clearCompleted,
					className: "text-sm font-medium text-destructive transition-colors hover:underline",
					children: "Clear completed"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3",
				children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card py-14 text-center text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTodo, { className: "h-10 w-10 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: tasks.length === 0 ? "No tasks yet. Add your first academic task above!" : "Nothing here for this filter."
					})]
				}) : visible.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft animate-float-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toggleTask(task.id),
							"aria-label": task.completed ? "Mark as active" : "Mark as completed",
							className: `grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition-colors ${task.completed ? "border-success bg-success text-success-foreground" : "border-border text-transparent hover:border-accent"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `flex-1 break-words text-sm ${task.completed ? "text-muted-foreground line-through" : "text-foreground"}`,
							children: task.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => deleteTask(task.id),
							"aria-label": "Delete task",
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
						})
					]
				}, task.id))
			}),
			tasks.length > 0 && completedCount === tasks.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-center gap-2 rounded-2xl bg-success/10 py-4 text-sm font-medium text-success",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-5 w-5" }), " All tasks completed — great job!"]
			})
		]
	})] });
}
//#endregion
export { Planner as component };
