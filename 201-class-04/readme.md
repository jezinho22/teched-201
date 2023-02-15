# Reading

## Learn HTML: Creating Hyperlinks

1. To create a basic link, we wrap text or other content inside what element? _span and specifically_ `<a> </a>`
2. The href attribute contains what information? _weblink - http address_
3. What are some ways we can ensure links on our pages are accessible to all readers? \*by adding hover-over info; by ensuring contrast for link colours - before and after clicked;

## CSS Layout: Normal Flow CSS Layout: Positioning

1. What is meant by “normal flow”? _the default way that elements are displayed_
2. What are a few differences between block-level and inline elements? _block take up the whole width of the page, whether their content does or not; inline only take up the amount they need; A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary. The `<div>` element is a block-level and is often used as a container for other HTML elements. The `<span>` element is an inline container used to mark up a part of a text, or a part of a document_
3. \_\_\_ positioning is the default for every html element. _normal flow_
4. Name a few advantages to using absolute positioning on an element.
5. What is a key difference between fixed positioning and absolute positioning?

## Learn JS: Functions – Reusable Blocks of Code

1. Describe the difference between a function declaration and a function invocation.
2. What is the difference between a parameter and an argument? _Nothing!_

# Miscellaneous

Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

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

<section style="height: auto;">
        <h1 id="readings-html-links-js-functions-and-intro-to-css-layout">Readings: HTML Links, JS Functions, and Intro to CSS Layout</h1>

<p>Below you will find some reading material, code samples, and some additional resources that support the topic for this class and the upcoming lecture.</p>

<p>Review the Submission Instructions for guidance on completing and submitting this assignment.</p>

<h2 id="reading">Reading</h2>

<h3 id="learn-html"><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">Learn HTML</a></h3>

<p><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks" target="_blank">Creating Hyperlinks</a></p>

<ol>
  <li>To create a basic link, we wrap text or other content inside what element?</li>
  <li>The <code class="language-plaintext highlighter-rouge">href</code> attribute contains what information?</li>
  <li>What are some ways we can ensure links on our pages are accessible to all readers?</li>
</ol>

<h3 id="css-layout"><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout" target="_blank">CSS Layout</a></h3>

<p><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow" target="_blank">CSS Layout: Normal Flow</a>
<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning" target="_blank">CSS Layout: Positioning</a></p>

<ol>
  <li>What is meant by “normal flow”?</li>
  <li>What are a few differences between <code class="language-plaintext highlighter-rouge">block-level</code> and <code class="language-plaintext highlighter-rouge">inline</code> elements?</li>
  <li><strong>__</strong>_ positioning is the default for every html element.</li>
  <li>Name a few advantages to using absolute positioning on an element.</li>
  <li>What is a key difference between fixed positioning and absolute positioning?</li>
</ol>

<h3 id="learn-js"><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank">Learn JS</a></h3>

<p><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions" target="_blank">Functions – Reusable Blocks of Code</a></p>

<ol>
  <li>Describe the difference between a function declaration and a function invocation.</li>
  <li>What is the difference between a parameter and an argument?</li>
</ol>

<h3 id="miscellaneous">Miscellaneous</h3>

<p><a href="https://www.codefellows.org/blog/6-reasons-for-pair-programming/" target="_blank">6 Reasons for Pair Programming</a></p>

<ol>
  <li>Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.</li>
</ol>

</section>
