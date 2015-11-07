const React = require('react');
import {createRenderer} from 'react-addons-test-utils';
import expect, { createSpy, spyOn, isSpy } from 'expect';

const Icon = require('../src/icon');

describe('Icon', () => {
  it('renders a checkmark inside of an <i> using fontawesome', () => {
    const renderer = createRenderer();
    renderer.render(<Icon name="check"/>);
    const component = renderer.getRenderOutput();

    expect(component.type).toEqual('i');
    expect(component.props.className).toEqual('fa fa-check');
  });
});
