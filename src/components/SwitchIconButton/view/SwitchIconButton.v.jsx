import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import { IconButton } from '../style';

const propTypes = {
    id:                  PropTypes.string,
    iconColor:           PropTypes.string,
    rotate:              PropTypes.number,
    status:              PropTypes.string,
    hover:               PropTypes.bool,
    iconName:            PropTypes.string,
    className:           PropTypes.string,
    onIconClick:         PropTypes.func,
    switchedIconName:    PropTypes.string,
    onSwitchedIconClick: PropTypes.func,
    getIconColor:        PropTypes.func,
    onMouseOver:         PropTypes.func,
    onMouseLeave:        PropTypes.func,
    isStatusActive:      PropTypes.func,
    styles:              PropTypes.shape({})
};

const SwitchIconButtonView = props => {
    const {
        id,
        rotate,
        iconName,
        hover,
        status,
        iconColor,
        switchedIconName,
        className,
        onIconClick,
        getIconColor,
        onMouseOver,
        onMouseLeave,
        isStatusActive,
        onSwitchedIconClick,
        styles
    } = props;

    let iconStyle = { fill: getIconColor(status) };

    if (iconColor) {
        iconStyle = { fill: iconColor };
    }

    let iconElement = (
        <IconButton
            className={className}
            onClick={onIconClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            styles={styles.wrapper}
        >
            <Icon
                id={id}
                rotate={rotate}
                name={iconName}
                style={iconStyle}
            />
        </IconButton>
    );

    if (hover && isStatusActive(status)) {
        iconElement = (
            <IconButton
                className={className}
                onClick={onSwitchedIconClick}
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
                styles={styles.wrapper}
            >
                <Icon
                    id={id}
                    rotate={rotate}
                    name={switchedIconName}
                    style={iconStyle}
                />
            </IconButton>
        );
    }

    return iconElement;
};

SwitchIconButtonView.propTypes = propTypes;

export default SwitchIconButtonView;
