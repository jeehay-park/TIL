# Redux Slices

- A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

```
// app/store.js

import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore ({
    reducer : {
        counter : counterReducer
        }
    })
```
- When we call `configureStore`, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

- The Redux store is created using the `configureStore` function from Redux Toolkit. `configureStore` requires that we pass in a `reducer` argument.

- When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` section of our Redux state object, and that we want the `counterReducer` function to be in charge of deciding if and how to update the `state.counter` section whenever an action is dispatched.

```
import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import commentsReducer from '../features/comments/commentsSlice'

export default configureStore({
    reducer : {
        users : usersReducer,
        posts : postsReducer,
        comments : commentsReducer,
    }
})
```
- In that example, `state.users`, `state.posts`, and `state.comments` are each a separate "slice" of the Redux state. Since `usersReducer` is responsible for updating the `state.users` slice, we refer to it as a "slice reducer" function.


# 
📅 20/04/2023
The term "slice" in Redux comes from the idea of taking a slice of the global Redux state and managing it in a separate, isolated way. A Redux slice is a self-contained piece of the overall Redux state tree that represents a specific feature or domain of your application.

In other words, a Redux slice is like a "slice" of the larger Redux state tree, with its own set of reducers and actions that manage only that part of the state.

The term "slice" is also used to emphasize the fact that a Redux slice is a subset of the overall state tree. When you create a Redux slice, you are "slicing" off a portion of the global state tree and managing it in a more focused way.

The term "slice" is not unique to Redux. It is a common term in programming that refers to taking a subset of a data structure or array. In Redux, the term is used to describe the way that a Redux slice takes a subset of the global state tree and manages it in an isolated way.



