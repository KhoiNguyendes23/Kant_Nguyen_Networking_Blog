---
title: "Fetch API (JS) gọi REST"
date: 2025-01-15
draft: false
summary: "Fetch với async/await, JSON, lỗi mạng."
tags: ["http", "javascript"]
categories: ["networking"]
---

## Mục tiêu

- fetch + await
- try/catch + status
- JSON parse
- AbortController
- CORS note

## Dàn ý

- Modern fetch API usage
- Async/await patterns
- Error handling strategies
- Request cancellation
- CORS considerations

## Ví dụ ≤15 dòng

```javascript
try {
  const response = await fetch("/api/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: "value" }),
  });
  const data = await response.json();
} catch (error) {
  console.error("Request failed:", error);
}
```
