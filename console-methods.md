📅 22/05/2023

# Console Methods

1. `console.error()`
- outputs an error message to the Web console
```
console.log("This is an error.");
// This is an error.
```

2. `console.warn()`
- outputs a warning message to the Web console
```
console.log("This is a warning.");
// This is a warning.
```

3. `console.assert()`
- writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

```
console.assert(5+5===10, "True")
// undefined

console.assert(5+5===15, "False")
// False
```

4. `console.table()`
- displays tabular data as a table.

```
console.table(["HTML", "CSS", "JavaScript"])
// (index)     |     Value
// 0           |     'HTML' 
// 1           |     'CSS'
// 2           |     'JavaScript'

```

5. `console.count()`
- logs the number of times that this particular call to `count()` has been called.

```
for (let i=0; i < 5; i++) {
    console.count();
}
// default: 1
// default: 2
// default: 3
// default: 4
// default: 5
```

6. `console.clear()`
- clears the console if the console allows it. A graphical console, like those running on browsers, will allow it; a console displaying on the terminal, like the one running on Node, will not support it, and will have no effect (and no error).

```
console.clear()
// Console was cleared
```




