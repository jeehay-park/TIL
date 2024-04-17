# TypeScript

📅 12/03/2024

You can implement runtime checks in your code to ensure that the data received from asynchronous operations conforms to your expected types. Here are some common approaches to achieve this:

1. **Type Guards**: Use type guards to check the type of data at runtime. TypeScript supports type guards, which are functions that return a boolean indicating whether the provided value is of a certain type. You can define custom type guards or use built-in functions like `typeof`, `instanceof`, or `Array.isArray()`.

```typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}

if (isString(data)) {
    // Data is a string
} else {
    // Handle other cases
}
```

2. **Validation Functions**: Write validation functions to check the structure and content of the data. These functions can verify properties, nested objects, or arrays within the data to ensure they match your expectations.

```typescript
interface UserData {
    name: string;
    age: number;
}

function validateUserData(data: any): data is UserData {
    return typeof data === 'object' && 'name' in data && 'age' in data;
}

if (validateUserData(data)) {
    // Data is a valid UserData object
} else {
    // Handle other cases
}
```

3. **Runtime Assertions**: Use runtime assertions or assertions libraries to enforce type constraints at runtime. Libraries like `io-ts` or `joi` provide runtime validation for TypeScript types.

```typescript
import * as t from 'io-ts';

const UserData = t.type({
    name: t.string,
    age: t.number,
});

const result = UserData.decode(data);

if (result._tag === 'Right') {
    const userData = result.right;
    // Data is a valid UserData object
} else {
    // Handle validation errors
}
```

These approaches can help you validate data received from asynchronous operations, ensuring that it conforms to your expected types and structure. By incorporating runtime checks into your code, you can enhance the robustness and reliability of your TypeScript applications, especially when dealing with dynamically typed data from external sources like servers.


If you're dealing with asynchronous data fetching and want to ensure type safety during runtime, you can implement runtime checks at the point where you receive the data from the asynchronous operations. Here's how you can do it:

1. **Type Assertion**: Use type assertion to specify the expected type of the data received from asynchronous operations. This can be done using the `as` keyword or the `TypeScript` type assertion functions like `asserts` or `is`.

```typescript
// Assuming data is fetched asynchronously
const responseData: any = await fetchData();
const validatedData = responseData as YourType; // Type assertion

// Now you can safely use validatedData with type safety
```

2. **Validation Functions**: Write validation functions to check the structure and content of the data received from asynchronous operations. These functions can verify properties, nested objects, or arrays within the data to ensure they match your expectations.

```typescript
async function fetchData(): Promise<any> {
    // Fetch data asynchronously
}

async function processData(): Promise<void> {
    const data = await fetchData();
    if (isValidData(data)) {
        // Handle valid data
    } else {
        // Handle invalid data
    }
}

function isValidData(data: any): data is YourType {
    // Implement your validation logic here
    // Return true if data is valid, false otherwise
}
```

3. **Runtime Assertions**: Use runtime assertions or validation libraries like `io-ts`, `joi`, or `class-validator` to validate the data received from asynchronous operations against your TypeScript types.

```typescript
import * as t from 'io-ts';

const MyType = t.type({
    // Define your type structure here
});

async function fetchData(): Promise<any> {
    // Fetch data asynchronously
}

async function processData(): Promise<void> {
    const data = await fetchData();
    const result = MyType.decode(data);
    if (result._tag === 'Right') {
        const validatedData = result.right;
        // Handle valid data
    } else {
        // Handle validation errors
    }
}
```

By incorporating these runtime checks and validation mechanisms, you can ensure type safety for the data received from asynchronous operations, even when dealing with dynamically typed data from external sources like servers.


If you're using Redux Thunk and Axios for data fetching, you can implement runtime checks after receiving the data in your Redux Thunk action creators. Here's an example of how you can do it:

```typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MyData {
    // Define your data structure here
}

export const fetchData = createAsyncThunk(
    'data/fetch',
    async () => {
        try {
            const response = await axios.get('/api/data');
            // Assuming the response contains data in the expected structure
            const data: MyData = response.data;
            // Perform runtime checks here if needed
            return data;
        } catch (error) {
            // Handle errors
            throw error;
        }
    }
);
```

In this example:

1. We define an interface `MyData` to represent the structure of the data we expect to receive from the API.

2. We create an async thunk `fetchData` using `createAsyncThunk` from Redux Toolkit. Inside the thunk, we use Axios to make a GET request to `/api/data`.

3. Upon receiving the response, we assume that it contains data in the expected structure (`MyData`). You can perform runtime checks here to ensure that the data matches the expected structure using type assertion, validation functions, or validation libraries.

4. If the data passes the runtime checks, it is returned from the thunk. If there are any errors during the data fetching process, they are thrown and can be handled in the UI or caught in a higher level error boundary.


No, TypeScript itself does not perform runtime type checking. TypeScript's type system is purely static and is used to catch type errors during development time.

In the example provided, defining the `MyData` interface allows TypeScript to perform type checking at compile time. This means that TypeScript will check if the data you assign to variables of type `MyData` in your code conforms to the structure defined by the interface. If there are any type mismatches or violations, TypeScript will report them as type errors during development.

However, once your code is compiled to JavaScript and runs in the browser or Node.js environment, the TypeScript type annotations are stripped away, and there is no runtime type checking by default. Therefore, if you want to perform runtime type checking, you'll need to implement it yourself using techniques such as type guards, validation functions, or third-party libraries like io-ts or Yup. These techniques allow you to validate the structure and types of data at runtime based on the types defined in TypeScript.


In TypeScript, adding a question mark `?` after a property name in an interface means that the property is optional. 

For example, consider the following interface:

```typescript
interface AuthState {
  token?: Token;
}
```

In this case, `token` is an optional property. This means that an object of type `AuthState` may or may not have a `token` property. If it does have a `token` property, its type must be `Token`. If it doesn't have a `token` property, the value will be `undefined`.

This is useful when you have properties that may or may not be present in an object, depending on the context. It gives you flexibility in defining object shapes and allows for more concise and expressive type definitions.

