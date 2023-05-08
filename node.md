# Node.js

📅 08/05/2023

Node.js is an open source server environment
Node.js is free
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server
Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

Consider modules to be the same as JavaScript libraries.

### Include Modules
To include a module, use the require() function with the name of the module:
```
var http = require('http');
```

Now your application has access to the HTTP module, and is able to create a server:
```
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
```
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```

The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.


NPM is a package manager for Node.js packages, or modules if you like.
www.npmjs.com hosts thousands of free packages to download and use.
The NPM program is installed on your computer when you install Node.js
A package in Node.js contains all the files you need for a module.
Modules are JavaScript libraries you can include in your project.

**<span style="color:orange">Node.js is a server-side runtime environment for executing JavaScript code outside of a web browser. It is built on top of the V8 JavaScript engine, which is also used by Google Chrome, and provides an event-driven, non-blocking I/O model that allows for efficient and scalable handling of network requests.</span>**

Node.js was initially released in 2009 and has since become increasingly popular, particularly for building web applications and APIs. It has a rich ecosystem of third-party modules and packages available through its package manager, npm, which makes it easy to add functionality to your Node.js applications.

Some of the key features of Node.js include:

- Support for asynchronous programming, which can improve the performance and scalability of server-side applications.
- A built-in module system and package manager that make it easy to organize and reuse code.
- The ability to handle HTTP requests and serve static files out of the box.
- Support for real-time communication with WebSockets and other protocols.
- The ability to access the file system, network sockets, and other low-level resources using JavaScript code.

Node.js has become a popular choice for building web applications and APIs because it allows developers to use a single language, JavaScript, for both the client-side and server-side code, which can make it easier to maintain and scale codebases.



