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
