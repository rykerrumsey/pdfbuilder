import ace from './ace'
import html from './mode-html'
import css from './mode-css'
import js from './mode-javascript'

export default {
  install: function(Vue,) {
    Object.defineProperty(Vue.prototype, '$ace', { value: ace });
    Object.defineProperty(Vue.prototype, '$html', { value: html });
    Object.defineProperty(Vue.prototype, '$css', { value: css });
    Object.defineProperty(Vue.prototype, '$js', { value: js });
  }
}
