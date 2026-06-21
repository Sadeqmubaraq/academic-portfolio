import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Plus, Trash2, Check, ListTodo, CircleCheckBig } from "lucide-react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/planner")({
  head: () => ({
    meta: [
      { title: "Academic Planner — Mubaraq Sadeq" },
      {
        name: "description",
        content:
          "An interactive academic planner to add, complete, and delete tasks. Built with JavaScript.",
      },
      { property: "og:title", content: "Academic Planner — Mubaraq Sadeq" },
      {
        property: "og:description",
        content: "Add, complete, and delete academic tasks with this interactive planner.",
      },
    ],
  }),
  component: Planner,
});

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "mivapt-tasks";
type Filter = "all" | "active" | "completed";

function Planner() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage once on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setTasks(JSON.parse(stored) as Task[]);
    } catch {
      /* ignore corrupt storage */
    }
    setLoaded(true);
  }, []);

  // Persist on change
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, loaded]);

  function addTask(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setInput("");
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.completed));
  }

  const completedCount = tasks.filter((t) => t.completed).length;
  const activeCount = tasks.length - completedCount;
  const visible = tasks.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.completed : t.completed,
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <Layout>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Academic Planner</h1>
          <p className="mt-3 max-w-2xl text-primary-foreground/80">
            Organise your academic life. Add tasks, mark them as completed, and remove them when
            you're done. Your tasks are saved on this device.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
            <p className="text-2xl font-bold">{tasks.length}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
            <p className="text-2xl font-bold text-accent">{activeCount}</p>
            <p className="text-xs text-muted-foreground">Active</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
            <p className="text-2xl font-bold text-success">{completedCount}</p>
            <p className="text-xs text-muted-foreground">Completed</p>
          </div>
        </div>

        {/* Add form */}
        <form onSubmit={addTask} className="mt-6 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Submit web development assignment"
            maxLength={120}
            aria-label="New task"
            className="flex-1 rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" /> Add
          </button>
        </form>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  filter === f.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-sm font-medium text-destructive transition-colors hover:underline"
            >
              Clear completed
            </button>
          )}
        </div>

        {/* List */}
        <ul className="mt-5 space-y-3">
          {visible.length === 0 ? (
            <li className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card py-14 text-center text-muted-foreground">
              <ListTodo className="h-10 w-10 opacity-50" />
              <p className="text-sm">
                {tasks.length === 0
                  ? "No tasks yet. Add your first academic task above!"
                  : "Nothing here for this filter."}
              </p>
            </li>
          ) : (
            visible.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft animate-float-up"
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  aria-label={task.completed ? "Mark as active" : "Mark as completed"}
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                    task.completed
                      ? "border-success bg-success text-success-foreground"
                      : "border-border text-transparent hover:border-accent"
                  }`}
                >
                  <Check className="h-4 w-4" />
                </button>
                <span
                  className={`flex-1 break-words text-sm ${
                    task.completed ? "text-muted-foreground line-through" : "text-foreground"
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  aria-label="Delete task"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))
          )}
        </ul>

        {tasks.length > 0 && completedCount === tasks.length && (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-success/10 py-4 text-sm font-medium text-success">
            <CircleCheckBig className="h-5 w-5" /> All tasks completed — great job!
          </div>
        )}
      </div>
    </Layout>
  );
}
