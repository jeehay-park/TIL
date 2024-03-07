# drag event

📅 06/03/2024

When a drag event occurs, several events are fired in a specific sequence. Here's a step-by-step breakdown of the typical drag event sequence:

1.	dragstart: This event is triggered when the user starts dragging an element. It allows you to set the drag data and customize the drag appearance, such as showing a custom ghost image.
2.	dragenter: Fired when a dragged element enters a valid drop target. It is typically used to indicate to the user that the drop target is valid.
3.	dragover: Fired repeatedly while the dragged element is over a valid drop target. It allows you to control whether the drop target accepts the dragged element.
4.	dragleave: Triggered when the dragged element leaves a valid drop target. It can be used to revert any visual changes made during dragenter or dragover.
5.	drop: Fired when the user releases the dragged element over a valid drop target. It is where you handle the drop action, such as processing the dropped data.
6.	dragend: Triggered when the drag operation is finished, whether it ends with a drop or a cancel. It allows you to clean up any drag-related state or perform final actions.
It's important to note that for a drag-and-drop operation to be successful, the dragover event handler must call event.preventDefault() to indicate that the drop target is valid and can accept the dragged element.
Additionally, some browsers may fire additional events during the drag operation, such as drag, which is triggered as the dragged element is moved, but it's not always reliable and may not be necessary for most drag-and-drop implementations.