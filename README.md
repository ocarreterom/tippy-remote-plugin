# tippy-remote-plugin
A [Tippy.js](https://github.com/atomiks/tippyjs) plugin to load remote content.

## Install
```sh
npm install tippy-remote-plugin
```

## Usage
### With options
```html
<a href="#" id="remote">My link</a>
```

```js
import tippy from 'tippy.js';
import remote from 'tippy-remote-plugin'

tippy('#remote', {
  plugins: [remote],
  remote: '/remote-url.html'
})
```

#### Options
| Name   | Value               | Default | Description                    |
| ------ | ------------------- | ------- | ------------------------------ |
| remote | `string` \| `false` | `false` | The URL to get remote content. |

### With data attributes
```html
<a href="#" data-tippy-remote="/remote-url.html">My link</a>
```

```js
import tippy from 'tippy.js';
import remote from 'tippy-remote-plugin'

tippy('[data-tippy-remote]', {
  plugins: [remote]
})
```
