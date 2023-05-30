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






