const React = require('react');
import {createRenderer} from 'react-addons-test-utils';
import expect, { createSpy, spyOn, isSpy } from 'expect';

const Collapser = require('../src/animations/collapser');

describe('Collapser', () => {
  it('renders', () => {
    const renderer = createRenderer();
    renderer.render(<Collapser name="check"/>);
    const component = renderer.getRenderOutput();

    expect(component).toExist();
  });
});
