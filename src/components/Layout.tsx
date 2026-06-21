import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, GraduationCap, Github, Mail } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Projects" },
  { to: "/planner", label: "Academic Planner" },
  { to: "/contact", label: "Contact" },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          activeOptions={{ exact: item.to === "/" }}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-accent" }}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-accent text-accent-foreground shadow-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="truncate font-display text-base font-bold text-foreground">
              Mubaraq Sadeq
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <NavLinks />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
              <NavLinks onNavigate={() => setOpen(false)} />
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold">Mubaraq Sadeq</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              B.Sc. Computer Science student at MIVA Open University, passionate
              about web development and digital innovation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Navigate
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-primary-foreground/70 transition-colors hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Connect
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="mailto:sadeqmubaraqowolabi@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 transition-colors hover:text-accent">
                <Mail className="h-4 w-4" /> sadeqmubaraqowolabi@gmail.com
              </a>
              <a href="https://github.com/Sadeqmubaraq" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary-foreground/70 transition-colors hover:text-accent">
                <Github className="h-4 w-4" /> github.com/Sadeqmubaraq
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
          © 2025 Mubaraq Sadeq · MIVA Open University · Academic Portfolio
        </div>
      </footer>
    </div>
  );
}
