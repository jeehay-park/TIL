# map and persist

📅 19/11/2024

Great question! Let’s break down the concepts of **"map"** and **"persist"** in the context of JPA (Java Persistence API) and Spring Boot.

---

### **1. What Does "Map" Mean?**
- **Mapping** refers to the process of linking (or associating) a Java object (class, fields, etc.) to a corresponding database structure (table, columns, etc.).
- JPA uses annotations (like `@Entity`, `@Table`, `@Column`, etc.) to specify how a Java class and its fields relate to a database table and its columns.

#### **Example: Mapping Java Classes to Database Tables**
```java
@Entity
@Table(name = "program_info") // Map this class to the "program_info" table in the database
public class ProgramInfo {

    @Id // Map this field to the primary key column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "program_name") // Map this field to the "program_name" column
    private String programName;

    @Column(name = "description") // Map this field to the "description" column
    private String description;

    // Getters and setters omitted for brevity
}
```

In this example:
- The `ProgramInfo` class is **mapped** to the `program_info` table in the database.
- The `programName` field is **mapped** to the `program_name` column in the table.

Mapping ensures that JPA knows how to translate your Java objects into a relational database schema.

---

### **2. What Does "Persist" Mean?**
- **Persistence** refers to the process of saving, retrieving, updating, or deleting objects from a database using JPA.
- When you **persist** an object, you save its current state into the database. This is done through the **EntityManager** or a higher-level abstraction like Spring Data JPA's `save()` method.

#### **Example: Persisting a Java Object**
```java
ProgramInfo programInfo = new ProgramInfo();
programInfo.setProgramName("Sample Program");
programInfo.setDescription("This is a sample program.");

// Save the object into the database
programInfoRepository.save(programInfo);
```

When the `save()` method is called:
1. JPA converts the `ProgramInfo` object into an SQL `INSERT` statement.
2. The data is written to the corresponding table (`program_info`) in the database.
3. The object is now **persisted**, meaning it's stored in the database.

---

### **How "Mapping" and "Persisting" Work Together**
- **Mapping** defines the structure: *Which Java class corresponds to which database table? Which field corresponds to which column?*
- **Persisting** performs the actual operation: *Saving, updating, or deleting the mapped Java object in the database.*

#### **Example Workflow**
1. **Define the mapping**: Use annotations like `@Entity` and `@Table` to specify the relationship between a class and a table.
2. **Persist data**: Create or update instances of the mapped class, and persist them using JPA (e.g., `save()`).

---

### **Analogy**
Think of **mapping** as drawing a blueprint for a bridge that connects two sides: your Java application and the database. **Persisting** is the actual process of transporting vehicles (data) across this bridge, whether it's adding, updating, or retrieving information.

---

### **Key Takeaways**
- **Mapping** is about defining how Java objects relate to database structures.
- **Persisting** is about saving or managing those objects in the database.
- Mapping is a prerequisite for persisting because JPA needs to know how to handle your Java objects in the context of your database.


In Spring Boot with JPA (Java Persistence API), the `@Entity` and `@Table` annotations are used to define and map Java classes to database tables. Here's a breakdown of these annotations:

### 1. **`@Entity`**:
   - This annotation marks a class as a JPA entity, which means the class is mapped to a table in the database.
   - It's required for any class that you want to persist to the database using JPA.
   - By default, the table name will be the same as the class name, but you can override it with the `@Table` annotation if needed.

   **Example**:
   ```java
   @Entity
   public class ProgramInfo {
       // Fields, constructors, getters, and setters
   }
   ```

   This will map the `ProgramInfo` class to a table named `program_info` in the database, using the default table naming strategy.

---

### 2. **`@Table(name = "program_info")`**:
   - This annotation is optional but allows you to specify the exact name of the database table that the entity will be mapped to.
   - If you don't provide a `@Table` annotation, JPA will use the default table name, which is the class name (in this case, `ProgramInfo`).
   - The `name` attribute of `@Table` allows you to customize the table name.

   **Example**:
   ```java
   @Entity
   @Table(name = "program_info") // Specifies the exact table name
   public class ProgramInfo {
       // Fields, constructors, getters, and setters
   }
   ```

   In this case, the `ProgramInfo` class will be mapped to the `program_info` table in the database, regardless of the class name.

---

### Full Example with `@Entity` and `@Table`:

```java
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "program_info") // Mapping to "program_info" table in the database
public class ProgramInfo {

    private Long id;
    private String programName;
    private String programDescription;

    // Constructors, getters, and setters

    public ProgramInfo() {
    }

    public ProgramInfo(Long id, String programName, String programDescription) {
        this.id = id;
        this.programName = programName;
        this.programDescription = programDescription;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getProgramDescription() {
        return programDescription;
    }

    public void setProgramDescription(String programDescription) {
        this.programDescription = programDescription;
    }
}
```

### Key Takeaways:
- **`@Entity`**: Marks the class as a JPA entity, i.e., it's mapped to a table in the database.
- **`@Table`**: Specifies the table name in the database. If not provided, the default table name will be the same as the class name.

This combination of annotations allows you to map Java classes to specific database tables in a flexible way.


In Java, when mapping database types like `TEXT` or `MEDIUMTEXT` in JPA, you typically use the `String` data type. Here's a breakdown:

---

### **Mapping Database Types in JPA**
| **Database Type**  | **Java Type** | Notes                                                                                   |
|---------------------|--------------|-----------------------------------------------------------------------------------------|
| `VARCHAR`           | `String`     | Used for shorter strings, typically with a defined length (e.g., `varchar(64)`).        |
| `TEXT`              | `String`     | Used for longer strings (up to 65,535 characters).                                      |
| `MEDIUMTEXT`        | `String`     | Used for very large strings (up to 16,777,215 characters).                              |
| `INT` or `BIGINT`   | `int` or `long` | Use `Integer` or `Long` for nullable fields.                                           |
| `BOOLEAN` or `BIT`  | `boolean`    | Use `Boolean` for nullable fields.                                                     |

---

### **Example Mapping for Your Table**
```java
@Entity
@Table(name = "program_info")
public class ProgramInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seq", unique = true, nullable = false)
    private Long seq;

    @Column(name = "prog_id", length = 32, unique = true, nullable = false)
    private String progId;

    @Column(name = "prog_name", length = 64, nullable = false)
    private String progName;

    @Column(name = "product", length = 32, nullable = false)
    private String product;

    @Column(name = "test_code", length = 64)
    private String testCode;

    @Column(name = "description", columnDefinition = "TEXT") // Maps to a TEXT field
    private String description;

    @Column(name = "status", length = 16, nullable = false)
    private String status;

    @Column(name = "param", length = 128)
    private String param;

    @Column(name = "param_ext", columnDefinition = "MEDIUMTEXT") // Maps to a MEDIUMTEXT field
    private String paramExt;

    @Column(name = "is_encrypted_sn", length = 16)
    private String isEncryptedSn;

    @Column(name = "prof_id", length = 32)
    private String profId;

    @Column(name = "keyis_id", length = 32)
    private String keyisId;

    @Column(name = "scrt_id", length = 32)
    private String scrtId;

    // Getters and setters omitted for brevity
}
```

---

### **Explanation**
1. **`TEXT` and `MEDIUMTEXT` Fields:**  
   Both `description` and `param_ext` are mapped to `String`. Use the `columnDefinition` attribute in the `@Column` annotation to specify the database-specific type (`TEXT` or `MEDIUMTEXT`).

2. **Field Length for `VARCHAR`:**  
   The `length` attribute in `@Column` specifies the maximum length for `VARCHAR` fields. For `TEXT` or `MEDIUMTEXT`, length is not necessary because their size is predefined by the database type.

3. **Nullable Fields:**  
   Fields that are allowed to be null in the database should not have `nullable = false`.

---

### **Notes**
- When dealing with extremely large text fields (like `MEDIUMTEXT`), be cautious about performance implications when querying or fetching them frequently.
- Use `@Lob` instead of `columnDefinition` if you want to map these fields as large objects (LOBs) and let the persistence provider decide the storage strategy:
    ```java
    @Lob
    @Column(name = "param_ext")
    private String paramExt;
    ```