import './css/styles.scss'

import Store from 'electron-store'
import path from 'path'
import { createProxyForMainProcessModule } from 'electron-remote'

// get the paths for saving and configuring templates
const app = require('electron').remote.app
let documentPath = app.getPath("documents")
    documentPath = path.join(documentPath, "pdfbuilder")
let storePath = app.getPath("userData")

import menu from './js/menu'
import Editor from './js/Editor'
import viewer from './js/viewer'
import TemplateBuilder from './js/TemplateBuilder'
import { modal } from './js/modal'

const store = new Store()

let body = document.getElementById('app')
body.append(menu(), viewer(), modal())

let editor = new Editor(store, storePath, documentPath)
let template = new TemplateBuilder(editor.name, documentPath)
let pdf = template.compile()

console.log(pdf)
