# Mixed Content

📅 27/09/2023

Mixed Content: The page at 'https://43.201.210.221/' was loaded over HTTPS, but attempted to connect to the insecure WebSocket endpoint 'ws://192.168.1.29:8081/'. This request has been blocked; this endpoint must be available over WSS.

The error message you're seeing, "Mixed Content," is a security feature of web browsers. It's indicating that your web page was loaded over HTTPS (secure), but it's trying to connect to an insecure WebSocket (ws) endpoint over a non-secure connection, which is not allowed by default for security reasons.

To resolve this issue, you have a few options:

1. **Use WSS (WebSocket Secure):** The best practice is to use a secure WebSocket connection (WSS) instead of an insecure one (WS). You should configure your WebSocket server to use a secure WebSocket protocol (WSS) with an SSL/TLS certificate. This ensures that both the initial page load and WebSocket communication are encrypted.

2. **Proxy WebSocket Connections:** If you have a specific use case where you cannot directly use WSS for WebSocket communication, you can set up a proxy server that acts as an intermediary between your secure web page (loaded over HTTPS) and the insecure WebSocket server (WS). The proxy server can handle the WebSocket connection over WS and relay messages back and forth between your secure web page and the WebSocket server.

   This approach, while possible, adds complexity and might introduce security risks, as the communication between the proxy and WebSocket server is insecure. It's generally recommended to use WSS whenever possible to ensure end-to-end security.

3. **Adjust Browser Security Settings:** In some cases, you can adjust browser security settings to allow mixed content. However, this is not recommended for production environments, as it weakens security.

Here's an example of how you might configure a proxy server using Node.js and the `http-proxy` package:

```javascript
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Configure your proxy logic here
  if (req.url.startsWith('/websocket')) {
    proxy.web(req, res, { target: 'ws://192.168.1.29:8081' });
  } else {
    // Handle other HTTP requests as needed
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }
});

server.listen(80); // Your proxy server listens on a port (e.g., 80)
```

In this example, the proxy server listens on port 80 for incoming HTTP requests. When it receives requests to the "/websocket" path, it forwards those requests to the insecure WebSocket server.

Again, please note that using a proxy for WebSocket connections should be considered carefully, as it may introduce security vulnerabilities. Whenever possible, it's recommended to use WSS for secure WebSocket communication.


```
auth.js:9 Mixed Content: The page at 'https://kms.ictk.com/' was loaded over HTTPS, but attempted to connect to the insecure WebSocket endpoint 'ws://kms.websocket.com/'. This request has been blocked; this endpoint must be available over WSS.
(anonymous) @ auth.js:9
(anonymous) @ index.js:26
(anonymous) @ index.js:26
auth.js:9 Uncaught DOMException: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.
    at https://kms.ictk.com/static/js/main.3d0ee881.js:2:854203
    at https://kms.ictk.com/static/js/main.3d0ee881.js:2:1219180
    at https://kms.ictk.com/static/js/main.3d0ee881.js:2:1219183

```


No, you cannot manipulate a Chrome browser to allow WebSocket (ws) connections when a web page is loaded over HTTPS (secure connection) without the server also supporting WebSocket Secure (wss) connections. Browsers implement security features, including blocking mixed content, to protect users from potential security vulnerabilities.

Here's why WebSocket connections must follow the same security protocol as the web page:

1. **Mixed Content Policy:** Modern web browsers, including Chrome, have a strict mixed content policy. This policy prevents web pages loaded over HTTPS from making insecure (HTTP or ws) connections because mixing secure and non-secure content could compromise security.

2. **Security Implications:** Allowing WebSocket (ws) connections from a secure HTTPS-loaded page could expose users to potential security risks. It's important to maintain the same security level for all connections on a web page.

3. **WebSocket Secure (wss):** To establish WebSocket connections from a web page loaded over HTTPS, you should use WebSocket Secure (wss) connections. wss is WebSocket over a secure TLS/SSL connection, ensuring the same level of security as the parent HTTPS page.

To enable WebSocket connections from a web page loaded over HTTPS, you should:

- Use the "wss://" protocol in your WebSocket URL when connecting from the web page.

- Ensure that your WebSocket server is configured with a valid SSL/TLS certificate.

- Make sure that your WebSocket server accepts secure WebSocket connections (wss) on the appropriate port (usually 443 for secure connections).

- Ensure that your WebSocket server's SSL/TLS certificate is correctly configured and trusted by the web browser.

By following these best practices, you can establish secure WebSocket connections from web pages loaded over HTTPS without violating security policies or compromising user safety.