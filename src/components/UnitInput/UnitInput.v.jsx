import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

import Autocomplete from '../Autocomplete';
import Select from '../Select';

const propTypes = {
    onUnitChange:    PropTypes.func.isRequired,
    onChange:        PropTypes.func.isRequired,
    value:           PropTypes.string,
    unitValue:       PropTypes.string,
    placeholder:     PropTypes.string,
    error:           PropTypes.bool,
    secondary:       PropTypes.bool,
    styles:          PropTypes.shape({}),
    options:         PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    })),
    units:           PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    }))
};

const UnitInputView = props => {
    const {
        error,
        value,
        unitValue,
        styles,
        units,
        options,
        onChange,
        secondary,
        placeholder,
        onUnitChange,
        // TODO check it later
        // showDropdown,
        // disableDropdown
    } = props;

    return (
        <Wrapper
            styles={styles.wrapper}
        >
            <Autocomplete
                placeholder={placeholder}
                style={styles.dropdown}
                secondary={secondary}
                onChange={onChange}
                title={placeholder}
                options={options}
                value={value}
                freeSolo
            />
            <Select
                options={units}
                value={unitValue}
                onChange={onUnitChange}
            />
            {/*<Input*/}
            {/*    onKeyDown={onInputKeyDown}*/}
            {/*    placeholder={placeholder}*/}
            {/*    onChange={onInputChange}*/}
            {/*    onFocus={onInputFocus}*/}
            {/*    onBlur={onInputBlur}*/}
            {/*    secondary={secondary}*/}
            {/*    error={error}*/}
            {/*    value={value}*/}
            {/*/>*/}
            {/*{ TODO USE SELECT COMPONENT INSTEAD }*/}
            {/*{*/}
            {/*    showDropdown ?*/}
            {/*        <Autocomplete*/}
            {/*            onChange={onDropdownChange}*/}
            {/*            disabled={disableDropdown}*/}
            {/*            style={styles.dropdown}*/}
            {/*            secondary={secondary}*/}
            {/*            placeholder="+"*/}
            {/*            title="+"*/}
            {/*            value={selectedId}*/}
            {/*            options={units}*/}
            {/*        /> : null*/}
            {/*}*/}
        </Wrapper>
    );
};

UnitInputView.propTypes = propTypes;

export default UnitInputView;
