import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, ScriptOnce, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect, Suspense, lazy } from "react";
import { Moon, Sun, X, Menu, Mail, Github, Linkedin, ArrowLeft, Database, GitBranch, CheckCircle2, LucideCloudCog, Route as Route$9, Zap } from "lucide-react";
import { z } from "zod";
import { useReducedMotion, motion } from "framer-motion";
const appCss = "/assets/styles-AG2PliWD.css";
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "relative inline-flex h-9 w-9 items-center justify-center rounded-full glass hover:bg-accent/40 transition-colors",
      children: theme === "dark" ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4 rotate-0 scale-100 transition-all" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all" })
    }
  );
}
const ResumeViewerComponent = lazy(
  () => import("./ResumeViewer-BiSFb835.js").then((m) => ({ default: m.ResumeViewer }))
);
function ResumeViewerLazy({ open, onOpenChange }) {
  return /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(ResumeViewerComponent, { open, onOpenChange }) });
}
const profile = {
  name: "Arsalan Ali",
  shortName: "Arsalan",
  initials: "AA",
  tagline: "I build full-stack apps and intelligent automations that move businesses forward.",
  location: "Puttalam, Sri Lanka",
  email: "arsalansoft11@gmail.com",
  phone: "+94 750 780 890",
  linkedin: "www.linkedin.com/in/arsalan-ali-235418283",
  github: "https://github.com",
  summary: "Software Developer with 4+ years of experience in web, mobile, and automation development. Over 2.5 years of hands-on experience building workflow automations using Make.com, n8n, and Zapier to improve business processes and efficiency. Skilled in Flutter, Node.js, and Laravel, with experience developing full-stack applications such as real-time chat systems and sports team management platforms with reporting and data tracking features.",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Automation Focus", value: "2.5y" },
    { label: "Projects Shipped", value: "20+" },
    { label: "Stack Layers", value: "Full" }
  ]
};
const skillCategories = [
  {
    title: "Languages & Frameworks",
    key: "Frameworks",
    items: [
      "Flutter",
      "Dart",
      "Laravel",
      "PHP",
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  {
    title: "Databases",
    key: "Backend",
    items: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL", "Firebase", "NoSQL"]
  },
  {
    title: "Automation Tools",
    key: "Automation",
    items: ["Make.com", "N8N", "Zapier", "Airtable", "Monday.com"]
  },
  {
    title: "Tools & Practices",
    key: "Tools",
    items: [
      "REST APIs",
      "Git / GitHub",
      "AI Assistant Build & Finetune",
      "AI System Prompting",
      "OpenAI",
      "Google Apps Script",
      "Figma UI/UX"
    ]
  },
  {
    title: "Services & Platforms",
    key: "Services",
    items: ["Shopify", "Softr.io", "Google Cloud", "Cloudinary", "Stripe", "Twilio"]
  }
];
const experiences = [
  {
    role: "Software Developer",
    company: "Imara Software Solutions",
    period: "May 2023 — Present",
    bullets: [
      "Developed cross-platform mobile applications using Flutter with scalable architecture and optimized UI performance.",
      "Designed and built backend services using Node.js with modular architecture and RESTful APIs.",
      "Integrated REST APIs for client and third-party services ensuring secure, efficient data exchange.",
      "Built a full-stack Library Management System using React and Node.js with CRUD, role-based access, and optimized DB queries.",
      "Engineered a multi-vendor eCommerce platform using Laravel with product, order, and vendor management.",
      "Developed a Flutter-based food delivery app with Google Maps, real-time tracking, Stripe payments, and inventory management.",
      "Used Git (GitHub, AWS CodeCommit) for version control, code reviews, and CI/CD workflows."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Imara Software Solutions",
    period: "Feb 2023 — Apr 2023",
    bullets: [
      "Built responsive, user-friendly interfaces with HTML, CSS, and JavaScript.",
      "Developed enterprise web applications using React, AWS, and MongoDB.",
      "Built scalable backend systems with Node.js, Express, and Laravel (MVC).",
      "Designed and integrated RESTful APIs for seamless frontend–backend communication."
    ]
  },
  {
    role: "Freelancer",
    company: "Upwork · Fiverr · Freelancer.com",
    period: "May 2022 — Jan 2023",
    bullets: [
      "Built responsive websites with Shopify focused on clean UI and smooth customer experience.",
      "Customized and built websites using Softr, adapting platforms to existing structures.",
      "Optimized performance, security, and SEO to improve loading speed and search visibility."
    ]
  },
  {
    role: "Self-Taught UI/UX Designer",
    company: "Figma",
    period: "2020 — 2022",
    bullets: [
      "Designed intuitive interfaces and interactive prototypes using Figma.",
      "Translated design systems into clean front-end code (HTML, CSS, JavaScript).",
      "Built a portfolio of 10+ design projects: e-commerce, dashboards, and mobile apps.",
      "Continuously refined skills through courses, challenges, and freelance feedback."
    ]
  }
];
const projects = [
  {
    title: "Chat-Box",
    blurb: "Real-time cross-platform chat app inspired by WhatsApp — instant messaging, online/offline tracking via Socket.io, and media uploads to Cloudinary.",
    description: "Built with React for web, Flutter + BLoC for mobile, and a Node.js + Express backend. Designed a clean, user-friendly UI for seamless communication across all devices.",
    stack: ["React", "Flutter", "Node.js", "Express", "Socket.io", "Cloudinary"],
    platforms: ["Web", "iOS", "Android"]
  },
  {
    title: "Sports Club Manager",
    blurb: "Full-featured club management system with CRUD for player logs and match events. Firebase enables real-time score updates across devices.",
    description: "Flutter + BLoC delivers a smooth cross-platform experience. Backend built with Node.js + MongoDB for reliable data management and reporting.",
    stack: ["Flutter", "BLoC", "Node.js", "Express", "MongoDB", "Firebase"],
    platforms: ["iOS", "Android"]
  },
  {
    title: "Auto Posting Shorts (YouTube & Facebook)",
    blurb: "Automated workflow that generates and posts short-form video content to YouTube and Facebook — eliminating manual creation and scheduling.",
    description: "Built on n8n for orchestration, integrating Flex Tool API for video processing, image generation APIs for dynamic visuals, and social platform APIs for auto-posting.",
    stack: ["n8n", "Flex Tool API", "Image Gen API", "YouTube API", "Facebook API"],
    platforms: ["Automation"]
  },
  {
    title: "Documentary Folder Management System",
    blurb: "Intelligent document automation that monitors customer emails, extracts project details, and organizes everything into Google Drive folders.",
    description: "Converts email body to PDF and uses an OpenAI Assistant to classify projects via technical identifiers — streamlining document workflows for enterprise clients.",
    stack: ["Make.com", "Gmail API", "Google Drive API", "OpenAI Assistant", "PDF Generator"],
    platforms: ["Automation"]
  }
];
const education = [
  {
    title: "Diploma in Software Development",
    institution: "Imara Technolgies Study Center (IMTS), Puttalam",
    detail: "Comprehensive program covering software development principles, programming languages, and practical application development."
  },
  {
    title: "Diploma in Computer Applications (DICA)",
    institution: "Refresh Metro Campus, Puttalam",
    detail: "Foundational program covering computer applications, software basics, and IT fundamentals."
  },
  {
    title: "Microsoft Office Specialist (MOS)",
    institution: "Microsoft",
    detail: "Certified proficiency across the Microsoft Office productivity suite."
  }
];
const languages = [
  { name: "English", level: "Fluent" },
  { name: "Tamil", level: "Native" }
];
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs("header", { className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass shadow-elegant" : ""}`,
          children: [
            /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold shadow-glow", children: profile.initials }),
              /* @__PURE__ */ jsxs("span", { className: "hidden sm:block font-display font-semibold tracking-tight", children: [
                profile.shortName,
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: ".dev" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-1", children: nav.map((n) => /* @__PURE__ */ jsx(
              Link,
              {
                to: n.to,
                activeOptions: { exact: n.to === "/" },
                activeProps: { className: "text-foreground bg-accent/60" },
                inactiveProps: { className: "text-muted-foreground" },
                className: "px-3 py-1.5 rounded-full text-sm hover:text-foreground hover:bg-accent/40 transition-colors",
                children: n.label
              },
              n.to
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ThemeToggle, {}),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setResumeOpen(true),
                  className: "hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-opacity",
                  children: "My Resume"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setOpen((v) => !v),
                  "aria-label": "Menu",
                  className: "lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full glass",
                  children: open ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
                }
              )
            ] })
          ]
        }
      ),
      open && /* @__PURE__ */ jsx("div", { className: "lg:hidden mt-2 glass rounded-2xl p-3 shadow-elegant animate-in fade-in slide-in-from-top-2", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
        nav.map((n) => /* @__PURE__ */ jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            activeOptions: { exact: n.to === "/" },
            activeProps: { className: "bg-accent/60 text-foreground" },
            inactiveProps: { className: "text-muted-foreground" },
            className: "px-4 py-2.5 rounded-xl text-sm hover:bg-accent/40",
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setResumeOpen(true),
            className: "px-4 py-2.5 rounded-xl text-sm hover:bg-accent/40 text-muted-foreground",
            children: "Get My Resume"
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(ResumeViewerLazy, { open: resumeOpen, onOpenChange: setResumeOpen })
  ] });
}
const ensureProtocol = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "mt-24 border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold", children: profile.initials }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display font-semibold leading-tight", children: profile.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: profile.location })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-foreground transition-colors", children: "About" }),
        /* @__PURE__ */ jsx(Link, { to: "/projects", className: "hover:text-foreground transition-colors", children: "Projects" }),
        /* @__PURE__ */ jsx(Link, { to: "/experience", className: "hover:text-foreground transition-colors", children: "Experience" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-foreground transition-colors", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `mailto:${profile.email}`,
            "aria-label": "Email",
            className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-accent/40 transition-colors",
            children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: ensureProtocol(profile.github),
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "GitHub",
            className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-accent/40 transition-colors",
            children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: ensureProtocol(profile.linkedin),
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "LinkedIn",
            className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-accent/40 transition-colors",
            children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      profile.name,
      ". Crafted with care."
    ] })
  ] }) });
}
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center glass rounded-3xl p-10 shadow-elegant", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-3 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow",
        children: "Back home"
      }
    ) })
  ] }) });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arsalan Ali — Software Developer & Automations Expert" },
      {
        name: "description",
        content: "Portfolio of Arsalan Ali — Software Developer specializing in Flutter, Node.js, Laravel and workflow automations with Make.com, n8n and AI."
      },
      { name: "author", content: "Arsalan Ali" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Arsalan Ali — Software Developer & Automations Expert" },
      { name: "twitter:title", content: "Arsalan Ali — Software Developer & Automations Expert" },
      {
        name: "description",
        content: "My Digital Canvas creates a modern, responsive personal portfolio website from your resume and images."
      },
      {
        property: "og:description",
        content: "My Digital Canvas creates a modern, responsive personal portfolio website from your resume and images."
      },
      {
        name: "twitter:description",
        content: "My Digital Canvas creates a modern, responsive personal portfolio website from your resume and images."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/329f35f2-bc62-44c3-b603-8f1aebdedcd7/id-preview-cb577976--bf817018-c3fe-4bf4-a04b-4d987f93637d.lovable.app-1777280503631.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/329f35f2-bc62-44c3-b603-8f1aebdedcd7/id-preview-cb577976--bf817018-c3fe-4bf4-a04b-4d987f93637d.lovable.app-1777280503631.png"
      },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(ScriptOnce, { children: themeScript }),
      /* @__PURE__ */ jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./skills-CztS45Zk.js");
const Route$7 = createFileRoute("/skills")({
  head: () => ({
    meta: [{
      title: "Skills — Arsalan Ali"
    }, {
      name: "description",
      content: "Languages, frameworks, databases, automation tools and engineering practices used by Arsalan Ali."
    }, {
      property: "og:title",
      content: "Skills — Arsalan Ali"
    }, {
      property: "og:description",
      content: "Flutter, Node.js, Laravel, React, MongoDB, Make.com, n8n, OpenAI and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projects-CVCfMfia.js");
const Route$6 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — Arsalan Ali"
    }, {
      name: "description",
      content: "Selected projects: Chat-Box real-time messaging, Sports Club Manager, AI auto-posting workflow, and document automation."
    }, {
      property: "og:title",
      content: "Projects — Arsalan Ali"
    }, {
      property: "og:description",
      content: "Real-world full-stack apps and intelligent automations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./experience-BtyvbHwG.js");
const Route$5 = createFileRoute("/experience")({
  head: () => ({
    meta: [{
      title: "Experience — Arsalan Ali"
    }, {
      name: "description",
      content: "Work experience: Software Developer at Imara Software Solutions, freelance projects, and self-taught UI/UX design."
    }, {
      property: "og:title",
      content: "Experience — Arsalan Ali"
    }, {
      property: "og:description",
      content: "4+ years building software across full-stack, mobile and automation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./education-CgsWYeE0.js");
const Route$4 = createFileRoute("/education")({
  head: () => ({
    meta: [{
      title: "Education — Arsalan Ali"
    }, {
      name: "description",
      content: "Education and certifications including DICA and Microsoft Office Specialist."
    }, {
      property: "og:title",
      content: "Education — Arsalan Ali"
    }, {
      property: "og:description",
      content: "Diploma in Computer Applications and Microsoft Office Specialist certification."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-ubeGnaEh.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Arsalan Ali"
    }, {
      name: "description",
      content: "Get in touch with Arsalan Ali for full-stack development, Flutter apps and workflow automation projects."
    }, {
      property: "og:title",
      content: "Contact — Arsalan Ali"
    }, {
      property: "og:description",
      content: "Let's work together — software development and automation projects."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
z.object({
  name: z.string().trim().min(1, "Please share your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a little more (10+ chars)").max(2e3)
});
function AnimatedSection({
  children,
  className,
  delay = 0
}) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: reduce ? false : { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return /* @__PURE__ */ jsxs(
    AnimatedSection,
    {
      className: `mb-12 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`,
      children: [
        eyebrow && /* @__PURE__ */ jsxs("p", { className: "mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-primary" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground", children: description })
      ]
    }
  );
}
function GradientBlobs() {
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden -z-10", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-primary-glow/25 blur-3xl animate-blob [animation-delay:-4s]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-accent2/20 blur-3xl animate-blob [animation-delay:-8s]" })
  ] });
}
function PageShell({ children }) {
  return /* @__PURE__ */ jsxs("main", { className: "relative pt-28 pb-10 min-h-[calc(100vh-200px)]", children: [
    /* @__PURE__ */ jsx(GradientBlobs, {}),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children })
  ] });
}
const Route$2 = createFileRoute("/automations")({
  head: () => ({
    meta: [
      { title: "Automation Workflows — Arsalan Ali" },
      {
        name: "description",
        content: "Recently built automation workflows using Make.com, n8n, and Zapier."
      },
      { property: "og:title", content: "Automation Workflows — Arsalan Ali" }
    ]
  }),
  component: AutomationsPage
});
const workflows = [
  {
    id: "wf1",
    name: "Database Sync to Email",
    description: "Syncs database updates and sends notifications",
    platform: "make",
    nodes: [
      {
        id: "n1",
        label: "Database",
        icon: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5" }),
        x: 50,
        y: 50,
        color: "#777BB4"
      },
      {
        id: "n2",
        label: "Filter",
        icon: /* @__PURE__ */ jsx(GitBranch, { className: "w-5 h-5" }),
        x: 200,
        y: 50,
        color: "#6B46C1"
      },
      {
        id: "n3",
        label: "Email",
        icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
        x: 350,
        y: 50,
        color: "#F7DF1E"
      },
      {
        id: "n4",
        label: "Complete",
        icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5" }),
        x: 500,
        y: 50,
        color: "#10B981"
      }
    ],
    connections: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" }
    ]
  },
  {
    id: "wf2",
    name: "Data Transfer Pipeline",
    description: "Transfers data between multiple systems",
    platform: "n8n",
    nodes: [
      {
        id: "n1",
        label: "API Source",
        icon: /* @__PURE__ */ jsx(LucideCloudCog, { className: "w-5 h-5" }),
        x: 50,
        y: 200,
        color: "#FF2D20"
      },
      {
        id: "n2",
        label: "Transform",
        icon: /* @__PURE__ */ jsx(Route$9, { className: "w-5 h-5" }),
        x: 200,
        y: 200,
        color: "#34f286"
      },
      {
        id: "n3",
        label: "Database",
        icon: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5" }),
        x: 350,
        y: 200,
        color: "#3776AB"
      },
      {
        id: "n4",
        label: "Notification",
        icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
        x: 500,
        y: 200,
        color: "#f4632b"
      }
    ],
    connections: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" }
    ]
  },
  {
    id: "wf3",
    name: "Reporting Automation",
    description: "Generates and sends automated reports",
    platform: "zapier",
    nodes: [
      {
        id: "n1",
        label: "Trigger",
        icon: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5" }),
        x: 50,
        y: 350,
        color: "#00C4B4"
      },
      {
        id: "n2",
        label: "Collect Data",
        icon: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5" }),
        x: 200,
        y: 350,
        color: "#777BB4"
      },
      {
        id: "n3",
        label: "Format",
        icon: /* @__PURE__ */ jsx(GitBranch, { className: "w-5 h-5" }),
        x: 350,
        y: 350,
        color: "#6B46C1"
      },
      {
        id: "n4",
        label: "Send Report",
        icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
        x: 500,
        y: 350,
        color: "#10B981"
      }
    ],
    connections: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" }
    ]
  }
];
const platformColors = {
  make: "from-blue-500 to-blue-600",
  n8n: "from-red-500 to-red-600",
  zapier: "from-teal-500 to-teal-600"
};
const WorkflowCanvas = ({ workflows: workflows2 }) => {
  const allNodes = workflows2.flatMap(
    (wf, wfIdx) => wf.nodes.map((node) => ({
      ...node,
      workflowId: wf.id,
      workflowIndex: wfIdx
    }))
  );
  const allConnections = workflows2.flatMap(
    (wf, wfIdx) => wf.connections.map((conn) => ({
      ...conn,
      workflowId: wf.id,
      workflowIndex: wfIdx
    }))
  );
  const calculateNodePosition = (index, workflowIndex, total) => {
    const cols = Math.ceil(Math.sqrt(total));
    const row = Math.floor(index / cols);
    const col = index % cols;
    const cellWidth = 100 / cols;
    const cellHeight = 100 / Math.ceil(total / cols);
    const x = col * cellWidth + cellWidth / 2;
    const y = row * cellHeight + cellHeight / 2;
    return { x, y };
  };
  const nodePositions = allNodes.map(
    (node, idx) => calculateNodePosition(idx, node.workflowIndex, allNodes.length)
  );
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40, scale: 0.9 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.8, delay: 0.2 },
      viewport: { once: true, amount: 0.3 },
      className: "relative rounded-2xl overflow-hidden",
      style: {
        background: "linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)",
        height: "600px"
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
              backgroundSize: "40px 40px"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "absolute inset-0 w-full h-full",
            preserveAspectRatio: "none",
            style: { pointerEvents: "none" },
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs("filter", { id: "lineGlow", children: [
                  /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "2", result: "coloredBlur" }),
                  /* @__PURE__ */ jsxs("feMerge", { children: [
                    /* @__PURE__ */ jsx("feMergeNode", { in: "coloredBlur" }),
                    /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "marker",
                  {
                    id: "arrow",
                    markerWidth: "10",
                    markerHeight: "10",
                    refX: "9",
                    refY: "3",
                    orient: "auto",
                    markerUnits: "userSpaceOnUse",
                    children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: "#FF6B6B" })
                  }
                )
              ] }),
              allConnections.map((conn, idx) => {
                const fromIdx = allNodes.findIndex(
                  (n) => n.id === conn.from && n.workflowId === conn.workflowId
                );
                const toIdx = allNodes.findIndex(
                  (n) => n.id === conn.to && n.workflowId === conn.workflowId
                );
                if (fromIdx === -1 || toIdx === -1) return null;
                const fromPos = nodePositions[fromIdx];
                const toPos = nodePositions[toIdx];
                const x1Pct = fromPos.x;
                const y1Pct = fromPos.y;
                const x2Pct = toPos.x;
                const y2Pct = toPos.y;
                return /* @__PURE__ */ jsxs("g", { children: [
                  /* @__PURE__ */ jsx(
                    "line",
                    {
                      x1: `${x1Pct}%`,
                      y1: `${y1Pct}%`,
                      x2: `${x2Pct}%`,
                      y2: `${y2Pct}%`,
                      stroke: "#FF6B6B",
                      strokeWidth: "10",
                      opacity: "0.1",
                      filter: "url(#lineGlow)"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "line",
                    {
                      x1: `${x1Pct}%`,
                      y1: `${y1Pct}%`,
                      x2: `${x2Pct}%`,
                      y2: `${y2Pct}%`,
                      stroke: "#FF6B6B",
                      strokeWidth: "4",
                      opacity: "0.7"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.line,
                    {
                      x1: `${x1Pct}%`,
                      y1: `${y1Pct}%`,
                      x2: `${x2Pct}%`,
                      y2: `${y2Pct}%`,
                      stroke: "#FF6B6B",
                      strokeWidth: "3",
                      markerEnd: "url(#arrow)",
                      initial: { pathLength: 0, opacity: 0 },
                      animate: { pathLength: 1, opacity: 1 },
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: idx * 0.2
                      }
                    }
                  ),
                  [0, 0.5].map((start, pIdx) => /* @__PURE__ */ jsx(
                    motion.circle,
                    {
                      cx: `${x1Pct}%`,
                      cy: `${y1Pct}%`,
                      r: "3",
                      fill: "#FF6B6B",
                      filter: "drop-shadow(0 0 3px #FF6B6B)",
                      initial: { cx: `${x1Pct}%`, cy: `${y1Pct}%` },
                      animate: {
                        cx: [`${x1Pct}%`, `${x2Pct}%`, `${x1Pct}%`],
                        cy: [`${y1Pct}%`, `${y2Pct}%`, `${y1Pct}%`]
                      },
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2 + start,
                        ease: "linear"
                      }
                    },
                    `particle-${pIdx}`
                  ))
                ] }, `conn-${idx}`);
              })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative w-full h-full z-10", children: allNodes.map((node, idx) => {
          const pos = nodePositions[idx];
          return /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { scale: 0, opacity: 0 },
              whileInView: { scale: 1, opacity: 1 },
              transition: { duration: 0.5, delay: idx * 0.05 },
              viewport: { once: false },
              className: "absolute transform -translate-x-1/2 -translate-y-1/2",
              style: {
                left: `${pos.x}%`,
                top: `${pos.y}%`
              },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: {
                      boxShadow: [
                        `0 0 0px ${node.color}40`,
                        `0 0 15px ${node.color}60`,
                        `0 0 0px ${node.color}40`
                      ]
                    },
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    whileHover: { scale: 1.2 },
                    className: "rounded-full flex items-center justify-center text-white font-semibold shadow-lg relative flex-shrink-0 border-2",
                    style: {
                      width: "60px",
                      height: "60px",
                      backgroundColor: node.color,
                      borderColor: `${node.color}80`,
                      boxShadow: `0 0 20px ${node.color}60, inset 0 -2px 5px rgba(0,0,0,0.3)`
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-lg", children: node.icon }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: {
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.3, 1]
                          },
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.1
                          },
                          className: "absolute inset-0 rounded-full border-2",
                          style: {
                            borderColor: node.color
                          }
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.4, delay: 0.3 + idx * 0.05 },
                    viewport: { once: false },
                    className: "absolute top-full mt-2 whitespace-nowrap -translate-x-1/2 left-1/2 text-xs font-medium text-slate-300",
                    children: node.label
                  }
                )
              ]
            },
            `${node.workflowId}-${node.id}`
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 flex gap-4 z-20", children: workflows2.map((wf) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5 },
            className: "flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-sm border border-slate-700/50",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-2 h-2 rounded-full",
                  style: { backgroundColor: wf.nodes[0]?.color || "#fff" }
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-slate-300", children: [
                wf.platform === "make" && "Make.com",
                wf.platform === "n8n" && "n8n",
                wf.platform === "zapier" && "Zapier"
              ] })
            ]
          },
          wf.id
        )) })
      ]
    }
  );
};
function AutomationsPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/skills",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8",
        children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
          "Back to Skills"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mb-12",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-bold mb-3", children: "Automation Workflows" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl", children: "Recently built automation workflows leveraging Make.com, n8n, and Zapier to streamline processes and save time." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-6",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Active Workflows Network" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "All automation workflows in a unified visualization" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(WorkflowCanvas, { workflows }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8", children: workflows.map((workflow, idx) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: idx * 0.1 },
          className: "p-6 rounded-2xl glass border border-border/50",
          viewport: { once: false, amount: 0.2 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: workflow.name }),
              /* @__PURE__ */ jsxs(
                motion.span,
                {
                  whileHover: { scale: 1.05 },
                  className: `inline-flex px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${platformColors[workflow.platform]}`,
                  children: [
                    workflow.platform === "make" && "Make.com",
                    workflow.platform === "n8n" && "n8n",
                    workflow.platform === "zapier" && "Zapier"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: workflow.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: workflow.nodes.map((node) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "px-2 py-1 rounded-md text-xs font-medium text-white",
                style: {
                  backgroundColor: node.color + "40",
                  border: `1px solid ${node.color}`
                },
                children: node.label
              },
              node.id
            )) })
          ]
        },
        workflow.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mt-16 p-8 rounded-2xl glass border border-border/50",
        viewport: { once: false, amount: 0.3 },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Want to build similar automations?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "I specialize in creating efficient automation workflows that integrate multiple systems and reduce manual work. Let's discuss how I can help streamline your processes." }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity",
              children: "Get in touch"
            }
          )
        ]
      }
    )
  ] });
}
const portrait$1 = "/assets/prtrait1-xvQALOe2.jpg";
const $$splitComponentImporter$1 = () => import("./about-DvUTii0l.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Arsalan Ali"
    }, {
      name: "description",
      content: "Get to know Arsalan Ali — software developer with 4+ years of experience across full-stack development and workflow automation."
    }, {
      property: "og:title",
      content: "About — Arsalan Ali"
    }, {
      property: "og:description",
      content: "Software developer focused on Flutter, Node.js, Laravel and AI-powered automations."
    }, {
      property: "og:image",
      content: portrait$1
    }, {
      name: "twitter:image",
      content: portrait$1
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const portrait = "/assets/portrait-GpELuoKe.jpg";
const $$splitComponentImporter = () => import("./index-Css13pb7.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Arsalan Ali — Software Developer & Automations Expert"
    }, {
      name: "description",
      content: "Full-stack developer building web, mobile and AI-powered automations. Flutter, Node.js, Laravel, Make.com, n8n."
    }, {
      property: "og:title",
      content: "Arsalan Ali — Software Developer & Automations Expert"
    }, {
      property: "og:description",
      content: "I build full-stack apps and intelligent automations that move businesses forward."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:image",
      content: portrait
    }, {
      name: "twitter:image",
      content: portrait
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SkillsRoute = Route$7.update({
  id: "/skills",
  path: "/skills",
  getParentRoute: () => Route$8
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$8
});
const ExperienceRoute = Route$5.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => Route$8
});
const EducationRoute = Route$4.update({
  id: "/education",
  path: "/education",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AutomationsRoute = Route$2.update({
  id: "/automations",
  path: "/automations",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AutomationsRoute,
  ContactRoute,
  EducationRoute,
  ExperienceRoute,
  ProjectsRoute,
  SkillsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  AnimatedSection as A,
  GradientBlobs as G,
  PageShell as P,
  SectionHeading as S,
  experiences as a,
  portrait as b,
  profile as c,
  projects as d,
  education as e,
  languages as l,
  portrait$1 as p,
  router as r,
  skillCategories as s
};
