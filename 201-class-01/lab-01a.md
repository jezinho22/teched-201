# Lab-01 tasks

Tasks

1️⃣ | Create a basic html code
2️⃣ | Add basic css styling
3️⃣ | Add a Js script to it
4️⃣ | JS files should contain console.log, prompt and an alert

## Version 1

The HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="myscript.js"></script>
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1>A new web page</h1>
      <p>
        <script></script>
      </p>
      <p>
        <script>
          asked = prompt("Ask me anything. Go on. Anything");
          console.log("No bugs so far!");
          alert("This is an alert. So now you know");
          document.print("What is this then?");
        </script>
      </p>
      <nav>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
        </ul>
      </nav>
    </header>
    <main>
      <p>Some text for the middle of the page</p>
    </main>
    <footer>
      <p>&copy Jezinho</p>
    </footer>
  </body>
</html>
```

The JS:

```javascript
function letMeKnow() {
  alert("This is an alert. So now you know");
}
function askMe() {
  asked = prompt("Ask me anything. Go on. Anything");
}
function debugMe() {
  console.log("No bugs so far! Plus this is what you asked: ", asked);
}
```

The CSS:

```css
body {
  background-color: blue;
  color: antiquewhite;
}
h1 {
  background-color: aqua;
  color: black;
}
```

## Lab01-b

1️⃣ | create four prompts  
2️⃣ | each prompt should ask your name, age, country and fav color respectively  
3️⃣ | Create a LIST in your html  
4️⃣ | This list should contain four list items with name, age, country and fav color  
5️⃣ | the values you enter in your prompt should be rendered in the frontend and the text color should be the fav color you entered

```html
<!DOCTYPE html>

<head>

    <title>Document</title>
    <style>
        body{
            background-color:wheat;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color:goldenrod;
            width: 50%;
        }
        #list1 {
            background-color:antiquewhite;
            color:goldenrod;
            border: 2px black;
            border-radius: 3px;
        }
        button {
            height: 40px;
            width: 150px;
            margin: 40px;
        }
    </style>

</head>

<body id="bod">
    <HEADER>
        <H1 onclick="onClickHandler()">This is my list</H1>
    </HEADER>
    <ul id = "list1">
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
       <li>Item 4</li>
    </ul>
    <button onclick="clicked()">Click here</button>
    <script>
        function clicked(){
        let myName=prompt("What is your name?")
        let myAge=prompt("What is your age?")
        let myCountry=prompt("What country would you say you are from?")
        let myColour= prompt("What is your favourite colour?")
        let listItems = document.getElementsByTagName("li")
        listItems[0].innerText = myName
        listItems[1].innerText = myAge
        listItems[2].innerText = myCountry
        listItems[3].innerText = `And for your amusement, the font colour has been changed to ${myColour}!`
        document.getElementById('list1').style.color = myColour
        }
    </script>

</body>
</html>
```
