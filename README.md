# tippy-remote-plugin
A [Tippy.js](https://github.com/atomiks/tippyjs) plugin to load remote content.

## Install
```sh
npm install tippy-remote-plugin
```

## Usage
### HTML
```html
<a href="#" id="remote">My popover</a>
```
### JS
```js
import remote from 'tippy-remote-plugin'

tippy('#remote', {
  plugins: [remote],
  remote: {
    url: 'my-remote-content.html'
  }
})
```

## Goals
- [ ] Cache content by url
