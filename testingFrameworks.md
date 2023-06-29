# testing frameworks

📅 30/06/2023

`Jest`, `Jasmine`, and `Mocha` are all popular testing frameworks used in the JavaScript ecosystem. They are primarily used for testing JavaScript code, including both frontend and backend applications.

Here's a brief overview of each testing framework:

1. Jest: Jest is a widely adopted testing framework developed by Facebook. It is known for its simplicity and out-of-the-box features, including built-in mocking, code coverage reporting, and snapshot testing. Jest is commonly used for testing React applications but can also be used for testing any JavaScript code.

2. Jasmine: Jasmine is another popular testing framework that provides a behavior-driven development (BDD) syntax. It focuses on readability and ease of use, allowing developers to write tests in a natural language style. Jasmine can be used for testing JavaScript code in various environments, including browser-based applications and Node.js.

3. Mocha: Mocha is a flexible testing framework that provides a rich set of features and supports multiple testing styles, such as BDD and TDD (Test-Driven Development). Mocha itself is primarily focused on providing the test runner functionality and does not include built-in assertions or mocking capabilities. However, it can be combined with other libraries like Chai for assertions and Sinon for mocking to create a comprehensive testing setup.

All three frameworks support asynchronous testing, allowing you to write tests that involve asynchronous operations such as API calls or database queries. They also have extensive plugin ecosystems, which enable the integration of additional functionality or testing utilities.

The choice between Jest, Jasmine, or Mocha depends on your specific requirements, the testing style you prefer, and the ecosystem or frameworks you are working with. Each framework has its strengths and can be a suitable choice depending on the project and team preferences.


### Jest
```
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// math.test.js
const add = require('./math');

test('add function should return the sum of two numbers', () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

// To run the tests, you can use the jest command in your terminal:
$ jest
```


### Jasmine
```
// math.js
function multiply(a, b) {
  return a * b;
}


// math.spec.js
const { multiply } = require('./math');

describe('multiply', () => {
  it('should return the product of two numbers', () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
  });
});


// To run the tests, you can use a Jasmine test runner, such as the Jasmine 
// command-line interface (CLI) or a test runner integrated with your 
// development environment.

// For example, if you have the Jasmine CLI installed globally, you can run 
// the tests with the following command in your terminal:

$ jasmine

```

### Mocha

```
// math.js
function subtract(a, b) {
  return a - b;
}

module.exports = subtract;


// math.test.js
const assert = require('assert');
const subtract = require('./math');

describe('subtract', () => {
  it('should return the difference of two numbers', () => {
    const result = subtract(5, 3);
    assert.strictEqual(result, 2);
  });
});


// 
$ mocha
```

### CLI
To run Jasmine and Mocha, you typically need to install their respective command-line interfaces (CLIs) globally on your machine. Unlike Jest, which provides a built-in CLI, Jasmine and Mocha require separate installations of their CLIs for command-line test execution.

Here's the process for installing the CLIs for Jasmine and Mocha:

1. Jasmine CLI:
   - Install the Jasmine CLI globally using npm (Node Package Manager) by running the following command in your terminal:
     ```
     $ npm install -g jasmine
     ```

2. Mocha CLI:
   - Install the Mocha CLI globally using npm by running the following command in your terminal:
     ```
     $ npm install -g mocha
     ```

After installing the CLI for each testing framework, you can navigate to your project directory containing the test files and run the respective command to execute the tests.

For Jasmine:
```
$ jasmine
```

For Mocha:
```
$ mocha
```

Both Jasmine and Mocha will automatically detect and execute the test files within the project directory.

It's worth noting that you can also configure your project to run Jasmine or Mocha tests using a task runner like Grunt, Gulp, or a module bundler like webpack, which can execute the tests as part of your development workflow without relying on global CLI installations.

