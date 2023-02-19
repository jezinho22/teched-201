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

  <style>
    svg path {
      stroke-dasharray: 570;
      stroke-dashoffset: 570;
      animation: animate 10s forwards;
    }

    svg g {
      fill-opacity: 0;
      animation: fill-in 12s forwards;
    }

    @keyframes animate {
      to {
        stroke-dashoffset: 0;
      }
    }

    @keyframes fill-in {
      to {
        fill-opacity: 1
      }
    }
  </style>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="640"
    height="320" viewBox="0 0 640 320" xml:space="preserve">
<desc>Created with Fabric.js 4.6.0</desc>
<defs>
</defs>
<g transform="matrix(1 0 0 1 130.85 106.56)" id="4DMiBaK2zhJPtrnxy443k">
<path
        style="stroke: rgb(0,0,0); stroke-width: 1; stroke-linecap: butt;  stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-opacity: 0; fill-rule: nonzero; opacity: 1;"
        vector-effect="non-scaling-stroke" transform=" translate(0, 0)" d="M 0 0" stroke-linecap="round" />
</g>

<!--     outside square fill colour is rgb(53,237,53) -->
<g transform="matrix(1 0 0 1 117.18 202.07)" id="CIeLrap0y3ifJL1vcdrJF">
<path
        style="stroke: rgb(53,237,53); stroke-width: 1; stroke-linecap: butt;  stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero;"
        vector-effect="non-scaling-stroke" transform=" translate(0, 0)"
        d="M -41.38856 -78.05668 L 49.82770000000001 -78.05668 L 49.82770000000001 -78.05668 C 50.767300000000006 -78.05668 51.702960000000004 -77.93518 52.61140000000001 -77.69519 L 56.23826000000001 -76.73707 L 56.23826000000001 -76.73707 C 68.10295 -73.60273000000001 76.36833000000001 -62.87031 76.36833000000001 -50.59859 L 76.36833000000001 -50.20243 L 76.36833000000001 52.793519999999994 L 75.84599000000001 54.9601 L 75.84599000000001 54.9601 C 73.13544000000002 66.20295 64.33184000000001 74.96558999999999 53.07648000000002 77.62369 L 51.24303000000002 78.05668 L -49.809599999999975 78.05668 L -56.19414999999997 76.9108 L -56.19414999999997 76.9108 C -67.87032999999997 74.81519999999999 -76.36829999999998 64.65625999999999 -76.36829999999998 52.793519999999994 L -76.36829999999998 52.793519999999994 L -76.36829999999998 -50.20243 L -76.36829999999998 -50.20243 L -76.36829999999998 -50.20243 C -76.36829999999998 -65.58591 -63.897529999999975 -78.05668 -48.514049999999976 -78.05668 z"
        stroke-linecap="round" />
</g>
<!--     inner square -->
<g transform="matrix(0.94 0 0 0.94 117.18 202.07)" id="zIYDLKgmrw02fthYmsxol">
<path
        style="stroke: rgb(53,237,53); stroke-width: 1; stroke-linecap: butt;  stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(53,237,53); fill-rule: nonzero;"
        vector-effect="non-scaling-stroke" transform=" translate(0, 0)"
        d="M -41.38856 -78.05668 L 49.82770000000001 -78.05668 L 49.82770000000001 -78.05668 C 50.767300000000006 -78.05668 51.702960000000004 -77.93518 52.61140000000001 -77.69519 L 56.23826000000001 -76.73707 L 56.23826000000001 -76.73707 C 68.10295 -73.60273000000001 76.36833000000001 -62.87031 76.36833000000001 -50.59859 L 76.36833000000001 -50.20243 L 76.36833000000001 52.793519999999994 L 75.84599000000001 54.9601 L 75.84599000000001 54.9601 C 73.13544000000002 66.20295 64.33184000000001 74.96558999999999 53.07648000000002 77.62369 L 51.24303000000002 78.05668 L -49.809599999999975 78.05668 L -56.19414999999997 76.9108 L -56.19414999999997 76.9108 C -67.87032999999997 74.81519999999999 -76.36829999999998 64.65625999999999 -76.36829999999998 52.793519999999994 L -76.36829999999998 52.793519999999994 L -76.36829999999998 -50.20243 L -76.36829999999998 -50.20243 L -76.36829999999998 -50.20243 C -76.36829999999998 -57.58984 -73.43365999999997 -64.67466999999999 -68.20997999999997 -69.89836 C -62.986289999999975 -75.12205 -55.90145999999997 -78.05668 -48.51404999999997 -78.05668 z"
        stroke-linecap="round" />
</g>
<!--     the j -->
<g transform="matrix(1 0 0 1 114.01 206.96)" id="6NMSRDzQNVpApn-E3cheL">
<path
        style="stroke: rgb(53,237,53); stroke-width: 1; stroke-linecap: butt;  stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero;"
        vector-effect="non-scaling-stroke" transform=" translate(0, 0)"
        d="M 39.51417 13.60324 L 39.51417 -61.53846 L 57.00405 -61.53846 L 57.00405 32.388670000000005 L 56.40533 36.386680000000005 L 56.40533 36.386680000000005 C 54.24048 50.842670000000005 41.82366 61.538470000000004 27.20648 61.538470000000004 L 27.20648 61.538470000000004 L -33.03643 61.538470000000004 L -36.257020000000004 60.868790000000004 L -36.257020000000004 60.868790000000004 C -46.88613000000001 58.658590000000004 -55.017250000000004 50.06748 -56.639790000000005 39.33294000000001 L -57.00404 36.92309000000001 L -57.00404 15.54657000000001 L -40.16193 15.54657000000001 L -40.16193 36.92309000000001 L -39.13641 39.486900000000006 L -39.13641 39.486900000000006 C -37.40839 43.806940000000004 -33.22432 46.63969000000001 -28.5715 46.63969000000001 L -21.37651 46.63969000000001 L 20.72875 46.63969000000001 L 25.789910000000003 45.93700000000001 L 25.789910000000003 45.93700000000001 C 33.657160000000005 44.84471000000001 39.51418 38.11832000000001 39.51418 30.17560000000001 L 39.51418 29.79758000000001 z"
        stroke-linecap="round" />
</g>
</svg>
