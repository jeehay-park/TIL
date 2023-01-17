# createStore

```
createStore(reducer, [preloadedState], [enhancer])
```

### Arguments
- reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.

- [preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.

- [enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().

### Returns
- (Store): An object that holds the complete state of your app. The only way to change its state is by dispatching actions. You may also subscribe to the changes to its state to update the UI.


```
import {createStore} from 'redux'

// reducer 
const todos = (state=[], action) => {
    switch(action.type) {
        case 'ADD_TODO' :
        return state.concat([action.text])
    }
    default : 
    return state
}

const store = createStore(todos, ['Use Redux'])

store.dispatch({
    type : 'ADD_TODO',
    text : 'Read the docs'
})

// console.log(store.getState())
// ['Use Redux', 'Read the docs']
```

