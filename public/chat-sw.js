/* /chat-sw.js (root) controls /chat/ */

const DEFAULT_OPEN_URL = "/chat/";
const DEFAULT_ICON = "https://api.wavechat.com.br/public/webchat-config/9/1768511334900_ChatGPT_Image_13_de_jan._de_2026__13_25_34.png";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

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
    icon: payload.icon || DEFAULT_ICON,
    badge: payload.badge || payload.icon || DEFAULT_ICON,
    data,
    silent: payload.silent === undefined ? false : !!payload.silent,
    vibrate: payload.vibrate || [200, 100, 200],
    tag: data.campaignId || data.publicId || "webchat-push",
    renotify: false,
  };

  const shouldShow = self.clients
    .matchAll({ type: "window", includeUncontrolled: true })
    .then((windowClients) => {
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

self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const data = notification?.data || {};

  const resolveTargetUrl = (rawUrl) => {
    try {
      const url = new URL(rawUrl || DEFAULT_OPEN_URL, self.location.origin);
      if (url.pathname === "/" || url.pathname === "") {
        url.pathname = DEFAULT_OPEN_URL;
      }
      return url.toString();
    } catch (err) {
      return new URL(DEFAULT_OPEN_URL, self.location.origin).toString();
    }
  };

  const targetUrl = resolveTargetUrl(data.url);

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
        if (client.url === targetUrl || client.url.startsWith(targetUrl)) {
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    });

  event.waitUntil(Promise.all([trackClick, focusOrOpen]));
});
