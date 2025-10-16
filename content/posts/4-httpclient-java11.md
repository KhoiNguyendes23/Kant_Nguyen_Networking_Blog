---
title: "HTTPClient Java 11"
date: 2025-01-15
draft: false
summary: "GET/POST JSON, timeout, redirect, async."
tags: ["http","java"]
categories: ["networking"]
---

## Mục tiêu
- HttpClient.newHttpClient()
- HttpRequest builder
- Timeout, header
- BodyHandlers.ofString()
- CompletableFuture

## Dàn ý
- Modern HTTP client setup
- Request building patterns
- Response handling
- Async operations
- Error handling

## Ví dụ ≤15 dòng
```java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com"))
    .timeout(Duration.ofSeconds(10))
    .build();
CompletableFuture<HttpResponse<String>> response = 
    client.sendAsync(request, BodyHandlers.ofString());
```
