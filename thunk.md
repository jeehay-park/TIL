# thunk

- So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps.

- A thunk is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:
    - An inside thunk function, which gets dispatch and getState as arguments
    - The outside creator function, which creates and returns the thunk function


- However, using thunks requires that the redux-thunk middleware (a type of plugin for Redux) be added to the Redux store when it's created. Fortunately, Redux Toolkit's configureStore function already sets that up for us automatically, so we can go ahead and use thunks here.

- When you need to make AJAX calls to fetch data from the server, you can put that call in a thunk. Here's an example that's written a bit longer, so you can see how it's defined:


```
// the outside "thunk creator" function

const fetchUserById = userId => {
    // the inside "thunk function"
    return async (dispatch, getState) => {
        try {
            // make an async call in the thunk
            const user = await userAPI.fetchById(userId)
            // dispatch an action when we get the response back
            dispatch(userLoaded(user))
        }
        catch (err) {
            // If something went wrong, handle it here
        }
    }
}
```
- With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

- Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

- A thunk is a function that wraps an expression to delay its evaluation.

```
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2
```



