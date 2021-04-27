import tippy from 'tippy.js'
import remote from '../index'

tippy('[data-tippy-remote]', {
  flipOnUpdate: true,
  interactive: true,
  plugins: [remote],
  allowHTML: true,
  theme: 'light-border'
})
