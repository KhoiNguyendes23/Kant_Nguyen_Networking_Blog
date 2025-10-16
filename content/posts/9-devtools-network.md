---
title: "DevTools Network"
date: 2025-01-15
draft: false
summary: "Theo dõi request, timing, waterfall."
tags: ["debug","tools"]
categories: ["networking"]
---

## Mục tiêu
- Capture HAR
- Blocking/Throttling
- Cache disable
- Timing breakdown
- Phân tích lỗi

## Dàn ý
- Network tab overview
- Request/response analysis
- Performance profiling
- Debugging techniques
- Error diagnosis

## Ví dụ ≤15 dòng
```javascript
// Performance timing
const start = performance.now();
fetch('/api/data').then(() => {
    const duration = performance.now() - start;
    console.log(`Request took ${duration}ms`);
});
```
