export default function editor() {
  let editor = document.createElement("DIV")
  editor.setAttribute("id", "editor")

  let submenu = document.createElement("DIV")
  submenu.classList.add("submenu")

  let htmlTab = document.createElement("DIV")
  htmlTab.classList.add("tab", "active")
  htmlTab.setAttribute("name", "html")
  htmlTab.textContent = "html"
  htmlTab.onclick = setEditor

  let scssTab = document.createElement("DIV")
  scssTab.classList.add("tab")
  scssTab.setAttribute("name", "scss")
  scssTab.textContent = "scss"
  scssTab.onclick = setEditor

  let jsonTab = document.createElement("DIV")
  jsonTab.classList.add("tab")
  jsonTab.setAttribute("name", "json")
  jsonTab.textContent = "json"
  jsonTab.onclick = setEditor

  submenu.append(htmlTab, scssTab, jsonTab)

  let html = document.createElement("DIV")
  html.setAttribute("id", "html")
  html.classList.add("individual")
  html.style.zIndex = 2

  let scss = document.createElement("DIV")
  scss.setAttribute("id", "scss")
  scss.classList.add("individual")

  let json = document.createElement("DIV")
  json.setAttribute("id", "json")
  json.classList.add("individual")

  let monaco = document.createElement("DIV")
  monaco.setAttribute("id", "monaco-editor")
  monaco.append(html, scss, json)

  editor.append(submenu, monaco)

  return editor
}

function setEditor(event) {
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
