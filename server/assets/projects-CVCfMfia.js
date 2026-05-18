import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, S as SectionHeading, d as projects, A as AnimatedSection } from "./router-BaTnnXgQ.js";
import { ArrowUpRight } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "zod";
import "framer-motion";
function ProjectsPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Projects", title: "Things I've designed, built and shipped.", description: "A mix of full-stack platforms, mobile apps and automation systems running in production." }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5", children: projects.map((p, i) => /* @__PURE__ */ jsx(AnimatedSection, { delay: i * 0.07, children: /* @__PURE__ */ jsxs("article", { className: "group relative h-full glass rounded-3xl p-6 sm:p-7 overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 h-60 w-60 rounded-full bg-primary/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-display font-semibold leading-tight", children: p.title }),
          /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full glass", children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: p.blurb }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground/90 leading-relaxed", children: p.description }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-1.5", children: p.stack.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[11px] sm:text-xs rounded-full bg-secondary/60 px-2.5 py-1", children: t }, t)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.platforms.map((pl) => /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest rounded-full border border-border px-2 py-0.5 text-muted-foreground", children: pl }, pl)) })
      ] })
    ] }) }, p.title)) })
  ] });
}
export {
  ProjectsPage as component
};
