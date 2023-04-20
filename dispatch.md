# Dispatch

- The Redux store has a method called `dispatch`. The only way to update the state is to call `store.dispatch()` and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call `getState()` to retrieve the updated value:

```
store.dispatch({type : 'counter/increment'});
console.log(store.getState());
// {value : 1}
```

- You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

- We typically call action creators to dispatch the right action:

```
const increment = () => {
    return {
        type : 'counter/increment'
    }
}

store.dispatch(increment())

console.log(store.getState())
// { value : 2 }
```

