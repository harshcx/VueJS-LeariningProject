//version
var appVersion = "v1.00";

//File To catch
var files = ["/", "/index.html"];

//install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(appVersion).then(cache => {
      return cache.addAll(files).catch(error => {
        console.error("ERROR !! ", error);
      });
    })
  );
  console.info("SW installed");
  self.skipWaiting();
});

//Activate
self.addEventListener("active", event => {
  event.waitUntil(
    caches.keys().then(cachesName => {
      return Promise.all(
        cachesName.map(cache => {
          if (caches !== appVersion) {
            console.info("Deleted All caches", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

//Fetch
self.addEventListener("fetch", event => {
  console.info("SW fetch", event.request.url);
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
