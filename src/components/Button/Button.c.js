import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';

import ButtonView from './view';

import compileStyles from '../utils/compileStyles';

class Button extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            hover: false
        };
    }

    static displayName = 'Button';

    static propTypes = {
        elementRef: PropTypes.oneOfType([
            PropTypes.func, 
            PropTypes.shape({
                current: PropTypes.instanceOf(Element)
            })
        ]),
        className: PropTypes.string,
        disabled:  PropTypes.bool,
        rounded:   PropTypes.bool,
        large:     PropTypes.bool,
        onClick:   PropTypes.func,
        variant:   PropTypes.string,
        type:      PropTypes.string,
        name:      PropTypes.string,
        form:      PropTypes.string,
        id:        PropTypes.string
    };

    static defaultProps = {
        type: 'submit'
    };

    handleMouseOver = () => {
        this.setState({ hover: true });
    };

    handleMouseLeave = () => {
        this.setState({ hover: false });
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    render () {
        const componentStyles = compileStyles(stylesheet,
            this.props,
            this.state
        );

        const {
            elementRef,
            className,
            disabled,
            children,
            form,
            type,
            name,
            id
        } = this.props;

        const buttonProps = {
            onMouseLeave: this.handleMouseLeave,
            onMouseOver:  this.handleMouseOver,
            onClick:      this.handleClick,
            componentStyles,
            elementRef,
            className,
            disabled,
            children,
            form,
            type,
            name,
            id
        };

        return <ButtonView {...buttonProps}/>;
    }
}

export default Button;
