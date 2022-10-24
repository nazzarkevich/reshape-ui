import React from 'react';
import color from 'color';
import PropTypes from 'prop-types';
import styles from '../styles';

const DEFAULT_COLOR = color(styles.primaryForeground)
    .alpha(0.05)
    .rgb()
    .string();

const DEFAULT_STYLES = {
    width:           '100%',
    height:          '1px',
    backgroundColor: DEFAULT_COLOR
};

const propTypes = {
    style: PropTypes.shape({})
};

const Divider = props => {
    const { style } = props;

    return (
        <div
            {...props}
            style={{
                ...DEFAULT_STYLES,
                ...style
            }}
        />
    );
};

Divider.propTypes = propTypes;

export default Divider;

