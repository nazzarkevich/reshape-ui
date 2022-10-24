import React, { Component } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';

import ActionButtonView from './view';

import compileStyles from '../utils/compileStyles';

class ActionButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hover: false
        };
    }

  static displayName = 'ActionButton';

  static propTypes = {
      elementRef: PropTypes.oneOfType([
          PropTypes.func, 
          PropTypes.shape({
              current: PropTypes.instanceOf(Element)
          })
      ]),
      className: PropTypes.string,
      iconName: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      type: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string
  };

  static defaultProps = {
      type: 'button'
  };

  handleMouseOver = () => {
      this.setState({ hover: true });
  };

  handleMouseLeave = () => {
      this.setState({ hover: false });
  };

  handleClick = event => {
      const { onClick } = this.props;

      if (typeof onClick === 'function') {
          onClick(event);
      }
  };

  render () {
      const componentStyles = compileStyles(stylesheet,
          this.props,
          this.state
      );

      const {
          elementRef,
          className,
          iconName,
          disabled,
          children,
          type,
          name,
          id
      } = this.props;

      const buttonProps = {
          onMouseLeave: this.handleMouseLeave,
          onMouseOver: this.handleMouseOver,
          onClick: this.handleClick,
          componentStyles,
          elementRef,
          className,
          iconName,
          disabled,
          children,
          type,
          name,
          id
      };

      return <ActionButtonView {...buttonProps}/>;
  }
}

export default ActionButton;
