import fs from 'fs'
import path from 'path'
import sass from 'sass'
import handlebars from 'handlebars'

export default function TemplateBuilder(path, name) {
  this.path = path
  this.name = name

  this._init()
}

TemplateBuilder.prototype._init = function() {
  try {
    let files = ["html", "css", "json", "helpers"]

    for(const file of files) {
      let filePath = path.join(this.path, `${this.name}.${file}`)
      this[file] = fs.readFileSync(filePath, 'utf-8')
    }

    // after reading the files combine them into a pre-template string
    this._combine()
    this._createTemplate()
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

TemplateBuilder.prototype._createTemplate = function() {
  let writePath = path.join(this.path, `template.html`)
  try {
    fs.writeFileSync(writePath, this.combined, 'utf-8')
    console.log("Template file generated successfully!")
  } catch(error) {
    console.error(error)
  }
}

TemplateBuilder.prototype.compile = function(json) {
  // setup helpers
  let template = handlebars.compile(this.combined)
  return template(JSON.parse(json))
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
