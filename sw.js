/* Territory Console offline cache, build 246bb33b74.
   The app page is fetched from the network when online (so updates arrive) and from the cache when offline. */
const CACHE='tc-246bb33b74';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('tc-')&&k!==CACHE).map(k=>caches.delete(k))))
  .then(()=>self.clients.claim()))});
const timeout=(p,ms)=>Promise.race([p,new Promise((_,r)=>setTimeout(()=>r(new Error('timeout')),ms))]);
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
  if(u.origin===location.origin){
    if(r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('index.html')){
      e.respondWith(timeout(fetch(r),4000).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp))}return res})
        .catch(()=>caches.match('./index.html').then(x=>x||caches.match('./'))));return}
    e.respondWith(caches.match(r).then(x=>x||fetch(r)));return}
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
    e.respondWith(caches.open(CACHE).then(c=>c.match(r).then(x=>{const net=fetch(r).then(res=>{c.put(r,res.clone());return res}).catch(()=>x);return x||net})))}
});
