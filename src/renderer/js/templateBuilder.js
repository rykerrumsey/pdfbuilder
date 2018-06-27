import fs from 'fs-extra'
import path from 'path'
//import { sass } from 'node-sass'
import handlebars from 'handlebars'

export default function TemplateBuilder(name, documentPath) {
  this.name = name
  this.path = path.join(documentPath, name)

  this._init()
}

TemplateBuilder.prototype._init = async function() {
  try {
    let htmlPath = path.join(this.path, `${this.name}.html`)
    this.html = await fs.readFile(htmlPath, 'utf-8')

    let cssPath = path.join(this.path, `${this.name}.css`)
    this.css = await fs.readFile(cssPath, 'utf-8')

    let jsonPath = path.join(this.path, `${this.name}.json`)
    this.json = await fs.readFile(jsonPath, 'utf-8')

  } catch (error) {
    console.error(error)
  }
}

TemplateBuilder.prototype.combine = function() {
  // run css through sass converter
  // use base html as template adding html css as strings

}

TemplateBuilder.prototype.createTemplate = function() {
  // this.combine()
}

TemplateBuilder.prototype.compile = function() {
  // setup helpers
  // execute template with json parsed

  // this.combine()
  // output full html
}

const base =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500|Work+Sans:400,500" rel="stylesheet">
    <style type="text/css">
      {{css}}
    </style>
  </head>
  <body>
    {{{html}}}
  </body>
</html>`
// load files name.html name.css name.js
// combine
// createTemplate
// compile -> turns template into pdf with json



// document.getElementById('iframeid').src += '';
