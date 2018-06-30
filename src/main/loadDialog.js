import { dialog, app } from 'electron'

exports.showLoadDialog = () => {
  dialog.showOpenDialog({
    title: "Open Project",
    defaultPath: app.getPath("documents"),
    properties: ['openDirectory']
  })
}
