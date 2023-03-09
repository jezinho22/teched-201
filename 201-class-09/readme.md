# Class 09 Reading

<a href="https://developer.mozilla.org/en-US/docs/Learn/Forms" target="_blank">HTML
Forms</a>

[Your first Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)  
[How To Structure A Web Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)

Why are forms so important in web development?  
<span style="color:orange">Interactive communication with the user is very often
(some say always) via a form - to get preferences, to get data, to get input to
change things on the page (eg viewing data)</span>

When designing a form, what are some key things to keep in mind when it comes to
user experience?

<ul style="color:orange">

- The _relationship_ with the user needs to have trust - that the form is
  necessary, will be used appropriately, can be done easily and so on.
- Form needs to be seen as a _conversation_ - two-way communication - even
  though it seems to be just info coming from the user. Explaining, reassuring,
  thanking and more can come from the form to the user.
- _Appearance_ of the form conveys a lot - colours and branding to build on
  brand trust; commitments to privacy; positioning of elements to create
  flow.</ul>

List 5 form elements and explain their importance.

<ul style="color:orange">

- button - to submit input
- textarea - to collect longer input eg comments
- form element - to contain elements and state what happens to data at submit
  time
- choice elements - radio buttons, list box, check boxes - to provide choices to
  select from
- reset button - not normally good practice, but I used it for a guessing app,
  to allow user to refine choices and guess again</ul>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript" target="_blank">Learn
JS</a>

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" target="_blank">Introduction
To Events</a>

How would you describe events to a non-technical friend?
<span style="color:orange">It sounds obvious, but events are things that happen
to the computer - mostly things a user does, like move a mouse, type or click.
They can also be from the environment - through sensors that measure the
temperature or sound levels or light levels.</span>  
When using the addEventListener() method, what 2 arguments will you need to
provide? <span style="color:orange">You have to give .addEventHandler("the_event
eg click", the function to call). If you want, you can actually write the
function into the second argument, eg with arrow notation, and it can have its
own arguments, too. The alternative is to use **on** events as handlers:
*on*click="clickFunction()"</span>  
Describe the event object. Why is the target within the event object useful?
<span style="color:orange">The target of the `event` object is the element that
experienced the event, and triggered the handler. It is a property of the event.
The event bounces back from where it is sent and gives a meesgae to the target -
and the message is just itself. You can change properties of the target in the
bounce-back meesage, and this will change the element on the web page - this
allows you to grey-out or remove elements in response to a form submission or
other event</span>  
What is the difference between event bubbling and event capturing?
<span style="color:orange">Event bubbling and capturing are to do with having
event handlers on ancestors containers - eg child and parent. When you click on
the child you also click on the parent - so which should the code handle? With
event bubbling, it registers all of them, starting with the innermost child.
With event capturing, it handles them all, starting with the outermost parent.
It can also be that children 'feel' the event as the target but the parent
handles it, and the target can be modified using the handler, without affecting
the parent. </span>

## Bookmark and Review

[HTML5 Input Types](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)

[Event Reference and listings](https://developer.mozilla.org/en-US/docs/Web/Events)

## `this` keyword

It depends on what is calling `this`: (w3schools )

1. if the function call is in the form of `obj.f()`, then this refers to obj
2. if the source is put inside an HTML `<script>` element and executed as a
   script, `this === window`
3. if the source is called by an event handler, `this` refers to the HTML
   element that received the event: eg
   `<button onclick="this.style.display='none'">Click to Remove Me!</button>`
