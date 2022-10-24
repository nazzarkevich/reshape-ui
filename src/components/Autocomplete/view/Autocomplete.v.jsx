import React from 'react';
import PropTypes from 'prop-types';

import { DropdownMainWrapper } from '../style';

import Icon from '../../Icon';
import Input from '../../Input';
import List from '../../List';
import ListItem from '../../ListItem';
import ListItemText from '../../ListItemText';
import { omitEmptyProperties } from '../../utils';

const propTypes = {
    error:             PropTypes.bool,
    isOpen:            PropTypes.bool,
    secondary:         PropTypes.bool,
    className:         PropTypes.string,
    inputValue:        PropTypes.string,
    placeholder:       PropTypes.string,
    setRootRef:        PropTypes.func,
    showDeleteButton:  PropTypes.bool,
    selectedOption:    PropTypes.shape({
        id:   PropTypes.string,
        name: PropTypes.string
    }),
    options:           PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    listRef:           PropTypes.func,
    inputRef:          PropTypes.func,
    onInputChange:     PropTypes.func,
    onInputFocus:      PropTypes.func,
    onKeyDown:         PropTypes.func,
    onListItemClick:   PropTypes.func,
    onActionIconClick: PropTypes.func,
    styles:            PropTypes.shape({})
};

const AutocompleteView = props => {
    const {
        error,
        options,
        className,
        inputValue,
        placeholder,
        showDeleteButton,
        // TODO check these functions
        isOptionFocused,
        isOptionActive,
        isOptionInactive,
        isOptionSelected,
        isOpen,
        secondary,
        onInputChange,
        onInputFocus,
        onKeyDown,
        onListItemClick,
        onActionIconClick,
        setRootRef,
        listRef,
        inputRef,
        styles
    } = props;

    const listStyle = omitEmptyProperties({
        ...styles.list,
        display: isOpen && options.length ? 'block' : 'none'
    });

    return (
        <DropdownMainWrapper
            styles={styles.mainWrapper}
            className={className}
            ref={setRootRef}
        >
            <Input
                placeholder={placeholder}
                onChange={onInputChange}
                onFocus={onInputFocus}
                elementRef={inputRef}
                secondary={secondary}
                onKeyDown={onKeyDown}
                value={inputValue}
                error={error}
            />
            <List
                elementRef={listRef}
                style={listStyle}
            >
                {
                    options && options.map((option, index) => {
                        const { id, icon } = option;

                        const isSelected = isOptionSelected(id);
                        const isActive = isOptionActive(id);
                        const isInactive = isOptionInactive(id);
                        const isFocused = isOptionFocused(index);

                        return (
                            <ListItem
                                id={id}
                                key={id}
                                hover={isFocused}
                                onClick={onListItemClick(option)}
                                style={styles.listItem}
                            >
                                {
                                    icon && icon.name ?
                                        <Icon
                                            name={icon.name}
                                            size={icon.size}
                                            disabled={isInactive}
                                            primary={isSelected || isActive}
                                            style={styles.icon}
                                        /> : null
                                }
                                <ListItemText
                                    truncate
                                    active={isSelected || isActive}
                                    inactive={isSelected ? false : isInactive}
                                >
                                    {option.name}
                                </ListItemText>
                                {
                                    showDeleteButton && isActive ?
                                        <Icon
                                            name="delete"
                                            onClick={onActionIconClick(id)}
                                            style={styles.actionIcon}
                                        /> : null
                                }
                            </ListItem>
                        );
                    })
                }
            </List>
        </DropdownMainWrapper>
    );
};

AutocompleteView.propTypes = propTypes;

export default AutocompleteView;
