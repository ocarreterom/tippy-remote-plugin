# tippy-remote-plugin
A [Tippy.js](https://github.com/atomiks/tippyjs) plugin to load remote content.

## Install
```sh
npm install tippy-remote-plugin
```

## Usage
```html
<a href="#" id="remote">My popover</a>
```

```js
import remote from 'tippy-remote-plugin'

tippy('#remote', {
  plugins: [remote],
  remote: {
    url: 'my-remote-content.html'
  }
})
```

## Options
| Name | Value    | Default     | Description                    |
| ---- | -------- | ----------- | ------------------------------ |
| url  | `string` | `undefined` | The URL to get remote content. |
