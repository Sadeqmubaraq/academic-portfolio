import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Code2, FolderKanban, ListChecks } from "lucide-react";
import { Layout } from "@/components/Layout";
import photoAsset from "@/assets/mubaraq-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mubaraq Sadeq — Home | Student Portfolio" },
      {
        name: "description",
        content:
          "Welcome to the academic portfolio of Mubaraq Sadeq, Computer Science student at MIVA Open University.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: BookOpen, title: "About Me", text: "Education, aspirations & skills", to: "/about" as const },
  { icon: FolderKanban, title: "Projects", text: "Selected work & case studies", to: "/projects" as const },
  { icon: ListChecks, title: "Academic Planner", text: "Plan & track your tasks", to: "/planner" as const },
  { icon: Code2, title: "Contact", text: "Let's get in touch", to: "/contact" as const },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1000}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
          <div className="animate-float-up">
            <span className="inline-flex items-center rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              MIVA Open University · B.Sc. Computer Science
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Hello, I'm <span className="text-gradient-accent">Mubaraq Sadeq</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Welcome to my academic portfolio. I'm a passionate Computer Science
              student showcasing my educational journey, skills, projects, and
              academic activities — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-accent opacity-30 blur-2xl" />
              <img
                src={photoAsset}
                alt="Portrait of Mubaraq Sadeq"
                width={768}
                height={768}
                className="relative h-64 w-64 rounded-3xl border-4 border-primary-foreground/20 object-cover shadow-elegant sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">A little about me</h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          I am an aspiring software developer and technology enthusiast with a
          strong interest in web development, software engineering, and digital
          innovation. As a 100-level Computer Science student, I am continuously
          developing my skills in programming, problem-solving, and modern
          technologies. I enjoy creating websites, exploring new technologies,
          and building solutions that can positively impact society.
        </p>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text, to }) => (
            <Link
              key={title}
              to={to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
