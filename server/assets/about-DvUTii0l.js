import { jsxs, jsx } from "react/jsx-runtime";
import { MapPin, Mail, Phone, Languages } from "lucide-react";
import { P as PageShell, S as SectionHeading, A as AnimatedSection, c as profile, p as portrait, l as languages } from "./router-BaTnnXgQ.js";
import "@tanstack/react-router";
import "react";
import "zod";
import "framer-motion";
const pills = ["Full-stack development", "Mobile apps with Flutter", "Workflow automation", "AI assistants & prompting", "REST API design", "UI/UX with Figma"];
function AboutPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "About me", title: "Engineering useful software, end to end.", description: "From mobile apps and full-stack platforms to AI-powered automations I help teams ship reliable products and reclaim time." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-sm mx-auto aspect-[4/5]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-25 blur-2xl" }),
        /* @__PURE__ */ jsx("div", { className: "relative h-full w-full overflow-hidden rounded-[2rem] gradient-border shadow-elegant", children: /* @__PURE__ */ jsx("img", { src: portrait, alt: profile.name, className: "h-full w-full object-cover" }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground leading-relaxed", children: profile.summary }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground leading-relaxed", children: "I care about clean architecture, fast iteration, and software that respects the people using it. I'm equally happy shipping a polished Flutter UI, designing a scalable Node.js backend, or wiring up an n8n workflow that quietly does the work of three people." }) }),
        /* @__PURE__ */ jsxs(AnimatedSection, { delay: 0.15, children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3", children: "What I do" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: pills.map((p) => /* @__PURE__ */ jsx("span", { className: "rounded-full glass px-3 py-1.5 text-xs sm:text-sm", children: p }, p)) })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-3 pt-2", children: [
          /* @__PURE__ */ jsx(InfoCard, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "Location", value: profile.location }),
          /* @__PURE__ */ jsx(InfoCard, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), label: "Email", value: profile.email, href: `mailto:${profile.email}` }),
          /* @__PURE__ */ jsx(InfoCard, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }),
          /* @__PURE__ */ jsx(InfoCard, { icon: /* @__PURE__ */ jsx(Languages, { className: "h-4 w-4" }), label: "Languages", value: languages.map((l) => `${l.name} (${l.level})`).join(" · ") })
        ] }) })
      ] })
    ] })
  ] });
}
function InfoCard({
  icon,
  label,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 py-3 hover:bg-accent/30 transition-colors", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-7 w-7 place-items-center rounded-lg bg-secondary/60", children: icon }),
      label
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm font-medium truncate", children: value })
  ] });
  return href ? /* @__PURE__ */ jsx("a", { href, children: inner }) : inner;
}
export {
  AboutPage as component
};
