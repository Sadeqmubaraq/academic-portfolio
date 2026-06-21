import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Send, h as Github, l as MapPin, s as Phone, u as Mail, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-Dr0nzTgi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Ck8ocyBM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	name: "",
	email: "",
	phone: "",
	message: ""
};
function validate(values) {
	const errors = {};
	if (!values.name.trim()) errors.name = "Name is required.";
	if (!values.email.trim()) errors.email = "Email is required.";
	else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
	if (!values.phone.trim()) errors.phone = "Phone number is required.";
	else if (!/^\d+$/.test(values.phone.trim())) errors.phone = "Phone number must contain only digits.";
	if (!values.message.trim()) errors.message = "Message cannot be empty.";
	return errors;
}
var contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "sadeqmubaraqowolabi@gmail.com",
		href: "mailto:sadeqmubaraqowolabi@gmail.com"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "08129442528",
		href: "tel:08129442528"
	},
	{
		icon: Github,
		label: "GitHub",
		value: "github.com/Sadeqmubaraq",
		href: "https://github.com/Sadeqmubaraq"
	},
	{
		icon: MapPin,
		label: "University",
		value: "MIVA Open University",
		href: void 0
	}
];
function Contact() {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function handleChange(field, value) {
		setValues((prev) => ({
			...prev,
			[field]: value
		}));
		if (errors[field]) setErrors((prev) => ({
			...prev,
			[field]: void 0
		}));
	}
	function handleSubmit(e) {
		e.preventDefault();
		const found = validate(values);
		setErrors(found);
		if (Object.keys(found).length === 0) {
			setSubmitted(true);
			setValues(initial);
		}
	}
	const fieldClasses = (field) => `w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring ${errors[field] ? "border-destructive" : "border-input"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-hero text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-extrabold sm:text-4xl",
				children: "Contact Me"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-primary-foreground/80",
				children: "Have a question or opportunity? Send me a message and I'll get back to you."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold",
				children: "Get in touch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "I'm always open to collaboration, internships, and learning opportunities."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-4",
				children: contactInfo.map(({ icon: Icon, label, value, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: label
						}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: href.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							className: "truncate text-sm font-medium transition-colors hover:text-accent",
							children: value
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium",
							children: value
						})]
					})]
				}, label))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8",
			children: [submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center gap-2 rounded-xl bg-success/10 p-4 text-sm font-medium text-success",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }), "Thank you! Your message has been sent successfully."]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				noValidate: true,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "name",
							className: "mb-1.5 block text-sm font-medium",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							type: "text",
							value: values.name,
							onChange: (e) => handleChange("name", e.target.value),
							className: fieldClasses("name"),
							placeholder: "Your full name"
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-destructive",
							children: errors.name
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email",
							className: "mb-1.5 block text-sm font-medium",
							children: "Email Address"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							type: "email",
							value: values.email,
							onChange: (e) => handleChange("email", e.target.value),
							className: fieldClasses("email"),
							placeholder: "you@example.com"
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-destructive",
							children: errors.email
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "phone",
							className: "mb-1.5 block text-sm font-medium",
							children: "Phone Number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							type: "tel",
							inputMode: "numeric",
							value: values.phone,
							onChange: (e) => handleChange("phone", e.target.value),
							className: fieldClasses("phone"),
							placeholder: "08012345678"
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-destructive",
							children: errors.phone
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "mb-1.5 block text-sm font-medium",
							children: "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							rows: 5,
							value: values.message,
							onChange: (e) => handleChange("message", e.target.value),
							className: `${fieldClasses("message")} resize-y`,
							placeholder: "Write your message here..."
						}),
						errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-destructive",
							children: errors.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Message"]
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { Contact as component };
