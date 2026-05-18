import { jsx, jsxs } from "react/jsx-runtime";
import { Document, Page, pdfjs } from "react-pdf";
import React__default, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
function PdfViewerClient({ fileRef, onDocumentLoadSuccess, onError }) {
  const [numPages, setNumPages] = useState(null);
  const [scale, setScale] = useState(1);
  React__default.useEffect(() => {
    const updateScale = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width < 640) {
        setScale(0.8);
      } else if (width < 1024) {
        setScale(1.1);
      } else {
        setScale(1.4);
      }
    };
    updateScale();
    const resizeListener = () => updateScale();
    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);
  const handleLoadSuccess = (doc) => {
    console.log("✅ PDF loaded, pages:", doc.numPages);
    setNumPages(doc.numPages);
    onDocumentLoadSuccess(doc);
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-full", children: /* @__PURE__ */ jsx(
    Document,
    {
      file: fileRef.current,
      onLoadSuccess: handleLoadSuccess,
      onLoadError: (error) => {
        console.error("❌ PDF load error:", error);
        onError?.();
      },
      loading: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center p-4 sm:p-6 md:p-8", children: /* @__PURE__ */ jsx("div", { className: "text-sm sm:text-base text-muted-foreground", children: "Loading PDF..." }) }),
      error: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-red-600 dark:text-red-400 mb-2 text-sm sm:text-base", children: "⚠️ Failed to load PDF" }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs sm:text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "File: ",
            fileRef.current
          ] }),
          /* @__PURE__ */ jsx("p", { children: "Check browser console for details" })
        ] })
      ] }),
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 sm:gap-3 md:gap-4 px-2 sm:px-0", children: numPages && Array.from(new Array(numPages), (el, index) => /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "shadow-lg rounded-md border border-border overflow-hidden", children: /* @__PURE__ */ jsx(
        Page,
        {
          pageNumber: index + 1,
          scale,
          renderTextLayer: true,
          renderAnnotationLayer: true,
          loading: /* @__PURE__ */ jsx("div", { className: "w-full h-64 sm:h-80 flex items-center justify-center bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "text-xs sm:text-sm text-muted-foreground", children: [
            "Rendering page ",
            index + 1,
            "..."
          ] }) })
        }
      ) }) }, `page_${index + 1}`)) })
    }
  ) });
}
export {
  PdfViewerClient
};
