# tippy-remote-plugin
A [Tippy.js](https://github.com/atomiks/tippyjs) plugin to load remote content.

## Install
```sh
npm install tippy-remote-plugin
```

## Usage
### HTML
```html
<a href="#" id="remoteContent" data-src="/remote-content.html">My popover</a>
```
### JS
```js
import remote from 'tippy-remote-plugin'

tippy('#remoteContent', {
  plugins: [remote]
})
```

## Goals
- [ ] Cache content by url
