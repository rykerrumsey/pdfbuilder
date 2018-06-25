import './css/styles.scss'

import Store from 'electron-store'
import { createProxyForMainProcessModule } from 'electron-remote'

// get the paths for saving and configuring templates
const app = require('electron').remote.app
let documentPath = app.getPath("documents")
let storePath = app.getPath("userData")

import menu from './js/menu'
import Editor from './js/Editor'
import viewer from './js/viewer'
import { modal } from './js/modal'

const store = new Store()

let body = document.getElementById('app')
body.append(menu(), viewer(), modal())

let editor = new Editor(store, storePath, documentPath)

// editor.create("jesus")
