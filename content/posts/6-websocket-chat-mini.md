---
title: "WebSocket Chat mini"
date: 2025-01-15
draft: false
featured: true
summary: "Chat realtime; kiến trúc publish/broadcast."
tags: ["websocket", "java", "javascript"]
categories: ["networking"]
---

## Mục tiêu

- Handshake WS
- Broadcast to clients
- Heartbeat/ping
- Simple UI
- Lưu ý reconnect

## Dàn ý

- WebSocket server setup
- Client connection management
- Message broadcasting
- Heartbeat mechanism
- Reconnection strategy

## Ví dụ ≤15 dòng

```java
@ServerEndpoint("/chat")
public class ChatEndpoint {
    @OnMessage
    public void onMessage(String message, Session session) {
        // Broadcast to all clients
    }
}
```
