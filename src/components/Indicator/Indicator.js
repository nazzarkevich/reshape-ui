import React from 'react';
import PropTypes from 'prop-types';

import styleSheet, { IndicatorWrapper } from './style';

import compileStyles from '../utils/compileStyles';

const propTypes = {
    icon:     PropTypes.node.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const Indicator = props => {
    const { icon, children, ...restProps } = props;

    const styles = compileStyles(styleSheet, props);

    return (
        <IndicatorWrapper
            {...restProps}
            styles={styles}
        >
            {icon}
            {children}
        </IndicatorWrapper>
    );
};

Indicator.propTypes = propTypes;

export default Indicator;
