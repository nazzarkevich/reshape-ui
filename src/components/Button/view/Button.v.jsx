import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../style';

const ButtonView = ({
    componentStyles,
    onMouseLeave,
    onMouseOver,
    elementRef,
    className,
    children,
    disabled,
    onClick,
    form,
    name,
    type,
    id
}) => {
    return (
        <Button
            id={id}
            name={name}
            type={type}
            form={form}
            ref={elementRef}
            onClick={onClick}
            disabled={disabled}
            className={className}
            styles={componentStyles}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </Button>
    );
};

ButtonView.propTypes = {
    elementRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({
            current: PropTypes.instanceOf(Element)
        })
    ]),
    componentStyles: PropTypes.shape(),
    onMouseLeave:    PropTypes.func,
    className:       PropTypes.string,
    onMouseOver:     PropTypes.func,
    children:        PropTypes.string,
    disabled:        PropTypes.bool,
    onClick:         PropTypes.func,
    type:            PropTypes.string,
    name:            PropTypes.string,
    form:            PropTypes.string,
    id:              PropTypes.string
};

export default ButtonView;
