import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemView from './view/ListItem.v';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class ListItem extends Component {
    constructor (props) {
        super(props);
    }

    static displayName = 'ListItem';

    static propTypes = {
        id:           PropTypes.string,
        onClick:      PropTypes.func,
        elementRef:   PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func
    };

    handleMouseEnter = event => {
        const { onMouseEnter } = this.props;

        if (typeof onMouseEnter === 'function') {
            onMouseEnter(event);
        }
    };

    handleMouseOver = event => {
        const { onMouseOver } = this.props;

        if (typeof onMouseOver === 'function') {
            onMouseOver(event);
        }
    }

    handleMouseLeave = event => {
        const { onMouseLeave } = this.props;

        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
        }
    }

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    render () {
        const componentStyles = compileStyles(stylesheet, this.props, this.state);
        const {
            id,
            data,
            children,
            className,
            elementRef
        } = this.props;

        const listItem = {
            id,
            data,
            children,
            className,
            elementRef,
            onClick:      this.handleClick,
            onMouseOver:  this.handleMouseOver,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            componentStyles
        };

        return <ListItemView {...listItem}/>;
    }
}

export default ListItem;
