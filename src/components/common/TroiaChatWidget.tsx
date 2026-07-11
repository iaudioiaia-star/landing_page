import { useEffect } from "react";

declare global {
  interface Window {
    troiaWidgetConfig: Record<string, unknown>;
    TroiaWidget?: { open: () => void; close: () => void };
  }
}

const TroiaChatWidget = () => {
  useEffect(() => {
    if (document.getElementById("troia-widget-script")) return;

    window.troiaWidgetConfig = {
      channelId: "6a3ed185a898fd92c029fc94",
      token: "bc4fe109339824cc1eda6378b4c98e48c254f5a4a2ad0c1af8fd2f48b3c27775",
      apiUrl: "https://backend.troiachat.com",
      socketUrl: "https://backend.troiachat.com",
      brandColor: "#6FBB49",
      position: "bottom-right",
      welcomeMessage: "Olá! Como posso te ajudar com sua música?",
      agentName: "IAudio",
    };

    const script = document.createElement("script");
    script.id = "troia-widget-script";
    script.src = "https://widget.troiachat.com/widget.umd.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export const openTroiaChat = () => {
  if (window.TroiaWidget?.open) {
    window.TroiaWidget.open();
    return;
  }
  // fallback: click the widget launcher button if API not exposed yet
  const launcher = document.querySelector<HTMLElement>(
    "[id*='troia'], [class*='troia'], [id*='widget-launcher'], [class*='widget-launcher']"
  );
  if (launcher) {
    launcher.click();
    return;
  }
  window.location.href = "https://widget.troiachat.com/chat/6a3ed185a898fd92c029fc94";
};

export default TroiaChatWidget;
