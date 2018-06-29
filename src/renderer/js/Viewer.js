import path from 'path'
import url from 'url'

export default function Viewer() {
  this._init()
}

Viewer.prototype._init = function () {
  let viewer = document.createElement("DIV")
  viewer.setAttribute("id", "viewer")

  let iframe = document.createElement("IFRAME")
  iframe.setAttribute("id", "iframe")

  let tempFileUrl = url.format({
    protocol: "file",
    slashes: true,
    pathname: path.join(__static, '/render.pdf')
  })

  iframe.setAttribute("src", tempFileUrl)

  viewer.appendChild(iframe)

  document.getElementById('app').append(viewer)
}

Viewer.prototype.refresh = function () {
  document.getElementById('iframe').src += '';
}
