import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListView from './view/List.v';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class List extends Component {
    constructor (props) {
        super(props);
    }

    static displayName = 'List';

    static propTypes = {
        className:  PropTypes.string,
        listHeight: PropTypes.string,
        elementRef: PropTypes.func,
        onClick:    PropTypes.func
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    rootRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }
    }

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const {
            className,
            children
        } = this.props;

        const listProps = {
            className,
            children,
            onClick: this.handleClick,
            rootRef: this.rootRef,
            componentStyles
        };

        return <ListView {...listProps}/>;
    }
}

export default List;
