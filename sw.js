const CACHE = 'compound-v1';
const FILES = [
  '/compound-calculator/',
  '/compound-calculator/index.html',
  '/compound-calculator/manifest.json',
  '/compound-calculator/icon-192.png',
  '/compound-calculator/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
