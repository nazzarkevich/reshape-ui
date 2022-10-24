import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../IconButton';
import Icon from '../../Icon';
import Input from '../../Input';
import Indent from '../../Indent';

import { Element, ElementText, IconWrapper } from '../style';

const propTypes = {
    id:                    PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    primary:               PropTypes.bool,
    editable:              PropTypes.bool,
    indents:               PropTypes.number,
    inputValue:            PropTypes.string,
    elementName:           PropTypes.string,
    elementIconName:       PropTypes.string,
    className:             PropTypes.string,
    onClick:               PropTypes.func,
    setRootRef:            PropTypes.func,
    onMouseOver:           PropTypes.func,
    onMouseDown:           PropTypes.func,
    onMouseLeave:          PropTypes.func,
    onInputChange:         PropTypes.func,
    onInputKeyDown:        PropTypes.func,
    setInputRef:           PropTypes.func,
    showChildren:          PropTypes.bool,
    toggleButtonClassName: PropTypes.string,
    actionIconClassName:   PropTypes.string,
    statusIconName:        PropTypes.string,
    toggleButtonName:      PropTypes.string,
    actionIconName:        PropTypes.string,
    statusIconClassName:   PropTypes.string,
    onStatusIconClick:     PropTypes.func,
    componentStyles:       PropTypes.shape()
};

const TreeElementView = props => {
    const {
        id,
        primary,
        inputValue,
        elementName,
        className,
        onClick,
        indents,
        editable,
        setRootRef,
        setInputRef,
        onMouseOver,
        onMouseLeave,
        onMouseDown,
        showChildren,
        onInputChange,
        onInputKeyDown,
        toggleButtonClassName,
        toggleButtonName,
        elementIconName,
        actionIconName,
        statusIconName,
        actionIconClassName,
        statusIconClassName,
        onStatusIconClick,
        componentStyles
    } = props;

    let indentElement = null,
        elementIconElement = null,
        childrenIconElement = null,
        actionIconElement = null,
        statusIconElement = null;

    if (indents) {
        indentElement = <Indent number={indents}/>;
    }

    if (toggleButtonName) {
        childrenIconElement = (
            <Icon
                name={toggleButtonName}
                className={toggleButtonClassName}
                rotate={showChildren ? 90 : null}
                style={componentStyles.toggleButton}
            />
        );
    }

    if (elementIconName) {
        elementIconElement = (
            <Icon
                name={elementIconName}
                style={componentStyles.elementIcon}
            />
        );
    }

    if (!editable && statusIconName) {
        statusIconElement = (
            <IconWrapper
                className={statusIconClassName}
                styles={componentStyles.statusIconWrapper}
            >
                <IconButton
                    iconName={statusIconName}
                    onClick={onStatusIconClick}
                    style={componentStyles.statusIcon}
                />
            </IconWrapper>
        );
    }

    if (actionIconName) {
        actionIconElement = (
            <IconWrapper
                className={actionIconClassName}
                styles={componentStyles.actionIconWrapper}
            >
                <IconButton
                    active={primary}
                    iconName={actionIconName}
                    style={componentStyles.statusIcon}
                />
            </IconWrapper>
        );
    }

    let textElement = (
        <ElementText
            styles={componentStyles.elementText}
        >
            {elementName}
        </ElementText>
    );

    if (editable) {
        textElement = (
            <Input
                value={inputValue}
                elementRef={setInputRef}
                onChange={onInputChange}
                onKeyDown={onInputKeyDown}
                style={componentStyles.input}
            />
        );
    }

    return (
        <Element
            id={id}
            ref={setRootRef}
            onClick={onClick}
            className={className}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            styles={componentStyles.element}
        >
            {indentElement}
            {childrenIconElement}
            {elementIconElement}
            {textElement}
            {actionIconElement}
            {statusIconElement}
        </Element>
    );
};

TreeElementView.propTypes = propTypes;

export default TreeElementView;
