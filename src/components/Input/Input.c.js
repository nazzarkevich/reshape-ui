import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputView from './view/Input.v';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import { isValid, isNumber } from '../utils';
import { INITIAL_VALUE } from './input.ct';
import { KEY } from '../constants';

const propTypes = {
    id:           PropTypes.string,
    value:        PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({})
    ]),
    type:         PropTypes.string,
    name:         PropTypes.string,
    className:    PropTypes.string,
    placeholder:  PropTypes.string,
    maxLength:    PropTypes.number,
    onKeyPress:   PropTypes.func,
    onKeyDown:    PropTypes.func,
    onFocus:      PropTypes.func,
    onBlur:       PropTypes.func,
    onChange:     PropTypes.func,
    elementRef:   PropTypes.func,
    autoFocus:    PropTypes.bool,
    disabled:     PropTypes.bool,
    readonly:     PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    validate:     PropTypes.func,
    truncate:     PropTypes.bool,
    error:        PropTypes.bool,
    secondary:    PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.object
    ])
};

const initialState = {
    value: INITIAL_VALUE,
    error: false,
    step:  1
};

class Input extends PureComponent {
    constructor (props) {
        super(props);

        this.state = { ...initialState };
    }

    static displayName = 'Input';

    static defaultProps = {
        // type of native input
        type:  'text',
        error: false
    };

    static propTypes = propTypes;

    static getDerivedStateFromProps (nextProps, prevState) {
        const { value } = nextProps;

        // makes component controllable
        if (isValid(value) && value !== prevState.value) {
            return { value };
        }

        return null;
    }

    componentDidUpdate (prevProps, prevState) {
        const { error, value } = this.props;

        if (prevProps.value !== value && value === null) {
            this.setState({ ...initialState });
        }

        if (prevProps.error !== error) {
            this.setState({ error });
        }

        if (prevState.error !== this.state.error) {
            this.setState({ error: this.state.error });
        }
    }

    handleFocus = event => {
        const { onFocus } = this.props;

        if (typeof onFocus === 'function') {
            onFocus(event);
        }
    };

    handleBlur = event => {
        const { onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    handleMouseEnter = event => {
        const { onMouseEnter } = this.props;

        if (typeof onMouseEnter === 'function') {
            onMouseEnter(event);
        }
    };

    handleMouseLeave = event => {
        const { onMouseLeave } = this.props;

        if (typeof onMouseLeave === 'function') {
            onMouseLeave(event);
        }
    };

    handleChange = event => {
        const { onChange } = this.props;
        const { target: { value } } = event;

        if (typeof onChange === 'function') {
            onChange(event);
        }

        this.validate(value);

        this.setState({ value });
    };

    validate = value => {
        const { validate } = this.props;

        if (typeof validate === 'function' && value) {
            if (validate(value)) this.setState({ error: false });
            if (!validate(value)) this.setState({ error: true });
        }
    };


    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') onKeyDown(event);

        // const { key, shiftKey, target: { value } } = event;

        // if (key === KEY.ARROW_UP || key === KEY.ARROW_DOWN) {
        //     event.preventDefault();
        //
        //     if (isNumber(value)) {
        //         if (shiftKey && key === KEY.ARROW_UP) this.increment(value, 10);
        //         // eslint-disable-next-line max-len
        //         if (shiftKey && key === KEY.ARROW_DOWN) this.decrement(value, 10);
        //
        //         if (!shiftKey && key === KEY.ARROW_UP) this.increment(value);
        //         if (!shiftKey && key === KEY.ARROW_DOWN) this.decrement(value);
        //     }
        // }
    };

    increment = (value, step = 1) => {
        this.setState({ value: String(parseInt(value) + step) });
    };

    decrement = (value, step = 1) => {
        this.setState({ value: String(parseInt(value) - step) });
    };

    handleKeyPress = event => {
        const { onKeyPress } = this.props;

        if (typeof onKeyPress === 'function') {
            onKeyPress(event);
        }
    };

    createRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }

        this.input = el;
    };

    getNode () {
        return this.input;
    }

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );
        const { value, error } = this.state;
        const {
            id,
            type,
            name,
            className,
            placeholder,
            maxLength,
            autoFocus,
            disabled,
            readonly
        } = this.props;

        const attributes = {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onFocus:      this.handleFocus,
            onBlur:       this.handleBlur,
            ref:          this.createRef,
            placeholder
        };

        const inputProps = {
            id,
            type,
            name,
            error,
            value,
            className,
            readonly,
            disabled,
            autoFocus,
            maxLength,
            attributes,
            onKeyDown:  this.handleKeyDown,
            onKeyPress: this.handleKeyPress,
            onChange:   this.handleChange,
            componentStyles
        };

        return <InputView {...inputProps} />;
    }
}

export default Input;
