import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItemTextView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class ListItemText extends PureComponent {
    constructor (props) {
        super(props);
    }

    static displayName = 'ListItemText';

    static propTypes = {
        active:   PropTypes.bool,
        inactive: PropTypes.bool,
        truncate: PropTypes.bool
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const listItemText = {
            ...this.props,
            componentStyles
        };

        return <ListItemTextView {...listItemText}/>;
    }
}

export default ListItemText;
