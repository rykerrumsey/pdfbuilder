import fs from 'fs-extra'
import path from 'path'
import TemplateBuilder from './TemplateBuilder'
import { html, css, json, page, helpers } from './seed'
import { render } from './render'

export default function Files(store) {
  this.store = store
  this.documentPath = store.get("documentPath")
}

Files.prototype.save = async function () {
  this.create()
  let keys = Object.keys(this.store.get("data"))
  let outputPath = path.join(this.documentPath, this.store.get("name"))

  // cycle through all the data and export to files with proper extensions
  const promises = keys.map(async (key) => {
    let savePath = path.join(outputPath, `${this.store.get("name")}.${key}`)

    try {
      await fs.writeFile(savePath, this.store.get(`data.${key}`))
    } catch(error) {
      console.error(error)
    }
  })

  await Promise.all(promises)

  // build and save template in current project folder
  let templateBuilder = new TemplateBuilder(outputPath, this.store.get("name"))
  let config = JSON.parse(this.store.get("page"))
  let pdf = templateBuilder.compile(this.store.get("data.json"))
  render(pdf, config)
}

Files.prototype.load = async function (projectPath) {
  for (let editor of this.data) {
    let editorPath = path.join(projectPath, `${this.name}.${editor}`)
    this.store.set(`data.${editor}`, await fs.readFile(editorPath))
  }
}

Files.prototype.create = function () {
  let templatePath = path.join(this.documentPath, `${this.store.get("name")}`)

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
  this.store.set("name", "init")
  this.store.set("data.html", html)
  this.store.set("data.css", css)
  this.store.set("data.json", json)
  this.store.set("data.helpers", helpers)
  this.store.set("page", page)

  this.save()
}
