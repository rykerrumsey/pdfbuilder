import './css/styles.scss'

import Store from 'electron-store'
import path from 'path'
import fs from 'fs'

import Ui from './js/Ui'
import Editor from './js/Editor'
import Viewer from './js/Viewer'
import Files from './js/Files'

const { dialog } = require('electron').remote
const store = new Store()

// get the paths for saving and configuring templates
const app = require('electron').remote.app
let documentPath = app.getPath("documents")

store.set("documentPath", path.join(documentPath, "pdfbuilder"))
store.set("storePath", app.getPath("userData"))

let viewer = new Viewer()
let files = new Files(store)

if (!store.has("data")) {
  files.seed()
}

let editor = new Editor(store)
let ui = new Ui()

editor.update()
viewer.refresh()

document.getElementById("save-button").addEventListener("click", (event) => {
  editor.save()
  files.save()
})

document.getElementById("create-button").addEventListener("click", (event) => {
  let input = document.getElementById("createInput")

  let name = input.value
  input.value = ""

  files.create(name)
  files.seed(name)
  editor.update()

  event.currentTarget.parentElement.parentElement.style.visibility = 'hidden'
  document.getElementById("menu").classList.remove("alternate-menu")
})

document.getElementById("load-button").addEventListener("click", (event) => {
  //display open dialog window to get pathName
  let path = dialog.showOpenDialog({
    title: "Open Project",
    defaultPath: store.get("documentPath"),
    properties: ['openDirectory']
  })

  files.load(path[0])
    .then(() => editor.update())
    .then(() => files.save())

  event.currentTarget.parentElement.parentElement.style.visibility = 'hidden'
  document.getElementById("menu").classList.remove("alternate-menu")
})

// document.getElementById("settings-button").addEventListener("click", (event) => {
//
// }
