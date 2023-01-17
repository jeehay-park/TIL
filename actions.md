# Actions

- An action is a plain JavaScript object that has a `type` field. You can think of an action as an event that describes something that happened in the application.

- The `type` field should be a string that gives this action a descriptive name, like `"todos/todoAdded"`. We usually write that type string like `"domain/eventName"`, where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

- An action object can have other fields with additional information about what happened. By convention, we put that information in a field called `payload`.

- A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a `type` field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for `type` than Symbols because strings are serializable. Other than `type`, the structure of an action object is really up to you. If you're interested, check out Flux Standard Action for recommendations on how actions could be constructed.


## A typical action object might look like this:

```
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

# Action Creators
-An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```


## Actions look like this:
```
// 1. plain object
// 2. has a type
// 3. whatever else you want
{
  type: "USER_LOGGED_IN",
  username: "dave"
}
```

- Redux has the concept of “action creators” to stamp these things out:

```
function userLoggedIn() {
    return {
        type : 'USER_LOGGED_IN',
        username : 'dave'
    }
}
```
- It’s the same exact action, but now you can “create” it by calling the `userLoggedIn` function. This just adds one layer of abstraction.

- Instead of writing the action object yourself, you call the function, which returns the object. If you need to dispatch the same action in multiple places around your app, writing action creators will make your job easier.


