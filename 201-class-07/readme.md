# Reading Class 07

## Object-Oriented Programming, HTML Tables

### Domain Modeling

Explain why we need domain modeling. <span style="color:orange"> It enables js and css to find and manipulate html elements eg to know which `<p>` to format, or where to add a new `<tr>` </span>

### HTML Table Basics

Why should tables not be used for page layouts? <span style="color:orange"> tables are not very responsive to screen changes; tables would provide elements and info in a different order to what a screen-reader expects</span>
List and describe 3 different semantic HTML elements used in an HTML <table>. <span style="color:orange">th: header cells; tr: table row, a collection of cells; td: table data but I prefer table cell, individual cells in the table. The table does actually "know" that it is composed of columns, as well as rows, but we construct it in rows, and this leads to the columns</span>

### Introducing Constructors

What is a constructor and what are some advantages to using it? <span style="color:orange"> a constructor is a function which builds objects at run-time - it means objects can be created dynamically; it also means that functions can be managed so that they can only be intentionally called because they only work on items in the object, and the scope of variables can be controlled (not sure about this bit as scope of variables is controlled by being inside a function anyway ...)</span>

How does the term `this` differ when used in an object literal versus when used in a constructor? <span style="color:orange">I have not been able to find this out! It refers to a value of a property of the object: eg obj{name:"Jez"} would be refered to by a function in that object (whether object literal or constructor) as this.name, rather than obj.name - but this works for either. Aha! What does _not_ work is using objectName with constructors because they create instances of themselves with different names - so you don't know what name to use - therefore `this` works. Also, as V explains, with a method (a function inside an object) you have to use `this.` because otherwise it does not work.</span>

### Object Prototypes Using A Constructor

Explain prototypes and inheritance via an analogy from your previous work experience.<span style="color:orange">So, at the start of the year each teacher gets their new class of children, along with various methods that are what all the classes do - you could say we have all got objects made from the same constructor prototype - with the same methods to begin with eg break time is at 10.30, register is in alphabetic order. I will keep all those inherited methods that come as standard, but I may be able to add more of my own now it's my class, or even change the ones I inherited, so I can do the register in first-name order, or in French. The other teachers' classes won't have access to these methods, because I made them up once the class was created. (BTW: I can refer to the same child in my class by several names, and whichever I use it will affect the same child - like an object reference)</span>

NOTE: This is a very common front end developer interview question

### Bookmark and Review

<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced">HTML Table Advanced Features and Accessibility<a>
