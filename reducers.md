# Reducer

- A reducer is a function that receives the current `state` and an action object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`. You can think of a reducer as an event listener which handles events based on the received action (event) type.

```
const initialState = {value : 0}

function counterReducer(state = initialSate, action) {
    if (action.type === 'counter/increment`) {
        return {
            ...state,
            value : state.value + 1;
        }
    } 
    return state;
}

