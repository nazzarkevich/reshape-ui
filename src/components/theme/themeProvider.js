import React from 'react';
import PropTypes from 'prop-types';

import switchIconButton from '../SwitchIconButton/theme';
import dropdownSearch from '../DropdownSearch/theme';
import autocomplete from '../Autocomplete/theme';
import actionButton from '../ActionButton/theme';
import iconButton from '../IconButton/theme';
import formInput from '../FormInput/theme';
import indicator from '../Indicator/theme';
import ThemeContext from './themeContext';
import indent from '../Indent/theme';
import button from '../Button/theme';
import input from '../Input/theme';
import inputDropdown from '../InputDropdown/theme';
import unitInput from '../UnitInput/theme';
import node from '../Node/theme';
import icon from '../Icon/theme';
import menu from '../Menu/theme';
import select from '../Select/theme';
import nestedMenu from '../NestedMenu/theme';
import list from '../List/theme';
import listItem from '../ListItem/theme';
import listItemText from '../ListItemText/theme';
import link from '../Link/theme';
import element from '../Element/theme';
import treeElement from '../TreeElement/theme';
import tag from '../Tag/theme';
import markers from '../Markers/theme';
import tooltip from '../Tooltip/theme';
import dialog from '../Dialog/theme';
import tabs from '../Tabs/theme';
import textField from '../TextField/theme';

import styles from '../styles';

import merge from 'deepmerge';

const propTypes = {
    theme:    PropTypes.shape({
        styles: PropTypes.shape({})
    }),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ThemeProvider = props => {
    const getTheme = () => {
        const { theme = {} } = props;

        const computedStyles = { ...styles, ...theme.styles };

        const componentTheme = {
            styles:           computedStyles,
            tag:              tag(computedStyles),
            menu:             menu(computedStyles),
            select:           select(computedStyles),
            list:             list(computedStyles),
            input:            input(computedStyles),
            inputDropdown:    inputDropdown(computedStyles),
            unitInput:        unitInput(computedStyles),
            tabs:             tabs(computedStyles),
            icon:             icon(computedStyles),
            node:             node(computedStyles),
            link:             link(computedStyles),
            dialog:           dialog(computedStyles),
            indent:           indent(computedStyles),
            button:           button(computedStyles),
            markers:          markers(computedStyles),
            element:          element(computedStyles),
            tooltip:          tooltip(computedStyles),
            indicator:        indicator(computedStyles),
            listItem:         listItem(computedStyles),
            textField:        textField(computedStyles),
            formInput:        formInput(computedStyles),
            nestedMenu:       nestedMenu(computedStyles),
            iconButton:       iconButton(computedStyles),
            treeElement:      treeElement(computedStyles),
            autocomplete:     autocomplete(computedStyles),
            actionButton:     actionButton(computedStyles),
            listItemText:     listItemText(computedStyles),
            dropdownSearch:   dropdownSearch(computedStyles),
            switchIconButton: switchIconButton(computedStyles)
        };

        return merge(componentTheme, theme);
    };

    return (
        <ThemeContext.Provider value={getTheme()}>
            {props.children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
