let cachedWebGLSupport: boolean | null = null;

export function hasUsableWebGL() {
  if (cachedWebGLSupport !== null) return cachedWebGLSupport;

  try {
    if (typeof window === "undefined") return false;
    if (typeof navigator !== "undefined" && navigator.webdriver) return false;
    if (typeof window.WebGL2RenderingContext === "undefined") return false;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", {
      alpha: true,
      depth: true,
      stencil: false,
      antialias: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      powerPreference: "default",
      failIfMajorPerformanceCaveat: false,
    }) as WebGL2RenderingContext | null;

    if (!context || context.isContextLost()) {
      cachedWebGLSupport = false;
      return false;
    }

    const debugInfo = context.getExtension("WEBGL_debug_renderer_info") as { UNMASKED_RENDERER_WEBGL: number } | null;
    const renderer = debugInfo ? String(context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|software|llvmpipe/i.test(renderer)) {
      cachedWebGLSupport = false;
      return false;
    }

    const version = context.getParameter(context.VERSION);
    cachedWebGLSupport = typeof version === "string" && version.includes("WebGL 2");
    return cachedWebGLSupport;
  } catch {
    cachedWebGLSupport = false;
    return false;
  }
}
