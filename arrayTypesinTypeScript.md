# Array types in TypeScript

📅 18/03/2024

Of course! Here are examples for different array types in TypeScript:

1. **Array of Objects** (`Array<{ [key: string]: any }>`):
   ```typescript
   const objectArray: Array<{ [key: string]: any }> = [
     { name: "John", age: 30 },
     { name: "Alice", age: 25 },
   ];
   ```

2. **Array of Strings** (`Array<string>`):
   ```typescript
   const stringArray: Array<string> = ["apple", "banana", "orange"];
   ```

3. **Array of Numbers** (`Array<number>`):
   ```typescript
   const numberArray: Array<number> = [1, 2, 3, 4, 5];
   ```

4. **Array of Booleans** (`Array<boolean>`):
   ```typescript
   const booleanArray: Array<boolean> = [true, false, true];
   ```

5. **Array of Tuples** (Fixed-length arrays with specific types at each index):
   ```typescript
   const tupleArray: Array<[string, number]> = [
     ["John", 30],
     ["Alice", 25],
   ];
   ```

6. **Array of Union Types** (Arrays containing elements of different types):
   ```typescript
   const unionArray: Array<string | number> = ["apple", 10, "orange", 20];
   ```

7. **Array of Custom Types** (Arrays containing elements of custom-defined types):
   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   const customArray: Array<Person> = [
     { name: "John", age: 30 },
     { name: "Alice", age: 25 },
   ];
   ```

These examples cover some common scenarios, but you can create arrays with elements of any type or combination of types in TypeScript.


#

If you have an object with varying keys, and you want to represent its type in TypeScript, you have a few options.

1. **Index Signature**: If you know the type of values but the keys are dynamic, you can use an index signature.

```typescript
interface DynamicObject {
  [key: string]: any;
}

const dynamicObject: DynamicObject = {
  name: "John",
  age: 30,
  // Other dynamic keys and values
};
```

2. **Record Type**: If you know the specific set of keys but their values can vary, you can use the `Record` type.

```typescript
type DynamicRecord = Record<string, any>;

const dynamicRecord: DynamicRecord = {
  name: "John",
  age: 30,
  // Other dynamic keys and values
};
```

3. **Using `any`**: If the structure is completely unknown and you want to allow any type of value for any key, you can simply use `any`.

```typescript
const dynamicObject: any = {
  name: "John",
  age: 30,
  // Other dynamic keys and values
};
```

Each approach has its use cases, and you can choose the one that fits your scenario best based on your requirements and constraints.


#
To create a component that corresponds to the path `/systemkey/list/:keyName`, you can create a file in your `pages` directory named `[keyName].tsx`. The brackets in the filename indicate that `keyName` is a dynamic route parameter.

Here's an example of how you can create such a component:

```tsx
// pages/systemkey/list/[keyName].tsx

import { useRouter } from 'next/router';

const SystemKeyList = () => {
  const router = useRouter();
  const { keyName } = router.query;

  return (
    <div>
      <h1>System Key List</h1>
      <p>Key Name: {keyName}</p>
      {/* Additional content */}
    </div>
  );
};

export default SystemKeyList;
```

In this example, `[keyName].tsx` will match any path that follows `/systemkey/list/`, and the value of the dynamic route parameter `keyName` will be available in `router.query`. You can then use this value to fetch data or render content dynamically based on the key name.


#

📅 11/04/2024

The error you're encountering indicates that TypeScript cannot guarantee the type of the `item` variable when mapping over `Object.values(info1 ? info1 : {})`.

The `Object.values` function returns an array of the object's values, but it doesn't specify the type of those values. TypeScript infers the type as `unknown` because it cannot determine the exact type of the values beforehand.

To resolve this, you can provide a type assertion to inform TypeScript of the expected type of `item`. If you know the type of `info1` and its values, you can cast `item` to that type.

For example, if `info1` is expected to have string values:

```typescript
{Object.values(info1 ? info1 : {}).map((item: unknown, index: number) => (
  <td key={index}>{item as string}</td>
))}
```

Replace `string` with the appropriate type if `info1` values are of a different type. This type assertion assures TypeScript that `item` is of the specified type, resolving the error.


