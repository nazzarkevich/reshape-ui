import React, { Component } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';

import TreeElementView from './view';

import compileStyles from '../utils/compileStyles';

// TODO rewrite this component
class TreeElement extends Component {
    constructor (props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    static displayName = 'TreeElement';

    static defaultProps = {
        primary:      false,
        secondary:    false,
        disabled:     false,
        disableHover: false
    };

    static propTypes = {
        id:                    PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        active:                PropTypes.bool,
        primary:               PropTypes.bool,
        editable:              PropTypes.bool,
        secondary:             PropTypes.bool,
        disabled:              PropTypes.bool,
        disableHover:          PropTypes.bool,
        inputValue:            PropTypes.string,
        elementName:           PropTypes.string,
        indents:               PropTypes.number,
        onClick:               PropTypes.func,
        inputRef:              PropTypes.func,
        elementRef:            PropTypes.func,
        onMouseOver:           PropTypes.func,
        onMouseDown:           PropTypes.func,
        onMouseLeave:          PropTypes.func,
        onInputChange:         PropTypes.func,
        onInputKeyDown:        PropTypes.func,
        showChildren:          PropTypes.bool,
        toggleButtonClassName: PropTypes.string,
        toggleButtonName:      PropTypes.string,
        elementIconName:       PropTypes.string,
        actionIconName:        PropTypes.string,
        statusIconName:        PropTypes.string,
        statusIconClassName:   PropTypes.string,
        onStatusIconClick:     PropTypes.func
    };

    handleMouseOver = event => {
        const { onMouseOver, disableHover } = this.props;

        if (!disableHover) {
            if (typeof onMouseOver === 'function') {
                onMouseOver(event);
            }

            this.setState({ hover: true });
        }
    };

    handleMouseLeave = event => {
        const { onMouseLeave } = this.props;

        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
        }

        this.setState({ hover: false });
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

    handleInputKeyDown = event => {
        const { onInputKeyDown } = this.props;

        if (typeof onInputKeyDown === 'function') {
            onInputKeyDown(event);
        }
    };

    handleInputChange = event => {
        const { onInputChange } = this.props;

        if (typeof onInputChange === 'function') {
            onInputChange(event);
        }
    };

    setInputRef = el => {
        const { inputRef } = this.props;

        this.input = el;

        if (typeof inputRef === 'function') {
            inputRef(this.input);
        }
    };

    setRootRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }
    };

    render () {
        const componentStyles = compileStyles(stylesheet,
            this.props,
            this.state
        );

        const { hover } = this.state;
        const { inputValue, onStatusIconClick } = this.props;

        const nodeItemProps = {
            ...this.props,
            hover,
            inputValue,
            onStatusIconClick,
            onClick:        this.handleClick,
            setRootRef:     this.setRootRef,
            setInputRef:    this.setInputRef,
            onMouseOver:    this.handleMouseOver,
            onMouseLeave:   this.handleMouseLeave,
            onMouseDown:    this.handleMouseDown,
            onInputChange:  this.handleInputChange,
            onInputKeyDown: this.handleInputKeyDown,
            componentStyles
        };

        return <TreeElementView {...nodeItemProps}/>;
    }
}

export default TreeElement;
