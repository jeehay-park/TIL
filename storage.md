# localStorage vs sessionStorage

📅 30/05/2023

Local Storage and session storage are both ways for websites to store data in your web browser. This can be useful for things like remembering your preferences or keeping track of your progress on a website.

The main difference between local storage and session storage is how long the data is saved for.
Local storage saves the data even after you close your web browser, while session storage only saves the data for as long as you have that website open in your current browser tab or window.

```
localStorage.setItem(key, value);
sessionStorage.setItem(key, value);
```


```
localStorage.getItem(key);
sessionStorage.getItem(key);
```

```
localStorage.removeItem(key);
sessionStorage.removeItem(key);
```

Another difference is that local storage can be accessed by scripts from different tabs or windows while session storage can only be accessed by scripts within the same tab or window.

Local storage stores data on your hard drive, so it can be accessed even if you close your browser. It usually has more storage space than session storage. Session storage stores data in memory, so it’s faster, but the data is lost when you close your browser.


📅 19/09/2023

1. **Local Storage**:
   - Local Storage is a web storage mechanism in web browsers that allows websites to store data persistently on the user's hard drive.
   - Data stored in Local Storage is not cleared when the browser is closed and can persist across browser sessions.
   - It provides a larger storage capacity compared to session storage.
   - It is typically used for storing data that needs to be available even after the browser is closed and reopened.

2. **Session Storage**:
   - Session Storage is another web storage mechanism in web browsers.
   - Data stored in Session Storage is only available for the duration of a single page session or tab session.
   - When the user closes the tab or browser, the data stored in Session Storage is cleared.
   - It is often used for temporary data storage that should be available only during the current browsing session.

Regarding where the data is physically stored:

- **Local Storage**: Data in Local Storage is typically stored on the user's hard drive, which makes it a form of persistent storage. The exact location and format of this storage can vary between browsers and operating systems.

- **Session Storage**: Data in Session Storage is stored in memory (RAM) and is tied to the specific tab or window in which it was created. This means that once you close the tab or window, the data is no longer accessible.

Both Local Storage and Session Storage are part of the Web Storage API in modern web browsers and provide a way for web applications to store data on the client side for various purposes.




