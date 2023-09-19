# React Warning

#### ❗"Warning: Each child in a list should have a unique "key" prop."

The warning you're seeing is because when rendering a list of elements in React, each child element in the list should have a unique "key" prop. This helps React efficiently update and reconcile the list when changes occur.

In your code, you have a .map() function where you're rendering a list of elements. To fix the warning, you should add a unique "key" prop to each element inside the .map() function. 

```
{agentStatus?.map((el, index) => (
    <FlexContainerRegiStatus>
        <H1 style={{fontSize : '1.5rem', marginRight : '0.5rem', marginTop : '-0.5rem'}}>{el.status}</H1>
        { el.status === "UP" 
            ? 
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#42d3a5', fontSize: '1.5rem' }} />
            : 
            <FontAwesomeIcon icon={faCircleExclamation} style={{ color: '#f6546a', fontSize: '1.5rem' }} />
        }               
        <H3>{el.agentId}</H3>
        <H3>{el.ip}</H3>
    </FlexContainerRegiStatus>
))}
```

```
<FlexContainerRegiStatus key={index}>
// Add a unique "key" prop based on the index
```


#### ❗"Warning: A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component."
