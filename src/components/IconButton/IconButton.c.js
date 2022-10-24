import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import IconButtonView from './view';

import styleSheet from './style';
import compileStyles from '../utils/compileStyles';

class IconButton extends PureComponent {
    static displayName = 'IconButton';

    static propTypes = {
        iconName:   PropTypes.string.isRequired,
        className:  PropTypes.string,
        hoverColor: PropTypes.string,
        name:       PropTypes.string,
        secondary:  PropTypes.bool,
        active:     PropTypes.bool,
        cursor:     PropTypes.string,
        style:      PropTypes.shape({}),
        onClick:    PropTypes.func
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    render () {
        const {
            hoverColor,
            className,
            iconName,
            secondary,
            cursor,
            name
        } = this.props;

        const componentStyles = compileStyles(styleSheet, this.props);

        const props = {
            onClick: this.handleClick,
            componentStyles,
            hoverColor,
            className,
            iconName,
            secondary,
            cursor,
            name
        };

        return <IconButtonView {...props}/>;
    }
}

export default IconButton;
