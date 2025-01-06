---
title: "Control Flow"
---

## If-Else

The `if` statement is used to execute a block of code if a condition is true. If the condition is false, the code block will not be executed.
The `else` statement is used to execute a block of code if the condition is false

```c
if (condition) {
    // code block
} else {
    // code block
}
```

To check multiple conditions, you can use the `else if` statement.

```c
if (condition1) {
    // code block
} else if (condition2) {
    // code block
} else {
    // code block
}
```

## Loops

Loops are used to execute a block of code multiple times.
The `for` loop is used to execute a block of code a specific number of times.
The `while` loop is used to execute a block of code as long as a condition is true.

### While Loop

```js
var a = 5;
while(a < 10){
  print a;
  a++;
}
```

### For Loop
The `for` loop is used to execute a block of code a specific number of iterations.
It has three parts: initialization, condition, and increment/decrement.

```js
for (var i = 0; i < 10; i++) {
    print i;
}
```
