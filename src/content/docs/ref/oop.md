---
title: "Object Oriented Programming"
---

## Classes

Classes are used to create objects. They are declared using the `class` keyword.

To initialize the fields in the class use the `init` method.
Each field is accessed under the `self` keyword.

```js
class Person {
    init(name, age){
        self.name = name;
        self.age = age;
    }
}
```

## Objects

Objects are instances of classes. They are created by calling the class name
as a function with whichever arguments are required.

```js
var person = Person("John", 25);
```

## Bounded Methods

Methods are functions that are associated with a class. They are declared inside the class.

```js
class Person {
    init(name, age){
        self.name = name;
        self.age = age;
    }

    greet(){
        print "Hello, my name is " + self.name;
    }
}

var person = Person("John", 25);
person.greet();
```

## Inheritance
Inheritance is used to create a new class that is based on an existing class.
The new class inherits the fields and methods of the existing class.

To inherit from a class, use the `<` operator.

```js
class Student < Person {
    init(name, age, grade){
        self.name = name;
        self.age = age;
        self.grade = grade;
    }
}
```
