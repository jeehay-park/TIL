# Redux Toolkit

- includes several utility functions that simplify the most common Redux use cases:
    - store setup
    - defining reducers
    - immutable update logic
    - creating entire "slices" of state at once without writing any action creators or action types by hand
- also includes the most widely used Redux addons: 
    - Redux Thunk for async logic
    - Reselect for writing selector functions

### 🔨 installation : `npm install @reduxjs/toolkit`

### 🎯 three common concerns about Redux
- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

### Redux Toolkit includes :
- `configureStore()`: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

- `createReducer()`: that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

- `createAction()`: generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.

- `createSlice()`: accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

- `createAsyncThunk`: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

- `createEntityAdapter`: generates a set of reusable reducers and selectors to manage normalized data in the store
The createSelector utility from the Reselect library, re-exported for ease of use.

- RTK Query data fetching API

### RTK Query
- RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.

- RTK Query is an optional addon included in the Redux Toolkit package, and its functionality is built on top of the other APIs in Redux Toolkit.


# Redux Toolkit's `createAsyncThunk`
Redux Toolkit's `createAsyncThunk` is a utility function that simplifies the process of creating asynchronous action creators in Redux. It combines the concepts of thunks (functions that can contain async logic) and Redux actions, providing a standardized way to handle asynchronous operations and manage the associated state.

When you use `createAsyncThunk`, it generates three different action types for your async operation: a "pending" action, a "fulfilled" action, and a "rejected" action. These action types follow a naming convention based on the name you provide when creating the async thunk.

Here's a breakdown of what each action type represents:

- **Pending**: This action type (`name/pending`) is dispatched when the async operation starts. It indicates that the request is in progress.

- **Fulfilled**: This action type (`name/fulfilled`) is dispatched when the async operation successfully completes. It carries the result of the operation as payload.

- **Rejected**: This action type (`name/rejected`) is dispatched when the async operation encounters an error or is rejected. It typically includes the error message or any relevant error information.

By using `createAsyncThunk`, you can encapsulate your async logic in a payload creator function that is passed as the second argument to `createAsyncThunk`. This function should contain the asynchronous code, such as making API requests or interacting with external services. The payload creator function can be an async function or a regular function that returns a Promise.

The `createAsyncThunk` utility takes care of dispatching the appropriate pending, fulfilled, or rejected actions based on the outcome of the async operation. It also handles error handling and simplifies the management of loading and error states in your Redux store.

Overall, `createAsyncThunk` provides a convenient and standardized way to handle asynchronous operations in Redux, reducing boilerplate code and making it easier to manage async logic and associated state changes.

