# DOM

## Document object model

![The DOM tree](pic_htmltree.gif)

Reading  
<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics" target="_blank">JavaScript Object Basics</a>

1. How would you describe an object to a non-technical friend you grew up with? <span style="color: orange;">it's like a gadget backpack - you can put sets of things (**data, arrays of data**) in it, and each one has a label which is a key - BUT you can _also_ give it **functions** which it can do, like say put a hat on you, or tell you the time - and they are also in the backpack, and you call them by saying " backpack.function()! " and you can find your data by saying " backpack.key! " or also " backpack["key"]! " (if you want to use a variable as they key) and it will tell you the value that matches the key (which might actually be a list of data you can call from, or even _another_ backpack of stuff (a **nested object** )tucked into your backpack)</span>
2. What are some advantages to creating object literals? <span style="color: orange;">tidies up code, stores data alongside functions you want to use on it, provides templates for using again in other projects</span>
3. How do objects differ from arrays? <span style="color: orange;">an object is not structured in a grid like an array</span>
4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation. <span style="color: orange;">- if you are using a variable as a key, if you have a space in the key (you might if the key is a person's name)</span>
5. Evaluate the code below. What does the term this refer to and what is the advantage to using this? <span style="color: orange;">this calculates the dog's age in human years, based on its age in dog years - it keeps the function alongside the data and the context it would be used with - which is neat and tidy too, and prevents any naming errors from functions and data being called by other code (because they can only be called by using the object's name, rather than just their own)</span>

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

1. What is the DOM? <span style="color: orange;">document object model, created by the browser from the html code</span>
2. Briefly describe the relationship between the DOM and JavaScript. <span style="color: orange;">JS uses the DOM to locate and manipulate html elements</span>

## Bookmark and Review

<a href="http://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming">Understanding the problem domain is the hardest part of programming</a>

<p style="color: orange;">Spend your time understanding the problem - until it really makes sense. Then spend time 'manually' trying out a solution - eg verbally, on paper, physically. Then see if you can optimise it, verbally and manually. Then spend time writing the solution in words - in pseudo-code - in comments in the IDE. Spend much less time converting this into actual code, writing between the lines of pseudo-code comments. This helps make code more semantic eg in naming of variables and functions. Finally optimise if you can.</p>

<a href="https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b" target="_blank">What’s the difference between primitive values and object references in JavaScript?</a>

<p style="color: orange;">Primitive values are actual, in-your-digital-palm values - as variables. Don't know what they are as their starting data-types - string, number, boolean - and the less obvious null, undefined - plus bigint and symbol which I haven't seen yet. You can reassign them but not change the actual primitive value while it is in the variable - eg you can't just change a digit in a number variable, you have to change the whole of the number in the variable. That makes some logical sense.   
What makes less sense is object references - they refer to objects but they *feel* just like other variables. But instead of holding the object inside them, they are a signpost to the object elsewhere in the computer memory. Makes some sense - it means you can reference long lists and complex collections using just a variable - and you allow the computer to store these with more care and precision than it needs for the smaller datatypes.   
The main problems are: because it's a reference, when you copy it or re-assign it as if it was a primitive (which it still looks like), you just copy the reference so you have two signposts pointing to the same object but you may think you have two objects; also when you try to compare two references to the same object, js says they are *not* exactly the same (unlike `a = 1, b =1 so (a===b)` which *is* the same).   
This kind of explains some of the shananigans involved in copying objects. You have to be super-aware that when you mutate an object using a reference to it, you may not be changing the object you think you are; and to use the right methods for creating and copying objects. Also, when you get into array methods, some create a new array and some mutate the existing array. I found that hard to keep track of in python.</p>
