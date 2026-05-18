import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState, useRef, useEffect, Suspense, lazy } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Download, AlertCircle } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const PdfViewerComponent = lazy(
  () => import("./PdfViewerClient-wm3HgLYN.js").then((m) => ({
    default: m.PdfViewerClient
  }))
);
function ResumeViewer({ open, onOpenChange }) {
  const [loading, setLoading] = useState(true);
  const [fileExists, setFileExists] = useState(true);
  const [error, setError] = useState(null);
  const getResumePath = () => {
    const base = "/";
    return base.endsWith("/") ? `${base}Resume.pdf` : `${base}/Resume.pdf`;
  };
  const fileRef = useRef(getResumePath());
  useEffect(() => {
    if (open) {
      setLoading(true);
      setFileExists(true);
      setError(null);
      fetch(fileRef.current).then((res) => {
        console.log(`📄 PDF file check: ${fileRef.current}`, `Status: ${res.status}`);
        if (!res.ok) {
          setFileExists(false);
          setError(
            `Resume file not found (HTTP ${res.status}). Ensure Resume.pdf is in /public folder.`
          );
          setLoading(false);
        } else {
          console.log(`✅ PDF file exists at ${fileRef.current}`);
          setFileExists(true);
        }
      }).catch((err) => {
        console.error("❌ PDF file check error:", err);
        setFileExists(false);
        setError("Failed to check resume file. Ensure Resume.pdf exists in /public folder.");
        setLoading(false);
      });
    }
  }, [open]);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setLoading(false);
    setError(null);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileRef.current;
    link.download = "Arsalan-Ali-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "w-[95vw] max-w-7xl h-[95vh] sm:h-[90vh] md:max-h-[95vh] overflow-hidden flex flex-col p-0 gap-0 rounded-lg", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "border-b bg-muted/30 px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex flex-row items-center justify-between space-y-0 shrink-0", children: [
      /* @__PURE__ */ jsx(DialogTitle, { className: "text-lg sm:text-xl md:text-2xl font-display truncate", children: "My Resume" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 sm:gap-2 shrink-0", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          onClick: handleDownload,
          disabled: !fileExists,
          title: "Download resume",
          className: "h-8 w-8 sm:h-9 sm:w-9 absolute top-2 right-10",
          children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-auto bg-background w-full", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-96 h-full w-full", children: /* @__PURE__ */ jsx("div", { className: "text-sm sm:text-base text-muted-foreground", children: "Loading resume..." }) }),
      !fileExists && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center min-h-96 h-full w-full gap-3 sm:gap-4 px-3 sm:px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-full bg-red-100 dark:bg-red-900/30 p-2 sm:p-3", children: /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-500" }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base", children: "Resume File Not Found" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4", children: error }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground bg-muted/50 rounded p-2 sm:p-3 text-left", children: /* @__PURE__ */ jsx("p", { className: "font-mono break-all", children: "📁 /public/Resume.pdf" }) })
        ] })
      ] }),
      fileExists && /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full p-2 sm:p-3 md:p-4", children: /* @__PURE__ */ jsx(
        Suspense,
        {
          fallback: /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground py-8", children: "Loading PDF viewer..." }),
          children: typeof window !== "undefined" && /* @__PURE__ */ jsx(
            PdfViewerComponent,
            {
              fileRef,
              onDocumentLoadSuccess,
              onError: () => {
                setFileExists(false);
                setError("Failed to load PDF. The file may be corrupted or invalid.");
                setLoading(false);
              }
            }
          )
        }
      ) })
    ] })
  ] }) });
}
export {
  ResumeViewer
};
