import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UnitInputView from './UnitInput.v';
import compileStyles from '../utils/compileStyles';
import stylesheet from './style';
import units from './units';

const propTypes = {
    onUnitChange:    PropTypes.func.isRequired,
    onChange:        PropTypes.func.isRequired,
    value:           PropTypes.string,
    unitValue:       PropTypes.string,
    placeholder:     PropTypes.string,
    secondary:       PropTypes.bool,
    disableDropdown: PropTypes.bool,
    error:           PropTypes.bool,
    showDropdown:    PropTypes.bool,
    options:         PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    })),
    units:           PropTypes.arrayOf(PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    }))
};

const defaultProps = {
    units,
    options:         [],
    showDropdown:    false,
    disableDropdown: false,
    onInputChange:   () => {}
};

class UnitInput extends PureComponent {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    constructor (props) {
        super(props);
    }

    render () {
        const styles = compileStyles(
            stylesheet,
            this.props,
            this.state
        );

        const inputDropdownProps = {
            ...this.props,
            styles
        };

        return <UnitInputView {...inputDropdownProps}/>;
    }
}

export default UnitInput;
