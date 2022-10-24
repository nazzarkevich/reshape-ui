import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../style';

import Icon from '../../Icon';

const propTypes = {
    componentStyles: PropTypes.shape({
        wrapper: PropTypes.shape({}),
        icon:    PropTypes.shape({})
    }),
    hoverColor:      PropTypes.string,
    className:       PropTypes.string,
    iconName:        PropTypes.string,
    name:            PropTypes.string,
    cursor:          PropTypes.string,
    active:          PropTypes.bool,
    secondary:       PropTypes.bool,
    onClick:         PropTypes.func
};

const IconButtonView = ({
    componentStyles,
    hoverColor,
    className,
    secondary,
    iconName,
    cursor,
    onClick,
    name
}) => (
    <Button
        styles={componentStyles.wrapper}
        className={className}
        onClick={onClick}
        name={name}
    >
        <Icon
            style={componentStyles.icon}
            hoverColor={hoverColor}
            secondary={secondary}
            name={iconName}
            cursor={cursor}
        />
    </Button>
);

IconButtonView.propTypes = propTypes;

export default IconButtonView;
