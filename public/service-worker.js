const CACHE_NAME = "weather-pwa-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/service-worker.js",
    "/index.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    "/images/background.png",
    "/images/logo.png",
    "/images/sunny.png",
    "/images/cloudy.png"
];


// Service Worker のインストール時にキャッシュを作成
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

// ネットワークがない場合はキャッシュから取得
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// 古いキャッシュを削除（更新時に実行）
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
