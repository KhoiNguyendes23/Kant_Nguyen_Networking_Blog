---
title: "UDP với DatagramSocket"
date: 2025-01-15
draft: false
summary: "Gửi/nhận datagram, giới hạn kích thước, mất gói."
tags: ["udp","java"]
categories: ["networking"]
---

## Mục tiêu
- DatagramSocket/Packet
- Buffer, offset/length
- TTL/port reuse
- So sánh TCP/UDP
- Ping mini

## Dàn ý
- UDP vs TCP characteristics
- DatagramPacket creation
- Buffer management
- Network configuration
- Simple ping implementation

## Ví dụ ≤15 dòng
```java
// UDP Server
DatagramSocket socket = new DatagramSocket(8080);
byte[] buffer = new byte[1024];
DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
socket.receive(packet);
```
