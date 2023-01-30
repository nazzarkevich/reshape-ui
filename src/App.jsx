import React from 'react';
import './app.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

import {generateSvgSprite} from './generateSvgSprite';

import {DesignSystem} from './DesignSystem';
import { NodeElement } from './elements/Node';
import { TagElement } from './elements/Tag';
import { TooltipElement } from './elements/Tooltip';
import { ButtonElement } from './elements/Button';
import { InputElement } from './elements/Input';
import { IconButtonElement } from './elements/IconButton';
import { SwitchIconButtonEl } from './elements/SwitchIconButton';
import { AutocompleteEl } from './elements/Autocomplete';
import { InputDropdownEl } from './elements/InputDropdown';
import { ListEl } from './elements/List';
import { TabsEl } from './elements/Tabs';
import { FlexFlowerEl } from './elements/FlexFlower';
import { DividerEl } from './elements/Divider';
import { MenuEl } from './elements/Menu';
import { LinkEl } from './elements/Link';


generateSvgSprite();

const App = () => {
  return (
    <Router>
      <div style={{display: 'flex'}}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid black',
          width: 240,
          padding: 12
        }}>
          <Link to="/">All Components</Link>
          <Link to="/node">Node</Link>
          <Link to="/tag">Tag</Link>
          <Link to="/tooltip">Tooltip</Link>
          <Link to="/button">Button</Link>
          <Link to="/input">Input</Link>
          <Link to="/icon-button">Icon Button</Link>
          <Link to="/switch-icon-button">Switch Icon Button</Link>
          <Link to="/autocomplete">Autocomplete</Link>
          <Link to="/input-dropdown">Input Dropdown</Link>
          <Link to="/list">List</Link>
          <Link to="/link">Link</Link>
          <Link to="/tab-icons">Tab icons</Link>
          <Link to="/flex-controller">Flex Controller</Link>
          <Link to="/divider">Divider</Link>
          <Link to="/menu">Menu</Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<DesignSystem/>}/>
            <Route path="/node" element={<NodeElement/>}/>
            <Route path="/tag" element={<TagElement/>}/>
            <Route path="/tooltip" element={<TooltipElement/>}/>
            <Route path="/button" element={<ButtonElement/>}/>
            <Route path="/input" element={<InputElement/>}/>
            <Route path="/icon-button" element={<IconButtonElement/>}/>
            <Route path="/switch-icon-button" element={<SwitchIconButtonEl/>}/>
            <Route path="/autocomplete" element={<AutocompleteEl/>}/>
            <Route path="/input-dropdown" element={<InputDropdownEl/>}/>
            <Route path="/link" element={<LinkEl/>}/>
            <Route path="/list" element={<ListEl/>}/>
            <Route path="/tab-icons" element={<TabsEl/>}/>
            <Route path="/flex-controller" element={<FlexFlowerEl/>}/>
            <Route path="/divider" element={<DividerEl/>}/>
            <Route path="/menu" element={<MenuEl/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
