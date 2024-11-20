# void

📅 19/11/2024

In Java, the keyword **`void`** specifies that a method **does not return any value**.

### **Key Details About `void`**

1. **Purpose:**  
   - When a method performs an action but does not return any result to the caller.
   - Common for methods that **print, log, or modify state** but don't need to send data back.

2. **Usage:**  
   - Declared before the method name in its signature.
   - Example: `public void methodName()` indicates the method `methodName` won't return a value.

---

### **Example:**

```java
public class Example {
    // A void method
    public void showName(String name) {
        System.out.println("Hello, " + name);
    }
}

// Usage
Example obj = new Example();
obj.showName("Alice"); // Prints: Hello, Alice
```

Here, `showName` only performs the action of printing and does not return any value.

---

### **Contrast with Non-void Methods**

A method that **does return a value** must:
- Specify the **type of value** it will return instead of `void`.
- Use the `return` keyword to provide that value.

#### **Example:**
```java
public class Example {
    // A method with a return type
    public String getGreeting(String name) {
        return "Hello, " + name;
    }
}

// Usage
Example obj = new Example();
String greeting = obj.getGreeting("Alice");
System.out.println(greeting); // Prints: Hello, Alice
```

---

### **When to Use `void`**

1. When you don't need a result after the method's execution.
2. For methods that:
   - Print to the console.
   - Log messages.
   - Perform state updates (e.g., modifying object fields).
   - Send actions to external systems (e.g., APIs).

---

### **Comparison Table: `void` vs Return Types**

| **Aspect**           | **`void` Method**                      | **Non-void Method**                  |
|-----------------------|----------------------------------------|---------------------------------------|
| **Returns a Value?**  | No.                                   | Yes.                                 |
| **`return` Keyword**  | Optional (can appear without a value).| Mandatory with a value of the type.  |
| **Purpose**           | Perform actions, not provide results. | Perform actions and return results.  |
| **Usage Example**     | `public void update() { ... }`        | `public int calculate() { return x; }` |

---

### **Void Method with `return`:**

Although `void` methods do not return a value, you can still use the `return` keyword **without any value** to terminate execution early.

#### **Example:**
```java
public void checkAge(int age) {
    if (age < 18) {
        System.out.println("You are too young.");
        return; // Exits method early
    }
    System.out.println("You are eligible.");
}
```

---

### Summary

- **`void`:** Indicates no value is returned.
- Use it for methods designed for actions, not results.