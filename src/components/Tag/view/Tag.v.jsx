import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tag } from '../style';

const FRAGMENT_KEY = '6ec9bda9-0676-40d4-8c8d-bc1fc3694d14';

const propTypes = {
    onBlur:        PropTypes.func,
    onClick:       PropTypes.func,
    onInput:       PropTypes.func,
    onKeyDown:     PropTypes.func,
    onContextMenu: PropTypes.func,
    className:     PropTypes.string,
    editable:      PropTypes.bool,
    startIcon:     PropTypes.node
};

const TagView = props => {
    const {
        className,
        editable,
        onClick,
        onInput,
        onBlur,
        startIcon,
        onKeyDown,
        onMouseDown,
        onContextMenu,
        componentStyles,
        attributes,
        children
    } = props;

    let tagElement = (
        <Tag
            onClick={onClick}
            className={className}
            onContextMenu={onContextMenu}
            styles={componentStyles}
            {...attributes}
        >
            {startIcon}
            {children}
        </Tag>
    );

    if (editable) {
        tagElement = (
            <Fragment key={FRAGMENT_KEY}>
                <Tag
                    suppressContentEditableWarning={true}
                    contentEditable={editable}
                    onMouseDown={onMouseDown}
                    className={className}
                    onKeyDown={onKeyDown}
                    onClick={onClick}
                    onInput={onInput}
                    onBlur={onBlur}
                    styles={componentStyles}
                    {...attributes}
                >
                    {startIcon}
                    {children}
                </Tag>
            </Fragment>
        );
    }

    return tagElement;
};

TagView.propTypes = propTypes;

export default TagView;
