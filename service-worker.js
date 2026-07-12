// Self-destroying service worker. Replaces the old sw-precache worker that
// cached the app shell and served stale /index.html to returning visitors.
// On activate it unregisters itself, drops all caches, and reloads open tabs
// so they hit the network (and thus the redirect).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    await self.registration.unregister();
    var keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    var clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(function (c) { c.navigate(c.url); });
  })());
});
