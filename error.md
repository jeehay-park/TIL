# error & bug

📅 03/07/2023

The terms "error" and "bug" are often used interchangeably in software development, but they have slightly different meanings:

Error:
An error refers to a mistake or flaw in the logic or functionality of a program. It is a general term that describes a deviation from the expected behavior or an unintended outcome. Errors can occur due to various reasons, such as incorrect coding, faulty algorithms, incorrect assumptions, or invalid input. Errors can manifest as crashes, incorrect calculations, unexpected behavior, or incorrect output.

Bug:
A bug, on the other hand, is a specific type of error. It refers to a flaw or defect in software that causes it to behave in an unintended or incorrect way. Bugs are often the result of coding mistakes or oversights during the development process. They can cause software to crash, produce incorrect results, or exhibit unexpected behavior.

In summary, errors are the broad category that encompasses any kind of mistake or flaw in software, while bugs specifically refer to defects or flaws in the code that cause the software to deviate from its intended behavior. Bugs are a subset of errors. When developers encounter errors or bugs, they typically need to identify, debug, and fix them to ensure the software functions correctly.


📅 25/09/2023

```
Lockdown failed: TypeError: At intrinsics.Object.groupBy expected boolean not function

```
It's just an chrome extension which is causing this error. Try disabling your chrome extensions. In my case it was MetaMask extension.


# TypeScript Problems
📅 14/03/2024

```
[{
	"resource": "/C:/tasks/idaas-dev/store/store.ts",
	"owner": "typescript",
	"code": "2345",
	"severity": 8,
	"message": "Argument of type 'Reducer<{ auth: authState; sidebar: { isSidebarHovered: any; }; }, any, Partial<{ auth: authState | undefined; sidebar: { isSidebarHovered: boolean; } | undefined; }>>' is not assignable to parameter of type 'Reducer<Partial<{ auth: authState | undefined; sidebar: { isSidebarHovered: boolean; } | undefined; }>, any>'.\n  Type 'authState | undefined' is not assignable to type 'authState'.\n    Type 'undefined' is not assignable to type 'authState'.",
	"source": "ts",
	"startLineNumber": 32,
	"startColumn": 56,
	"endLineNumber": 32,
	"endColumn": 67
}]

```

Let's break down the TypeScript error message:

1. **Code Location**: The error originates from the file `store.ts` at line 32, columns 56 to 67.

2. **Error Type**: The error has severity level 8, which typically indicates a type-related issue.

3. **Error Message**: TypeScript reports the following error message:
   ```
   Argument of type 'Reducer<{ auth: authState; sidebar: { isSidebarHovered: any; }; }, any, Partial<{ auth: authState | undefined; sidebar: { isSidebarHovered: boolean; } | undefined; }>>' is not assignable to parameter of type 'Reducer<Partial<{ auth: authState | undefined; sidebar: { isSidebarHovered: boolean; } | undefined; }>, any>'.
   ```

4. **Explanation**:
   - TypeScript is indicating that there's a type mismatch related to a reducer.
   - It's comparing the type of a reducer with the expected type for a reducer.
   - The expected type seems to involve a partial object containing `authState` and `sidebar` with `isSidebarHovered`.
   - The provided reducer type doesn't match the expected type, resulting in the type error.

5. **Specific Issue**:
   - The error message suggests that TypeScript expects the reducer to handle a partial state object.
   - However, the reducer seems to be returning an `authState` or `undefined`, which doesn't match the expected type.

6. **Resolution**:
   - To resolve the error, ensure that the reducer returns the expected partial state object with the correct types.
   - Check the implementation of the reducer and verify that it returns the appropriate state object with the expected properties.

By addressing the type mismatch in the reducer and ensuring that it returns the correct state object, you should be able to resolve this TypeScript error. If you need further assistance or clarification on any specific part, feel free to ask!

# createSlice

It seems like you're encountering an issue with the second approach where you're using manual action types and reducers instead of `createSlice`. Let's break down the problem and provide a solution:

1. **Problem Statement**: The manual approach using action types and reducers is causing a problem, while the `createSlice` approach is working fine.

2. **Root Cause**: The issue might be related to how the action types and reducers are defined, potentially leading to mismatches between the action types dispatched in the components and the action types handled in the reducers.

3. **Solution**: To resolve the problem, ensure consistency in defining action types and handling actions. Since the `createSlice` approach is working fine, consider migrating the manual approach to use `createSlice` as well. This will ensure consistency and reduce the chances of errors related to action types and reducers.

Here's how you can refactor the manual approach to use `createSlice`:

```typescript
// src/slices/sidebarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  isSidebarHovered: boolean;
}

const initialState: SidebarState = {
  isSidebarHovered: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarHovered(state, action: PayloadAction<boolean>) {
      state.isSidebarHovered = action.payload;
    },
  },
});

export const { setSidebarHovered } = sidebarSlice.actions;
export default sidebarSlice.reducer;
```

By using `createSlice`, you ensure that action types, action creators, and reducers are generated automatically, reducing the likelihood of errors and improving code maintainability.

📅 13/06/2024

Errors and bugs both refer to issues within software, but they are distinct concepts:

### Errors:
- **Definition**: Errors are problems or issues that occur during the execution of a program, which may cause the program to produce incorrect results or to terminate unexpectedly.
- **Nature**: Errors are typically related to the code itself, logical flaws, or system-level issues.
- **Types**: There are various types of errors, including:
  - **Syntax Errors**: Mistakes in the code that violate the rules of the programming language (e.g., missing semicolons, incorrect keywords).
  - **Runtime Errors**: Errors that occur while the program is running (e.g., dividing by zero, null pointer dereferences).
  - **Logical Errors**: Errors that cause the program to operate incorrectly but do not necessarily crash the program (e.g., incorrect algorithms, faulty logic).

### Bugs:
- **Definition**: Bugs are flaws or defects in the software that cause it to behave unexpectedly or incorrectly. Bugs are often introduced during the development phase and can be a result of coding errors, design flaws, or miscommunication among team members.
- **Nature**: Bugs can manifest as errors, but they can also be more subtle issues that don't immediately cause the program to crash or produce incorrect results.
- **Scope**: Bugs encompass a broader range of issues than errors. They can include performance problems, security vulnerabilities, usability issues, and more.

### Key Differences:
1. **Scope**:
   - Errors are specific issues that arise during the execution of the program.
   - Bugs are more general and encompass any flaw in the software, including errors, but also design flaws, usability issues, and other types of defects.

2. **Manifestation**:
   - Errors typically manifest as immediate problems that prevent the program from running correctly (e.g., crashes, incorrect outputs).
   - Bugs may not always produce immediate or obvious symptoms and can lead to unexpected behavior over time.

3. **Examples**:
   - An **error** example: A syntax error in a Python program, such as a missing colon, that prevents the code from compiling.
   - A **bug** example: A logical flaw in a sorting algorithm that causes it to fail under certain conditions, even though it compiles and runs without errors.

### Conclusion:
While errors are a subset of bugs focused on issues that occur during execution, bugs refer to any defect or flaw in the software. Understanding and distinguishing between these concepts can help in effectively diagnosing and addressing issues in software development.