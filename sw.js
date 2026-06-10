/* /chat/sw.js */

const DEFAULT_OPEN_URL = "/chat/";

/**
 * INSTALAÇÃO
 */
self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

/**
 * ATIVAÇÃO
 */
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

/**
 * PUSH
 */
self.addEventListener("push", (event) => {
  if (!event.data) return;

  let payload = {};
  try {
    payload = event.data.json();
  } catch (err) {
    payload = {};
  }

  const title = payload.title || "Nova mensagem";
  const data = payload.data || {};

  const options = {
    body: payload.body || "",
    icon: payload.icon || "/chat/icon-192.png",
    badge: payload.badge || payload.icon || "/chat/icon-192.png",
    data,
    silent: payload.silent === undefined ? false : !!payload.silent,
    vibrate: payload.vibrate || [200, 100, 200],
    tag: data.campaignId || data.publicId || "webchat-push",
    renotify: false,
  };

  const shouldShow = self.clients
    .matchAll({ type: "window", includeUncontrolled: true })
    .then((windowClients) => {
      // Como o SW está em /chat, ele só controla /chat
      // então aqui só vai ter aba do chat mesmo.
      const visible = windowClients.some((c) => c.visibilityState === "visible");
      return !visible;
    })
    .catch(() => true);

  event.waitUntil(
    Promise.resolve(shouldShow).then((show) => {
      if (!show) return;
      return self.registration.showNotification(title, options);
    })
  );
});

/**
 * CLIQUE NA NOTIFICAÇÃO
 */
self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const data = notification?.data || {};

  // Resolve URL com fallback seguro
  const resolveTargetUrl = (rawUrl) => {
    try {
      const url = new URL(rawUrl || DEFAULT_OPEN_URL, self.location.origin);

      // Se vier "/" ou vazio, manda pro /chat/
      if (url.pathname === "/" || url.pathname === "") {
        url.pathname = DEFAULT_OPEN_URL;
      }

      return url.toString();
    } catch (err) {
      return new URL(DEFAULT_OPEN_URL, self.location.origin).toString();
    }
  };

  const targetUrl = resolveTargetUrl(data.url);

  // Tracking (mantive como você colocou)
  const publicId = data.publicId;
  const clickPayload = {
    campaignId: data.campaignId,
    deliveryId: data.deliveryId,
    subscriptionId: data.subscriptionId,
    visitorId: data.visitorId,
  };

  const trackClick = publicId
    ? fetch(new URL("/webchat/public/" + publicId + "/push-click", self.location.origin).toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clickPayload),
      }).catch(() => undefined)
    : Promise.resolve();

  notification.close();

  const focusOrOpen = self.clients
    .matchAll({ type: "window", includeUncontrolled: true })
    .then((windowClients) => {
      for (const client of windowClients) {
        // Se já tiver uma janela do target, foca nela
        if (client.url === targetUrl || client.url.startsWith(targetUrl)) {
          return client.focus();
        }
      }
      // Senão abre uma nova
      return self.clients.openWindow(targetUrl);
    });

  event.waitUntil(Promise.all([trackClick, focusOrOpen]));
});

