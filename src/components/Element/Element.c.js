import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';

import ElementView from './view';

import compileStyles from '../utils/compileStyles';

class Element extends PureComponent {
    constructor (props) {
        super(props);
    }

    static displayName = 'Element';

    static defaultProps = {
        primary:          false,
        secondary:        false,
        disabled:         false,
        hideToggleButton: false,
        tabIndex:         0
    };

    static propTypes = {
        id:                     PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        // need for keyDown event
        tabIndex:               PropTypes.number,
        root:                   PropTypes.bool,
        primary:                PropTypes.bool,
        secondary:              PropTypes.bool,
        disabled:               PropTypes.bool,
        elementName:            PropTypes.string,
        elementIconName:        PropTypes.string,
        indents:                PropTypes.number,
        onClick:                PropTypes.func,
        onKeyDown:              PropTypes.func,
        onMouseDown:            PropTypes.func,
        onMouseOver:            PropTypes.func,
        onMouseLeave:           PropTypes.func,
        showChildren:           PropTypes.bool,
        hideToggleButton:       PropTypes.bool,
        toggleButtonClassName:  PropTypes.string,
        displayButtonClassName: PropTypes.string
    };

    getIconState = () => {
        const { primary, secondary, disabled } = this.props;

        return !primary && !secondary && !disabled;
    };

    handleMouseOver = event => {
        const { onMouseOver } = this.props;

        if (typeof onMouseOver === 'function') {
            onMouseOver(event);
        }
    };

    handleMouseLeave = () => {
        const { onMouseLeave } = this.props;

        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
        }
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    handleMouseDown = event => {
        const { onMouseDown } = this.props;

        if (typeof onMouseDown === 'function') {
            onMouseDown(event);
        }
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }
    };

    render () {
        const componentStyles = compileStyles(stylesheet,
            this.props,
            this.state
        );


        const nodeItemProps = {
            ...this.props,
            onClick:      this.handleClick,
            getIconState: this.getIconState,
            onKeyDown:    this.handleKeyDown,
            onMouseOver:  this.handleMouseOver,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown:  this.handleMouseDown,
            componentStyles
        };

        return <ElementView {...nodeItemProps}/>;
    }
}

export default Element;
