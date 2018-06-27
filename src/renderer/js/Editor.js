import fs from 'fs'
import path from 'path'
import * as monaco from 'monaco-editor'
import { solarized, options } from './theme'
import { html, css, json, page } from './seed'

export default function Editor(store, storePath, documentPath) {
  this.name = ""
  this.storePath = storePath
  this.documentPath = documentPath
  this.editors = ["html", "css", "json"]
  this.store = store
  this._init()
}

// reset the editor to seed data and edit the name of template
// set store to seed data
Editor.prototype.create = function(name) {
  this.name = name
  this._setSeedStore()
  this._buildDir()
  this.editors.forEach((editor) => {
    this[`${editor}Editor`].setValue(this.store.get(editor))
  })

  this.save()
}

// save editor contents to defined path
// transform contents into template.html file
// launch render to save template to pdf
// refresh iframe
Editor.prototype.save = function() {
  this.autosave()
  this._buildDir()
  this.editors.forEach((editor) => {
    let savePath = path.join(this.documentPath, `/${this.name}/${this.name}.${editor}`)
    console.log(savePath)
    fs.writeFile(savePath, this[`${editor}Editor`].getValue(), (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })
}

// use main process to get dir picker dialog
// set application to use dir
// load all files into application
Editor.prototype.load = function(pathToTemplate) {

}

// at specified intervals auto save the editor contents to the store
Editor.prototype.autosave = function() {
  this.store.clear()

  this.store.set('name', this.name)

  this.editors.forEach((editor) => {
    this.store.set(editor, this[`${editor}Editor`].getValue())
  })
}

// initialize editor and attach it to the dom
Editor.prototype._init = function() {
  document.getElementById('app').append(this._build())

  this.name = this.store.get('name')
  this._buildDir()
  //this._setSeedStore()

  monaco.editor.defineTheme('solarized', solarized)

  this.editors.forEach((editor) => {
    this[`${editor}Editor`] = monaco.editor.create(document.getElementById(editor), options)
    this[`${editor}Editor`].setValue(this.store.get(editor))
    monaco.editor.setModelLanguage(this[`${editor}Editor`].getModel(), editor)
  })
}

Editor.prototype._build = function() {
  let editor = document.createElement("DIV")
  editor.setAttribute("id", "editor")

  let submenu = document.createElement("DIV")
  submenu.classList.add("submenu")

  let monaco = document.createElement("DIV")
  monaco.setAttribute("id", "monaco-editor")

  this.editors.forEach((tab) => {
    let editorTab = document.createElement("DIV")
    editorTab.classList.add("tab")
    editorTab.setAttribute("name", tab)
    editorTab.textContent = tab
    editorTab.onclick = this._setEditor

    let individual = document.createElement("DIV")
    individual.setAttribute("id", tab)
    individual.classList.add("individual")

    if(tab == "html") {
      editorTab.classList.add("active")
      individual.style.zIndex = 2
    }

    submenu.append(editorTab)
    monaco.append(individual)
  })

  let saveBtn = document.createElement("DIV")
  saveBtn.classList.add("save-button")
  saveBtn.textContent = "save"
  saveBtn.onclick = function() {
    this.save()
  }.bind(this)

  editor.append(submenu, monaco, saveBtn)

  return editor
}

Editor.prototype._setEditor = function(event) {
  let button = event.target
  let currentEditorName = button.getAttribute("name")
  let currentEditorElement = document.getElementById(currentEditorName)
  let tabs = document.querySelectorAll(".tab")
  let editors = document.querySelectorAll(".individual")

  if(!event.target.classList.contains("active")) {
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    button.classList.add("active")

    editors.forEach((editor) => {
      editor.style.zIndex = 1
    })
    currentEditorElement.style.zIndex = 2
  }
}

Editor.prototype._buildDir = function() {
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

Editor.prototype._setSeedStore = function() {
  this.store.set('html', html)
  this.store.set('css', css)
  this.store.set('json', json)
  this.store.set('page', page)
}
