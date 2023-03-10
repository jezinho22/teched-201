# Class 10 Reading

[What Went Wrong? Troubleshooting JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

Name some key differences between a Syntax Error and a Logic
Error.<span style="color: orange">A syntax error can be spotted by the IDE but a
logic error cannot - it will just mean you do not get the outcome you expected.
Logic errors can be sequencing, scope-related, or just plain logic, but also in
plenty of other things that will make code go wrong. Syntax can be missing or
extra items, mispellings, misuse of syntax for things it won't do.</span>  
List a few types of errors that you have encountered in past lab assignments and
explain how you were able to correct them.<span style="color: orange"> The
problems tab helps a lot in VS Code. Also the red lines. These are for syntax
errors. I have mis-spelled things, misused things, misunderstood things, omitted
things - you name it. Also in python lots of issues with datatypes because I was
data-scraping from websites and data came in different ways. WHitespace can be a
problem. Yesterday I input a load of code, having planned it, but did not work
out in planning what stages I would be able to test - and so it took a long time
to find errors I had made - a number of syntax errors came from not doing this,
and the debugger could only direct me to the last line and say there was a
misplaced bracket - which could have resulted from a mistake anywhere in about
30 lines of code.</span>  
How will this topic continue to influence your long term goals?
<span style="color: orange">I will try to plan testing into my code as well as
the code blocks themselves - this iwll require more thought and practice</span>

[The JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_debugger)

How would you describe the JavaScript Debugger tool and how it works to someone
just starting out in software development? <span style="color: orange">When you
write js code, you can make mistakes and they may not be obvious. When the code
does not work in your browser - ie it just displays html and some of the js
logic doesn't work, you can look in the console using "Inspect". First you see
the html, but you can choose the console. You can also look your js by going to
Sources and then ctrl+p, and selecting it. Suppose you have a button that
"doesn't work" - you can set a breakpoint which is a place where the debugger
just pauses the code, and you can set watches on variables so you can see what
value the variable has at that point. So you might set the breakpoint in the
first line of the eventhandler, for instance. You can also step through the code
from the breakpoint, line by line, watch the variables and watch what happens in
the browser window. So you might step through the event handler. This can allow
you to home in on where the error is. This will usually be for logic errors.
</span>  
Define what a breakpoint is. <span style="color: orange">Oh, I just did</span>  
What is the call stack? <span style="color: orange">The call stack shows which
function calls your code has gone through - starting with the most recent one
and tracking back - I find it confusing when js tracks through layers of its
inner workings when I only need the surface level syntax error. I have not
really used it for my own logic errors, but it would show where functions each
affected the outcome up to your breakpoint</span>

## Bookmark and Review

[Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)

[Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
