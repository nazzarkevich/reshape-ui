import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import Indent from '../../Indent';

import { Element, ElementText } from '../style';

const propTypes = {
    id:                     PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    indents:                PropTypes.number,
    tabIndex:               PropTypes.number,
    elementName:            PropTypes.string,
    elementIconName:        PropTypes.string,
    className:              PropTypes.string,
    onClick:                PropTypes.func,
    onKeyDown:              PropTypes.func,
    onMouseOver:            PropTypes.func,
    onMouseDown:            PropTypes.func,
    onMouseLeave:           PropTypes.func,
    showChildren:           PropTypes.bool,
    hideToggleButton:       PropTypes.bool,
    toggleButtonClassName:  PropTypes.string,
    displayButtonClassName: PropTypes.string,
    componentStyles:        PropTypes.shape()
};

const ElementView = props => {
    const {
        id,
        root,
        tabIndex,
        elementName,
        elementIconName,
        className,
        onClick,
        indents,
        onKeyDown,
        onMouseOver,
        onMouseLeave,
        onMouseDown,
        showChildren,
        hideToggleButton,
        toggleButtonClassName,
        // displayButtonClassName,
        componentStyles
    } = props;

    let indentElement = null;

    if (indents) {
        indentElement = <Indent indentsNumber={indents}/>;
    }

    return (
        <Element
            id={id}
            root={root}
            tabIndex={tabIndex}
            data-root={root}
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
            onMouseDown={onMouseDown}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            styles={componentStyles.element}
        >
            {indentElement}
            <Icon
                name="arrow-right"
                className={toggleButtonClassName}
                rotate={showChildren ? 90 : null}
                hidden={hideToggleButton}
                style={componentStyles.toggleButton}
            />
            <Icon
                name={elementIconName}
                style={componentStyles.elementIcon}
            />
            <ElementText
                styles={componentStyles.elementText}
            >
                {elementName}
            </ElementText>
            {/*<Icon*/}
            {/*secondary={getIconState()}*/}
            {/*name="visible"*/}
            {/*className={displayButtonClassName}*/}
            {/*style={componentStyles.displayButton}*/}
            {/*/>*/}
        </Element>
    );
};

ElementView.propTypes = propTypes;

export default ElementView;
