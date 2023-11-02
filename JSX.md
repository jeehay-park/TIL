# JSX

📅 01/11/2023

JSX, which stands for JavaScript XML, is an extension to JavaScript that allows you to write HTML-like code within your JavaScript or TypeScript files. It's commonly associated with React but can be used in other JavaScript frameworks and libraries as well. JSX is used to describe the structure and content of user interfaces.

XML : Extensible Markup Language is a markup language and file format for storing, transmitting, and reconstructing arbitrary data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. 

Here are the key features of JSX:

1. **HTML-Like Syntax:** JSX uses a syntax that closely resembles HTML, making it familiar and easy to work with for web developers.

2. **Components:** JSX allows you to define custom components and their properties (props) using a syntax similar to HTML elements.

3. **Expression Interpolation:** You can embed JavaScript expressions within curly braces `{}` in JSX, allowing dynamic content and calculations.

4. **Event Handling:** JSX supports event handling by attaching event listeners to elements using standard HTML event attributes.

5. **Nesting:** JSX enables you to nest elements and components, just like in regular HTML.

Here's an example of JSX code within a React component:

```jsx
import React from 'react';

function MyComponent() {
  const name = 'John';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => alert('Button clicked')}>Click Me</button>
    </div>
  );
}
```

In this example:

- JSX is used to define the structure of a React component (`MyComponent`).
- The `<div>`, `<h1>`, and `<button>` elements are used, just like in HTML.
- JavaScript expressions (`{name}` and `() => alert('Button clicked')`) are embedded within curly braces for dynamic content and event handling.

When you use React or other JSX-based libraries, this JSX code is transpiled into JavaScript that creates and manages the user interface, making it possible to build interactive and dynamic web applications.