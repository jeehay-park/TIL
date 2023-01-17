🔗 [ref](https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/)

# useEffect
- When the core React Hooks were added to the library in 2018 (useState, useEffect, and so on), many developers were confused by the name of this hook: "useEffect".

- What exactly is an "effect"?

- The word effect refers to a functional programming term called a "side effect".

- But to really understand what a side effect is, we first have to grasp the concept of a pure function.

- You may not know this, most React components are intended to be pure functions.

- Most React components are pure functions, meaning they receive an input and produce a predictable output of JSX.

The input to a JavaScript function is arguments. What is the input to a React component, however? Props!

- Pure functions have the great benefit of being predictable, reliable, and easy to test.

- This is as compared to when we need to perform a side effect in our component.

### side effects in React
- Side effects are not predictable because they are actions which are performed with the "outside world."

- We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

- Think about if we were to request data (like blog posts) from a server that has failed and instead of our post data, gives us a 500 status code response.

- Virtually all applications rely on side effects to work in one way or another, aside from the simplest applications.

- Common side effects include:

    - Making a request to an API for data from a backend server
    - To interact with browser APIs (that is, to use document or window directly)
    - Using unpredictable timing functions like setTimeout or setInterval
    - This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components.

```
function User({ name }) {
  document.title = name; 
  // This is a side effect. Don't do this in the component body!
    
  return <h1>{name}</h1>;   
}
```
- If we perform a side effect directly in our component body, it gets in the way of our React component's rendering.

- Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.

- This is what useEffect gives us.

- In short, useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.

```
import { useEffect } from 'react';

function User({ name }) {
  useEffect(() => {
    document.title = name;
  }, [name]);
    
  return <h1>{name}</h1>;   
}
```

- The function passed to useEffect is a callback function. This will be called after the component renders.

- In this function, we can perform our side effects or multiple side effects if we want.

- The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.

- In our example above, since we are changing the title based off of a value in the outer scope, name, we need to include that within the dependencies array.

- What this array will do is it will check and see if a value (in this case name) has changed between renders. If so, it will execute our use effect function again.

- This makes sense because if the name changes, we want to display that changed name and therefore run our side effect again.

### The `useEffect` Hook allows you to perform side effects in your components.

### Some examples of side effects are: 
- fetching data 
- directly updating the DOM 
- timers.

### `useEffect` accepts two arguments. The second argument is optional.

`useEffect(<function>, <dependency>)`


### 1. No dependency passed:

```
useEffect(() => {
  //Runs on every render
});
```

### 2. An empty array:
```
useEffect(() => {
  //Runs only on the first render
}, []);
```

### 3. Props or state values:
```
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```


