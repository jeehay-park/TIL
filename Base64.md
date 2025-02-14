📅 19/06/2023

# BASE64, AES-256

postBody.body = BASE64.Encode(AES-256(session_key, postBody.body.json) )[IV: 0x00으로 초기화]
isEncyrpt : postBody.body 암호화 여부 [사용자 등록은  true만 지원함.]
암호화시 post body는 아래와 같음.
{
  "header": {
    "trId": "020011",
    "isEncyrpt": true,
  },
  "body": BASE64.Encode(AES-256(session_key, postBody.body.json))
}
sessionId정보는 JWT에 기술되어 있음.


To encode a string using Base64 in React and encrypt it using AES-256 with a session key, you can use the `crypto-js` library. Here's an example of how you can achieve this:

First, install the `crypto-js` library using npm or yarn:

```
npm install crypto-js
```

Then, in your React component, you can use the following code:

```jsx
import React from 'react';
import CryptoJS from 'crypto-js';

function MyComponent() {
  // Your session key and the JSON data to be encoded
  const sessionKey = 'your-session-key';
  const jsonData = { message: 'Hello, World!' };

  // Convert the JSON data to a string
  const jsonString = JSON.stringify(jsonData);

  // Encrypt the JSON string using AES-256 with the session key
  const encryptedData = CryptoJS.AES.encrypt(jsonString, sessionKey).toString();

  // Encode the encrypted data using Base64
  const encodedData = btoa(encryptedData);

  return <div>Encoded Data: {encodedData}</div>;
}

export default MyComponent;
```

In the above code:

1. Import the `crypto-js` library and the required AES module from it.
2. Set your session key and the JSON data you want to encode.
3. Convert the JSON data to a string using `JSON.stringify()`.
4. Encrypt the JSON string using AES-256 with the `CryptoJS.AES.encrypt()` function, passing the string and the session key.
5. Convert the encrypted data to a string using `toString()`.
6. Encode the encrypted data using Base64 with the `btoa()` function.
7. Render the encoded data in your React component.

Make sure to replace `'your-session-key'` with your actual session key and `'Hello, World!'` with your desired JSON data.

Note that `btoa()` is a built-in JavaScript function that encodes a string to Base64. It is not specific to React or `crypto-js`.


# Base64
Base64 is a binary-to-text encoding scheme that converts binary data into a sequence of printable ASCII characters. It is commonly used to encode binary data, such as images, audio files, and other types of files, into a text format that can be safely transmitted over protocols that handle only text data, such as email or HTTP.

In Base64 encoding, each group of three bytes from the original binary data is represented by four characters from the Base64 alphabet. These characters are typically letters (both uppercase and lowercase), digits, and two additional symbols, often "+" and "/". The "=" character is used as padding at the end of the encoded data if the input length is not a multiple of three bytes.

Base64 encoding is not a method of encryption or compression; it is simply a way to represent binary data as text. Decoding Base64-encoded data reverses the process, converting the text back into its original binary form.

Base64 encoding is widely used in various applications, including:

1. Email attachments: Binary files such as images or documents are encoded in Base64 format to be included as text within email messages.
2. Data transmission: Binary data is encoded in Base64 before transmission over protocols like HTTP or FTP that do not support binary data directly.
3. Data storage: Base64-encoded data can be stored in text-based data formats, databases, or configuration files.
4. Web development: Base64-encoded images can be embedded directly into HTML, CSS, or JavaScript code as data URLs.

Overall, Base64 encoding provides a convenient way to represent binary data as text, making it suitable for various applications that involve the exchange or storage of binary data in text-based environments.


---

📅 14/02/2025

Base64 encoding is a way of representing binary data (like images or files) as a sequence of printable ASCII characters. It's commonly used when you need to encode binary data to send over protocols that only handle text, such as email or in URL query parameters.

Let's break down how Base64 encoding and decoding works with an example.

### **Base64 Encoding Example**

1. **Start with the string**:  
   Let's say we have a string like `"hello"`.

2. **Convert to binary**:  
   First, we need to convert each character into its binary representation (in ASCII):
   
   - `'h'` → `01101000`
   - `'e'` → `01100101`
   - `'l'` → `01101100`
   - `'l'` → `01101100`
   - `'o'` → `01101111`

   So, `"hello"` in binary is:  
   ```
   01101000 01100101 01101100 01101100 01101111
   ```

3. **Group the binary into 6-bit chunks**:  
   Base64 works by dividing the binary data into 6-bit chunks:
   ```
   011010 000110 010101 101100 011011 000110 1111
   ```

   Now, if the last chunk is less than 6 bits, we pad it with 0s (this is why Base64 sometimes adds padding `=` at the end).

4. **Map to Base64 alphabet**:  
   Each 6-bit chunk corresponds to a Base64 character. The Base64 alphabet (indexing starts at 0) is as follows:
   
   ```
   A-Z = 0-25
   a-z = 26-51
   0-9 = 52-61
   + = 62
   / = 63
   ```

   So, the binary chunks above correspond to the following indices in the Base64 alphabet:
   
   ```
   011010 → 26 (a)
   000110 → 6  (G)
   010101 → 21 (V)
   101100 → 44 (s)
   011011 → 27 (b)
   000110 → 6  (G)
   1111 → Padding (==)
   ```

   Therefore, `"hello"` encoded in Base64 is:
   ```
   aGVsbG8=
   ```

---

### **Base64 Decoding Example**

1. **Start with the Base64 string**:  
   Let's decode the string `"aGVsbG8="` (which is the Base64 encoded form of `"hello"`).

2. **Remove padding**:  
   The padding `=` at the end can be ignored for decoding, so the string becomes:
   ```
   aGVsbG8
   ```

3. **Convert Base64 to binary**:  
   We convert each Base64 character back into its 6-bit binary value:
   
   - `a` → `011010`
   - `G` → `000110`
   - `V` → `010101`
   - `s` → `101100`
   - `b` → `011011`
   - `G` → `000110`
   - `8` → `1111` (last part gets padded)
   
   So, we get:
   ```
   011010 000110 010101 101100 011011 000110 1111
   ```

4. **Group into 8-bit chunks**:  
   Now we group the binary data back into 8-bit chunks:
   ```
   01101000 01100101 01101100 01101100 01101111
   ```

5. **Convert to characters**:  
   Convert each 8-bit chunk back to its ASCII character:
   
   - `01101000` → `h`
   - `01100101` → `e`
   - `01101100` → `l`
   - `01101100` → `l`
   - `01101111` → `o`

   The decoded string is:
   ```
   hello
   ```

---

### **JavaScript Example**

Here's how you could use JavaScript to do Base64 encoding and decoding:

```javascript
// Base64 Encoding
let str = "hello";
let encoded = btoa(str);  // "btoa" stands for "binary to ASCII"
console.log("Encoded:", encoded);  // Output: aGVsbG8=

// Base64 Decoding
let decoded = atob(encoded);  // "atob" stands for "ASCII to binary"
console.log("Decoded:", decoded);  // Output: hello
```

In this example:
- `btoa()` encodes a string to Base64.
- `atob()` decodes a Base64-encoded string back to its original value.

---

### **Python Example**

If you're working with Python, you can do Base64 encoding and decoding using the `base64` module:

```python
import base64

# Base64 Encoding
original_string = "hello"
encoded = base64.b64encode(original_string.encode())
print("Encoded:", encoded.decode())  # Output: aGVsbG8=

# Base64 Decoding
decoded = base64.b64decode(encoded)
print("Decoded:", decoded.decode())  # Output: hello
```

Here, we use `base64.b64encode()` to encode and `base64.b64decode()` to decode.

---

### **Why Use Base64?**

Base64 encoding is often used in scenarios where binary data needs to be stored or transmitted in environments that only handle text:
- **Email** (to encode binary attachments)
- **Data URLs** (for embedding images in web pages)
- **HTTP Headers** (e.g., for authentication tokens)

Would you like to dive into more details about Base64 or see some other encoding methods?


Great question! I can see why this part of the Base64 encoding procedure might seem a bit tricky, especially with the way we transform the binary data and then break it into 6-bit chunks.

Let’s break it down and clarify things step by step.

### **Base64 Encoding Procedure (Detailed)**

1. **Start with the string ("hello")**:  
   We begin with the string `"hello"`.

2. **Convert the characters into binary (ASCII representation)**:  
   Each character in the string is converted into its corresponding ASCII binary code (8 bits per character). Here’s the binary representation for `"hello"`:
   
   - `'h'` → `01101000`
   - `'e'` → `01100101`
   - `'l'` → `01101100`
   - `'l'` → `01101100`
   - `'o'` → `01101111`

   So the string `"hello"` in binary (using 8 bits for each character) looks like:
   ```
   01101000 01100101 01101100 01101100 01101111
   ```

3. **Combine the binary representations into one long binary string**:  
   When we concatenate these binary representations together, we get a single continuous stream of binary digits:
   ```
   01101000 01100101 01101100 01101100 01101111
   ```

   Which becomes:
   ```
   0110100001100101011011000110110001101111
   ```

4. **Split the long binary string into 6-bit chunks**:  
   Now, instead of working with 8-bit chunks (as we did before with ASCII characters), Base64 works with 6-bit chunks. To do this, we split the 32-bit string (from step 3) into 6-bit chunks.

   Here’s how we split the long binary string `0110100001100101011011000110110001101111` into 6-bit chunks:

   ```
   011010 000110 010101 101100 011011 000110 1111
   ```

   Notice that each chunk is exactly 6 bits.

5. **Padding with 0s if necessary**:  
   If the last chunk has fewer than 6 bits, we pad it with 0s. In our case, the last chunk `1111` is only 4 bits, so we add two `0`s to make it a full 6 bits:
   
   ```
   011010 000110 010101 101100 011011 000110 111100
   ```

6. **Convert each 6-bit chunk to a Base64 index**:  
   The next step is to convert each 6-bit chunk into a value that corresponds to the Base64 alphabet (a predefined set of 64 characters). The Base64 alphabet consists of:
   ```
   A-Z, a-z, 0-9, +, /
   ```
   These characters correspond to indices from `0` to `63`. Here’s how each chunk maps to the Base64 alphabet:
   
   - `011010` → 26 → `a`
   - `000110` → 6  → `G`
   - `010101` → 21 → `V`
   - `101100` → 44 → `s`
   - `011011` → 27 → `b`
   - `000110` → 6  → `G`
   - `111100` → 60 → `8`

7. **Result**:  
   The Base64 encoding of `"hello"` is:
   ```
   aGVsbG8=
   ```

### **Why 6-bit chunks?**

You might wonder why we break the binary data into 6-bit chunks instead of 8-bit chunks, which would be more natural, given that we’re working with ASCII characters (8 bits per character).

The reason Base64 uses 6-bit chunks is because it aims to represent binary data as printable ASCII characters. Since the standard ASCII characters use 8 bits, but we need a way to convert binary data into something that fits within that 64-character set (Base64), splitting into 6 bits makes sense mathematically.

This way, each chunk of 6 bits can be mapped to a single character in the 64-character alphabet, which is why Base64 works with 6-bit chunks.

---

### **Key Points to Remember**
- Each character in the original string is converted to an 8-bit binary representation.
- The binary data is then combined into a long string, which is split into 6-bit chunks for Base64 encoding.
- These 6-bit chunks are mapped to the Base64 alphabet, and the result is a string made up of Base64 characters.

---
