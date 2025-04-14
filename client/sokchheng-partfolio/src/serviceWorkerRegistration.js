self.addEventListener('install', (e)=>{
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches.open('my-app').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/js/app.js',
                '/images/logo.png'
            ])
        })
    )
})


self.addEventListener('fetch', (e)=>{
    e.respornWith(
        caches.match(e.request).then((res)=>{
            return res || fetch(e.request);
        })
    )
})