# Summary

- Redux is a library for managing global application state
- Redux is typically used with the React-Redux library for integrating Redux and React together
- Redux Toolkit is the recommended way to write Redux logic

- Redux uses a "one-way data flow" app structure
- State describes the condition of the app at a point in time, and UI renders based on that state

- app state: the core data that the application works with
- UI state: state that describes what the app is doing right now

- When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
    - The UI re-renders based on the new state

- Redux uses several types of code
- Actions are plain objects with a `type` field, and describe "what happened" in the app
- Reducers are functions that calculate a new state value based on previous state + an action
- A Redux store runs the root reducer whenever an action is dispatched


