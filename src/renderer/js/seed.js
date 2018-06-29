export const html =
`<div class="container">
    <h1>{{title}}</h1>
    <h2>{{heading}}</h2>
</div>`

export const css =
`.container {
    height: 200px;
    background-color: purple;
    width: 500px;

    h1 {
        color: red;
    }

    h2 {
        color: blue;
    }
}`

export const json =
`{
    "title": "Christmas Party",
    "heading": "Welcome to the party!"
}`

export const helpers =
`{
  "helpers": {
      "name": "function() {}"
  },
  "partials": {
      "name": "function() {}"
  }
}`

export const page =
`{
  "pdf": {
    "format": "Letter",
    "printBackground": true,
    "landscape": true,
    "margin": {
     "top": "20px",
     "bottom": "20px",
     "left": "20px",
     "right": "20px"
   }
  },
  "viewport": {
    "isLandscape": true,
    "width": 2200,
    "height": 1700,
    "deviceScaleFactor": 2
  }
}
`
