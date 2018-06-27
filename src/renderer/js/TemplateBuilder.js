import fs from 'fs'
import path from 'path'
import sass from 'sass'
import handlebars from 'handlebars'

export default function TemplateBuilder(name, documentPath) {
  this.name = name
  this.path = path.join(documentPath, name)

  this._init()
}

TemplateBuilder.prototype._init = function() {
  try {
    let files = ["html", "css", "json"]

    for(const file of files) {
      let filePath = path.join(this.path, `${this.name}.${file}`)
      this[file] = fs.readFileSync(filePath, 'utf-8')
    }

    // after reading the files combine them into a pre-template string
    this._combine()

  } catch (error) {
    console.error(error)
  }
}

TemplateBuilder.prototype._combine = function() {
  let result = sass.renderSync({data: this.css})
  let css = result.css.toString()

  let master = handlebars.compile(baseHtml)
  this.combined = master({css: css, html: this.html})
}

TemplateBuilder.prototype.createTemplate = function() {
  let writePath = path.join(this.path, `template.html`)
  try {
    fs.writeFileSync(writePath, this.combined, 'utf-8')
    console.log("Template file generated successfully!")
  } catch(error) {
    console.error(error)
  }
}

TemplateBuilder.prototype.compile = function() {
  // setup helpers

  let template = handlebars.compile(this.combined)
  let compiledTemplate = template(JSON.parse(this.json))

  // output full html
  return compiledTemplate
}

const baseHtml =
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

// document.getElementById('iframeid').src += '';
