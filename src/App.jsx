import React, { Component } from 'react';
import './app.css';
import { ThemeProvider } from './components/theme';
import Icon from './components/Icon';
import ActionButton from './components/ActionButton';
import SwitchIconButton from './components/SwitchIconButton';
import IconButton from './components/IconButton';
import DropdownSearch from './components/DropdownSearch';
import Menu from './components/Menu';
import NestedMenu from './components/NestedMenu';
import TreeElement from './components/TreeElement';
import Element from './components/Element';
import Node from './components/Node';
import Button from './components/Button';
import Tag from './components/Tag';
import Indent from './components/Indent';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Input from './components/Input';
import Select from './components/Select';
import UnitInput from './components/UnitInput';
import Autocomplete from './components/Autocomplete';
import InputDropdown from './components/InputDropdown';
import VirtualizedDropdown from './components/VirtualizedDropdown';
import Markers from './components/Markers';
import Dialog from './components/Dialog';
import Tooltip from './components/Tooltip';

let options = [];

for (let i = 0; i < 100; i++) {
    options.push({
        id:   `${i}`,
        name: `Item${i}`
    });
}

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            value: '1500'
        };
    }

    handleChange = (event, { id }, reason) => {
        this.setState({ value: id });
    }

    handleUnitChange = ({ id }) => {
        console.log('unit ->', id);
    }

    handleClose = ({ id }) => {
        this.setState({ value: id });
    }

    render () {
        return (
            <div id="app">
                <ThemeProvider>
                    <div style={{ width: 200, marginTop: '50px' }}>
                        <h2>Autocomplete</h2>
                        <Autocomplete
                            options={options}
                            secondary
                            value={this.state.value}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                            placeholder="Autocomplete"
                        />
                    </div>
                    <div style={{ width: '200px', marginTop: '20px' }}>
                        <h2>Virtualized Dropdown</h2>
                        <VirtualizedDropdown
                            onChange={this.handleDropdownChange}
                            activeOptions={['1', '2']}
                            value={this.state.selectedId}
                            options={options}
                        />
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
