/*jslint vars:true, node:true*/
(function (undef) {'use strict';

/**
* Returns the value from executing a callback on a supplied callback object according to the type of node supplied
* @param {Node} node An XML or HTML node
* @param {object} var_args Callback object whose properties--all optional (element, attribute, text, cdata, entityReference, entity, processingInstruction, comment, document, documentType, documentFragment, notation) are callbacks which will be passed
the supplied arguments (besides the callback object)
* @returns {any} The result of calling the relevant callback
*/
function handleNode (node) {
    var args = Array.from(arguments).slice(0, -1);
    var cbObj = arguments[arguments.length - 1];

    switch (node.nodeType) {
    case 1: // Element
        return cbObj.element && cbObj.element.apply(cbObj, args);
    case 2: // Attribute node
        return cbObj.attribute && cbObj.attribute.apply(cbObj, args);
    case 3: // Text
        return cbObj.text && cbObj.text.apply(cbObj, args);
    case 4: // CDATA
        return cbObj.cdata && cbObj.cdata.apply(cbObj, args);
    case 5: // Entity reference
        return cbObj.entityReference && cbObj.entityReference.apply(cbObj, args);
    case 6: // Entity
        return cbObj.entity && cbObj.entity.apply(cbObj, args);
    case 7: // Processing instruction
        return cbObj.processingInstruction && cbObj.processingInstruction.apply(cbObj, args);
    case 8: // Comment
        return cbObj.comment && cbObj.comment.apply(cbObj, args);
    case 9: // Document
        return cbObj.document && cbObj.document.apply(cbObj, args);
    case 10: // Document type
        return cbObj.documentType && cbObj.documentType.apply(cbObj, args);
    case 11: // Document fragment
        return cbObj.documentFragment && cbObj.documentFragment.apply(cbObj, args);
    case 12: // Notation
        return cbObj.notation && cbObj.notation.apply(cbObj, args);
    }
}

// EXPORTS

if (typeof module !== 'undefined') {
    module.exports = handleNode;
}
else {
    window.handleNode = handleNode;
}

}());
