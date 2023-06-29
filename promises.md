# JS Promises

📅 29/06/2023

JavaScript is a single threaded, two bits of script cannot run at the same time; they have to run one after another.
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple async operations where callback can create callback hell leading to unmanageable code.

A Promise is object that keeps track about whether a certain event has happened already or not determines what happens after the events has happened. 

### States
A JavaScript Promise object can be :
- `pending` : initial state, neither fulfilled nor rejected. The result is `undefined`
 
- `fulfilled` : Operation completed successfully. The result is a value.

- `rejected` :  Operation failed. The result is an `error` object.

The `.then()` and `.catch()` methods are inbuilt callback functions that allow you to handle the resolved & rejected states of a promise, respectively.


```
let promise = new Promise((resolve, reject) => {
    // Executor
});
```

`resolve` and `reject` are two callbacks provided by JavaScript itself.

`resolve(value)` : If the job is finished successfully

`reject(error)` : If the job fails.


```
let prom = new Promise((resolve, reject) => {
    console.log("Please Wait..."); // pending state

setTimeout(() => {
    if (2 > 1) {
        resolve("Success"); 
    } else {
        reject("Failed");
    }
}, 3000);
})

prom
.then((result) => {
    console.log(result);
}).
catch((result) => {
    console.log(result);
})

```

### JS Promise Chaining

Promise chaining in JavaScript allows you to execute a sequence of asynchronous operations in a specific order, one after another.
It provides a clean and organized way to handle the results of each operation and pass them to the next one.

```
// 2 Different Promises
function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operation 1 completed");
        }, 2000);
    })
}

function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operation 2 completed");
        }, 3000);
    })
}

asyncOperation1()
.then((result) => {
    console.log(result); // Output : Operation 1 completed
    return asyncOperation2();
}) 
.then((result) => {
    console.log(result) // Output : Operation 2 completed

})
.catch((error) => {
    console.log("Error :", error);
});

```

### Attaching Multiple Handler
You can add multiple handlers to a promise using the ` .then()` method.

Each `.then()` method can have its own success callback to handle the resolved state of the promise.

```
// let p is a promise

p.then(handler1);
p.then(handler2);
p.then(handler3);
// runs independently
```



























