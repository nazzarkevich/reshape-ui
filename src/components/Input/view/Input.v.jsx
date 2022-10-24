import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../style';

const propTypes = {
    id:              PropTypes.string,
    value:           PropTypes.string,
    type:            PropTypes.string,
    className:       PropTypes.string,
    name:            PropTypes.string,
    error:           PropTypes.bool,
    disabled:        PropTypes.bool,
    readOnly:        PropTypes.bool,
    onClick:         PropTypes.func,
    autoFocus:       PropTypes.bool,
    onKeyDown:       PropTypes.func,
    onKeyPress:      PropTypes.func,
    onChange:        PropTypes.func,
    maxLength:       PropTypes.number,
    attributes:      PropTypes.shape({}),
    componentStyles: PropTypes.shape({
        input:   PropTypes.shape({}),
        wrapper: PropTypes.shape({})
    })
};

const InputView = props => {
    const {
        id,
        type,
        value,
        className,
        name,
        error,
        readOnly,
        disabled,
        onClick,
        onKeyDown,
        onKeyPress,
        onChange,
        autoFocus,
        maxLength,
        componentStyles,
        attributes
    } = props;

    return (
        <Input
            id={id}
            type={type}
            name={name}
            value={value}
            error={error}
            className={className}
            readOnly={readOnly}
            disabled={disabled}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onChange={onChange}
            autoFocus={autoFocus}
            maxLength={maxLength}
            styles={componentStyles}
            {...attributes}
        />
    );
};

InputView.propTypes = propTypes;

export default InputView;
