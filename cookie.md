# Cookie vs Token authentication

### cookie-based authentication

- A cookie is a small piece of data created by a server and sent to your browser when you visit a website. Browsers often need to store and send it back to the server to tell that the request is coming from the same browser, to keep the user authenticated. We read the browser cookies as “key-value” pairs.

- A Cookie-based authentication uses the HTTP cookies to authenticate the client requests and maintain session information on the server over the stateless HTTP protocol.

- a logical flow of the cookie-based authentication process:

    1. The client sends a login request with credentials to the backend server.

    2. The server then validates the credentials. If the login is successful, the web server will create a session in the database and include a Set-Cookie header on the response containing a unique ID in the cookie object.

    3. The browser saves the cookie locally. As long as the user stays logged in, the client needs to send the cookie in all the subsequent requests to the server. The server then compares the session ID stored in the cookie against the one in the database to verify the validity.

    4. During the logout operation, the server will make the cookie expire by deleting it from the database.

    stateful : (컴퓨터 보안 장치가) 네트워크 연결 상태를 추적할 수 있는 (TCP 연결 등)
    - A stateless system sends a request to the server and relays the response (or the state) back without storing any information. On the other hand, stateful systems expect a response, track information, and resend the request if no response is received.

    - A stateful connection is one in which some information about a connection between two systems is retained for future use. In some cases, the connection is kept open even though the two systems might not be transmitting information (i.e., the connection itself retains state).

### Advantages of cookie-based authentication
- Using cookies in authentication makes your application stateful. This will be efficient in tracking and personalizing the state of a user.

- Cookies are small in size thus making them efficient to store on the client-side.

- Cookies can be “HTTP-only” making them impossible to read on the client-side. This improves protection against any Cross-site scripting (XSS) attacks.

- Cookies will be added to the request automatically, so the developer will not have to implement them manually and therefore requires less code.


### Limitations of cookie-based authentication

### token-based authentication
- In token-based authentication, we store the user’s state on the client. JSON Web Token (JWT) is an open standard (RFC 7519) that defines a way of securely transmitting information between a client and a server as a JSON object. I will use tokens and JWT terms interchangeably in the article.

- The jwt.io website can be used to parse the JWT token information. You can use jwt.io to experiment with JSON Web Tokens by decoding and encoding them.

- The anatomy of a JWT token comprises three parts separated by dots(.). The three parts include the JWT header, the JWT payload, and its signature respectively (header.payload.signature).

- Authentication via tokens is a stateless mechanism, as no information about the user is ever stored in the server memory or databases. Therefore, there is no issue with the domains serving your APIs and downstream services.

- The user submits login credentials to the backend server.

- Upon the request, the server verifies the credentials before generating an encrypted JWT with a secret key and sends it back to the client.

- On the client-side, the browser stores the token locally using the local storage, session storage, or cookie storage.

- On future requests, the JWT is added to the authorization header prefixed by the bearer, and the server will validate its signature by decoding the token before proceeding to send a response. The content of the header would look like this: Authorization: Bearer <token>.

- On the logout operation, the token on the client-side is destroyed without server interaction.


### Advantages of token-based authentication approach
- Token authentication approach is stateless. The web server will not need to keep a record of tokens as each is self-contained, including the data required to check its validity and convey the user information through claims. The server only needs to sign tokens on successful login and verify that incoming tokens in the requests are valid.

- A token-based authentication approach with CORS enabled makes it easy to expose APIs to different services and domains. This means the API can serve both the web and mobile platforms like iOS and Android and are much easier to implement, making them mobile-ready.

- The data is stored in the JWT, meaning it can contain any type of data giving the flexibility on what information is to be included in the token.

- It improves overall system performance. For example, if you had an API endpoint like /api/books that retrieves all books on the database where only users with the role of admin have access to this data. In a cookie-based approach, once the call is made to the server, you could have one call to the database check that the session id in the cookie is valid, another one to get the data about the user and verify the admin role, and finally the third call to get the data. With a JWT approach, the role can be stored in the JWT itself where decoding it may take less time than database lookups. So, once the call is made to the server and the JWT is verified, a single call to the database can be fired to retrieve the books.

- They are easier to maintain and scale horizontally in the distributed systems.

### Limitations of Token-based authentication



🔗 [Cookie vs Token authentication](https://www.section.io/engineering-education/cookie-vs-token-authentication/)






