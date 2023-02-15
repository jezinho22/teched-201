# Reading

## Learn HTML: Creating Hyperlinks

1. To create a basic link, we wrap text or other content inside what element? _span and specifically_ `<a> </a>`
2. The href attribute contains what information? _weblink - http address_
3. What are some ways we can ensure links on our pages are accessible to all readers? _by adding hover-over info; by ensuring contrast for link colours - before and after clicked;_

## CSS Layout: Normal Flow CSS Layout: Positioning

1. What is meant by “normal flow”? _the default way that elements are displayed_
2. What are a few differences between block-level and inline elements? _block take up the whole width of the page, whether their content does or not; inline only take up the amount they need; A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary. The `<div>` element is a block-level and is often used as a container for other HTML elements. The `<span>` element is an inline container used to mark up a part of a text, or a part of a document_
3. \_\_\_ positioning is the default for every html element. \*
4. Name a few advantages to using absolute positioning on an element.
5. What is a key difference between fixed positioning and absolute positioning?

## Learn JS: Functions – Reusable Blocks of Code

1. Describe the difference between a function declaration and a function invocation. _declare: function myFunction(){}; invoke: myFunction() - declare sets the function out; invoke calls/runs/uses it_
2. What is the difference between a parameter and an argument? _Nothing!_

## Miscellaneous

Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.
_Two heads are better than one. It gives opps to use the right terms. You can ask for explanation. You can explain. Keeps you on-task. Teaches collaboration skills_
I had to really think about the logic questions. I should have done a table:

| OR    | true | false |
| ----- | ---- | ----- |
| true  |      |       |
| false |      |       |

| AND   | true | false |
| ----- | ---- | ----- |
| true  |      |       |
| false |      |       |

I have seen tables like this before. But I still needed to see it in context - like an actual usage in code. So I wrote:

```javascript
// testing for logic tables

let a;
let b;

function andLogic(a, b) {
  if (a == 1 && b == 1) {
    console.log(`${a} and ${b} equates to true`);
  } else {
    console.log(`${a} and ${b} equates to false`);
  }
}

function orLogic(a, b) {
  if (a == 1 || b == 1) {
    console.log(`${a} or ${b} equates to true`);
  } else {
    console.log(`${a} or ${b} equates to false`);
  }
}
andLogic(1, 1); //true
andLogic(1, 0); //false
andLogic(0, 1); //false
andLogic(0, 0); //false
orLogic(1, 1); //true
orLogic(1, 0); //true
orLogic(0, 1); //true
orLogic(0, 0); //false
```
