import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import _isEqual from 'lodash/isEqual';

class Menu extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    static displayName = 'Menu';

    static propTypes = {
        open:            PropTypes.bool,
        onSelect:        PropTypes.func,
        onClick:         PropTypes.func,
        onClose:         PropTypes.func,
        className:       PropTypes.string,
        innerRef:        PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({
                current: PropTypes.instanceOf(Element)
            })
        ]),
        options:         PropTypes.arrayOf(
            PropTypes.shape({
                id:   PropTypes.string,
                name: PropTypes.string
            })
        ),
        inactiveOptions: PropTypes.arrayOf(PropTypes.string),
        accentOptions:   PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        options:         [],
        accentOptions:   [],
        inactiveOptions: []
    };

    static getDerivedStateFromProps (nextProps, prevState) {
        const { open } = nextProps;

        if (open !== prevState.isOpen) {
            return { isOpen: open };
        }

        return null;
    }

    shouldComponentUpdate (nextProps, nextState) {
        return (
            !_isEqual(this.props, nextProps) ||
            !_isEqual(this.state, nextState)
        );
    }

    handleListItemClick = listItem => event => {
        const { onSelect, onClose } = this.props;
        const { id, name } = listItem;

        if (typeof onClose === 'function') {
            onClose({ id, name, event });

            this.closeMenu();
        }

        if (typeof onSelect === 'function') onSelect(id);
    };

    closeMenu = () => {
        this.setState({ isOpen: false });
    };

    isInactive = id => {
        const { inactiveOptions } = this.props;

        return inactiveOptions.includes(id);
    };

    isAccent = id => {
        const { accentOptions } = this.props;

        return accentOptions.includes(id);
    };

    render () {
        const {
            onClick,
            options,
            innerRef,
            className
        } = this.props;

        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const menuProps = {
            ...this.state,
            onClick,
            options,
            className,
            onListItemClick: this.handleListItemClick,
            isInactive:      this.isInactive,
            isAccent:        this.isAccent,
            componentStyles
        };

        return <MenuView ref={innerRef} {...menuProps}/>;
    }
}

export default Menu;
