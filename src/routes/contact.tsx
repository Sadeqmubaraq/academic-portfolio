import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Github, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mubaraq Sadeq" },
      {
        name: "description",
        content:
          "Get in touch with Mubaraq Sadeq. Send a message using the validated contact form.",
      },
      { property: "og:title", content: "Contact — Mubaraq Sadeq" },
      {
        property: "og:description",
        content: "Get in touch with Mubaraq Sadeq via the contact form.",
      },
    ],
  }),
  component: Contact,
});

type Fields = "name" | "email" | "phone" | "message";
type FormState = Record<Fields, string>;
type Errors = Partial<Record<Fields, string>>;

const initial: FormState = { name: "", email: "", phone: "", message: "" };

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\d+$/.test(values.phone.trim())) {
    errors.phone = "Phone number must contain only digits.";
  }

  if (!values.message.trim()) {
    errors.message = "Message cannot be empty.";
  }

  return errors;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sadeqmubaraqowolabi@gmail.com",
    href: "mailto:sadeqmubaraqowolabi@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "08129442528", href: "tel:08129442528" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Sadeqmubaraq",
    href: "https://github.com/Sadeqmubaraq",
  },
  { icon: MapPin, label: "University", value: "MIVA Open University", href: undefined },
];

function Contact() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: Fields, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
      setValues(initial);
    }
  }

  const fieldClasses = (field: Fields) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring ${
      errors[field] ? "border-destructive" : "border-input"
    }`;

  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Contact Me</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            Have a question or opportunity? Send me a message and I'll get back to you.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <div>
          <h2 className="text-xl font-bold">Get in touch</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            I'm always open to collaboration, internships, and learning opportunities.
          </p>
          <ul className="mt-6 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="truncate text-sm font-medium transition-colors hover:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant sm:p-8">
          {submitted && (
            <div className="mb-6 flex items-center gap-2 rounded-xl bg-success/10 p-4 text-sm font-medium text-success">
              <CheckCircle2 className="h-5 w-5" />
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={fieldClasses("name")}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={fieldClasses("email")}
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={fieldClasses("phone")}
                placeholder="08012345678"
              />
              {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${fieldClasses("message")} resize-y`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
