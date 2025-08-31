const nodeTypeToMethodMap = new Map([
  [1, 'element'],
  [2, 'attribute'],
  [3, 'text'],
  [4, 'cdata'],
  [5, 'entityReference'],
  [6, 'entity'],
  [7, 'processingInstruction'],
  [8, 'comment'],
  [9, 'document'],
  [10, 'documentType'],
  [11, 'documentFragment'],
  [12, 'notation']
]);

/**
* Returns the value from executing a callback on a supplied callback
*   object according to the type of node supplied.
* @param {Node} node An XML or HTML node
* @param {object} extraArgs Callback object whose properties–all optional
*   (`element`, `attribute`, `text`, `cdata`, `entityReference`, `entity`,
*   `processingInstruction`, `comment`, `document`, `documentType`,
*   `documentFragment`, `notation`) are callbacks which will be passed
*   the supplied arguments
* @throws {TypeError}
* @returns {any|void} The result of calling the relevant callback
*   (or `undefined` if no handler present)
*/
function handleNode (node, ...extraArgs) {
  const cbObj = extraArgs.at(-1);

  if (!nodeTypeToMethodMap.has(node.nodeType)) {
    throw new TypeError('Not a valid `nodeType` value');
  }
  const methodName = nodeTypeToMethodMap.get(node.nodeType);
  if (!cbObj[methodName]) {
    return undefined;
  }
  return cbObj[methodName](node, ...extraArgs);
}

export default handleNode;
