# Common Mistakes in Using TypeScript

📅 3/04/2024

These TypeScript errors indicate that TypeScript is unable to infer the type of the state variables `disk` and `memory` properly. TypeScript infers their types as `null` initially because they are initialized with `null` using `useState(null)`.

To resolve these errors, you can explicitly define the types of `disk` and `memory` states when using `useState`. For example:

```typescript
const [disk, setDisk] = useState<{ total: string, use: string, free: string } | null>(null);
const [memory, setMemory] = useState<{ used: string, max: string } | null>(null);
```

This explicitly tells TypeScript the structure of the `disk` and `memory` objects, resolving the errors you encountered.

Alternatively, if you are not sure about the initial values or the types, you can use TypeScript's `as` keyword to assert the types:

```typescript
const [disk, setDisk] = useState(null as { total: string, use: string, free: string } | null);
const [memory, setMemory] = useState(null as { used: string, max: string } | null);
```

However, it's generally better to explicitly define the types whenever possible for better code clarity and type safety. Adjust the type definitions according to your actual data structure if necessary.