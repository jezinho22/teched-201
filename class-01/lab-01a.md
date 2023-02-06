# Lab-01 tasks

Tasks

1️⃣  | Create a basic html code
2️⃣  | Add basic css styling
3️⃣  | Add a Js script to it
4️⃣  |  JS files should contain console.log, prompt and an alert

## Version 1

```
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

```
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

