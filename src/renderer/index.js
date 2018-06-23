import './styles.scss'
import { solarized } from './theme'

import * as monaco from 'monaco-editor';

import menu from './menu.js'
import editor from './editor.js'
import viewer from './viewer.js'

let app = document.getElementById('app')
app.append(menu(), editor(), viewer())

monaco.editor.defineTheme('solarized', solarized)

monaco.editor.create(document.getElementById('monaco-editor'), {
  minimap: {
    enabled: false
  },
	language: 'text/html',
  theme: 'solarized'
});
