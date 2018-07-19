/**
 * @description Step 3: Add the directories of the files that have to be cached.
 */

var cacheName = 'version-1';
var cacheFiles = [
	'./',
	'./styles.css',
	'./data/restaurants.json',
	'./img/1.jpg',
	'./img/2.jpg',
	'./img/3.jpg',
	'./img/4.jpg',
	'./img/5.jpg',
	'./img/6.jpg',
	'./img/7.jpg',
	'./img/8.jpg',
	'./img/9.jpg',
	'./img/10.jpg',
	'./dbhelper.js',
	'./main.js',
	'./restaurant_info.js',
	'./index.html',
	'./restaurant.html'
]

/**
 * @description Step 2: Add three event listeners for the different states of
 * the service worker: install, activate and fetch.
 *
 * The install event listens for the installation and decides
 * what happens when the service worker is installed successfully or when the
 * installation fails. The square brackets around the [Service Worker] show
 * that the messages come directly from the service worker. */
self.addEventListener('install', function(event) {
	console.log("[Service Worker] Installed");

	/**
	 * @description The install has to wait until the promise within waitUntil()
	 * is resolved
	 */
	event.waitUntil(
		/**
		 * @description The browser opens the caches corresponding to the cacheName
		 * and adds all the files of the array "cacheFiles".
		 */
		caches.open(cacheName).then(function(cache) {
			console.log("[Service Worker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	)
})

/**
 * @description Activate the service worker and listen for the activation.
 */
self.addEventListener('activate', function(event) {
	console.log("[Service Worker] Activated");
})

/**
 * @description Fetch the data from the given URL.
 */
self.addEventListener('fetch', function(event) {
	console.log("[Service Worker] Fetching", event.request.url);
})
