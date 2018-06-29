import * as monaco from 'monaco-editor'
import { solarized, options } from './theme'

export default function Editor(data) {
  this.data = data

  console.log(this.data)
  this._init()
}

Editor.prototype.save = function() {
  // save each editor into store
}

Editor.prototype.update = function() {
  // update editors from store
}

// initialize editor and attach it to the dom
Editor.prototype._init = function() {
  document.getElementById('app').append(this._build())

  monaco.editor.defineTheme('solarized', solarized)

  for(let editor of this.data) {
    this[`${editor}Editor`] = monaco.editor.create(document.getElementById(editor), options)
    this[`${editor}Editor`].setValue(this.data[editor])
    monaco.editor.setModelLanguage(this[`${editor}Editor`].getModel(), editor)
  }
}

Editor.prototype._build = function() {
  let editor = document.createElement("DIV")
  editor.setAttribute("id", "editor")

  let submenu = document.createElement("DIV")
  submenu.classList.add("submenu")

  let monaco = document.createElement("DIV")
  monaco.setAttribute("id", "monaco-editor")

  for(let tab of this.data) {
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
  }

  editor.append(submenu, monaco)

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
