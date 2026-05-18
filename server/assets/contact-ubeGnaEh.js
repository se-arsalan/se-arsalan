import { jsxs, jsx } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, AlertCircle, Check, Send } from "lucide-react";
import { P as PageShell, S as SectionHeading, A as AnimatedSection, c as profile } from "./router-BaTnnXgQ.js";
import "@tanstack/react-router";
import "framer-motion";
const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a little more (10+ chars)").max(2e3)
});
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });
  const onSubmit = async (data) => {
    setError(null);
    try {
      const webhookUrl = "https://hook.eu1.make.com/uad2exm21xodym0mrjlblcd1jxafdz42";
      const apiKey = "2026_MY_SECRET_OF_PORTFOLIO";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-make-apikey": apiKey
        },
        body: JSON.stringify({
          request_hash: btoa(JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }))
        })
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5e3);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Contact", title: "Let's build something great.", description: "Have a project, an idea, or a workflow you want to automate? Drop me a message I usually reply within a day." }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsx(AnimatedSection, { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-3xl p-6 sm:p-8 h-full", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg", children: "Reach me directly" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Prefer email or a quick call? Use any of these." }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ jsx(ContactLine, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), label: "Email", value: profile.email, href: `mailto:${profile.email}` }),
          /* @__PURE__ */ jsx(ContactLine, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` }),
          /* @__PURE__ */ jsx(ContactLine, { icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }), label: "Location", value: profile.location })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border/60", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Find me online" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer", className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-accent/40 transition", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: profile.github, target: "_blank", rel: "noreferrer", className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-accent/40 transition", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, className: "lg:col-span-7", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "glass rounded-3xl p-6 sm:p-8 space-y-5", children: [
        /* @__PURE__ */ jsx(Field, { label: "Your name", error: errors.name?.message, children: /* @__PURE__ */ jsx("input", { ...register("name"), placeholder: "Jane Doe", className: "w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Email", error: errors.email?.message, children: /* @__PURE__ */ jsx("input", { ...register("email"), type: "email", placeholder: "jane@company.com", className: "w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Message", error: errors.message?.message, children: /* @__PURE__ */ jsx("textarea", { ...register("message"), rows: 5, placeholder: "Tell me about your project, timeline and goals…", className: "w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 pt-1", children: [
          error ? /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 text-sm text-destructive", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
            " ",
            error
          ] }) : sent ? /* @__PURE__ */ jsxs("p", { className: "inline-flex items-center gap-2 text-sm text-primary-glow", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
            " Message sent securely!"
          ] }) : /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "By sending, you agree to be contacted at the email provided." }),
          /* @__PURE__ */ jsxs("button", { type: "submit", disabled: isSubmitting, className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-95 disabled:opacity-60 transition", children: [
            isSubmitting ? "Sending…" : "Send message",
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-1.5", children: label }),
    children,
    error && /* @__PURE__ */ jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
function ContactLine({
  icon,
  label,
  value,
  href
}) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-secondary/40 px-4 py-3 hover:bg-accent/40 transition", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", children: value })
    ] })
  ] });
  return /* @__PURE__ */ jsx("li", { children: href ? /* @__PURE__ */ jsx("a", { href, children: inner }) : inner });
}
export {
  ContactPage as component
};
