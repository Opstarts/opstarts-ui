/**
 * Uses ReactTransitionGroup to collapse/expand a component
 *
 * Requires a `key` property!
 *
 * Uses jQuery + velocity
 */
/* globals $ */

const ReactDOM = require('react-dom');

class CollapserTransitionChild extends React.Component {
  componentWillEnter(done) {
    const {
      duration,
      easing
    } = this.props;
    const $node = $(ReactDOM.findDOMNode(this));

    $node
      .css('height', $node.height()) // set explicit height
      .velocity('slideDown', {
        easing,
        duration,
        queue: false,
        complete: () => {
          $node.css('height', ''); // remove explicit height
        }
      });

    done();
  }

  componentWillLeave(done) {
    const {
      duration,
      easing
    } = this.props;
    const $node = $(ReactDOM.findDOMNode(this));

    $node.velocity('slideUp', {
      easing,
      duration,
      complete: () => {
        done();
      }
    });
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

CollapserTransitionChild.propTypes = {
  children: React.PropTypes.node,
  duration: React.PropTypes.number,
  easing: React.PropTypes.oneOf(['ease-in-out']),
};

class Collapser extends React.Component {
  _wrapChild(child) {
    return <CollapserTransitionChild
      duration={this.props.duration}
      easing={this.props.easing}
      >
      {child}
    </CollapserTransitionChild>;
  }

  render() {
    const TransitionGroup = React.addons.TransitionGroup;
    const {
      visible,
      children,
      ...otherProps
    } = this.props;

    return <TransitionGroup
      children={visible ? children : null}
      {...otherProps}
      childFactory={this._wrapChild.bind(this)}
    />;
  }
}

Collapser.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  children: CollapserTransitionChild.propTypes.children,
  duration: CollapserTransitionChild.propTypes.duration,
  easing: CollapserTransitionChild.propTypes.easing,
};

Collapser.defaultProps = {
  duration: 250,
  easing: 'ease-in-out',
};

module.exports = Collapser;

