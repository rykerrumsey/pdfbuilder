import Files from './Files'
import { create, load, settings, modal } from './modal'

export default function Ui() {
  this._init()
}

Ui.prototype._init = function () {
  let saveBtn = document.createElement("DIV")
  saveBtn.setAttribute("id", "save-button")
  saveBtn.classList.add("save-button")
  saveBtn.textContent = "save"

  document.getElementById('app').append(this._build(), modal())
  document.getElementById('editor').append(saveBtn)

  let container = document.getElementById("modal")
  container.append(create(), load(), settings())
}

Ui.prototype._build = function () {
  let menu = document.createElement("DIV")
  menu.setAttribute("id", "menu")

  let heading = document.createElement("DIV")
  heading.classList.add("title")
  heading.textContent = "pdfbuilder"

  let version = document.createElement("DIV")
  version.classList.add("version")
  version.textContent = "v0.2.0"

  let filler = document.createElement("DIV")
  filler.classList.add("filler")

  let createBtn = document.createElement("DIV")
  createBtn.setAttribute("id", "create")
  createBtn.classList.add("button")
  createBtn.textContent = "CREATE NEW"
  createBtn.onclick = displayModal

  let loadBtn = document.createElement("DIV")
  loadBtn.setAttribute("id", "load")
  loadBtn.classList.add("button")
  loadBtn.textContent = "LOAD"
  loadBtn.onclick = displayModal

  let settingsBtn = document.createElement("DIV")
  settingsBtn.setAttribute("id", "settings")
  settingsBtn.classList.add("button")
  settingsBtn.textContent = "SETTINGS"
  settingsBtn.onclick = displayModal

  menu.append(heading, version, filler, createBtn, loadBtn, settingsBtn)

  return menu;
}

function displayModal(event) {
  let selected = event.target.getAttribute("id")

  let buttons = document.querySelectorAll(".button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  event.target.classList.add("active")

  let menu = document.getElementById("menu")
  menu.classList.add("alternate-menu")

  let modal;

  // hide all the modals
  let modals = document.querySelectorAll(".modal")
  modals.forEach((modal) => {
    modal.style.visibility = "hidden"
  })

  switch(selected) {
    case 'create':
      modal = document.getElementById("create-modal")
      break
    case 'load':
      modal = document.getElementById("load-modal")
      break
    case 'settings':
      modal = document.getElementById("settings-modal")
      break
    default:
      console.log("There is no modal for that option!")
  }

  modal.style.visibility = "visible"
}
