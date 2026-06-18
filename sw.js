const CACHE_NAME = 'tgnpdcl-dashboard-v2';
const urlsToCache = [
  './index.html',
  './user.html',
  './css/style.css',
  './js/config.js',
  './js/auth.js',
  './manifest.json',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
