---
title: Hoisting in JavaScript
excerpt: A quick look at the behavior of hoisting in JavaScript.
publishDate: 'Sept 26 2024'
isFeatured: true
tags:
  - Today I Learned
---

## Introduction

While learning a bit more about JavaScript I came across the concept of hoisting.  
Hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

## Hoisting in different contexts

Hoisting can be applied to functions, variables, and classes in different contexts. Here are some examples:

### Variable hoisting

```js
console.log(message);

const message = 'Hello, World!';
```

This will print out `Hello, World!` even though the `message` variable has not been declared yet.

### Function hoisting

```js
greet();

function greet() {
  console.log('Hello, World!');
}
```

This will print out `Hello, World!` even though the `greet` function has not been declared yet.

## To Hoist or Not To Hoist?

I will be avoiding hoisting because this might make working with a large codebase more difficult.  
I don't see how it could be useful and since I'm coming from other languages which don't allow hoisting, I'll leave it out.
