import path from 'path'
import url from 'url'

export default function viewer() {
  let viewer = document.createElement("DIV")
  viewer.setAttribute("id", "viewer")

  let iframe = document.createElement("IFRAME")

  let tempFileUrl = url.format({
    protocol: "file",
    slashes: true,
    pathname: path.join(__static, '/temp.pdf')
  })

  iframe.setAttribute("src", tempFileUrl)

  viewer.appendChild(iframe)

  return viewer
}
