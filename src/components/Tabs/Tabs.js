import React from 'react';
import PropTypes from 'prop-types';

import styleSheet, { TabsWrapper } from './style';

import compileStyles from '../utils/compileStyles';

const propTypes = {
    value:     PropTypes.string,
    className: PropTypes.string,
    onChange:  PropTypes.func.isRequired,
    children:  PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const Tabs = props => {
    const {
        value,
        className,
        children,
        onChange
    } = props;

    const styles = compileStyles(styleSheet, props);

    return (
        <TabsWrapper className={className} styles={styles}>
            {
                React.Children.map(children, child => (
                    React.cloneElement(child, {
                        active: value === child.props.value,
                        onChange
                    })
                ))
            }
        </TabsWrapper>
    );
};

Tabs.propTypes = propTypes;

export default Tabs;
