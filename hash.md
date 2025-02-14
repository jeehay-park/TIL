📅 13/02/2025

# 🔑 Hashing vs. Encryption: 

### **🔑 Hashing vs. Encryption:**  
- **Hashing:** A one-way process that converts input (plain text) into a fixed-length string. You **cannot reverse** it back to the original text.  
- **Encryption:** A two-way process that converts plain text into ciphertext, which can later be **decrypted** back into the original text using a key.

---

### **SHA-512 is a Hashing Algorithm:**  
- When you run `"test1234"` through SHA-512, you get a **hash**.  
- The same input **always produces the same hash**.  
- Even a tiny change (e.g., `"test1235"`) produces a **completely different hash** (avalanche effect).  
- You **cannot convert the hash back** to `"test1234"`.

---

### **Purpose of Hashing in Login Systems:**  
- You **never store the actual password** in the database.  
- Instead, you **store the hash** of the password.  
- On login, you **hash the input** and compare it with the **stored hash**.  
- If they match, the password is correct.

---

Would you like me to help you store the hash and implement the login logic using Spring Boot and JWT? 😊

