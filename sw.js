self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("overrun-cache").then(cache => {
      return cache.addAll(["./","./index.html"]);
    })
  );
});
