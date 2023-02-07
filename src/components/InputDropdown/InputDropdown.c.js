import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import InputDropdownView from './InputDropdown.v';
import compileStyles from '../utils/compileStyles';
import stylesheet from './style';
import units from './units';
import { UNIT } from '../constants';

const propTypes = {
    value:            PropTypes.string,
    placeholder:      PropTypes.string,
    selectedId:       PropTypes.string,
    onInputKeyDown:   PropTypes.func,
    onInputChange:    PropTypes.func.isRequired,
    onInputBlur:      PropTypes.func,
    onDropdownChange: PropTypes.func.isRequired,
    secondary:        PropTypes.bool,
    error:            PropTypes.bool,
    disableDropdown:  PropTypes.bool,
    showDropdown:     PropTypes.bool,
    options:          PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    })).isRequired
};

const defaultProps = {
    options:         units,
    showDropdown:    false,
    disableDropdown: false,
    selectedId: UNIT.PX
};

class InputDropdown extends PureComponent {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    constructor (props) {
        super(props);
    }

    handleDropdownChange = (value, event) => {
        const { onDropdownChange } = this.props;

        if (typeof onDropdownChange === 'function') {
            onDropdownChange(value, event);
        }
    };

    handleInputChange = event => {
        const { onInputChange } = this.props;

        if (typeof onInputChange === 'function') {
            onInputChange(event);
        }
    };

    handleInputKeyDown = event => {
        const { onInputKeyDown } = this.props;

        if (typeof onInputKeyDown === 'function') {
            onInputKeyDown(event);
        }
    };

    handleInputFocus = event => {
        event.target.select();
    };

    handleInputBlur = (event) => {
        const { onInputBlur } = this.props;

        if (typeof onInputBlur === 'function') {
            onInputBlur(event);
        }
    };

    render () {
        const { value, selectedId, showDropdown } = this.props;

        const {
            error,
            options,
            secondary,
            placeholder,
            disableDropdown
        } = this.props;

        const styles = compileStyles(
            stylesheet, this.props, this.state
        );

        const inputDropdownProps = {
            styles,
            value,
            error,
            options,
            secondary,
            selectedId,
            placeholder,
            showDropdown,
            disableDropdown,
            onInputBlur:      this.handleInputBlur,
            onInputFocus:     this.handleInputFocus,
            onInputChange:    this.handleInputChange,
            onInputKeyDown:   this.handleInputKeyDown,
            onDropdownChange: this.handleDropdownChange
        };

        return <InputDropdownView {...inputDropdownProps}/>;
    }
}

export default InputDropdown;
