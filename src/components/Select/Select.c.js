import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import { EVENT } from '../constants';
// TODO: Maybe remove it
class Select extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false
        };
    }

    static displayName = 'Select';

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        open:     PropTypes.bool,
        value:    PropTypes.string,
        innerRef: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({
                current: PropTypes.instanceOf(Element)
            })
        ])
    };

    static defaultProps = {
        options: []
    };

    componentDidMount () {
        document.addEventListener(EVENT.CLICK, this.handleDocumentClick);
    }

    componentWillUnmount () {
        document.removeEventListener(EVENT.CLICK, this.handleDocumentClick);
    }

    handleDocumentClick = ({ target }) => {
        if (this.state.open && !this.root.contains(target)) {
            this.setState({ open: false });
        }
    };

    handleTitleClick = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };

    handleOptionClick = listItem => event => {
        const { onChange } = this.props;
        const { id } = listItem;

        if (typeof onChange === 'function') {
            onChange(id, event);

            this.closeMenu();
        }
    };

    closeMenu = () => {
        this.setState({ open: false });
    };

    setRootRef = el => {
        this.root = el;
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const props = {
            ...this.state,
            ...this.props,
            componentStyles,
            setRootRef:    this.setRootRef,
            onTitleClick:  this.handleTitleClick,
            onOptionClick: this.handleOptionClick
        };

        return <SelectView {...props}/>;
    }
}

export default Select;
