# WebAssembly

📅 7/11/2023

WebAssembly is a low-level bytecode format that can be used to run code written in languages like C, C++, and Rust in web browsers. Here's a simple example of how to use WebAssembly in a web page.

First, let's create a simple C program that calculates the factorial of a number. Save this code in a file called `factorial.c`:

```c
// factorial.c
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

Now, compile this C code to WebAssembly using Emscripten (a popular tool for compiling C/C++ to WebAssembly):

```bash
emcc factorial.c -o factorial.wasm
```

This will generate a WebAssembly binary file called `factorial.wasm`.

Next, let's create an HTML file to load and run this WebAssembly module. Create an HTML file (e.g., `index.html`):

```html
<!DOCTYPE html>
<html>
<head>
    <title>WebAssembly Factorial Example</title>
</head>
<body>
    <script>
        // Load the WebAssembly module
        fetch('factorial.wasm')
            .then(response => response.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes))
            .then(results => {
                const wasmModule = results.instance;
                
                // Call the "factorial" function from the WebAssembly module
                const result = wasmModule.exports.factorial(5);
                console.log(`Factorial of 5 is: ${result}`);
            })
            .catch(error => console.error(error));
    </script>
</body>
</html>
```

In this HTML file, we first fetch the `factorial.wasm` binary file, then instantiate it using `WebAssembly.instantiate()`. We can call the `factorial` function from the WebAssembly module, passing in the number 5, and display the result in the console.

When you open `index.html` in a web browser, you'll see the result of the factorial calculation in the browser's developer console. This example demonstrates how to compile C code to WebAssembly and interact with it from JavaScript in a web page.