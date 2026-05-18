import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, S as SectionHeading, a as experiences, A as AnimatedSection } from "./router-BaTnnXgQ.js";
import { Briefcase } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "zod";
import "framer-motion";
function ExperiencePage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Experience", title: "A path of building, shipping and learning." }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary-glow/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: experiences.map((e, i) => /* @__PURE__ */ jsx(AnimatedSection, { delay: i * 0.05, children: /* @__PURE__ */ jsxs("div", { className: "relative pl-12 sm:pl-16", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute left-0 sm:left-2 top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-5 sm:p-6 hover:shadow-elegant transition-all", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold", children: e.role }),
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: e.period })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-glow mt-1", children: e.company }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2", children: e.bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary-glow flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: b })
          ] }, b)) })
        ] })
      ] }) }, `${e.role}-${e.company}`)) })
    ] })
  ] });
}
export {
  ExperiencePage as component
};
