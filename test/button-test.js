const chai = require('chai');
const React = require('react');
chai.should();

const Button = require('../src/button');
describe('Button', () => {
  it('should pass tests', () => {
    var button = <Button />;
    button.should.exist;
  });
});
