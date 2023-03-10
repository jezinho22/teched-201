# 201 Class 03 Reading

## Lab links

[Link to Lab 03](201-lab-03.md)

## TIL

- the origins of the term 'deugging' in old solid state computers

## IWTFO

- how to use flex to lay out elements

## Reading tasks

### Ordered and Unordered lists.

When should you use an unordered list in your HTML document? _when you want a bullet pointed list, or nested indented lists (though numbered lists also indent), also good for nav links_  
How do you change the bullet style of unordered list items? `{ text-decoration: none }`  
When should you use an ordered list vs an unorder list in your HTML document? _when you want numbers eg for numbered steps_  
Describe two ways you can change the numbers on list items provided by an ordered list? `<ol start="3" type="1">`

### Learn CSS: The Box Model.

Describe the CSS properties of margin and padding as characters in a story. What is their role in a story titled: “The Box Model”?
_Goldilocks arrived at a large square area, and right in the centre was a box with somethin written on it. Naturally she decided to try to get in and see what this box could be hiding. First she climbed over the wire and crept through **margin**, an open space between the box and the woods. Then she came to a muddy sticky track running around the whole area - the **border**. Inside the border was neat, carefully clipped grass which kept the border away from the box. She called it **padding**. Finally she reached the box. It was just a piece of writing. It said "Mind your own business, Goldilocks"_  
List and describe the four parts of an HTML elements box as referred to by the box model: _margin, border, padding, content_

### Learn JS: Arrays. Operators and Expressions. Conditionals. Loops.

What data types can you store inside of an Array? _Any and all, including arrays!_

```
 const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];
```

Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?

```
 console.log(people.length) 3
 console.log(people[0][3])  null
 console.log(people[0][0])  'pete'
```

List five shorthand operators for assignment in javascript and describe what they do.  
`x += y` `x -= y` `x *= y` `x /= y`  
Read the code below and evaluate the last expression and explain what the result would be and why.

```
 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this:
 (a + c) + b;
```

_false evaluates to 0 (true is 1); so 10 + false = 10; 10 is seen as a string when string methods are attempted on it (and adding to a string is a string method), so 10 + dog = 10dog_  
Describe a real world example of when a conditional statement should be used in a JavaScript program.
Give an example of when a Loop is useful in JavaScript.

### html and css work today

```
<!DOCTYPE html>
<html>

<head>
  <title>Plain J Pictures</title>

  <style>
    body {
      background-color: darkblue;
    }

    #header {
      border: 5px solid white;
      background-color: lightblue;
      padding: 20px;
    }

    #main {
      border: 5px solid white;
      background-color: turquoise;
      text-align: center;
    }

    img {
      width: 200px;
      height: 150px;
    }

    #features-section {

      text-align: center;
      width: 25%;
      float: right;
      margin-top: -70px
    }

    input {
      border: none;
      padding: 12px;
      color: green;
      font-family: salmon;
      font-weight: bolder;
      border-radius: 16px;
      box-shadow: 2px 2px grey;

    }

    li {
      display: inline-block;
      background-color: blueviolet;
      margin: 10px;
      padding: 10px 15px;
      border-radius: 16px;
      box-shadow: 2px 2px grey;
    }
  </style>
</head>

<body>


  <div id="header">
    <h1>HEADER</h1>
    <ul>
      <li>Home</li>
      <li>Favorites</li>
      <li>Contact</li>
    </ul>

    <div id="features-section">
      <input type="text" placeholder="Search here" />
    </div>


  </div>


  <div id="main">
    <h1>MAIN</h1>

    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
    <img src="cromer-pier.jpg" />
  </div>


</body>


</html>
```
