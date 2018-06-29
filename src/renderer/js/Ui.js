import Files from './Files'

export default function Ui(store) {
  this.name = store.get("name")
  this._init()
}

Ui.prototype._init = function () {
  let saveBtn = document.createElement("DIV")
  saveBtn.classList.add("save-button")
  saveBtn.textContent = "save"

}
