---
title: "HTTPS/TLS + CORS + Token"
date: 2025-01-15
draft: false
summary: "Các khái niệm bảo mật web cơ bản."
tags: ["security", "https"]
categories: ["networking"]
---

## Mục tiêu

- TLS handshake
- HSTS
- CORS preflight
- Bearer token
- Best practices

## Dàn ý

- TLS/SSL fundamentals
- HTTP Strict Transport Security
- Cross-Origin Resource Sharing
- Authentication tokens
- Security best practices

## Ví dụ ≤15 dòng

```javascript
// CORS preflight
fetch("/api/data", {
  method: "POST",
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});
```
