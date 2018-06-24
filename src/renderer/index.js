import './css/styles.scss'

import * as monaco from 'monaco-editor';

import menu from './js/menu'
import editor from './js/editor'
import viewer from './js/viewer'
import { modal } from './js/modal'
import { solarized, options } from './js/theme'

let app = document.getElementById('app')
app.append(menu(), editor(), viewer(), modal())

monaco.editor.defineTheme('solarized', solarized)

monaco.editor.create(document.getElementById('html'), options)

monaco.editor.create(document.getElementById('scss'), options)

monaco.editor.create(document.getElementById('json'), options)
