import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, S as SectionHeading, e as education, A as AnimatedSection } from "./router-BaTnnXgQ.js";
import { GraduationCap } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "zod";
import "framer-motion";
function EducationPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Education", title: "Foundations and certifications." }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-5 max-w-7xl", children: education.map((e, i) => /* @__PURE__ */ jsx(AnimatedSection, { delay: i * 0.07, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full glass rounded-3xl p-6 sm:p-7 overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-4", children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-display font-semibold", children: e.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-glow mt-1", children: e.institution }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: e.detail })
      ] })
    ] }) }, e.title)) })
  ] });
}
export {
  EducationPage as component
};
