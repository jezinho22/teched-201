# Reading

Links to lesson activities:  
[Day one - naming functions - getters and setters](https://github.com/jezinho22/teched-201/blob/e8f4ebbfc07f156131b8163eed4b6a789d0515ad/201-class-04/201-lab-04)  
[Day one - html version](https://github.com/jezinho22/teched-201/blob/e8f4ebbfc07f156131b8163eed4b6a789d0515ad/201-class-04/practice.html)  
[Logic tables - code I wrote to complete reading task](https://github.com/jezinho22/teched-201/blob/e8f4ebbfc07f156131b8163eed4b6a789d0515ad/201-class-04/logic.js)  
[Exploring css positioning on my own](https://github.com/jezinho22/teched-201/blob/e8f4ebbfc07f156131b8163eed4b6a789d0515ad/201-class-04/csspos.html)  
[Day 3 CSS positioning](https://github.com/jezinho22/teched-201/blob/e8f4ebbfc07f156131b8163eed4b6a789d0515ad/201-class-04/lab04css.html)  
Extra: [messing around to move an element using keyboard keys](https://github.com/jezinho22/teched-201/blob/85865fc1d0187707c7f04ba42783da432bfbe932/201-class-04/movingCircle.html)  
Day 4 css positioning - in Day 3. Plus [file to practise absolute positioning](https://github.com/jezinho22/teched-201/blob/85865fc1d0187707c7f04ba42783da432bfbe932/201-class-04/morecsspractice.html)

## TIL

-   css positioning - including how it works for relative pos for siblings with `display: inline-block`
-   I reminded myself about logic tables
-   fixed, relative and absolute positioning
-   a reason why it is more useful to container elements an actual width rather than percentage, because it is easier to calculate absolute pos in particular

## IWTFO

-   Using blocks of colour
-   Colour gradients
-   Pseudo selectors and @font-face-attribute
-   nth child
-   responsive design
-   can I change attributes and have the result shown on screen without re-rendering?

## My digest of the collaboration instructions for Lab04

### Get Code Ready For Collaborating

Be sure to follow these instructions VERY carefully.  
_Note: Before starting these steps, make sure that both of your repositories are ‘clean’: in other words, everything is committed and pushed so that both the remote and local versions of your projects are in sync. This will prevent potential problems later._

1. The <span style="color:chartreuse; font-style:bold;">Owner</span> of the code provides the link to their GitHub repo to the <span style="color:coral; font-style:bold;">Collaborator</span>.
2. The <span style="color:coral; font-style:bold;">Collaborator</span> follows the link to that repo and creates a fork of the repo in GitHub ??like we did in class??
3. The <span style="color:coral; font-style:bold;">Collaborator</span> then goes to their fork of the repo. The URL should have the <span style="color:coral; font-style:bold;">Collaborator</span>’s GitHub name in it - ??how has this been achieved?? and the <span style="color:coral; font-style:bold;">Collaborator</span> copies the link to that repo (the link has the <span style="color:coral; font-style:bold;">Collaborator</span>’s GitHub name in it and should end in .git).
4. Inside the <span style="color:coral; font-style:bold;">Collaborator</span>’s main work directory on their laptop (ie ~/projects/), make a directory with the <span style="color:chartreuse; font-style:bold;">Owner</span>’s name and then navigate (cd) into it. From there, enter the command git clone plus the-link-you-copied. That will create a local version of the forked repo on the <span style="color:coral; font-style:bold;">Collaborator</span>’s laptop.
5. cd into that directory and enter code . in the terminal to open all of the files in VSCode.
6. Start working on the code!

### Push to GitHub; Make a Pull Request

1. Once everything is finished, and the <span style="color:coral; font-style:bold;">Collaborator</span> has done the last edits and pushed them to GitHub, it’s time to send the edited code to the <span style="color:chartreuse; font-style:bold;">Owner</span>. We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.
2. From the <span style="color:coral; font-style:bold;">Collaborator</span>’s repo in their own Github (which is a fork of the <span style="color:chartreuse; font-style:bold;">Owner</span>’s repo), hit the green button that says ‘Create pull request’.
3. Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. This is all about the process of checking and agreeing the changes proposed, and changes proposed by other collaborators.
4. The <span style="color:chartreuse; font-style:bold;">Owner</span> of the code then goes to their GitHub repo for the project and accepts the pull request.
5. Then, in terminal on the <span style="color:chartreuse; font-style:bold;">Owner</span>’s laptop, while in the right directory, the <span style="color:chartreuse; font-style:bold;">Owner</span> enters the command ‘git pull origin main’ to retrieve the modified code from GitHub.

### Pair Programming Basics – the rules:

-   In pair programming, there are two developers working on a single body of code on a single computer.
-   One member of the pair is the <span style="color:coral; font-style:bold;">Driver</span>, and this person will be the one doing all of the actual typing work on the laptop. The <span style="color:coral; font-style:bold;">Driver</span> will be working on the <span style="color:chartreuse; font-style:bold;">Navigator</span>’s code by way of forking and cloning the <span style="color:chartreuse; font-style:bold;">Navigator</span>’s repository.
-   The other member of the pair is the <span style="color:chartreuse; font-style:bold;">Navigator</span>, and this person will work with only their voice and their thoughts.
-   The <span style="color:chartreuse; font-style:bold;">Navigator</span> does not touch the keyboard, nor does the <span style="color:chartreuse; font-style:bold;">Navigator</span> work on their laptop “on the side”. The <span style="color:chartreuse; font-style:bold;">Navigator</span> is fully engaged with the work that the pair is doing, typically using a piece of scratch paper to sketch diagrams, take notes, or list ideas. At most the <span style="color:chartreuse; font-style:bold;">Navigator</span> uses their laptop to perhaps keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN.
-   Under no circumstances does the <span style="color:chartreuse; font-style:bold;">Navigator</span> work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they’re working on together.
-   The lab time should be divided into two sections of approximately two hours each. At the halfway mark, you should swap roles and work on the other person’s code. Remember to watch the clock and determine the best point to swap roles.
-   In the case of an odd number of students, one group will have three members and you should rotate through three roles: <span style="color:coral; font-style:bold;">Driver</span>, <span style="color:chartreuse; font-style:bold;">Navigator</span>, Observer. Each person should take on each role one time. You will need to be even more mindful about watching the clock to ensure that equal time is devoted to all three projects.

## Learn HTML: Creating Hyperlinks

1. To create a basic link, we wrap text or other content inside what element? _span and specifically_ `<a> </a>`
2. The href attribute contains what information? _weblink - http address_
3. What are some ways we can ensure links on our pages are accessible to all readers? _by adding hover-over info; by ensuring contrast for link colours - before and after clicked;_

## CSS Layout: Normal Flow CSS Layout: Positioning

1. What is meant by “normal flow”? _the default way that elements are displayed_
2. What are a few differences between block-level and inline elements? _block take up the whole width of the page, whether their content does or not; inline only take up the amount they need; A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary. The `<div>` element is a block-level and is often used as a container for other HTML elements. The `<span>` element is an inline container used to mark up a part of a text, or a part of a document_
3. \_\_\_ positioning is the default for every html element. _static_
4. Name a few advantages to using absolute positioning on an element _when you move other elements on the page, the parent should move with them and also the absolute positioned children - so the positioning should be maintained; you can position elements where you want them, including overlapping others_
5. What is a key difference between fixed positioning and absolute positioning? _fixed is relative to viewport; absolute is relative to another element (and relative is relative to the page, unless display:inline block - in which case relative to its static position)_

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
