import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import stylesheet from './style';

import FormInputView from './view';

import compileStyles from '../utils/compileStyles';

class FormInput extends PureComponent {
    static displayName = 'FormInput';

    static defaultProps = {
        readOnly: false,
        autoFocus: false, 
        placeholder: '',
        className: '',
        type: 'text',
        applied: '',
        value: '',
        name: null
    };

    static propTypes = {
        autoComplete: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        tabIndex: PropTypes.number,
        autoFocus: PropTypes.bool,
        readOnly: PropTypes.bool,
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        applied: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]).isRequired
    };

    constructor (props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    componentDidUpdate (prevProps) {
        const { value } = this.props;

        if (prevProps.value !== value) {
            this.setState({ value });
        }
    }

    handleChange = event => {
        const { target: { value } } = event;
        const { onChange } = this.props;

        if (typeof onChange === 'function') onChange(event);

        this.setState({ value });
    }

    render () {
        const { value } = this.state;

        const componentStyles = compileStyles(stylesheet,
            this.props,
            this.state
        );

        const {
            placeholder,
            autoComplete,
            className,
            autoFocus,
            tabIndex,
            readOnly,
            applied,
            name,
            type,
            id
        } = this.props;

        const attributes = {
            onChange: this.handleChange,
            placeholder,
            value
        };

        const inputProps = {
            componentStyles,
            autoComplete,
            attributes,
            autoFocus,
            tabIndex,
            readOnly,
            className,
            applied,
            type,
            name,
            id
        };

        return <FormInputView {...inputProps}/>;
    }
}

export default FormInput;
