import fs from 'fs-extra'
import { templateBuilder, compile } from './js/templateBuilder'
import { html, css, json, page } from './seed'
import { render } from './render'

export default function Files(store) {
  this.name = store.get("name")
  this.page = store.get("page")
  this.documentPath = store.get("documentPath")
  this.data = store.get("data")
}

Files.prototype.save = async function () {
  let outputPath = path.join(this.documentPath, this.name)

  // cycle through all the data and export to files with proper extensions
  for (let editor of this.data) {
    let savePath = path.join(outputPath, `${this.name}.${editor}`)
    await fs.writeFile(savePath, this.data[editor], (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  }

  // build and save template in current project folder
  let templateBuilder = new TemplateBuilder(outputPath)
  let config = JSON.parse(this.page)

  render(templateBuilder.compile(), config)
}

Files.prototype.load = async function (projectPath) {
  for (let editor of this.data)
    let path = path.join(projectPath, `${this.name}.${editor}`)
    this.store.set(`data.${editor}`, await fs.readFile(path))
  })
}

Files.prototype.create = function () {
  let templatePath = path.join(this.documentPath, `${this.name}`)

  // create directory for template if they don't exist
  try {
    fs.mkdirSync(this.documentPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }

  try {
    fs.mkdirSync(templatePath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

Files.prototype.seed = function () {
  this.store.set("data.html", html)
  this.store.set("data.css", css)
  this.store.set("data.json", json)
  this.store.set("data.helpers", helpers)
  this.store.set("page", page)

  this.save()
}
