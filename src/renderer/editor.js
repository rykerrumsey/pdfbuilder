export default function editor() {
  let editor = document.createElement("DIV")
  editor.setAttribute("id", "editor")

  let submenu = document.createElement("DIV")
  submenu.classList.add("submenu")

  let html = document.createElement("DIV")
  html.classList.add("tab", "active")
  html.textContent = "html"

  let scss = document.createElement("DIV")
  scss.classList.add("tab")
  scss.textContent = "scss"

  let json = document.createElement("DIV")
  json.classList.add("tab")
  json.textContent = "json"

  submenu.append(html, scss, json)

  let monaco = document.createElement("DIV")
  monaco.setAttribute("id", "monaco-editor")

  editor.append(submenu, monaco)

  return editor
}
