# useCallback
- Think of memoization as caching a value so that it does not need to be recalculated.
- This allows us to isolate resource intensive functions so that they will not automatically run on every render.
- The useCallback Hook only runs when one of its dependencies update.
- The `useCallback` and `useMemo` Hooks are similar. The main difference is that `useMemo` returns a memoized value and `useCallback` returns a memoized function. 
- This can improve performance.
- One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

```
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

📅 30/05/2023

```
    const handleAPIcall = useCallback(async () => {
         
        await dispatch(
            addUser({
                userId : formData.userId, 
                userName : formData.userName,
                password : formData.password,
                passwordConfirm : formData.passwordConfirm, 
                level : formData.level, 
                email : formData.email 
            }));
        
        setOpen(false);
      
       
      }, [dispatch, formData]);
```

In the `useCallback` hook, the dependency array specifies the values that the callback function depends on. When any of the values in the dependency array change, the callback function is re-created.

If you don't include `formData` in the dependency array, the callback function will not be recreated when `formData` changes. This means that the callback function will continue to reference the initial values of `formData` that were present when the component was first rendered.

Including `formData` in the dependency array ensures that the callback function is recreated whenever `formData` changes. This is important because you want the callback function to have access to the latest values of `formData` when it is executed.

If you don't include `formData` in the dependency array and the `handleAPIcall` function is used in a context where `formData` can change, you may encounter unexpected behavior or stale data. Therefore, it's generally recommended to include all the values that the callback function depends on in the dependency array to ensure consistent and up-to-date behavior.


# a callback function vs a regular function 

📅 28/11/2023

The decision between using a callback function or a regular function depends on the specific requirements and use case in your application.

In the example you provided:

```javascript
const handleOpen = useCallback((event) => {
    event.stopPropagation();
    setOpen(true);
}, []);
```

The use of `useCallback` suggests that this function is intended for a scenario where its reference needs to remain stable across renders. This is particularly useful in situations where this function is passed as a prop to child components or used in the dependency array of other hooks like `useEffect`. The empty dependency array (`[]`) means that the function won't be recreated on each render if there are no dependencies.

Here are some considerations:

1. **Stability of References:** If you need a stable reference to the function across renders, use `useCallback`.

2. **Performance Optimization:** Using `useCallback` can be a performance optimization in certain cases, as it avoids unnecessary re-creation of the function on each render. However, this optimization is usually more noticeable in scenarios with deeply nested components or when passing functions to memoized child components.

3. **Dependencies:** If your function has dependencies (values from the component's scope that it uses), you should include those dependencies in the dependency array of `useCallback` to ensure that the function always has access to the latest values. In your example, an empty dependency array suggests that the function doesn't have any dependencies.

If your function doesn't need to be memoized or if you're not passing it as a prop or using it in a dependency array, you might not need to use `useCallback`. A regular function definition would be simpler:

```javascript
const handleOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
};
```

In summary, use `useCallback` when you need to memoize a function for stability across renders, and consider your specific use case and whether the performance optimization and memoization benefits outweigh the complexity introduced by `useCallback`. If the function is straightforward and doesn't have dependencies, a regular function definition might be simpler and clearer.