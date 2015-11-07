const React = require('react');
import {createRenderer} from 'react-addons-test-utils';
import expect, { createSpy, spyOn, isSpy } from 'expect';

const Button = require('../src/button');

describe('Button', () => {
  it('can render an empty button', () => {
    const renderer = createRenderer();
    renderer.render(<Button />);
    const component = renderer.getRenderOutput();

    expect(component.type).toEqual('button');
  });
});
