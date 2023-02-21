# Class 05

## Links to task outcomes

Lab 05  
Practice activities  
</br>

## TIL

-   em and rem: em is 1 x the font size of the parent element (so 0.5em is half); rem is 1 x the root element (the html tag)
-   rem is better than em as a whole-document approach - all fonts are relative to a single reference, rather than possibly to a number of parent elements which are already relative to their parents and so on
-   line-height also can work with x 1 (this time as 1 x the font-size)
-   Huh. I thought this must be the case, but I must have been gettgn the wrong order: _Many font properties can also be set through the shorthand property font. These are written in the following order: font-style, font-variant, font-weight, font-stretch, font-size, line-height, and font-family._ And if you use `font: ` then you must have at least font-size and font-family eg `font: 30px Helvetica, Arial, sans-serif;`
-   I also learned to use `span` to colour text when I reviewed github instructions for Lab04 - highlighting words in an instructional text
-   And how to add line-breaks into markdown - which is much harder than it needs to be

## IWTFO

-   I am kind of looking forward to managing font-size through rem - it should allow a consistent approach across a page, all relative to one main measure - probably best to limit the number of sizes though, having planned the structure and purpose
-   I want to learn how to make an animated `gif` and/or `svg` to use for my github profile page

## Reading questions

### Using Images In HTML -- Read Common Image Types -- Choose Image Formats

1. What is a real world use case for the alt attribute being used in a website? _accessibility - eg for screen readers; also to indicate what was supposed to be there if img has not loaded_
2. How can you improve accessibility of images in an HTML document? _using alt attribute_
3. Provide an example of when the figure element would be useful in an HTML document. _to allow a captioned image or code snippet or blocked quotation to be displayed in its own block_
4. Describe the difference between a gif image and an svg image, pretend you are explaining to an elder in your community. _A gif is a photo, let's say, made of lots of dots of colour, and as such when you squeeze it on a page, it distorts - gets squashed or stretched. A svg is a collection of shapes and lines that draw a picture - it gets re-drawn whenever the browser needs to, so it never gets distorted, just redrawn to fit the space available. Both gifs and svgs can be animated but svgs don't use as much memory because they just tell the broswer what lines and shapes to draw and redraw, whereas the gif tells it every coloured dot to display, in every frame of the animation_
5. What image type would you use to display a screenshot on your website and why? _png is common but if less detail needed, jpg is fine; webp now better alternative in terms of compression - screenshot will be a large image_

### Using Color in CSS -- Styling HTML Text Elements

1. Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone with no technical knowledge. _the background-color is the colour of the piece of paper that makes up the element and the color is the colour of the ink used to write on it_
2. Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some character? _add some background colour to the whole page, and to elements; use different colours to pick out headings and maybe some blocks of text; I'd like to stick to a limited palette of say 3 colours, and use different shades; there must be enough contrast between text and background colours for them to be easily readable; also I would avoid too strong a contrast ie balck and white, which can create glare that reduces readability_
3. What should you consider when choosing fonts for an HTML document? _the feel of the writing; the function of the piece of text eg header, para; accessibility - sans serif is generally felt to be easier to read; availability - choose from the 'safe list' of fonts that all browsers can render_
4. What do font-size, font-weight, and font-style do to HTML text elements? _`font-size:` = bigger & smaller; `font-weight:` = bold and how bold; `font-style:` = italic/oblique and how oblique_
5. Describe two ways you could add spacing around the characters displayed in an h1 element _using `letter-spacing:` or `line-height:` or `word-spacing:` I guess_

## JPEG

<img src="jpeg.png" style="width:100px; height:100px"/>
A JPG icon

### JPEG stands for Joint Photographic Expert Group image

It has quite a few suffixes: .jpg, .jpeg, .jfif, .pjpeg, .pjp

It is very widely used and well-established as a format, and when it first came out it represented a huge step change in file size compared to bitmaps. However, it reduces file-size by "losing" information, and so jpgs can lose details that you might want to keep.

Use it for photos of holidays to send to people who won't want to print them. Use it for profile pictures that are small anyway.

Don't use it for things that require detail - things that people may wnat to print and display, or refer to in fine detail, like pictures of text, screenshots.
