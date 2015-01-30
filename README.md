# handle-node

Simple callback delegator based on DOM Node type.

Provides an alternative to switches and numeric constant-based delegation.
Useful for human-readable node traversal which does not necessarily
require going through the whole tree as with DOM `NodeIterator`s or `TreeWalker`s.

## Installation

Node:

```
npm install handle-node
```

```js
var handleNode = require('handle-node');
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
var textContent = handleNode(node, {
    element: function (node) {
        return Array.from(node.childNodes).reduce(function (str, node) {
            return str + handleNode(node);
        }, '');
    },
    text: function (node) {
        return node.nodeValue;
    }
});
```

Other arguments can also be passed in after `node` and before the
handler object, and these will also be supplied to the callbacks:

```js
var textContent = handleNode(node, arg1, arg2, {
    element: function (node, arg1, arg2) {
        return handleNode(node, arg1, arg2);
    },
    text: function (node, arg1, arg2) {
        return node.nodeValue;
    }
});
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
