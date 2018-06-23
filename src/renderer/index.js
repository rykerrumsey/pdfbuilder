import './styles.scss'

import * as monaco from 'monaco-editor';

import menu from './menu.js'
import editor from './editor.js'
import viewer from './viewer.js'

let app = document.getElementById('app')
app.append(menu(), editor(), viewer())

monaco.editor.create(document.getElementById('monaco-editor'), {
	language: 'html'
});
