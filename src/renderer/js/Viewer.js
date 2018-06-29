import path from 'path'
import url from 'url'

export default function Viewer() {
  this._init()
}

Viewer.prototype._init = function () {
  let viewer = document.createElement("DIV")
  viewer.setAttribute("id", "viewer")

  let tempFileUrl = url.format({
    protocol: "file",
    slashes: true,
    pathname: path.join(__static, '/render.pdf')
  })

  viewer.innerHTML = `<webview id=\"pdfview\" src=\"${tempFileUrl}\" plugins></webview>`

  document.getElementById('app').append(viewer)
}

Viewer.prototype.refresh = function () {
  document.getElementById('pdfview').src += ""
}
