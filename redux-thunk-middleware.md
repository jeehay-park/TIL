# a perfect example of how the Redux Thunk middleware can be implemented

```
// async action creator which returns a function as an action
const addPost = (userId, post) => async (dispatch, getState) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, post })
    });
    
    const data = await response.json();
    dispatch({ type: 'ADD_POST', payload: data });
  } catch(error) {
    console.log(error.message);
  }
}
```
- Redux Thunk middleware is a function that intercepts actions dispatched from the system, triggered by users’ actions on the interface like clicking a post button, and checks if the action is a function, if so it calls that function by returning it.

- The function, in this case, is an asynchronous function returning a promise, once the promise is resolved or rejected as the case may be, an appropriate action creator will be dispatched to the reducer which ultimately conveys a response back to the component the action was initially executed on.



