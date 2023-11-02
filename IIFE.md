# IIFE (Immediately Invoked Function Expression)

📅 01/11/2023

The code you've provided `(function() {} ())` is an example of an Immediately Invoked Function Expression (IIFE). It's a common JavaScript design pattern used to create a self-contained and isolated scope for a block of code.

Here's how it works:

1. The outer parentheses `(function() {})` enclose the entire function expression. This is done to prevent the function from being treated as a function declaration. It essentially turns the function into an expression.

2. The additional parentheses at the end `()` immediately invoke the function. This means that the function is defined and executed in a single step.

3. The function itself is empty in this case, which means it doesn't have any code inside it. It's essentially an empty function that doesn't perform any actions.

IIFE is often used to create private or isolated scopes for variables, preventing pollution of the global scope. Developers use it to encapsulate code, create modules, and manage dependencies without exposing variables and functions to the global scope.

Here's an example of a more practical IIFE:

```javascript
(function() {
  // Your code here
  var privateVariable = 42;
  function privateFunction() {
    console.log("I'm private!");
  }

  // Your code can use privateVariable and privateFunction,
  // but they won't be accessible from outside the IIFE.
})();
```

In this example, `privateVariable` and `privateFunction` are encapsulated within the IIFE's scope and are not accessible from outside it.


```javascript
var myModule = (function() {
  // Private members
  var privateVar = 42;
  function privateFunc() {
    console.log("I'm private!");
  }

  // Public interface
  return {
    publicVar: "I'm public!",
    publicFunc: function() {
      console.log("I'm public!");
    }
  };
})();

console.log(myModule.publicVar);  // Access the public variable
myModule.publicFunc();            // Call the public function


```


