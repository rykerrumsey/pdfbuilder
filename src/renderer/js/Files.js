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

  render(pdf, config, this.store.get("storePath"))
}

Files.prototype.load = function (projectPath) {
  return new Promise((resolve) => {
    let keys = Object.keys(this.store.get("data"))
    let temp = projectPath.split("/").reverse()
    this.store.set("name", temp[0])

    for (let editor of keys) {
      let filePath = path.join(projectPath, `${this.store.get("name")}.${editor}`)
      let file = fs.readFileSync(filePath, 'utf8')
      this.store.set(`data.${editor}`, file)
    }

    resolve()
  })
}

Files.prototype.create = function (name = 'init') {
  let templatePath = path.join(this.documentPath, name)

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

Files.prototype.seed = function (name = "init") {
  this.store.set("name", name)
  this.store.set("data.html", html)
  this.store.set("data.css", css)
  this.store.set("data.json", json)
  this.store.set("data.helpers", helpers)
  this.store.set("page", page)

  this.save()
}
