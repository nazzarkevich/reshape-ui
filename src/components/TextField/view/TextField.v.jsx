import React from 'react';
import { Text } from '../style';
import PropTypes from 'prop-types';

const propTypes = {
    id:              PropTypes.string,
    value:           PropTypes.string,
    className:       PropTypes.string,
    editable:        PropTypes.bool,
    onBlur:          PropTypes.func,
    onClick:         PropTypes.func,
    onInput:         PropTypes.func,
    onKeyDown:       PropTypes.func,
    componentStyles: PropTypes.shape({}),
    attributes:      PropTypes.shape({})
};

const TextFieldView = props => {
    const {
        value,
        className,
        editable,
        onClick,
        onInput,
        onBlur,
        onKeyDown,
        componentStyles,
        attributes
    } = props;

    let textElement = (
        <Text
            className={className}
            onClick={onClick}
            styles={componentStyles}
            {...attributes}
        >
            {value}
        </Text>
    );

    if (editable) {
        textElement = (
            <Text
                dangerouslySetInnerHTML={{ __html: value }}
                suppressContentEditableWarning={true}
                contentEditable={editable}
                className={className}
                onInput={onInput}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                styles={componentStyles}
                {...attributes}
            />
        );
    }

    return textElement;
};

TextFieldView.propTypes = propTypes;

export default TextFieldView;
