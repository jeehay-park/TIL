# Store
- A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

- Instead, there is just a single store with a single root reducing function. As your app grows, instead of adding stores, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. You can use a helper like `combineReducers` to combine them. This is similar to how there is just one root component in a React app, but it is composed out of many small components.

- The current Redux application state lives in an object called the store .
- The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```
import {configureStore} from '@reduxjs/toolkit`

const store = configureStore({reducer : counterReducer})

console.log(store.getState());
// {value : 0}
```

# Summary

- Redux apps always have a single store
    - Stores are created with the Redux createStore API
    - Every store has a single root reducer function

- Stores have three main methods
    - getState returns the current state
    - dispatch sends an action to the reducer to update the state
    - subscribe takes a listener callback that runs each time an action is dispatched

- Store enhancers let us customize the store when it's created
    - Enhancers wrap the store and can override its methods
    - createStore accepts one enhancer as an argument
    - Multiple enhancers can be merged together using the compose API

- Middleware are the main way to customize the store
    - Middleware are added using the applyMiddleware enhancer
    - Middleware are written as three nested functions inside each other
    - Middleware run each time an action is dispatched
    - Middleware can have side effects inside

- The Redux DevTools let you see what's changed in your app over time
    - The DevTools Extension can be installed in your browser
    - The store needs the DevTools enhancer added, using composeWithDevTools
    - The DevTools show dispatched actions and changes in state over time

