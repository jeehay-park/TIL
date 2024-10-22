# Embedded Server

📅 22/10/2024

Embedded servers like Tomcat and Jetty are web servers that can be included directly within an application, allowing the application to be run without the need for a separate, standalone server installation. This is a key feature of Spring Boot and contributes to its simplicity and ease of deployment.

### What is an Embedded Server?

1. **Definition**:
   - An embedded server is a web server that is packaged with an application. This means that the server is bundled into the application itself, allowing you to run the application as a self-contained unit.

2. **Advantages**:
   - **Simplicity**: You don’t need to install and configure a separate server; the server runs alongside your application.
   - **Portability**: The application and its server can be moved and run on any machine without additional setup.
   - **Configuration**: You can easily configure the server programmatically or through application properties, tailoring it to your needs.
   - **Ease of Deployment**: You can package your application as a JAR (Java Archive) file, which includes the embedded server, and run it with a simple command (e.g., `java -jar myapp.jar`).

### Common Embedded Servers

1. **Tomcat**:
   - **Description**: Tomcat is one of the most popular Java Servlet containers. It implements the Java Servlet and JavaServer Pages (JSP) specifications.
   - **Use in Spring Boot**: By default, Spring Boot uses an embedded version of Tomcat, allowing you to easily create web applications.

2. **Jetty**:
   - **Description**: Jetty is another lightweight and flexible web server and servlet container. It’s designed for scalability and supports asynchronous programming.
   - **Use in Spring Boot**: You can also choose to use Jetty as the embedded server in a Spring Boot application by including the appropriate dependencies.

### How Embedded Servers Work in Spring Boot

- **Automatic Configuration**: Spring Boot automatically configures the embedded server based on the dependencies in your project. For example, if you include `spring-boot-starter-web`, Spring Boot automatically configures an embedded Tomcat server.
  
- **Run the Application**: When you run your Spring Boot application (using `./gradlew bootRun` or `java -jar myapp.jar`), the embedded server starts, hosting your application on a specified port (default is usually port 8080).

### Example: Using Embedded Tomcat in Spring Boot

1. **Dependency**: When you include the following dependency in your `build.gradle`, you get an embedded Tomcat server:

   ```groovy
   dependencies {
       implementation 'org.springframework.boot:spring-boot-starter-web'
   }
   ```

2. **Running the Application**:
   - You can run your application directly without needing to deploy it to an external Tomcat server. The embedded Tomcat server will automatically start when you run your application.

### Summary

Embedded servers like Tomcat and Jetty simplify the development and deployment of Java web applications. They allow you to package everything into a single executable JAR file, making it easy to run your application anywhere without the overhead of managing a separate web server.


Before the advent of frameworks like Spring Boot, creating a web server in Java typically involved a more manual and complex process. Here’s an overview of the standard procedure and why servers like Tomcat and Jetty are needed:

### Standard Procedure to Create a Web Server in Java (Without Spring Boot)

1. **Set Up a Java Project**:
   - You would start by creating a Java project using a build tool like Apache Ant or Maven.

2. **Choose a Servlet Container**:
   - Instead of writing your own server from scratch, you would choose a servlet container like Tomcat or Jetty. These containers implement the Java Servlet specification, allowing your Java application to respond to HTTP requests.

3. **Deploying Your Application**:
   - After writing your Java servlets (which handle HTTP requests), you would need to compile your code and package it (usually as a WAR file) for deployment to the servlet container.
   - This involves placing your compiled servlets and any associated resources (like JSPs, HTML, CSS, JavaScript, etc.) in the correct directory structure expected by the servlet container.

4. **Configure the Server**:
   - Configuration files (like `web.xml`) need to be created to map URLs to your servlets and configure other server behaviors.

5. **Start the Server**:
   - You would manually start the servlet container (Tomcat, Jetty, etc.) and deploy your application to it, often through a command-line interface or a web-based management console.

6. **Test and Iterate**:
   - You would test your application by sending HTTP requests and handling responses. If changes were necessary, you would often need to redeploy your application by stopping and starting the server.

### Why Tomcat or Jetty is Needed

- **Servlet Specification**: Tomcat, Jetty, and similar servers implement the Java Servlet API, which is the standard for developing web applications in Java. They provide a framework for managing the lifecycle of servlets, handling HTTP requests and responses, and managing session data.
  
- **Concurrency and Scalability**: These servers manage multiple requests concurrently, allowing them to handle many users at the same time. They take care of threading and resource management so that developers can focus on business logic instead of low-level server details.

- **Protocol Handling**: They handle the complexities of the HTTP protocol, including parsing requests, handling cookies, managing sessions, and serving static files, which would be cumbersome to implement manually.

- **Ease of Deployment**: By using a servlet container, you avoid the complexities of setting up and configuring a web server. These servers come with built-in support for features like security, logging, and error handling.

### Summary

Before frameworks like Spring Boot, creating a Java web server involved a more complex and manual process, including deploying to servlet containers like Tomcat or Jetty. These servers provide the necessary infrastructure to handle HTTP requests, manage servlets, and ensure the scalability and reliability of web applications. They allow developers to focus on writing business logic rather than handling the underlying server mechanics.

No worries at all! It’s completely normal to ask similar questions when learning something new, especially with backend development, which can be a bit different from frontend work. Let me give you a clear explanation of what’s involved in creating a **web server** and what you need to understand, especially as you're learning **Spring Boot**.

### What Do You Need to Create a Web Server?

To create a web server, you need the following components:

1. **Web Server Software** (like Tomcat, Jetty, or any embedded server)
2. **Code to handle HTTP Requests** (like Spring Boot, servlets, or raw HTTP handling code)
3. **Logic to manage resources** (routing, serving HTML, JSON responses, connecting to databases, etc.)

Let’s break this down:

---

### 1. **Web Server Software (Servlet Containers)**

A **web server** is a piece of software that listens for incoming requests from clients (usually via the browser) and responds to them (HTML, JSON, CSS, JS files, etc.). 

- **What does it do?**
  - Handles HTTP requests (GET, POST, etc.)
  - Serves static files (HTML, CSS, JS, images)
  - Manages routing to different parts of your application (e.g., `/login`, `/api/data`)

In Java, **Tomcat**, **Jetty**, or **Undertow** are examples of **Servlet Containers**, which are lightweight web servers that also manage servlets (Java code that handles requests).

With **Spring Boot**, these servers (Tomcat, Jetty) are **embedded** into your application. This means you don’t have to install and configure them separately. When you run `./gradlew bootRun`, it starts an embedded Tomcat server, and your application runs on it automatically.

#### Without Spring Boot:
- You would have to configure and deploy a web server like **Tomcat** separately and write **Servlet** classes to handle requests.

#### With Spring Boot:
- The web server is embedded. Spring Boot takes care of handling incoming HTTP requests and managing routing, so you just focus on writing your application logic.

---

### 2. **Handling HTTP Requests (Spring Boot)**

In a web server, you need to write code that responds to HTTP requests. This can be done in multiple ways.

- **Java Servlets**: Before frameworks like Spring Boot, Java developers had to write **servlets** to handle HTTP requests directly. It was a bit cumbersome because you had to manually define what happens when a client sends a request (like `/login`, `/signup`).

- **Spring Boot Simplifies This**: Spring Boot lets you use **annotations** like `@RestController` and `@GetMapping` to easily define endpoints. This abstracts a lot of the manual handling of requests, so you don't need to write raw servlet code.

   Example of Spring Boot route:
   
   ```java
   @RestController
   public class HelloController {
       @GetMapping("/hello")
       public String sayHello() {
           return "Hello, World!";
       }
   }
   ```
   - Here, Spring Boot automatically sets up an HTTP server route (`/hello`) that returns the string "Hello, World!". You don’t need to worry about the low-level details like configuring the HTTP response.

---

### 3. **Resources Management (Routing, Database, etc.)**

After handling HTTP requests, you often need to perform other actions like:
- **Routing**: Directing requests to the right part of the application (e.g., `/login`, `/profile`, `/api/users`).
- **Database Access**: You may need to fetch or store data from/to a database like MySQL or MongoDB.
- **Business Logic**: Logic that dictates how data is processed or validated.

In Spring Boot, this is managed using:
- **Controller**: Handles the HTTP requests and routes them to the appropriate logic.
- **Service**: Contains the business logic.
- **Repository**: Interacts with the database using **JPA** (Java Persistence API).

### Example Spring Boot Structure:
1. **Controller Layer**: Handles the routing (URL paths).
   ```java
   @RestController
   public class UserController {
       @GetMapping("/users")
       public List<User> getAllUsers() {
           return userService.getUsers();
       }
   }
   ```

2. **Service Layer**: Contains the business logic (e.g., how to retrieve users).
   ```java
   @Service
   public class UserService {
       @Autowired
       private UserRepository userRepository;

       public List<User> getUsers() {
           return userRepository.findAll();
       }
   }
   ```

3. **Repository Layer**: Talks to the database using JPA/Hibernate.
   ```java
   @Repository
   public interface UserRepository extends JpaRepository<User, Long> {
       // Spring Boot automatically provides database access logic here
   }
   ```

In the above example:
- A client makes a request to `/users`.
- The **Controller** handles it and calls the **Service**.
- The **Service** fetches data from the **Repository**, which is connected to a database (like MySQL).
- The response (user data) is sent back to the client.

---

### Spring Boot Handles Most Web Server Work for You

- **Without Spring Boot**: You would need to:
  - Set up a **Servlet Container** like Tomcat manually.
  - Write **Servlet** code to handle HTTP requests and responses.
  - Manually configure routing, manage static files, and handle database connections.

- **With Spring Boot**:
  - **Embedded Server**: Tomcat or Jetty is embedded, and Spring Boot automatically handles requests and responses.
  - **Simplified Annotations**: You use annotations to define routes, handle requests, and connect to databases.
  - **JPA Integration**: Spring Boot integrates with **JPA** and **Hibernate** to simplify database interactions.

### Why Do We Need Tomcat or Jetty in Spring Boot?

While Spring Boot abstracts away a lot of the work, the **Servlet Container** (like Tomcat or Jetty) is still crucial. It’s responsible for:
1. Listening for incoming HTTP requests (on a specific port).
2. Parsing those requests and sending them to the appropriate handler (controller).
3. Sending back the correct HTTP response to the client.

### The Relationship Between Your Java Project and the Servlet Container

1. **Your Java Code**: Defines the logic (controller, service, repository) for what should happen when a request comes in.
2. **Servlet Container (Tomcat/Jetty)**: Is the web server that handles the HTTP protocol. It listens for incoming requests and forwards them to your Java code.
3. **Spring Boot**: Bridges the gap between the two. It takes care of starting the web server (Tomcat) and routing requests to your Java code, so you can focus on writing the business logic.

---

### So, What Did You Assume About Spring Boot?

You assumed that learning Spring Boot would help you handle everything about the web server, and you are right to an extent! **Spring Boot automates and simplifies the process of setting up a web server** with Java. It embeds a servlet container and offers a powerful framework to build web applications. However, the core concept of a **web server** (managing requests and responses) still relies on an embedded server like Tomcat or Jetty.

If you want to "fully understand" how web servers work beyond Spring Boot, you'd need to dig into servlet containers and how HTTP is handled manually, but **Spring Boot** does abstract most of that for you.

---

Let me know if this clears things up or if you want more details on any part!

