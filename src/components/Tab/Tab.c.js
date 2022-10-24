import React from 'react';
import Icon from '../Icon';

import styles from '../styles';

import PropTypes from 'prop-types';

const propTypes = {
    id:        PropTypes.string,
    value:     PropTypes.string.isRequired,
    active:    PropTypes.bool,
    onClick:   PropTypes.func,
    onChange:  PropTypes.func,
    iconName:  PropTypes.string.isRequired,
    className: PropTypes.string
};

const Tab = props => {
    const handleClick = value => event => {
        const { onClick, onChange } = props;

        if (typeof onChange === 'function') {
            onChange(event, value);
        }

        if (typeof onClick === 'function') {
            onClick(event, value);
        }
    };

    const {
        id,
        value,
        active,
        iconName,
        className
    } = props;

    return (
        <Icon
            id={id}
            size="medium"
            name={iconName}
            disabled={!active}
            className={className}
            onClick={handleClick(value)}
            hoverColor={styles.primaryForeground}
        />
    );
};

Tab.propTypes = propTypes;

export default Tab;
