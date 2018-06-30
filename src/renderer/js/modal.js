export function create() {
  let createModal = baseModal("create new", "create-modal")
  let content = createModal.querySelector(".content")

  let nameInput = document.createElement("INPUT")
  nameInput.setAttribute("id", "createInput")
  nameInput.type = "text"
  nameInput.placeholder = "Enter project name..."
  nameInput.name = "createName"

  let createInput = document.createElement("DIV")
  createInput.append(nameInput)

  let createBtn = document.createElement("DIV")
  createBtn.setAttribute("id", "create-button")
  createBtn.classList.add("action-button")
  createBtn.textContent = "Create"

  content.append(createInput, createBtn)

  return createModal
}

export function load() {
  let loadModal = baseModal("load", "load-modal")
  let content = loadModal.querySelector(".content")

  let loadBtn = document.createElement("DIV")
  loadBtn.setAttribute("id", "load-button")
  loadBtn.classList.add("action-button")
  loadBtn.textContent = "Load"

  content.append(loadBtn)

  return loadModal
}

export function settings() {
  let settingsModal = baseModal("settings", "settings-modal")
  let content = settingsModal.querySelector(".content")

  return settingsModal
}

export function modal() {
  let modal = document.createElement("DIV")
  modal.setAttribute("id", "modal")

  return modal
}

function baseModal(title, id) {
  let modal = document.createElement("DIV")
  modal.classList.add("modal")
  modal.setAttribute("id", id)

  let close = document.createElement("DIV")
  close.classList.add("close", "close-thin")
  close.onclick = closeModal

  let heading = document.createElement("DIV")
  heading.classList.add("heading")
  heading.textContent = title

  let content = document.createElement("DIV")
  content.setAttribute("id", "content")
  content.classList.add("content")

  modal.append(close, heading, content)

  return modal
}

function closeModal(event) {
  event.currentTarget.parentElement.style.visibility = "hidden"
  document.getElementById("menu").classList.remove("alternate-menu")
}
