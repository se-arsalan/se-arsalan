import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { P as PageShell, S as SectionHeading, A as AnimatedSection, s as skillCategories } from "./router-BaTnnXgQ.js";
import { Layers, Database, Workflow, Wrench, Code2, ArrowRight, Cloud, Package } from "lucide-react";
import "zod";
const icons = [Layers, Database, Workflow, Wrench, Code2];
const techImages = {
  // Languages
  TypeScript: "/src/assets/icons/typescript-original.svg",
  JavaScript: "/src/assets/icons/javascript-original.svg",
  Dart: "/src/assets/icons/dart-original.svg",
  PHP: "/src/assets/icons/php-original.svg",
  Python: "/src/assets/icons/python-original.svg",
  "HTML/CSS": "/src/assets/icons/html5-original.svg",
  // Frameworks
  React: "/src/assets/icons/react-original.svg",
  "Node.js": "/src/assets/icons/nodejs-original.svg",
  "Next.js": "/src/assets/icons/nextjs-original.svg",
  "Express.js": "/src/assets/icons/express-original.svg",
  Laravel: "/src/assets/icons/laravel-original.svg",
  Flutter: "/src/assets/icons/flutter-original.svg",
  "Tailwind CSS": "/src/assets/icons/tailwindlabs.png",
  Bootstrap: "/src/assets/icons/bs5.png",
  // Databases
  MongoDB: "/src/assets/icons/mongodb-original.svg",
  PostgreSQL: "/src/assets/icons/postgresql-original.svg",
  MySQL: "/src/assets/icons/mysql-original.svg",
  Firebase: "/src/assets/icons/firebase-original.svg",
  GraphQL: "/src/assets/icons/graphql.png",
  // Automation
  "Make.com": "/src/assets/icons/integromat.png",
  N8N: "/src/assets/icons/n8n-io.png",
  Zapier: "/src/assets/icons/zapier.png",
  Airtable: "/src/assets/icons/airtable.png",
  "Monday.com": "/src/assets/icons/mondaycom.png",
  // Tools
  "Git / GitHub": "/src/assets/icons/git-original.svg",
  "AI Assistant Build & Finetune": "/src/assets/icons/AiAgent.png",
  "AI System Prompting": "/src/assets/icons/AiAgent.png",
  OpenAI: "/src/assets/icons/openai.png",
  "Google Apps Script": "/src/assets/icons/googleappsscript.png",
  Shopify: "/src/assets/icons/Shopify.png",
  "Softr.io": "/src/assets/icons/Softr.png",
  "Google Cloud": "/src/assets/icons/google-cloud.png",
  Cloudinary: "/src/assets/icons/cloudinary.png",
  Stripe: "/src/assets/icons/stripe.png",
  Twilio: "/src/assets/icons/twilio-icon.png",
  GitHub: "/src/assets/icons/git-original.png",
  "Figma UI/UX": "/src/assets/icons/figma-original.svg"
};
function SkillsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skillCategories[activeTab];
  const ActiveIcon = icons[activeTab % icons.length];
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setActiveTab((prev) => prev === 0 ? skillCategories.length - 1 : prev - 1);
      } else if (e.key === "ArrowRight") {
        setActiveTab((prev) => prev === skillCategories.length - 1 ? 0 : prev + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Skills", title: "A toolkit built on shipping real products.", description: "Battle-tested tools across the full stack — and the automation layer that ties them together." }),
    /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-8 p-1 bg-secondary/20 rounded-2xl backdrop-blur-sm border border-border/40 w-fit mx-auto", children: skillCategories.map((cat, i) => {
        const TabIcon = icons[i % icons.length];
        cat.key === "Automation";
        return /* @__PURE__ */ jsxs(motion.button, { onClick: () => setActiveTab(i), className: `relative px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeTab === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, whileHover: {
          scale: 1.05
        }, whileTap: {
          scale: 0.95
        }, children: [
          activeTab === i && /* @__PURE__ */ jsx(motion.div, { layoutId: "activeTab", className: "absolute inset-0 bg-gradient-primary rounded-xl -z-10", transition: {
            type: "spring",
            damping: 25,
            stiffness: 120
          } }),
          /* @__PURE__ */ jsx(TabIcon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { children: cat.title })
        ] }, cat.title);
      }) }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -20
      }, transition: {
        duration: 0.3
      }, className: "glass rounded-3xl p-8 sm:p-10 border border-border/60 relative", children: [
        activeCategory.key === "Automation" && /* @__PURE__ */ jsx(Link, { to: "/automations", className: "absolute top-6 right-6 sm:top-8 sm:right-8", children: /* @__PURE__ */ jsxs(motion.button, { whileHover: {
          scale: 1.1,
          x: 4
        }, whileTap: {
          scale: 0.95
        }, className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-glow", children: [
          /* @__PURE__ */ jsx("span", { children: "Explore More" }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow", children: /* @__PURE__ */ jsx(ActiveIcon, { className: "h-8 w-8" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-display font-semibold mb-1", children: activeCategory.title }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
              activeCategory.items.length,
              " technologies"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8", children: activeCategory.items.map((skill, idx) => {
          const skillImage = techImages[skill];
          return /* @__PURE__ */ jsx(motion.div, { initial: {
            opacity: 0,
            scale: 0.8
          }, animate: {
            opacity: 1,
            scale: 1
          }, transition: {
            delay: idx * 0.05,
            type: "spring",
            damping: 12,
            stiffness: 150
          }, whileHover: {
            scale: 1.08,
            y: -4
          }, className: "group", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 p-4 rounded-2xl bg-secondary/40 border border-border/40 hover:border-primary/40 transition-all cursor-default", children: [
            /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-primary/20 flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all", children: skillImage ? /* @__PURE__ */ jsx("img", { src: skillImage, alt: skill, className: "h-6 w-6 object-contain filter transition-all", loading: "lazy" }) : skill == "REST APIs" ? /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground text-center text-sm line-clamp-2", children: skill })
          ] }) }, skill);
        }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 pt-6 border-t border-border/40", children: [
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.2
          }, className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-display font-semibold text-primary mb-1", children: activeCategory.items.length }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Tools & Languages" })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.3
          }, className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-display font-semibold text-primary mb-1", children: "3+" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Years Experience" })
          ] })
        ] })
      ] }, activeTab) }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.4
      }, className: "grid grid-cols-1 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border/40", children: skillCategories.map((cat, idx) => {
        const Icon = icons[idx % icons.length];
        return /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.8
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, transition: {
          delay: idx * 0.08
        }, className: "glass rounded-2xl p-4 border border-border/40", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("p", { className: "font-display font-semibold text-sm", children: cat.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-display font-bold text-primary", children: cat.items.length }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-widest mt-1", children: "Technologies" })
        ] }, cat.title);
      }) })
    ] }) })
  ] });
}
export {
  SkillsPage as component
};
