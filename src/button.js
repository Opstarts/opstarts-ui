const React = require('react');
const classNames = require('classnames');

class Button extends React.Component {
  render() {
    const {
      className,
      children,
      theme,
      ...props
    } = this.props;

    const buttonClassNames = classNames({
      btn: true,
      'btn-sm': this.props.size === 'small',
      'btn-xs': this.props.size === 'extra-small',
      'btn-lg': this.props.size === 'large',
      [`btn-${this.props.theme}`]: true,
    }, className);

    return (
      <button
        {...props}
        className={buttonClassNames}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  size: React.PropTypes.oneOf([
    'small', 'extra-small', 'large',
  ]),
  type: React.PropTypes.oneOf([
    'button', 'submit',
  ]),
  theme: React.PropTypes.oneOf([
    'default', 'danger', 'success', 'info'
  ]),
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  theme: 'default'
};


module.exports = Button;

