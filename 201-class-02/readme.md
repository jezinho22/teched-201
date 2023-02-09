# Class 02 reading notes

## Lab links

[Link to lab-02](lab-02-a/lab-02-a.html)

### TIL

- Huh! You can put little % operators on CSS and adjust them so that elements are x% the size of each other
- Which would make it easy to to create a loading bar, or percent correct bar - which is just what I need for my cricket picking game
- I also learned how to make multiple folders and files in terminal eg `mkdir 201-class-{01..15}` and `touch ~/projects/teched-201/201-class-{01..15}/readme.md`
- I have had to find out how to move, remove, rename files and folders in terminal; also how to remove a cloned repo - there's a hidden file called .git that has to be forcibly removed; -r allows you to do stuff to a load of folders and everything in them

### IWTFOMA

- How to use selectors dynamically for CSS
- I've forgotten how to do numbered list in md - I thought it was just with numbers ...

<p style="color:orange; font: 30px">Class-02 Quiz</p>

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

1. Terminal: Open repo in terminal - `cd` into the directory
2. Terminal: Maybe a cheeky `git status` and `git pull` in case you did anything in github since last session
3. Terminal: `code .` to get to vs code
4. VS Code: Open `readme.md`
5. VS Code: Create a lab html to work in today
6. VS Code: Open a Live Server for the lab html - so you can view the rendered code when you want to - right click on lab html in explore or on tab, and choose _Open with Live Server_
7. Browser: check Live Server has opened a browser window

### Finishing a session:

1. Browser: Copy prompts (from discord or canvas)
2. VS Code: Paste promps to lab.md
3. VS Code: Copy code and paste to lab.md
4. VS Code: Add link for lab.html to lab.md
5. VS Code: Add link for lab.md to readme.md - relative path would be just the filename
6. Terminal: `git add . `
7. Terminal: `git commit -m "what I changed"`
8. Terminal: `git push`
9. Browser: Go to github and get **permalink** for the lab.md (three dots top right of the file when you view it in github), paste it into Canvas

### Reading:

1. Terminal: Open repo in terminal - cd into the directory
2. Terminal: Maybe a cheeky `git status` and `git pull` in case you did anything in github since last session
3. Terminal: `code .` to get to vs code
4. VS Code: Open `readme.md` for the lesson
5. VS Code: Open a preview tab - right click on readme tab (or on file in explorer) - choose _Open preview_
6. VS Code: Add comments as reading / maybe copy and paste some prompts from Canvas
7. VS Code: Preview readme.md as you go - use the preview tab
8. Terminal: `git add . `
9. Terminal: `git commit -m "what I changed"`
10. Terminal: `git push`
