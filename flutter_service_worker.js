'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_25.part.js": "13ca865c840bfeeb821607db07aaed5d",
"main.dart.js_29.part.js": "d8e99bbb72266192c191309ceb559afd",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"main.dart.js_3.part.js": "dc27530580eba0205d8778ea17402bc2",
"main.dart.js_21.part.js": "0047b79a6739ee7ac51d66b77f274774",
"main.dart.js_27.part.js": "eaf04673b3787d8cee898c0a09838065",
"main.dart.js_9.part.js": "9a603d0cc3099d3f0485ac0220bb5a90",
"main.dart.js_13.part.js": "7a33b7a47585bf503f7bd2a3af3a255e",
"main.dart.js_16.part.js": "8a9761513597d741e94260cd0d323801",
"main.dart.js_20.part.js": "738c86ec0bd0ee852e54bf7db800d44f",
"main.dart.js": "0bc2a7ea66d3484e78561d6a19785937",
"main.dart.js_8.part.js": "74ce261fa82620ce3c44250c9a473846",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"main.dart.js_23.part.js": "0389c1264169542ff994acdf23519745",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_12.part.js": "067659c875c58962501b31622bee7609",
"main.dart.js_1.part.js": "26d967fd40dd5fcb9c52fe837c33e211",
"main.dart.js_15.part.js": "20f4796e71757ab612956c50947092e1",
"main.dart.js_4.part.js": "88ede11f8d692ab67a92e5f31b8b5642",
"main.dart.js_11.part.js": "2e2081f2e6577655c5e56f47ebe4dc8a",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_28.part.js": "22dd48d5fc3584f9b59c479c5477578a",
"main.dart.js_14.part.js": "d423fab441dd5d251225303eb1b0274a",
"main.dart.js_19.part.js": "76ff272343f078c412deec04ffec3f08",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/NOTICES": "f9e290218378d8e5a7c958523cf25361",
"main.dart.js_7.part.js": "5d601346ed4c58522a5421133cb956d1",
"main.dart.js_2.part.js": "ef21664788cbe484e0e869b3de22da35",
"main.dart.js_24.part.js": "0b2c30c3b7fc4801c83a6e315ce26304",
"main.dart.js_5.part.js": "1077c9f5b64a5b4b992d6c149560d71b",
"main.dart.js_6.part.js": "1b6ca8d9463876f0220bc7f51b2e8f58",
"index.html": "d9d7c7d8aeffb9f34b127bf5ffe6c502",
"/": "d9d7c7d8aeffb9f34b127bf5ffe6c502",
"main.dart.js_18.part.js": "668231ccaa7d65666128d9f6e17741c9",
"main.dart.js_22.part.js": "93686ec5fe5aea776172dbfc56c288d1",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"main.dart.js_10.part.js": "2f3edc6138d580459893651f0bac04a7",
"main.dart.js_17.part.js": "a724973fcc698bc7a4109de8bc7c3b4d",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
