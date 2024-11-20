# `public class` and `public static class`

📅 19/11/2024

The key difference between `public class` and `public static class` lies in how the class is associated with other classes and their context in memory:

---

### **1. `public class`**

- **Definition:** A top-level, non-static class.
- **Behavior:** 
  - It cannot be declared as `static` because top-level classes in Java are not nested within other classes.
  - It exists independently and doesn't rely on any enclosing class for its lifecycle.
  - Instances of this class can be created without any dependency on other classes.

#### **Example:**
```java
public class OuterClass {
    // Fields and methods
}

OuterClass outer = new OuterClass(); // Instantiation works directly
```

---

### **2. `public static class`**

- **Definition:** A static nested class (also called a static inner class).
- **Behavior:** 
  - It is a class defined inside another class and declared with the `static` keyword.
  - Unlike regular nested classes, it doesn't require an instance of the outer class to be created.
  - It behaves like a top-level class but is still nested for logical grouping or encapsulation.

#### **Example:**
```java
public class OuterClass {
    public static class StaticNestedClass {
        // Fields and methods
    }
}

// Usage
OuterClass.StaticNestedClass nested = new OuterClass.StaticNestedClass(); // No need for an instance of OuterClass
```

---

### **Key Differences**

| **Aspect**                 | **`public class`**                                     | **`public static class`**                                     |
|----------------------------|-------------------------------------------------------|-------------------------------------------------------------|
| **Context**                | A top-level class or a nested class without `static`. | A nested class declared with `static`.                     |
| **Dependency**             | Independent of other classes.                        | Requires the enclosing class for context but not for instantiation. |
| **Usage**                  | Used for standalone objects or main application logic.| Used for encapsulating utility or logically grouped functionality. |
| **Access to Outer Class**  | Can access non-static members of its enclosing class if it's nested.| Cannot access non-static members of the outer class. |
| **Instantiation**          | Direct instantiation.                                 | Use `OuterClass.StaticNestedClass` for instantiation.        |

---

### **When to Use**

1. **`public class`:**
   - When the class is top-level and unrelated to any specific enclosing class.
   - Use this for main entities, services, and independent classes.

2. **`public static class`:**
   - When the class logically belongs to another class but doesn’t need access to the outer class's instance.
   - Use it for helper classes, constants, or utility-like functionality tied to the enclosing class.

---

### **Example Comparison**

#### **Using `public class`:**
```java
public class Employee {
    // Employee details
}

Employee emp = new Employee(); // Independent
```

#### **Using `public static class`:**
```java
public class Company {
    public static class Department {
        // Department details
    }
}

Company.Department dept = new Company.Department(); // Nested, but no need for an instance of Company
```

### **Summary**
- Use `public class` for standalone, independent classes.
- Use `public static class` for nested classes that do not need to access the instance variables or methods of the outer class.