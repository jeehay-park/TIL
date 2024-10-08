# JDK

📅 08/10/2024

The JDK (Java Development Kit) is a crucial tool for developing Java applications. Here's why it's needed and what it does:

1. **Development Kit**: The JDK provides everything you need to write, compile, and run Java programs. It includes the **Java Runtime Environment (JRE)**, which is necessary to run Java applications, and developer tools like the **Java compiler (javac)**, **debugger**, and **libraries**.

2. **Compilation**: Java is a compiled language, meaning your Java code (written in .java files) must be transformed into bytecode (.class files) that the Java Virtual Machine (JVM) can execute. The JDK includes the compiler for this.

3. **Version-Specific**: Different versions of the JDK come with specific features and optimizations. Some libraries or frameworks (like Spring Boot) may require certain JDK versions, which is why managing the version can be tricky.

4. **Tooling**: In addition to the compiler, the JDK provides tools for debugging, managing JAR files (Java archives), and monitoring the JVM performance.

In short, the JDK is essential because it allows you to **write**, **compile**, and **run** Java applications, providing the complete development environment. Which JDK version are you currently working with?


# Write, JVM, Bytecode, and Binary code

### **1. "Write"**:
When I said "write" in the context of JDK, I was referring to **writing code** in the **Java programming language**. So yes, it's for you (or developers) to write code using Java syntax. When you develop a Java program, you create **.java** files where you write the code (e.g., class definitions, methods, logic, etc.).

### **2. JVM (Java Virtual Machine)**:
The JVM is the **runtime environment** in which Java applications run. Here's what it does:
- **Executes Java bytecode**: Once you've written and compiled your Java code, the resulting bytecode is executed by the JVM. 
- **Platform independence**: JVM is what allows Java to be "Write Once, Run Anywhere." It abstracts the underlying hardware and operating system, so the same bytecode can run on different platforms (Windows, Mac, Linux) as long as a compatible JVM is installed.
- **Memory management**: The JVM also handles memory management, garbage collection, and resource allocation for Java programs, freeing developers from manually handling these aspects.

Think of the JVM as a virtual computer that runs your Java program.

### **3. Bytecode** vs. **Binary code**:
- **Bytecode**: After you compile your Java source code (the code you write) using the JDK's compiler, it is converted into **bytecode** (not directly into machine code). Bytecode is a set of instructions that the JVM understands, but it isn't tied to any specific hardware architecture.
  
- **Binary code**: This is the machine-level code that your computer's processor can execute directly. Each CPU architecture has its own specific binary code format.

In summary:
- Bytecode is **platform-independent** and designed to be executed by the JVM.
- Binary code is **machine-specific**, generated when the JVM translates bytecode into instructions that the computer's processor can understand.

So, when you write Java code, it is first compiled into bytecode, and then the JVM translates that into machine-specific binary code when the program is executed. 


# V8 vs JVM
### **JavaScript and JVM Equivalent**:
Yes, JavaScript also has its own runtime environment, similar to how Java uses the JVM. The most well-known **JavaScript engine** is **V8**, developed by Google (used in Chrome and Node.js).

#### Differences:
- **JVM (Java Virtual Machine)**: Executes **Java bytecode** and provides platform independence for Java programs.
- **V8 Engine** (or other JavaScript engines like SpiderMonkey for Firefox): Executes **JavaScript code**. However, JavaScript doesn't require a separate compilation step like Java does. The JavaScript engine interprets and compiles the JavaScript code on the fly, typically into **machine code** (rather than bytecode).

In short, JavaScript engines like **V8** serve a similar purpose as the JVM but are specifically designed to run JavaScript code directly.

### **Memory Management in JVM (Garbage Collection & Resource Allocation)**:
In the context of JVM, **memory management** refers to how the JVM handles the allocation and deallocation of memory during program execution.

#### 1. **Garbage Collection**:
- **Garbage**: Refers to objects or data that your program no longer needs. These could be variables or objects that are out of scope, no longer referenced, or simply not needed anymore.
- **Garbage collection**: The JVM automatically reclaims memory used by such "garbage" objects so that memory can be used for other purposes. This process ensures you don't run out of memory due to unused objects piling up. Unlike some languages (like C/C++), Java developers don't have to manually deallocate memory.

   Example:
   ```java
   public class Test {
       public static void main(String[] args) {
           String name = "Java"; // This string object is created
           name = null; // Now this object is eligible for garbage collection
       }
   }
   ```
   In the example, after setting `name` to `null`, the memory previously used by the "Java" string becomes garbage and can be collected by the JVM.

#### 2. **Resource Allocation**:
- **Resources**: In this context, resources are things like memory (heap and stack), file handles, network connections, and threads that your program might use during execution. 
- **Resource allocation**: The JVM allocates memory (and other resources) for objects and variables when they are created or initialized. It decides where and how much memory should be used for things like arrays, objects, and variables.
  
  For example, when you create an object:
   ```java
   MyClass obj = new MyClass();
   ```
   The JVM allocates memory for the `obj` in the **heap**. It keeps track of these resources and will eventually deallocate the memory (using garbage collection) once the object is no longer needed.

In essence:
- **Garbage** is unused data/objects that need to be removed to free up memory.
- **Resources** are things like memory, file handles, or network connections that your program needs to execute properly.


# Heap, Stack, File Handles, Threads, and Runtime Environment
Let’s break each of these terms down:

### **1. Heap vs. Stack (in Memory Management)**:
Both **heap** and **stack** are memory areas in the JVM, but they serve different purposes.

- **Heap**:
  - The heap is used for **dynamic memory allocation**. When you create objects using `new` in Java, they are stored in the heap.
  - Memory in the heap is managed by the **garbage collector**, meaning it will clean up unused objects when no longer referenced.
  - The heap has a larger memory size than the stack but is slower to access since it requires more complex management.
  - **Used for**: Objects, class instances, and memory-intensive data structures.

- **Stack**:
  - The stack is used for **static memory allocation**, meaning it's reserved for method execution and the local variables used inside methods.
  - Memory in the stack is automatically cleaned up as methods are executed and completed.
  - Each thread in Java has its own stack, and memory is freed in a **Last In, First Out (LIFO)** order when methods return.
  - **Used for**: Primitive variables (int, float, etc.) and references to objects.

**Key Difference**:
- **Heap** is for objects and managed by the garbage collector.
- **Stack** is for method calls and local variables and is managed automatically as methods execute and finish.

### **2. File Handles**:
A **file handle** is a reference to a file that a program is currently using. When your Java program opens a file to read or write, the operating system assigns a file handle (or descriptor) to represent that open file.
  
- **Why needed**: It’s a way for the operating system to track which files are open and to allocate resources for reading or writing.
  
Example:
```java
FileReader file = new FileReader("data.txt");
```
In this case, the JVM interacts with the operating system to open "data.txt", and a file handle is created so that your program can access it.

### **3. Threads**:
A **thread** is the smallest unit of execution in a program. Each thread runs independently, which allows your program to do multiple things at once (multitasking).

- **Why needed**: Threads enable your program to perform tasks in parallel. For example, in a web server, multiple clients can make requests at the same time, and each request can be handled by a separate thread.
  
Example:
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

MyThread t = new MyThread();
t.start();
```
In this example, when you call `start()`, the program creates a new thread that runs concurrently with the main thread.

### **4. Runtime Environment**:
A **runtime environment** is the environment in which your program executes. It includes the libraries, the Java Virtual Machine (JVM), and the other necessary components that provide services to run your code.

- **Why needed**: Java code is written once but can run anywhere, thanks to the JVM. The runtime environment ensures that your Java program can run on any operating system or machine, as long as the JVM is installed.
  
Example: 
When you execute a Java program, the JVM starts, loads the necessary classes, and runs the code in a cross-platform manner. The runtime environment handles **memory management**, **input/output**, **security**, and other services while your program runs.

In summary:
- **Heap**: Dynamic memory for objects.
- **Stack**: Static memory for method execution and local variables.
- **File handles**: Track files your program is working with.
- **Threads**: Enable parallel execution of tasks.
- **Runtime environment**: Provides the necessary environment for your program to run, regardless of the underlying hardware.

# Computer, OS, and JVM
Let's explore the relationship between a **computer**, its **Operating System (OS)**, and the **Java Virtual Machine (JVM)**:

### **1. Computer**:
A computer consists of the hardware (CPU, memory, storage, etc.) and the basic software needed to control this hardware. 

- **Hardware**: The physical components like the processor (CPU), RAM, hard drive, etc.
- **Software**: The programs that run on the computer, including the operating system and applications.

### **2. Operating System (OS)**:
The **Operating System (OS)** is a piece of system software that manages the hardware and provides services to run applications. Examples include Windows, macOS, and Linux.

- **Role**: The OS acts as a bridge between the hardware and software. It provides essential functions like file handling, memory management, process management, networking, and more. Applications rely on the OS to access and control hardware resources like CPU and memory.
- **OSs are platform-specific**: They run software that is specifically compiled for that OS and hardware architecture. For instance, a Windows program won’t directly run on Linux unless it’s ported or an interpreter/emulator is used.

### **3. JVM (Java Virtual Machine)**:
The **Java Virtual Machine (JVM)** is a virtual machine that allows Java programs to run on any system, independent of the operating system and hardware. The JVM abstracts the hardware and operating system so that the Java program does not have to worry about the specific details of the underlying platform.

- **Platform Independence**: This is one of Java's key features. When you write and compile Java code, it is converted into **bytecode** (not native machine code). This bytecode is executed by the JVM, which translates it into platform-specific instructions at runtime.
- **Relation to OS**: The JVM is installed on top of the operating system. It acts as a **layer** between the Java application and the OS. The OS provides resources like memory, file access, and CPU to the JVM, and the JVM translates Java bytecode into machine code that the OS can understand.

### **Why Can't the OS Directly Execute Java Code?**
An OS cannot directly execute Java programs because Java code is **not compiled into machine-specific binary code** (the code that a CPU understands). Instead, Java is compiled into platform-independent **bytecode**. This bytecode is not native to any OS or hardware, so it requires the JVM to interpret or compile it into the native code that can run on the underlying machine.

- **Java Bytecode ≠ Machine Code**: Bytecode is a set of instructions for the JVM, not for the hardware or OS. Each operating system and hardware combination has its own native machine code.
- **Role of the JVM**: The JVM serves as a **translator** that converts this bytecode into the machine code that is specific to the OS and hardware.

### **Flow of Java Program Execution**:
1. **You write Java code** in a .java file.
2. **The Java compiler (javac)** compiles your Java code into **bytecode** (.class files).
3. **The JVM** takes this bytecode and, depending on the OS, translates it into **machine code** that the OS can execute.
4. **The OS** interacts with the hardware (CPU, memory, etc.) to actually run the code.

### **Diagram of Java Program Execution**:

```
Your Code (.java) ---> Bytecode (.class) ---> JVM ---> OS ---> Hardware (CPU, Memory)
```

### Summary of their Relations:
- **Computer hardware**: Provides the raw resources (CPU, memory, etc.).
- **OS**: Manages hardware and provides a platform for applications to run.
- **JVM**: Provides the environment where Java applications can run, independent of the OS and hardware. It translates Java bytecode into machine-specific code that the OS and CPU can execute.

Thus, the OS cannot natively run Java programs. The JVM is required to **interpret and execute** Java bytecode, making Java platform-independent.