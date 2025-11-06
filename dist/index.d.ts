export default handleNode;
export type MapValue<T> = T extends Map<any, infer V> ? V : never;
export type CallbackObject = {
    element?: (element: Element, ...extraArgs: any[]) => void;
    attribute?: (attribute: Attr, ...extraArgs: any[]) => void;
    text?: (text: Text, ...extraArgs: any[]) => void;
    cdata?: (cdata: Node, ...extraArgs: any[]) => void;
    entityReference?: (entityReference: Node, ...extraArgs: any[]) => void;
    entity?: (entity: Node, ...extraArgs: any[]) => void;
    processingInstruction?: (processingInstruction: Node, ...extraArgs: any[]) => void;
    comment?: (comment: Comment, ...extraArgs: any[]) => void;
    document?: (document: Document, ...extraArgs: any[]) => void;
    documentType?: (documentType: DocumentType, ...extraArgs: any[]) => void;
    documentFragment?: (documentFragment: DocumentFragment, ...extraArgs: any[]) => void;
    notation?: (notation: Node, ...extraArgs: any[]) => void;
};
/**
 * @template T
 * @typedef {T extends Map<any, infer V> ? V : never} MapValue
 */
/**
 * @typedef {{
 *   element?: (
 *     element: Element, ...extraArgs: any[]
 *   ) => void,
 *   attribute?: (
 *     attribute: Attr, ...extraArgs: any[]
 *   ) => void,
 *   text?: (
 *     text: Text, ...extraArgs: any[]
 *   ) => void,
 *   cdata?: (
 *     cdata: Node, ...extraArgs: any[]
 *   ) => void
 *   entityReference?: (
 *     entityReference: Node, ...extraArgs: any[]
 *   ) => void,
 *   entity?: (
 *     entity: Node, ...extraArgs: any[]
 *   ) => void,
 *   processingInstruction?: (
 *     processingInstruction: Node, ...extraArgs: any[]
 *   ) => void,
 *   comment?: (
 *     comment: Comment, ...extraArgs: any[]
 *   ) => void,
 *   document?: (
 *     document: Document, ...extraArgs: any[]
 *   ) => void,
 *   documentType?: (
 *     documentType: DocumentType, ...extraArgs: any[]
 *   ) => void,
 *   documentFragment?: (
 *     documentFragment: DocumentFragment, ...extraArgs: any[]
 *   ) => void,
 *   notation?: (
 *     notation: Node, ...extraArgs: any[]
 *   ) => void
 * }} CallbackObject
 */
/**
 * Returns the value from executing a callback on a supplied callback
 *   object according to the type of node supplied.
 * @param {Element|Attr|Text|Node|Comment|Document|
 *   DocumentType|DocumentFragment} node An XML or HTML node
 * @param {CallbackObject} cbObj
 * @param {...any} extraArgs Callback object whose
 *   properties–all optional
 *   (`element`, `attribute`, `text`, `cdata`, `entityReference`, `entity`,
 *   `processingInstruction`, `comment`, `document`, `documentType`,
 *   `documentFragment`, `notation`)—are callbacks which will be passed
 *   the supplied arguments
 * @throws {TypeError}
 * @returns {any|void} The result of calling the relevant callback
 *   (or `undefined` if no handler present)
 */
declare function handleNode(node: Element | Attr | Text | Node | Comment | Document | DocumentType | DocumentFragment, cbObj: CallbackObject, ...extraArgs: any[]): any | void;
