export default function menu() {
  let menu = document.createElement("DIV")
  menu.setAttribute("id", "menu")

  let heading = document.createElement("DIV")
  heading.classList.add("title")
  heading.textContent = "pdfbuilder"

  let version = document.createElement("DIV")
  version.classList.add("version")
  version.textContent = "v0.2.0"

  menu.append(heading, version)

  return menu;
}
