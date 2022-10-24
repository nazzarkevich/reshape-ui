import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconView from './view';
import compileStyles from '../utils/compileStyles';
import createStyleSheet from './style';

class Icon extends PureComponent {
    constructor (props) {
        super(props);
    }

    static propTypes = {
        id:         PropTypes.string,
        name:       PropTypes.string,
        size:       PropTypes.string,
        rotate:     PropTypes.number,
        cursor:     PropTypes.string,
        error:      PropTypes.bool,
        active:     PropTypes.bool,
        tertiary:   PropTypes.bool,
        secondary:  PropTypes.bool,
        onClick:    PropTypes.func,
        className:  PropTypes.string,
        hoverColor: PropTypes.string,
        elementRef: PropTypes.func
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    onMouseLeave = event => {
        const { onMouseLeave } = this.props;

        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
        }
    }

    onMouseOver = event => {
        const { onMouseOver } = this.props;

        if (typeof onMouseOver === 'function') {
            onMouseOver(event);
        }
    }

    render () {
        const componentStyles = compileStyles(
            createStyleSheet, this.props, this.state
        );

        const {
            id,
            name,
            size,
            rotate,
            cursor,
            error,
            active,
            secondary,
            className,
            hoverColor,
            elementRef
        } = this.props;

        const iconProps = {
            id,
            name,
            size,
            rotate,
            cursor,
            error,
            active,
            secondary,
            className,
            hoverColor,
            elementRef,
            onMouseLeave: this.onMouseLeave,
            onMouseOver:  this.onMouseOver,
            onClick:      this.handleClick,
            componentStyles
        };

        return <IconView {...iconProps}/>;
    }
}

export default Icon;
