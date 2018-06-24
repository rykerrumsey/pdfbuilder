export function create() {
  let createModal = baseModal("create new")
  let content = createModal.querySelector(".content")

  let message = document.createElement("H1")
  message.textContent = "Here is the content."

  content.append(message)

  return createModal
}

export function load() {
  let loadModal = baseModal("load")
  let content = loadModal.querySelector(".content")

  let message = document.createElement("H1")
  message.textContent = "Here is the content."

  content.append(message)

  return loadModal
}

export function settings() {
  let settingsModal = baseModal("settings")
  let content = settingsModal.querySelector(".content")

  return settingsModal
}

export function modal() {
  let modal = document.createElement("DIV")
  modal.setAttribute("id", "modal")

  return modal
}

function baseModal(title) {
  let modal = document.createElement("DIV")
  modal.classList.add("modal")

  let close = document.createElement("DIV")
  close.classList.add("close")
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
  document.getElementById("modal").style.visibility = "hidden"
  document.getElementById("menu").classList.remove("alternate-menu")
}
