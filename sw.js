
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('ps4jb900').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/exploit.js',
        '/background.png',
        '/payloads/goldhen_2.3b2.bin'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
