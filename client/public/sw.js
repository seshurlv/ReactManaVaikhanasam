const CACHE_NAME = 'mana-vaikhanasam-v1.3.1';
const STATIC_CACHE_NAME = 'static-assets-v1.3.1';
const DYNAMIC_CACHE_NAME = 'dynamic-content-v1.3.1';

// Routes that should be cached for offline access
const CACHED_ROUTES = [
  '/',
  '/presentation',
  '/ashramam',
  '/svmm',
  '/contact',
  '/photogallery',
  '/books',
  '/news'
];

const CRITICAL_RESOURCES = [
  '/',
  '/static/css/main.css',
  '/manifest.json',
  '/acharya.png'
];

self.addEventListener('install', (event) => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('SW: Caching critical resources');
        return Promise.allSettled(
          CRITICAL_RESOURCES.map(url => 
            cache.add(url).catch(err => console.warn('Failed to cache:', url, err))
          )
        );
      })
      .then(() => {
        console.log('SW: Installation complete');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW: Activating...');
  event.waitUntil(
    Promise.all([
      // Clear old caches
      caches.keys().then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (![CACHE_NAME, STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME].includes(cacheName)) {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        )
      ),
      // Take control of all clients
      self.clients.claim()
    ]).then(() => {
      console.log('SW: Activation complete');
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Only handle same-origin GET requests
  if (url.origin !== self.location.origin || request.method !== 'GET') {
    return;
  }
  
  event.respondWith(handleRequest(request, url));
});

async function handleRequest(request, url) {
  const pathname = url.pathname;
  
  try {
    // Static assets with hash - cache first
    if (isStaticAssetWithHash(pathname)) {
      return await cacheFirst(request, STATIC_CACHE_NAME);
    }
    
    // Navigation requests (HTML/routes) - network first with offline fallback
    if (isNavigationRequest(request, pathname)) {
      return await handleNavigation(request, pathname);
    }
    
    // Images and media - stale while revalidate
    if (isMediaFile(pathname)) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE_NAME);
    }
    
    // Default: network first
    return await networkFirst(request, DYNAMIC_CACHE_NAME);
    
  } catch (error) {
    console.error('SW: Fetch error:', error);
    
    // For navigation, return cached index or offline page
    if (isNavigationRequest(request, pathname)) {
      const cache = await caches.open(STATIC_CACHE_NAME);
      const cachedResponse = await cache.match('/');
      if (cachedResponse) {
        return cachedResponse;
      }
    }
    
    // Return a basic error response
    return new Response('Network Error', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

async function handleNavigation(request, pathname) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful navigation responses
      const cache = await caches.open(STATIC_CACHE_NAME);
      
      // Cache as index.html for SPA routing
      const responseToCache = networkResponse.clone();
      cache.put('/', responseToCache);
      
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
    
  } catch (error) {
    console.log('SW: Network failed for navigation, trying cache');
    
    // Try to get cached index.html for SPA routing
    const cache = await caches.open(STATIC_CACHE_NAME);
    const cachedResponse = await cache.match('/');
    
    if (cachedResponse) {
      console.log('SW: Serving cached index.html for:', pathname);
      return cachedResponse;
    }
    
    // Last resort: return a basic offline page
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>ManaVaikhanasam - Offline</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; }
          h1 { color: #333; }
          .logo { width: 100px; height: 100px; margin: 20px auto; }
        </style>
      </head>
      <body>
        <div class="logo">🕉️</div>
        <h1>ManaVaikhanasam</h1>
        <h2>You're offline</h2>
        <p>Please check your connection and try again.</p>
        <button onclick="window.location.reload()">Retry</button>
      </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Cache strategies
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Start network request in background
  const networkResponsePromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);
  
  // Return cached immediately if available
  return cachedResponse || await networkResponsePromise;
}

async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(cacheName);
    return await cache.match(request);
  }
}

// Helper functions
function isStaticAssetWithHash(pathname) {
  return /\/static\/(js|css)\/.*\.[a-f0-9]{8,}\.(js|css|chunk\.js)$/i.test(pathname);
}

function isNavigationRequest(request, pathname) {
  // Check if it's a navigation request or a known SPA route
  return request.mode === 'navigate' || 
         (request.method === 'GET' && request.headers.get('accept')?.includes('text/html')) ||
         CACHED_ROUTES.includes(pathname);
}

function isMediaFile(pathname) {
  return /\.(png|jpg|jpeg|gif|svg|ico|webp|mp4|webm|mov)$/i.test(pathname);
}

// Handle skip waiting message
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    console.log('SW: Received skipWaiting message');
    self.skipWaiting();
  }
});