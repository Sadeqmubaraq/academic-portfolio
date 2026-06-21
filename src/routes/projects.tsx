import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { Layout } from "@/components/Layout";
import plannerImg from "@/assets/project-planner.jpg";
import jbsImg from "@/assets/project-jbs.jpg";

import olabiImg from "@/assets/project-olabi.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mubaraq Sadeq" },
      {
        name: "description",
        content:
          "Selected web development projects by Mubaraq Sadeq: Olabi Studio, Jewels by Sapphire, the Bite food website, and a To-Do List app — built with HTML, CSS, JavaScript, and TypeScript.",
      },
      { property: "og:title", content: "Projects — Mubaraq Sadeq" },
      {
        property: "og:description",
        content: "Selected web development projects with descriptions and screenshots.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Olabi Studio",
    image: olabiImg,
    description:
      "A creative studio website built with TypeScript, showcasing modern web design skills with an elegant layout, smooth interactions, and a fully responsive interface.",
    tags: ["TypeScript", "React", "Responsive"],
    demo: "https://olabi-studio.vercel.app",
    code: "https://github.com/Sadeqmubaraq/Olabi-Studio-",
  },
  {
    title: "Jewels by Sapphire (JBS)",
    image: jbsImg,
    description:
      "A luxury jewelry e-commerce landing page for a Lagos & Abuja brand, featuring an elegant dark-and-gold theme, product collection, customer reviews, and store info. Built with TypeScript and a modern responsive layout.",
    tags: ["TypeScript", "React", "Responsive"],
    demo: "https://jbs-swart.vercel.app",
    code: "https://github.com/Sadeqmubaraq/JBS",
  },

  {
    title: "Academic Planner App",
    image: plannerImg,
    description:
      "An interactive task management dashboard that lets students add, complete, and delete academic tasks. Built with JavaScript DOM manipulation and persistent local storage.",
    tags: ["JavaScript", "HTML5", "CSS Grid"],
    demo: "/planner",
    code: "https://github.com/Sadeqmubaraq",
  },
];

function Projects() {
  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Projects</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            A selection of projects that showcase my skills in HTML, CSS, and JavaScript.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isInternal = project.demo.startsWith("/");
            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.demo}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noreferrer"}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
