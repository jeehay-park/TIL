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




