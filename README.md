[![npm](http://img.shields.io/npm/v/handle-node.svg)](https://www.npmjs.com/package/handle-node)
[![Dependencies](https://img.shields.io/david/brettz9/handle-node.svg)](https://david-dm.org/brettz9/handle-node)
[![devDependencies](https://img.shields.io/david/dev/brettz9/handle-node.svg)](https://david-dm.org/brettz9/handle-node?type=dev)

[![Actions Status](https://github.com/brettz9/handle-node/workflows/Node%20CI/badge.svg)](https://github.com/brettz9/handle-node/actions)
[![Actions Status](https://github.com/brettz9/handle-node/workflows/Coverage/badge.svg)](https://github.com/brettz9/handle-node/actions)

[![Known Vulnerabilities](https://snyk.io/test/github/brettz9/handle-node/badge.svg)](https://snyk.io/test/github/brettz9/handle-node)
[![Total Alerts](https://img.shields.io/lgtm/alerts/g/brettz9/handle-node.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/handle-node/alerts)
[![Code Quality: Javascript](https://img.shields.io/lgtm/grade/javascript/g/brettz9/handle-node.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/brettz9/handle-node/context:javascript)

[![License](https://img.shields.io/npm/l/handle-node.svg)](LICENSE-MIT)

# handle-node

Simple callback delegator based on DOM Node type.

Provides an alternative to switches, numeric constant-based delegation, and
DOM `NodeIterator`s or `TreeWalker`s.

## Installation

### With ESM bundler (e.g., Rollup)

```js
import handleNode from 'handle-node';
```

### Node

```
npm install handle-node
```

```js
const handleNode = require('handle-node');
```

### Browser (any)

```html
<script src="handle-node/dist/index-umd.js"></script>
```

### Browser (ESM - modern browsers only)

```html
<script type="module">
import handleNode from './node_modules/handle-node/dist/index-esm.js';

</script>
```

## Usage

Supply a node followed by a handler object whose all optional properties
(human-readable Node type names) should be set to a callback which will
be passed the supplied Node and, always as the last argument, a reference
to the object on which the callbacks exist. The return value will be
`undefined` if a handler is missing, but otherwise will be the result of
invoking the callback which corresponds to the supplied node's type.

Here is a demonstration reimplementing `textContent` (if only element
and text types are known to be present):

```js
const textContent = handleNode(node, { // This object is `textSerializer`
  element ({childNodes}, textSerializer) {
    return [...childNodes].reduce((str, node) => {
      return str + handleNode(node, textSerializer);
    }, '');
  },
  text: ({nodeValue}) => nodeValue
});
```

Other arguments can also be passed in after `node` and before the
handler object, and these will also be supplied to the callbacks:

```js
const textContent = handleNode(
  node, arg1, arg2,
  { // This object is `textSerializer`
    element ({childNodes}, arg1, arg2, textSerializer) {
      return [...childNodes].reduce((str, node) => {
        return str + handleNode(node, arg1, arg2, textSerializer);
      }, '');
    },
    text: ({nodeValue}, arg1, arg2) => nodeValue
  }
);
```

## API

The handler object can take the following optional properties:

- `element`
- `attribute`
- `text`
- `cdata`
- `entityReference`
- `entity`
- `processingInstruction`
- `comment`
- `document`
- `documentType`
- `documentFragment`
- `notation`
