# DOM

## Document object model

![The DOM tree](pic_htmltree.gif)

Reading  
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics" target="_blank">JavaScript Object Basics</a>

1. How would you describe an object to a non-technical friend you grew up with? it's like a gadget backpack - you can put sets of things (**data, arrays of data**) in it, and each one has a label which is a key - BUT you can _also_ give it **functions** which it can do, like say put a hat on you, or tell you the time - and they are also in the backpack, and you call them by saying " backpack.function()! " and you can find your data by saying " backpack.key! " or also " backpack["key"]! " (if you want to use a variable as they key) and it will tell you the value that matches the key (which might actually be a list of data you can call from, or even _another_ backpack of stuff (a **nested object** )tucked into your backpack)
2. What are some advantages to creating object literals? tidies up code, stores data alongside functions you want to use on it, provides templates for using again in other projects
3. How do objects differ from arrays? an object is not structured in a grid like an array
4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation. - if you are using a variable as a key, if you have a space in the key (you might if the key is a person's name)
5. Evaluate the code below. What does the term this refer to and what is the advantage to using this? this calculates the dog's age in human years, based on its age in dog years - it keeps the function alongside the data and the context it would be used with - which is neat and tidy too, and prevents any naming errors from functions and data being called by other code (because they can only be called by using the object's name, rather than just their own)

```
const dog = {
  name: 'Spot',
  age: 2,
  color: 'white with black spots',
  humanAge: function (){
    console.log(`${this.name} is ${this.age*7} in human years`);
  }
}
```

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank">Introduction To The DOM</a>

1. What is the DOM? document object model, created by the browser from the html code
2. Briefly describe the relationship between the DOM and JavaScript. JS uses the DOM to locate and manipulate html elements

## Bookmark and Review

<a href="http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming">Understanding the problem domain is the hardest part of programming</a>

<a href="https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b" target="_blank">What’s the difference between primitive values and object references in JavaScript?</a>
