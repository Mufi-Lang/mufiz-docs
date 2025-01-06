---
title: "Collections"
---

## Float Vectors

Float Vectors are a special kind of static arrays, which only store explicitly double values,
and are able to make use of AVX2 instructions to do operations in parallel.
When a float vector has a size of 3, it is also treated as a 3D Vector.
To create a Floating Vector, you can either use the `fvec` function or you can set values directly with `{ }`.

```js
var vec1 = fvec(3); // Float Vector with 3 elements
var vec2 = {1.0, 2.0, 3.0}; // Float Vector with 3 elements
```

## Linked Lists
Linked lists are a Doubly Linked List that can used to store multiple values
in a single variable by doing operations from both the back and front.
They can either be initialized by the `linked_list` function.

```js
var list = linked_list(); // Empty Linked List
```

## Hash Tables
Hash tables are used to store key-value pairs in a single variable.
They can either be initialized by the `hash_table` function.
Where the key is always a string and the value is any type:

```js
var table = hash_table(); // Empty Hash Table
```
