import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

import Input from '../Input';
import Autocomplete from '../Autocomplete';

const propTypes = {
    value:            PropTypes.string,
    selectedId:       PropTypes.string,
    placeholder:      PropTypes.string,
    error:            PropTypes.bool,
    secondary:        PropTypes.bool,
    showDropdown:     PropTypes.bool,
    disableDropdown:  PropTypes.bool,
    styles:           PropTypes.shape({}),
    options:          PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    })).isRequired,
    onInputKeyDown:   PropTypes.func,
    onInputFocus:     PropTypes.func,
    onInputBlur:      PropTypes.func,
    onInputChange:    PropTypes.func,
    onDropdownChange: PropTypes.func
};

const InputDropdown = props => {
    const {
        styles,
        value,
        error,
        options,
        secondary,
        selectedId,
        placeholder,
        showDropdown,
        disableDropdown,
        onInputChange,
        onInputKeyDown,
        onInputFocus,
        onInputBlur,
        onDropdownChange
    } = props;

    return (
        <Wrapper
            styles={styles.wrapper}
        >
            <Input
                onKeyDown={onInputKeyDown}
                placeholder={placeholder}
                onChange={onInputChange}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                secondary={secondary}
                error={error}
                value={value}
            />
            {
                showDropdown ?
                    <Autocomplete
                        onChange={onDropdownChange}
                        disabled={disableDropdown}
                        style={styles.dropdown}
                        secondary={secondary}
                        placeholder="+"
                        title="+"
                        value={selectedId}
                        options={options}
                    /> : null
            }
        </Wrapper>
    );
};

InputDropdown.propTypes = propTypes;

export default InputDropdown;
