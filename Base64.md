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