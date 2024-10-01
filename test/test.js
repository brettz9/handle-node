import {JSDOM} from 'jsdom';
import {expect} from 'chai';
import handleNode from '../src/index.js';

const {document: doc} = (new JSDOM()).window;

describe('handle-node', function () {
  it('Processes a node', function () {
    let ran = false;
    handleNode(doc, {
      document () {
        ran = true;
      }
    });
    expect(ran).to.be.true;
  });
  it('Throws with a non-node', function () {
    expect(() => {
      handleNode({});
    }).to.throw(TypeError, 'Not a valid `nodeType` value');
  });
  it('Returns `undefined` when no matching callback found', function () {
    const result = handleNode(doc, {});
    expect(result).to.be.undefined;
  });
});
