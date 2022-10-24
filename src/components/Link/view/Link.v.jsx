import React from 'react';
import PropTypes from 'prop-types';
import { LinkItemText } from '../style';

const propTypes = {
    href:            PropTypes.string,
    onClick:         PropTypes.func,
    target:          PropTypes.string,
    className:       PropTypes.string,
    componentStyles: PropTypes.shape({}),
    children:        PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const LinkView = props => {
    const {
        href,
        target,
        children,
        className,
        onClick,
        componentStyles
    } = props;

    return (
        <LinkItemText
            href={href}
            target={target}
            onClick={onClick}
            className={className}
            styles={componentStyles}
        >
            {children}
        </LinkItemText>
    );
};

LinkView.propTypes = propTypes;

export default LinkView;
