# Class 02 reading notes

### TIL

- Huh! You can put little % operators on CSS and adjust them so that elements are x% the size of each other
- Which would make it easy to to create a loading bar, or percent correct bar - which is just what I need for my cricket picking game
- I also learned how to make multiple folders and files in terminal eg `mkdir 201-class-{01..15}` and `touch ~/projects/teched-201/201-class-{01..15}/readme.md`

### IWTFOMA

- How to use selectors dynamically for CSS
- I've forgotten how to do numbered list in md - I thought it was just with numbers ...

## Class-02 Quiz

Why is it important to use semantic elements in our HTML? _So it can be understood by colleagues; so it can be easily constructed by us (in standardised ways)_  
How many levels of headings are there in HTML? _6_  
What are some uses for the `<sup>` and `<sub>` elements? _superscript and subscript, so nth, n squared, itemn_  
When using the <abbr> element, what attribute must be added to provide the full expansion of the term? _title_

What are ways we can apply CSS to our HTML? _inline, internal and external_  
Why should we avoid using inline styles? _its bad practice, it makes it hard to edit, or work with multiple pages, it reads badly_

What data type is a sequence of text enclosed in single quote marks? String  
List 4 types of JavaScript operators. `+ - / *`

1. An if statement checks a ** and if it evaluates to \_**, then the code block will execute. _condition ... true_
2. What is the use of an else if? _for a second condition, after first is not met_
3. List 3 different types of comparison operators. _and, or, not && || !_
4. What is the difference between the logical operator && and ||? _&& is **and**, || is **or**; **and** means meet both criteria (shorter list), **or** means meet either criterion (longer list)_

What is an array? I knew it was a grid of data items. I knew that I usually use lists, and they are actually arrays. I didn't realise that they should be the same datatype - but I was thinking of python DataFrames which caused me no end of bother with datatypes being different and messing up functions I used on bits of them.

## my git workflow

### Starting a session:

1. Open repo in terminal
2. `code .` to get to vs code
3. Open `readme.md`
4. Create a lab html
5. Open a Live Server for the lab html - so you can view the rendered code when you want to - right click on lab html in explore or on tab, and choose *Open with Live Server*

### Reading:

1. Open repo in terminal - cd into the directory
2. Maybe a cheeky `git status` and `git pull` in case you did anything in github since last session
3. `code .` to get to vs code
4. Open `readme.md`
5. Open a preview tab - right click on readme tab (or on file in explorer) - choose *Open preview*
6. Add comments as reading / maybe copy and paste some prompts from Canvas
7. Preview readme.md as you go - use the preview tab

### Finishing:

1. Copy link (path) to file and paste into readme - right click on the lab in explorer or on the tab, and choose _Copy relative path_
2. Paste same link into the _Canvas_ comment for that lab
3. In terminal: `git add . `
4. In terminal: `git commit -m "what I changed"`
5. In terminal: `git push`
