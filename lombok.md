# Lombok annotations

📅 19/11/2024

Certainly! Let's compare the code with and without **Lombok annotations**. This will help you understand how much boilerplate code Lombok removes and how it improves readability and reduces manual effort.

### Example 1: Without Annotations (Manually written code)

Here's how a class looks without Lombok annotations:

#### Without Lombok (Manually Writing the Code)
```java
public class User {
    private String name;
    private int age;

    // Default constructor
    public User() {
        // No-argument constructor
    }

    // All-arguments constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter for 'name'
    public String getName() {
        return name;
    }

    // Setter for 'name'
    public void setName(String name) {
        this.name = name;
    }

    // Getter for 'age'
    public int getAge() {
        return age;
    }

    // Setter for 'age'
    public void setAge(int age) {
        this.age = age;
    }

    // toString method (Optional but often useful)
    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

#### What We Manually Wrote:
- We wrote the **constructor** (both no-argument and all-arguments).
- We manually created **getter** and **setter** methods for each field.
- We created a **toString** method (optional, but can be helpful).

### Example 2: With Lombok Annotations

Now, let's simplify the class using Lombok annotations.

#### With Lombok Annotations
```java
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
public class User {
    private String name;
    private int age;
}
```

#### What Lombok Does:
- **`@Getter` and `@Setter`**: Lombok automatically generates **getter** and **setter** methods for all fields. You no longer need to write them manually.
- **`@AllArgsConstructor`**: Lombok generates a constructor that takes all fields as parameters. This eliminates the need to manually write an all-arguments constructor.
- **`@NoArgsConstructor`**: Lombok generates a no-argument constructor. You don't need to write this constructor yourself.
- **`@Builder(toBuilder = true)`**: Lombok generates a builder for the class. The `toBuilder = true` option allows you to clone an object and modify specific fields.
- **`@ToString`**: Lombok automatically generates the `toString()` method, so you don't need to write it yourself.

### Key Differences:

| Feature             | Without Lombok (Manually written) | With Lombok (Using annotations)    |
|---------------------|-----------------------------------|-------------------------------------|
| **No-argument constructor** | Manually written `public User()` | `@NoArgsConstructor` annotation |
| **All-arguments constructor** | Manually written `public User(String name, int age)` | `@AllArgsConstructor` annotation |
| **Getter/Setter methods** | Manually written for each field | `@Getter` and `@Setter` annotations |
| **toString() method**   | Manually written `toString()` method | `@ToString` annotation |
| **Builder pattern**    | Manually writing a builder class | `@Builder(toBuilder = true)` annotation |

### Example 3: Using the Builder Pattern

Using **Lombok's `@Builder`** allows you to build instances of a class in a more readable way, especially if the class has many fields.

#### Without Lombok (Manually written code with Builder Pattern)

```java
public class User {
    private String name;
    private int age;

    // Constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public static class UserBuilder {
        private String name;
        private int age;

        public UserBuilder name(String name) {
            this.name = name;
            return this;
        }

        public UserBuilder age(int age) {
            this.age = age;
            return this;
        }

        public User build() {
            return new User(name, age);
        }
    }

    public static UserBuilder builder() {
        return new UserBuilder();
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

#### With Lombok (Simplified Builder Pattern)

```java
import lombok.Builder;

@Builder
public class User {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
```

### Builder Pattern Comparison:

| Feature                   | Without Lombok                    | With Lombok                      |
|---------------------------|-----------------------------------|-----------------------------------|
| **Builder Pattern**        | Manually written builder class    | `@Builder` annotation             |

### Final Thoughts:

- **Without Lombok**, you need to manually create constructors, getters, setters, `toString()` methods, and if needed, the builder pattern.
- **With Lombok**, you simply use annotations like `@Getter`, `@Setter`, `@Builder`, `@AllArgsConstructor`, `@NoArgsConstructor`, and `@ToString` to automatically generate these features.

Lombok reduces the amount of boilerplate code in your classes, making your code more concise and readable, while still maintaining full functionality.

### Tradeoffs:
- **Pros of Lombok**: It dramatically reduces boilerplate code, increases readability, and reduces the chances of errors caused by writing repetitive code.
- **Cons of Lombok**: It introduces an additional dependency in your project, and developers need to be familiar with what the annotations are doing behind the scenes. Also, Lombok annotations are not natively understood by some tools or IDEs (though most modern IDEs like IntelliJ IDEA and Eclipse support it).

This comparison should give you a clearer idea of how Lombok annotations simplify your code.