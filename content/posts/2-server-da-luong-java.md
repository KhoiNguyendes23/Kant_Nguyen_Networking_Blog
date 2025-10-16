---
title: "Server TCP Đa luồng (ExecutorService)"
date: 2025-01-15
draft: false
summary: "Phục vụ nhiều client với thread pool."
tags: ["tcp", "threading", "java"]
categories: ["networking"]
---

## Mục tiêu

- ExecutorService fixed pool
- Runnable per-connection
- Timeout + xử lý IOException
- Logging kết nối
- Benchmark nhẹ

## Dàn ý

- Thread pool configuration
- Per-connection handler
- Exception handling
- Connection logging
- Performance testing

## Ví dụ ≤15 dòng

```java
ExecutorService pool = Executors.newFixedThreadPool(10);
try (ServerSocket server = new ServerSocket(8080)) {
    while (true) {
        Socket client = server.accept();
        pool.submit(() -> handleClient(client));
    }
}
```
