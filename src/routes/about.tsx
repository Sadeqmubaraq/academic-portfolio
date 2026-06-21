import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Target, Wrench, Heart } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Mubaraq Sadeq" },
      {
        name: "description",
        content:
          "Educational background, career aspirations, technical skills, and hobbies of Mubaraq Sadeq, B.Sc. Computer Science student.",
      },
      { property: "og:title", content: "About Me — Mubaraq Sadeq" },
      {
        property: "og:description",
        content: "Educational background, career aspirations, technical skills, and hobbies.",
      },
    ],
  }),
  component: About,
});

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Web Design",
  "Basic Python Programming",
  "Graphic Design",
  "Photography",
  "Video Editing",
  "Problem Solving",
];

const hobbies = [
  "Learning new technologies",
  "Building websites",
  "Photography",
  "Videography",
  "Designing graphics",
  "Reading technology articles",
  "Playing games",
  "Listening to music",
];

function PageHeader() {
  return (
    <section className="bg-gradient-hero text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-extrabold sm:text-4xl">About Me</h1>
        <p className="mt-3 max-w-2xl text-primary-foreground/80">
          A closer look at my education, goals, skills, and the things I love doing outside the
          classroom.
        </p>
      </div>
    </section>
  );
}

function About() {
  const [activeLevels, setActiveLevels] = useState<Record<string, boolean>>({
    "100 Level": true,
    "200 Level": false,
    "300 Level": false,
    "400 Level": false,
  });

  const toggleLevel = (level: string) => {
    setActiveLevels((prev) => ({ ...prev, [level]: !prev[level] }));
  };

  const levels = ["100 Level", "200 Level", "300 Level", "400 Level"];

  return (
    <Layout>
      <PageHeader />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-16 sm:px-6">
        {/* Education */}
        <section>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold">Educational Background</h2>
          </div>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            I am currently studying for a Bachelor of Science (B.Sc.) degree in Computer Science at
            MIVA Open University. My academic journey focuses on programming, database systems, web
            technologies, and software development.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-border shadow-soft">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Institution</th>
                  <th className="px-5 py-3 font-semibold">Programme</th>
                  <th className="px-5 py-3 font-semibold">Level</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {levels.map((level) => {
                  const isActive = activeLevels[level];
                  return (
                    <tr key={level} className="border-t border-border">
                      <td className="px-5 py-4 font-medium">MIVA Open University</td>
                      <td className="px-5 py-4">B.Sc. Computer Science</td>
                      <td className="px-5 py-4">{level}</td>
                      <td className="px-5 py-4">
                        <button
                          onClick={() => toggleLevel(level)}
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                            isActive
                              ? "bg-success/15 text-success hover:bg-success/25"
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          Ongoing
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Aspirations */}
        <section>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold">Career Aspirations</h2>
          </div>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            My goal is to become a successful software engineer and technology professional who
            develops innovative digital solutions. I aim to improve my expertise in full-stack web
            development, mobile applications, artificial intelligence, and other emerging
            technologies.
          </p>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <Wrench className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-soft transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Hobbies */}
        <section>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <Heart className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold">Hobbies &amp; Interests</h2>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((hobby) => (
              <li
                key={hobby}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-soft"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-accent" />
                {hobby}
              </li>
            ))}
          </ul>
        </section>

        {/* Multimedia */}
        <section>
          <h2 className="text-2xl font-bold">My Learning Inspiration</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            A short video on why I love computer science and web development.
          </p>
          <div className="mt-5 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/nKIu9yen5nc"
              title="Why I love Computer Science"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
