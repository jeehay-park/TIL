# `beforeunload` event

📅 03/07/2023

No, you cannot directly determine if a user closes the browser using the Browser Object Model (BOM) or the Navigator Object Model (Navigator API). The BOM and Navigator API provide information about the browser and its capabilities but do not offer real-time feedback on user actions like closing the browser.

However, you can indirectly track user activity or detect when a user navigates away from a page by utilizing the `beforeunload` event or the `unload` event. These events are triggered when a user is about to leave or has left a page, whether by closing the browser, navigating to another URL, or refreshing the page.

Here's an example of using the `beforeunload` event:

```javascript
window.addEventListener('beforeunload', function(event) {
  // Send an AJAX request to the server to notify that the user is leaving
  // You can also include additional information in the request, such as user identification or session data
  // This request should be asynchronous (e.g., using XMLHttpRequest or fetch)
  // Note: Some browsers may show a default confirmation dialog to the user when this event is triggered.
  // To display a custom message, you can assign a string value to the event.returnValue property.
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/notify-server', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ action: 'close' }));
  
  // Optionally, return a string to show a confirmation dialog to the user
  return 'Are you sure you want to leave this page?';
});
```

Keep in mind that relying solely on these events may not be 100% accurate, as some scenarios, such as sudden power loss or network failure, won't trigger them. Additionally, the ability to show custom messages in the confirmation dialog is limited by certain browsers, as they have implemented security measures to prevent abuse.

Overall, tracking user actions like closing the browser entirely is challenging, and it's recommended to consider alternative approaches or combinations of techniques depending on your specific requirements.


