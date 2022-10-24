import React from 'react';
import PropTypes from 'prop-types';

import styleSheet, {
    NodeWrapper,
    Span
} from './style';

import compileStyles from '../utils/compileStyles';

const propTypes = {
    id:           PropTypes.string,
    title:        PropTypes.string,
    label:        PropTypes.string.isRequired,
    indents:      PropTypes.node,
    tabIndex:     PropTypes.number,
    elementRef:   PropTypes.func,
    startIcon:    PropTypes.node,
    nodeIcon:     PropTypes.node,
    endIcon:      PropTypes.node,
    className:    PropTypes.string,
    onClick:      PropTypes.func,
    onKeyDown:    PropTypes.func,
    onMouseOver:  PropTypes.func,
    onMouseDown:  PropTypes.func,
    onMouseLeave: PropTypes.func,
    content:      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
};

const NodeView = props => {
    const {
        id,
        label,
        title,
        content,
        indents,
        tabIndex,
        startIcon,
        nodeIcon,
        endIcon,
        className,
        onClick,
        elementRef,
        onKeyDown,
        onMouseOver,
        onMouseLeave,
        onMouseDown,
        ...rest
    } = props;

    const styles = compileStyles(styleSheet, props);

    let contentElement = null;

    if (Array.isArray(content) && content.length) {
        contentElement = content.map(item =>
            <Span key={item} styles={styles.content}>
                {item}
            </Span>
        );
    }

    if (typeof content === 'string') {
        contentElement = (
            <Span styles={styles.content}>
                {content}
            </Span>
        );
    }

    return (
        <NodeWrapper
            id={id}
            ref={elementRef}
            onClick={onClick}
            tabIndex={tabIndex}
            className={className}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            styles={styles.node}
            {...rest}
        >
            {indents}
            {startIcon}
            {nodeIcon}
            <Span styles={styles.label}>
                {label}
            </Span>
            <Span styles={styles.contentWrapper}>
                {
                    title ?
                        <Span styles={styles.title}>
                            {title}
                        </Span>
                        : null
                }
                {contentElement}
            </Span>
            {endIcon}
        </NodeWrapper>
    );
};

NodeView.propTypes = propTypes;

export default NodeView;
