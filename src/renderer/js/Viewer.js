import path from 'path'
import url from 'url'

export default function Viewer(appPath) {
  this.appPath = appPath
  this._init()
}

Viewer.prototype._init = function () {
  let viewer = document.createElement("DIV")
  viewer.setAttribute("id", "viewer")

  let tempFileUrl = url.format({
    protocol: "file",
    slashes: true,
    pathname: path.join(this.appPath, '/render.pdf')
  })

  viewer.innerHTML = `<webview id=\"pdfview\" src=\"${tempFileUrl}\" plugins></webview>`

  document.getElementById('app').append(viewer)
}

Viewer.prototype.refresh = function () {
  document.getElementById('pdfview').src += ""
}
