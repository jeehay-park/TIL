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


