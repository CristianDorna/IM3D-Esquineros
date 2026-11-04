const CACHE_NAME = self.__CACHE_NAME__;
const PRECACHE_URLS = self.__PRECACHE_URLS__;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("im3d-app-") && cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseCopy = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, responseCopy));
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return (
            cachedPage ||
            (await caches.match(new URL("./", self.location.href).href)) ||
            (await caches.match(
              new URL("./index.html", self.location.href).href,
            ))
          );
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (cachedResponse) =>
        cachedResponse ||
        fetch(request).then((response) => {
          if (response.ok) {
            const responseCopy = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, responseCopy));
          }
          return response;
        }),
    ),
  );
});
