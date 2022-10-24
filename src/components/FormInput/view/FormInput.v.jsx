import React from 'react';
import PropTypes from 'prop-types';

import { FormInput } from '../style';

const FormInputView = ({
    componentStyles,
    autoComplete,
    attributes,
    className,
    autoFocus,
    tabIndex,
    readOnly,
    onChange,
    applied,
    type,
    name,
    id
}) => (
    <FormInput
        autoComplete={autoComplete}
        id={id}
        type={type}
        name={name}
        applied={applied}
        className={className}
        onChange={onChange}
        autoFocus={autoFocus}
        tabIndex={tabIndex}
        readOnly={readOnly}
        styles={componentStyles}
        {...attributes}
    />
);

FormInputView.propTypes = {
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    componentStyles: PropTypes.shape(),
    attributes: PropTypes.shape({
        onChange: PropTypes.string.func,
        placeholder: PropTypes.string,
        value: PropTypes.string
    }),
    autoFocus: PropTypes.bool,
    readOnly: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    applied: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    id: PropTypes.string
};

export default FormInputView;
