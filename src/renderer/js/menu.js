import { create, load, settings } from './modal'

export default function menu() {
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
  let modal = document.getElementById("modal")
  modal.style.visibility = "visible"
  
  let selected = event.target.getAttribute("id")

  let buttons = document.querySelectorAll(".button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  event.target.classList.add("active")

  let menu = document.getElementById("menu")
  menu.classList.add("alternate-menu")

  modal.innerHTML = ""

  switch(selected) {
    case 'create':
      modal.append(create())
      break
    case 'load':
      modal.append(load())
      break
    case 'settings':
      modal.append(settings())
      break
    default:
      console.log("There is no modal for that option!")
  }
}
