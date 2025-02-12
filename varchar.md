# `VARCHAR(255)` in a database

📅 12/02/2025

`VARCHAR(255)` in a database means **the maximum number of characters** that the column can store, not bits.  

### **Breakdown:**
- `VARCHAR(255)` allows **up to 255 characters** in a string.
- The **actual storage size** depends on the character encoding:
  - **UTF-8:** Each character can take **1 to 4 bytes**.
  - **Latin1:** Each character takes **1 byte**.
- The database **only uses the space needed** for each string, plus **1 or 2 extra bytes** to store the length.

### **Example:**
| Value               | Storage (UTF-8) |
|---------------------|----------------|
| `'A'`              | 2 bytes (1 char + 1 length byte) |
| `'Hello'`          | 6 bytes (5 chars + 1 length byte) |
| `'안녕하세요'`      | 16 bytes (each Korean char takes 3 bytes + 1 length byte) |

### **Conclusion:**
`VARCHAR(255)` refers to the **number of characters**, not bits. The actual storage depends on **encoding and string length**. 🚀

Yes, `VARCHAR(20)` means the column can store **up to 20 characters**, regardless of their byte size.  

However, the actual storage in bytes depends on the **character encoding**:  
- **Latin1 (1 byte per character):** 20 characters = **20 bytes**  
- **UTF-8 (1 to 4 bytes per character):**  
  - If all characters are **English letters**, it takes **20 bytes**.  
  - If all characters are **Korean (Hangul) or emojis**, it could take **up to 60 bytes** (since each character may take 3 bytes).  

So, **VARCHAR(20) limits the number of characters, not bytes**. 🚀