importScripts('./data/exercises.js');
// Increment the version whenever a cached application asset changes.
const PREFIX = 'hybrid-forge:' + self.registration.scope;
const CACHE = PREFIX + ':v2';
const ASSETS = ['./', './index.html', './style.css', './app.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './data/plan.js', './data/exercises.js', './exercises.js', ...EXERCISES.map(exercise => './' + exercise.image)];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith(PREFIX + ':') && key !== CACHE)
    .map(key => caches.delete(key)))));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return;
  event.respondWith(caches.open(CACHE).then(cache => cache.match(event.request))
    .then(cached => cached || fetch(event.request)));
});
