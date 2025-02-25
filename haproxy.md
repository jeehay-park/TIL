# HAProxy config

📅 25/02/202

Your **HAProxy config** is doing a few key things:  

### 🔍 **Bird’s-Eye View of Your Setup**
1. **SSL Termination**  
   - HAProxy listens on **port 8443** and uses an SSL certificate (`dev.ictk.com.haproxy.pem`).  
   - It forces `https` by setting the header `X-Forwarded-Proto https`.  
   - This ensures that all requests go through **secure HTTPS** instead of HTTP.  

2. **Routing Traffic to Different Backends**  
   - Requests starting with `/idaas/ca/admin/` → sent to `backend_kms_admin_server1` (IP: `13.125.1.202:9080`).  
   - Requests starting with `/idaas/otp/admin/` → sent to `backend_kms_admin_server2` (IP: `54.180.43.129:9080`).  
   - Everything else (like your **React app**) → sent to `backend_kms_frontend` (`host.docker.internal:3000`).  

3. **Rate Limiting for API Requests**  
   - Certain key management API requests (`/idaas/ca/admin/key/...`) are tracked.  
   - If more than **one request is made in 10 seconds**, it **denies the request** with a JSON error.  

4. **Load Balancing (for Frontend React App)**  
   - HAProxy forwards frontend requests to `host.docker.internal:3000` (your local React app).  
   - If multiple servers were listed here, HAProxy would distribute traffic using **round-robin balancing**.  

---

### 🚀 **Why Do You Need HAProxy?**
- **HTTPS Handling**: Your API requires `https://localhost:8443`. Without HAProxy, your frontend cannot securely call the backend.  
- **Backend Routing**: Different API requests go to different backend servers.  
- **Security & Rate Limits**: Prevents abuse by limiting certain API calls.  
- **Frontend Hosting**: Serves your React app via HAProxy (though you could run React directly on `:8443` if needed).  


                     🔗 Client (Browser)
                          │
                          ▼
                 🌐 Request to localhost:8443
                          │
                          ▼
              ┌───────────────────────────────┐
              │      HAProxy (Docker)         │
              │   🖥️ Running in a Container  │
              └───────────────────────────────┘
                          │
  ┌────────────────────────────────────────────┐
  │               ROUTING                     │
  │────────────────────────────────────────────│
  │ 🔹 If request starts with "/idaas/ca/admin" │
  │    → Forward to API Server at `13.125.1.202:9080` │
  │ 🔹 If request is for the React frontend    │
  │    → Forward to `localhost:3000`           │
  └────────────────────────────────────────────┘


🏗 How It Works Step-by-Step
1️⃣ You open https://localhost:8443 in the browser.

The request first goes to HAProxy (running inside a Docker container).
2️⃣ HAProxy checks the request URL.

If the request starts with /idaas/ca/admin/ → It sends the request to 13.125.1.202:9080.
Otherwise → It sends the request to localhost:3000, where your React app is running.
3️⃣ The backend API (13.125.1.202:9080) processes the request and sends a response back.

If the request was for login, data, etc., the backend responds with JSON data.
HAProxy forwards this response back to your browser.
4️⃣ Your React app (localhost:3000) also makes API calls to https://localhost:8443/idaas/....

HAProxy routes these API calls to the correct backend.


📌 Why is HAProxy Needed?
SSL Encryption: Ensures secure https:// connections using a certificate.
Backend Routing: Directs API calls to the correct backend server.
Centralized Traffic Control: Manages all requests from one entry point (8443).