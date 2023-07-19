# API, REST API, and RESTFUL API

📅 19/07/2023

API stands for . It is a set of rules, protocols, and tools that allows different software applications to communicate and interact with each other. An API specifies how different components of software should interact, defining the methods, data formats, and protocols that developers can use to access and utilize the functionality of a particular software or service.


### REST
Representational State Transfer (REST) is an architectural style for designing networked applications, particularly web services. It is not directly related to the concept of "state" in terms of application or system state.

**In REST, the term "state" refers to the current representation or status of a resource, typically represented as data.** The state of a resource can be stored on the server and can change over time. For example, a resource could be a user profile, a blog post, or any other data entity.

The transfer of state in REST is accomplished through the use of standardized HTTP methods (such as GET, POST, PUT, DELETE) to perform operations on the resources. These operations modify or retrieve the state of the resources.

When a client (such as a web browser or mobile app) interacts with a RESTful API, it sends HTTP requests to the server to perform actions on the resources. The server then responds with HTTP status codes and data representations (usually in a format like JSON or XML) that represent the current state of the requested resources.

For example, when you make a GET request to retrieve user information from a RESTful API, the server responds with the current state of that user's data. If you make a POST request to create a new user, you are transferring the initial state or data for that user to the server.

In summary, REST focuses on the state (representation) of resources rather than the application or system state. It uses standardized HTTP methods to transfer or manipulate the state of those resources between clients and servers.

### RESTful API
"REST API" and "RESTful API" are essentially the same thing. The term "RESTful" is an adjective derived from "REST" to describe an API that adheres to the principles and constraints of the REST architectural style.

A RESTful API follows the guidelines and best practices of REST, which include principles like using standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, employing uniform resource identifiers (URIs) to identify resources, and leveraging hypermedia (e.g., links) to enable navigation between resources.

So, when people refer to a REST API or a RESTful API, they are generally referring to the same concept—an API that follows the principles of the REST architectural style.


