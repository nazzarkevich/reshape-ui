import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

import { Button } from '../style';

const ActionButtonView = ({
    componentStyles,
    onMouseLeave,
    onMouseOver,
    elementRef,
    className,
    iconName,
    children,
    disabled,
    onClick,
    name,
    type,
    id
}) => {
    return (
        <Button
            id={id}
            name={name}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            ref={elementRef}
            styles={componentStyles}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            <Icon
                name={iconName}
                style={componentStyles.icon}
            />
        </Button>
    );
};

ActionButtonView.propTypes = {
    elementRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({
            current: PropTypes.instanceOf(Element)
        })
    ]),
    componentStyles: PropTypes.shape(),
    onMouseLeave: PropTypes.func,
    className: PropTypes.string,
    onMouseOver: PropTypes.func,
    children: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
};

export default ActionButtonView;
