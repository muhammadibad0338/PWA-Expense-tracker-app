let cacheData = "PWA-Expense";

const self = this

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/static/js/main.chunk.js",
          "/static/js/0.chunk.js",
          "/static/js/1.chunk.js",
          "/static/js/bundle.js",
          "/manifest.json",
          "/favicon.ico",
        ]);
      })
      .catch((err) => {
        console.log("err", err);
      })
  );
});

self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});