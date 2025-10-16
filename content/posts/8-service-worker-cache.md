---
title: "Service Worker Cache"
date: 2025-01-15
draft: false
summary: "Cache tĩnh, offline cơ bản."
tags: ["pwa","javascript"]
categories: ["networking"]
---

## Mục tiêu
- Install/activate
- Cache API
- Strategy: Cache-first
- Update SW
- DevTools debug

## Dàn ý
- Service Worker lifecycle
- Cache storage management
- Caching strategies
- Update mechanisms
- Debugging techniques

## Ví dụ ≤15 dòng
```javascript
// Service Worker
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```
