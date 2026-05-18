import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useReducedMotion, motion } from "framer-motion";
import { Sparkles, ArrowRight, Mail, MapPin, Code2, Layers, Database, Zap, Cog, Smartphone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faPhp, faReact, faShopify, faGitAlt, faLaravel, faJs } from "@fortawesome/free-brands-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { G as GradientBlobs, c as profile, b as portrait, A as AnimatedSection, s as skillCategories, d as projects } from "./router-BaTnnXgQ.js";
import "react";
import "zod";
const categoryIcons = {
  Frontend: /* @__PURE__ */ jsx(Code2, { className: "w-8 h-8" }),
  Backend: /* @__PURE__ */ jsx(Database, { className: "w-8 h-8" }),
  Mobile: /* @__PURE__ */ jsx(Smartphone, { className: "w-8 h-8" }),
  Tools: /* @__PURE__ */ jsx(Cog, { className: "w-8 h-8" }),
  Automation: /* @__PURE__ */ jsx(Zap, { className: "w-8 h-8" }),
  DevOps: /* @__PURE__ */ jsx(Layers, { className: "w-8 h-8" }),
  Databases: /* @__PURE__ */ jsx(Database, { className: "w-8 h-8" }),
  Frameworks: /* @__PURE__ */ jsx(Layers, { className: "w-8 h-8" })
};
const orbitIcons = [{
  label: "Node.js",
  icon: faNodeJs,
  color: "#339933",
  delay: 1
}, {
  label: "PHP",
  icon: faPhp,
  color: "#777BB4",
  delay: 3
}, {
  label: "React",
  icon: faReact,
  color: "#61DAFB",
  delay: 4
}, {
  label: "Automation",
  icon: faRobot,
  color: "#D14334",
  delay: 5
}, {
  label: "Shopify",
  icon: faShopify,
  color: "#95bf47",
  delay: 6
}, {
  label: "Git",
  icon: faGitAlt,
  color: "#D14334",
  delay: 7
}, {
  label: "Laravel",
  icon: faLaravel,
  color: "#FF2D20",
  delay: 2
}, {
  label: "JavaScript",
  icon: faJs,
  color: "#F7DF1E",
  delay: 0
}];
const orbitPositions = [
  {
    top: "-60px",
    left: "45%",
    translateX: "-50%"
  },
  // top center
  {
    top: "20%",
    right: "-50px"
  },
  // top right
  {
    top: "59%",
    right: "-65px",
    translateY: "-50%"
  },
  // right center
  {
    bottom: "-10%",
    right: "-45px"
  },
  // bottom right
  {
    bottom: "-50px",
    left: "35%",
    translateX: "-50%"
  },
  // bottom center
  {
    bottom: "15%",
    left: "-40px"
  },
  // bottom left
  {
    top: "35%",
    left: "-65px",
    translateY: "-50%"
  },
  // left center
  {
    top: "-8%",
    left: "-65px"
  }
  // top left
];
function OrbitIcon({
  icon,
  label,
  color,
  delay,
  index
}) {
  const pos = orbitPositions[index % orbitPositions.length];
  return /* @__PURE__ */ jsx(motion.div, { initial: {
    opacity: 0,
    scale: 0
  }, animate: {
    opacity: 1,
    scale: 1
  }, transition: {
    duration: 0.5,
    delay: delay * 0.1
  }, className: "absolute w-14 h-14  items-center justify-center hidden md:flex rounded-full", style: {
    top: pos.top,
    bottom: pos.bottom,
    left: pos.left,
    right: pos.right,
    transform: pos.translateX && pos.translateY ? `translate(${pos.translateX}, ${pos.translateY})` : pos.translateX ? `translateX(${pos.translateX})` : pos.translateY ? `translateY(${pos.translateY})` : void 0,
    zIndex: 10
  }, children: /* @__PURE__ */ jsx(motion.div, { animate: {
    y: [0, -12, 0],
    x: [0, index % 2 === 0 ? 8 : -8, 0],
    rotate: [0, 8, 0]
  }, transition: {
    duration: 4 + delay * 0.3,
    repeat: Infinity,
    ease: "easeInOut"
  }, className: "flex items-center justify-center w-full h-full rounded-full glass border border-primary/30 shadow-elegant hover:shadow-glow transition-all hover:scale-110", style: {
    color
  }, title: label, children: /* @__PURE__ */ jsx(FontAwesomeIcon, { fontSize: "1.5rem", icon, className: "w-6 h-6" }) }) });
}
function HomePage() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx(GradientBlobs, {}),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10 lg:gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxs(motion.p, { initial: reduce ? false : {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.6
          }, className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary-glow" }),
            "Available for new projects"
          ] }),
          /* @__PURE__ */ jsxs(motion.h1, { initial: reduce ? false : {
            opacity: 0,
            y: 18
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.7,
            delay: 0.05
          }, className: "mt-5 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]", children: [
            "Hi, I'm ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: profile.name }),
            ".",
            /* @__PURE__ */ jsx("br", {}),
            "I build software that just works."
          ] }),
          /* @__PURE__ */ jsxs(motion.p, { initial: reduce ? false : {
            opacity: 0,
            y: 14
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.7,
            delay: 0.15
          }, className: "mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground", children: [
            profile.tagline,
            " Specializing in Flutter, Node.js, Laravel and AI-powered workflow automations with Make.com & n8n."
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { initial: reduce ? false : {
            opacity: 0,
            y: 14
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.7,
            delay: 0.25
          }, className: "mt-8 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 transition", children: [
              "View my work",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-accent/40 transition", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
              "Get in touch"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground ml-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
              profile.location
            ] })
          ] }),
          /* @__PURE__ */ jsx(motion.div, { initial: reduce ? false : {
            opacity: 0,
            y: 14
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.7,
            delay: 0.35
          }, className: "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3", children: profile.stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 py-3", children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-display font-bold text-gradient", children: s.value }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: reduce ? false : {
          opacity: 0,
          scale: 0.92
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, className: "lg:col-span-5 relative mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative w-[280px] sm:w-[340px] lg:w-[400px] aspect-[4/5]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-full h-full", children: orbitIcons.map((orbit, index) => /* @__PURE__ */ jsx(OrbitIcon, { icon: orbit.icon, label: orbit.label, color: orbit.color, delay: orbit.delay, index }, index)) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl animate-float" }),
          /* @__PURE__ */ jsx(motion.div, { animate: {
            opacity: [0.3, 0.8, 0.3]
          }, transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -inset-2 rounded-[2rem] bg-gradient-primary blur-xl" }),
          /* @__PURE__ */ jsx(motion.div, { animate: {
            opacity: [0.2, 0.6, 0.2],
            backgroundColor: ["rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.3)", "rgba(99, 102, 241, 0.1)"]
          }, transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -inset-2 rounded-[2rem]" }),
          /* @__PURE__ */ jsxs("div", { className: "relative h-full w-full overflow-hidden rounded-[2rem] gradient-border shadow-elegant", children: [
            /* @__PURE__ */ jsx("img", { src: portrait, alt: `${profile.name} portrait`, className: "h-full w-full object-cover", loading: "eager" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-elegant", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Now" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium", children: "Building at Imara" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 shadow-elegant", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Stack" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-medium", children: "Flutter · Node · AI" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 sm:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-20" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-end justify-between gap-6 mb-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(motion.p, { initial: {
              opacity: 0,
              y: 12
            }, whileInView: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.6
            }, className: "text-xs uppercase tracking-[0.3em] text-primary-glow font-semibold mb-3", children: "Toolbox" }),
            /* @__PURE__ */ jsx("h2", { className: "text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent", children: "A modern, full-stack toolkit" })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/skills", className: "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary-glow hover:bg-primary/10 transition-all hover:border-primary/60", children: [
            "Explore all ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: skillCategories.map((cat, i) => /* @__PURE__ */ jsx(AnimatedSection, { delay: i * 0.08, children: /* @__PURE__ */ jsxs(motion.div, { whileHover: {
          y: -8,
          scale: 1.02
        }, transition: {
          type: "spring",
          stiffness: 400,
          damping: 30
        }, className: "group h-full relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" }),
          /* @__PURE__ */ jsxs("div", { className: "relative h-full glass backdrop-blur-sm rounded-3xl p-7 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" }),
            /* @__PURE__ */ jsx(motion.div, { whileHover: {
              scale: 1.1,
              rotate: 5
            }, transition: {
              type: "spring",
              stiffness: 400,
              damping: 30
            }, className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary mb-4 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300", children: categoryIcons[cat.key] || /* @__PURE__ */ jsx(Code2, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display font-bold text-lg mb-5 text-foreground group-hover:text-primary transition-colors duration-300", children: cat.title }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cat.items.slice(0, 6).map((s, idx) => /* @__PURE__ */ jsx(motion.span, { initial: {
              opacity: 0,
              scale: 0.8
            }, whileInView: {
              opacity: 1,
              scale: 1
            }, transition: {
              duration: 0.3,
              delay: idx * 0.05
            }, className: "text-[12px] font-medium rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-muted-foreground hover:border-primary/60 hover:bg-primary/15 hover:text-primary transition-all duration-200 cursor-default", children: s }, s)) }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" })
          ] })
        ] }) }, cat.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-16 sm:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-end justify-between gap-6 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2", children: "Selected work" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "Featured projects" })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/projects", className: "hidden sm:inline-flex items-center gap-1 text-sm text-primary-glow hover:opacity-80", children: [
          "All projects ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5", children: projects.slice(0, 2).map((p, i) => /* @__PURE__ */ jsx(AnimatedSection, { delay: i * 0.08, children: /* @__PURE__ */ jsxs("div", { className: "group relative h-full glass rounded-3xl p-6 sm:p-7 overflow-hidden hover:shadow-elegant transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-semibold", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.blurb }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: p.stack.slice(0, 5).map((t) => /* @__PURE__ */ jsx("span", { className: "text-[11px] rounded-full bg-secondary/60 px-2 py-0.5", children: t }, t)) })
        ] })
      ] }) }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl glass p-10 sm:p-14 text-center shadow-elegant", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-primary opacity-10" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold", children: "Have a project in mind?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Whether it's a mobile app, a full-stack platform, or an automation that saves your team hours every week — let's talk." }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow", children: [
          "Let's work together ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
export {
  HomePage as component
};
