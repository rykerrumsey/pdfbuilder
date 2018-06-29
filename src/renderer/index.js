import './css/styles.scss'

import Store from 'electron-store'
import path from 'path'
import fs from 'fs'
import { createProxyForMainProcessModule } from 'electron-remote'

import Editor from './js/Editor'
import Viewer from './js/Viewer'
import Files from './js/Files'

const store = new Store()

// get the paths for saving and configuring templates
const app = require('electron').remote.app
let documentPath = app.getPath("documents")

store.set("documentPath") = path.join(documentPath, "pdfbuilder")
store.set("storePath") = app.getPath("userData")

// let ui = new Ui()
let viewer = new Viewer()
let editor = new Editor(store.get("data"))
let files = new Files(store)

let configFile = path.join(store.storePath, "config.json")

if (fs.existsSync(configFile)) {
  store.set("name", "init")
  files.seed()
  editor.update()
}

document.getElementById("save-button").addEventListener("onclick", (event) => {
  editor.save()
  files.save()
  viewer.refresh()
})

document.getElementById("load-button").addEventListener("onclick", (event) => {
  //display open dialog window to get pathName
  files.load(pathName)
  editor.update()
  viewer.refresh()
}

document.getElementById("create-button").addEventListener("onclick", (event) => {
  files.create(name)
  files.seed()
  editor.update()
  viewer.refresh()
}

// document.getElementById("settings-button").addEventListener("onclick", (event) => {
//
// }
