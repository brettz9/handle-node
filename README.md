# handle-node

Simple callback delegator based on DOM Node type.

Provides an alternative to switches, numeric constant-based delegation, and
DOM `NodeIterator`s or `TreeWalker`s.

## Installation

Node:

```
npm install handle-node
```

```js
const handleNode = require('handle-node');
```

Browser:

```html
<script src="handle-node/index.js"></script>
```

## Usage

Supply a node followed by a handler object whose all optional properties
(human-readable Node type names) should be set to a callback which will
be passed the supplied Node. The return value will be the result of
invoking the callback which corresponds to the supplied node's type.

Here is a demonstration reimplementing `textContent`:

```js
const textSerializer = {
    element ({childNodes}) {
        return [...childNodes].reduce((str, node) => {
            return str + handleNode(node, textSerializer);
        }, '');
    },
    text: ({nodeValue}) => nodeValue
};
const textContent = handleNode(node, textSerializer);
```

Other arguments can also be passed in after `node` and before the
handler object, and these will also be supplied to the callbacks:

```js
const textSerializer = {
    element ({childNodes}, arg1, arg2) {
        return [...childNodes].reduce((str, node) => {
            return str + handleNode(node, arg1, arg2, textSerializer);
        }, '');
    },
    text: ({nodeValue}, arg1, arg2) => nodeValue
};
const textContent = handleNode(node, arg1, arg2, textSerializer);
```

## API

The handler object can take the following optional properties:

- element
- attribute
- text
- cdata
- entityReference
- entity
- processingInstruction
- comment
- document
- documentType
- documentFragment
- notation
