import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DialogView from './view/Dialog.v';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class Dialog extends Component {
    constructor (props) {
        super(props);
    }

    static displayName = 'Dialog';

    static propTypes = {
        className:  PropTypes.string,
        elementRef: PropTypes.func,
        children:   PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    rootRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const {
            className,
            children
        } = this.props;

        const props = {
            className,
            children,
            rootRef: this.rootRef,
            componentStyles
        };

        return <DialogView {...props}/>;
    }
}

export default Dialog;
