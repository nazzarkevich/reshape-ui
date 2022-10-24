import React from 'react';
import PropTypes from 'prop-types';

import styleSheet, { IndentWrapper, IndentItem } from './style';
import compileStyles from '../utils/compileStyles';

const propTypes = {
    type:   PropTypes.string,
    number: PropTypes.number.isRequired
};

const IndentView = props => {
    const { number, type } = props;
    const styles = compileStyles(styleSheet, props);

    let indents = [];

    for (let i = 0; i < number; i++) {
        indents.push(
            <IndentItem
                key={i}
                type={type}
                styles={styles.indent}
            />
        );
    }

    return (
        <IndentWrapper styles={styles.wrapper}>
            {indents && indents.map(indent => indent)}
        </IndentWrapper>
    );
};

IndentView.propTypes = propTypes;

export default IndentView;

