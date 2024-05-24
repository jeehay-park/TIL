# 'fetch API'

In JavaScript, when you use `await response.json()`, you're not directly parsing the JSON string. Instead, `response.json()` is a method provided by the Fetch API that internally handles parsing the JSON response body for you.

Here's how it works:

1. **`response.json()`**:
   - This method is called on the `Response` object returned by the `fetch` function.
   - It reads the response body to completion as a JSON string.
   - Then, it parses the JSON string into a JavaScript object.
   - Finally, it returns a promise that resolves with this JavaScript object.

2. **`await response.json()`**:
   - When you use `await` with `response.json()`, you're waiting for this promise to resolve.
   - Once the promise resolves, it provides you with the parsed JavaScript object representing the JSON data from the response body.
   - You can then directly work with this JavaScript object in your code.

So, you don't need to use `JSON.parse()` separately because `response.json()` already handles the parsing of the JSON response for you. By using `await response.json()`, you directly get the JavaScript object representation of the JSON data, which you can then manipulate or use as needed in your code.

In summary, `await response.json()` is the preferred way to parse JSON responses when using the Fetch API in JavaScript because it simplifies the process by directly returning a parsed JavaScript object without needing to manually call `JSON.parse()`.