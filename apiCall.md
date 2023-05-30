# 4 ways to make an API Call in JS

📅 30/05/2023

JavaScript provides a few built-in methods and external open source libraries to create and interact with the API. A few possible methods to make an API call in JavaScript are:

- XMLHttpRequest (XHR) 
- fetch() 
- axios
- jQuery Ajax (Asynchronous JavaScript and XML)


### Ajax
Asynchronous JavaScript and XML, or Ajax, is not a technology in itself, but rather an approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object. When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is preferred because it is lighter in size and is written in JavaScript. Both JSON and XML are used for packaging information in the Ajax model.

## XMLHttpRequest (XHR)
It receives response in string format that needs to be parsed in JSON format `(JSON.parse(XMLRequest.response))`.
It is a built-in browser object to create HTTP requests and is deprecated with the introduction of fetch in ES6.

## axios
Axios is open-source library for making HTTP requests with several great features.
Axios works in both Node.js and browsers and is a promise-based (asynchronous) HTTP client, which even is used in frameworks like Angular and React.

Pros of axios:
-	Better and easier error handling & has a wide range of browser support
-	Axios automatically perform JSON parsing and returns data in JSON format


## Package Manager vs CDN (Content Delivery Network)
Both approaches have their own advantages. Using a package manager is more common in larger projects, as it allows for better dependency management, version control, and integration with build tools. On the other hand, using a CDN is simpler and quicker for smaller projects or quick experiments.




