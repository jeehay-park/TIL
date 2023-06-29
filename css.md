# CSS Tips

📅 29/06/2023

### It's always better to use `: not` in such cases

```

// bad
.nav li {
    border-right : 1px solid #666;
}

. nave li:last-child {
    border-right : none;
}

// good

.nav li:not(:last-child) {
    border-right : 1px solid #666;
}

```

### Inefficient animations, try using transform for animations

If you change the `left` property of an absolute element, you will be utilizing the CPU to calculate. However, if you use `transform`, then it would be the GPU. And the GPU as we all know is better to do graphics.


### Always prefer using CSS variables for big APPs

```

// bad

body {
    background-color : #1e90ff;
}

h2 {
    border-bottom : 2px solid #1e90ff;
}

.container {
    color : #1e90ff;
    background-color : #ffffff;
}


// good

:root {
    --blue : #1e90ff;
    --white : #ffffff;
}

body {
    background-color : var(--blue);
}

h2 {
    border-bottom : 2px solid var(--blue);
}

.container {
    color : var(--blue);
    background-color : var(--white);
}

```

### Always reset default values, at the start.

```
// bad

h1 {
    margin : 0;
    padding : 0;
}

a {
    margin : 0;
}

// good 

* {
    box-sizing : border-box;
    margin : 0;
    padding : 0;
}

```

### Avoid using `!important` tag

The `!important` tag has the highest specificity of all CSS selectors.

The only way to override an important tag is to use another important tag. And this leads to using more and more important tags.
The problem is, this stars to create a domino effect that rapidly turns into a maintenance nightmare, as more and more things are declared `!important`.
Only use `!important` when it’s absolutely necessary.


### Using `rem` `em` units instead of `px`

```
// bad
p {
    font-size : 16px;
    line-height : 20px;
    margin-bottom : 8px;
}

// good

body {
    font-size : 16px;
}
p {
    font-size : 1rem;
    line-height : 1.25;
    margin-bottom : 0.5em;
}

```

### Use Dry* code
*Don't repeat yourself.

```
// bad
.menu li {
    color : red;
}
.menu li a {
    color : red;
}

// good
.main li, .main li a {
    color : red;
}

```


















