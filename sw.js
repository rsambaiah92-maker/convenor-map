// ప్రతిసారి మీరు కోడ్ మార్చినప్పుడు ఈ కింద ఉన్న v3 ని v4, v5 అలా మార్చాలి.
const CACHE_NAME = 'tgnpdcl-dashboard-v6.2'; 

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

// కొత్త ఫైల్స్ ఇన్‌స్టాల్ చేసుకోవడం
self.addEventListener('install', event => {
  self.skipWaiting(); // యూజర్ పర్మిషన్ అడగకుండా డైరెక్ట్ గా యాక్టివేట్ అవ్వడానికి
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// పాత క్యాష్ (పాత యాప్) ని ఆటోమేటిక్ గా డిలీట్ చేయడం
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('పాత వెర్షన్ డిలీట్ అయింది:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// నెట్ ఉంటే కొత్త కోడ్ తేవడం, నెట్ లేకపోతే సేవ్ అయిన పాత కోడ్ ఇవ్వడం (Network First)
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
