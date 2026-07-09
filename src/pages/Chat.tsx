import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CHAT_SCOPE = "/chat/";
const CHAT_MANIFEST_PATH = "/chat-manifest.json";
const CHAT_SW_PRIMARY = "/chat-sw.js";
const THEME_COLOR = "#22c55e";
const LOADER_TIMEOUT_MS = 8000;

const Chat = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const WEBCHAT_ID = "91521bfb-f796-480a-82cb-5d94ff6239e2";
    const WEBCHAT_API = "https://widget.troiachat.com/chat/6a3ed185a898fd92c029fc94";
    const SCRIPT_ID = "wavechat-widget-script";

    // Impede zoom automático no iOS quando o teclado abre dentro do widget
    const viewportContent = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";

    let metaViewport = document.querySelector('meta[name="viewport"]');
    const originalViewport = metaViewport?.getAttribute("content");
    let createdViewportMeta = false;

    if (metaViewport) {
      metaViewport.setAttribute("content", viewportContent);
    } else {
      metaViewport = document.createElement("meta");
      metaViewport.name = "viewport";
      metaViewport.content = viewportContent;
      document.head.appendChild(metaViewport);
      createdViewportMeta = true;
    }

    let manifestLink = document.querySelector(`link[rel="manifest"][href="${CHAT_MANIFEST_PATH}"]`) as HTMLLinkElement | null;
    let createdManifestLink = false;
    if (!manifestLink) {
      manifestLink = document.createElement("link");
      manifestLink.rel = "manifest";
      manifestLink.href = CHAT_MANIFEST_PATH;
      document.head.appendChild(manifestLink);
      createdManifestLink = true;
    }

    let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    const originalThemeColor = themeColorMeta?.getAttribute("content");
    let createdThemeColorMeta = false;
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", THEME_COLOR);
    } else {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      themeColorMeta.content = THEME_COLOR;
      document.head.appendChild(themeColorMeta);
      createdThemeColorMeta = true;
    }

    const registerSw = async () => {
      if (!("serviceWorker" in navigator)) return;
      try {
        const existing = await navigator.serviceWorker.getRegistration(CHAT_SCOPE);
        if (existing) return existing;
        return await navigator.serviceWorker.register(CHAT_SW_PRIMARY, { scope: CHAT_SCOPE });
      } catch (errPrimary) {
        console.error("SW register failed:", errPrimary);
        return undefined;
      }
    };

    registerSw();

    // Adiciona classe no body para CSS
    document.body.classList.add("chat-fullscreen");

    // Carrega script da Wavechat
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "";
      script.setAttribute("data-webchat-id", WEBCHAT_ID);
      script.setAttribute("data-api", WEBCHAT_API);
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => setIsLoading(false);
      document.body.appendChild(script);
    } else {
      setIsLoading(false);
    }

    // Timeout de segurança
    const timeout = setTimeout(() => setIsLoading(false), LOADER_TIMEOUT_MS);

    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("chat-fullscreen");
      if (metaViewport && originalViewport) {
        metaViewport.setAttribute("content", originalViewport);
      } else if (createdViewportMeta && metaViewport) {
        metaViewport.remove();
      }

      if (manifestLink && createdManifestLink) {
        manifestLink.remove();
      }

      if (themeColorMeta && originalThemeColor) {
        themeColorMeta.setAttribute("content", originalThemeColor);
      } else if (createdThemeColorMeta && themeColorMeta) {
        themeColorMeta.remove();
      }
    };
  }, []);

  if (!isLoading) return null; // Página em branco, widget cobre tudo

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Carregando chat...</p>
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mt-4">
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default Chat;
