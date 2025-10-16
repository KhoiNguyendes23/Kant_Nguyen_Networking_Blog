---
title: "TCP Socket trong Java"
date: 2025-01-15
draft: false
featured: true
summary: "Viết Echo Server/Client bằng java.net.Socket/ServerSocket."
tags: ["tcp", "java"]
categories: ["networking"]
---

## Mục tiêu

- Tạo ServerSocket accept loop
- Client gửi/nhận chuỗi
- Đóng tài nguyên try-with-resources
- Lưu ý blocking I/O
- Demo ngắn

## Dàn ý

- ServerSocket bind port
- Accept connection loop
- Client connect + send/receive
- Resource cleanup
- Error handling

## Ví dụ ≤15 dòng

```java
// Server
try (ServerSocket server = new ServerSocket(8080)) {
    while (true) {
        Socket client = server.accept();
        // Handle client
    }
}

// Client
try (Socket socket = new Socket("localhost", 8080)) {
    // Send/receive data
}
```
