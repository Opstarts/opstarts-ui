/**
 * Simple component to display a font icon (i.e. glyphicon or fontawesome)
 */
const React = require('react');
const classNames = require('classnames');

class Icon extends React.Component {
  render() {
    const cx = classNames({
      [this.props.type]: true,
      [`${this.props.type}-${this.props.name}`]: true
    });

    return <i className={cx} />;
  }
}

Icon.propTypes = {
  type: React.PropTypes.oneOf(['fa', 'glyphicon']),
  name: React.PropTypes.string.isRequired
};

Icon.defaultProps = {
  type: 'fa'
};

module.exports = Icon;
