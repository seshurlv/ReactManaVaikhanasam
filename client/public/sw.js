const CACHE_NAME = 'mana-vaikhanasam-v1';
const urlsToCache = [
  '/', 
  '/manifest.json',
  '/acharya.png',
  '/apple-icon.png'
];

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.all(
        urlsToCache.map(url =>
          fetch(url)
            .then(response => {
              if (response.ok) return cache.put(url, response);
            })
            .catch(() => { /* ignore failed requests */ })
        )
      ))
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});