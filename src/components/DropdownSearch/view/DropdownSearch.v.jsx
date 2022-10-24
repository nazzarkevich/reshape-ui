import React from 'react';
import {
    DropdownMainWrapper,
    DropdownTitleWrapper,
    DropdownTitle,
    DropdownButton
} from '../style';

import Icon from '../../Icon';
import Input from '../../Input';
import List from '../../List';
import ListItem from '../../ListItem';
import ListItemText from '../../ListItemText';
import { omitEmptyProperties } from '../../utils';

import { ACTION_BTN_CLASS } from '../dropdownSearch.ct';

import EventListener from 'react-event-listener';

const DropdownSearchView = props => {
    const {
        error,
        options,
        applied,
        className,
        showToggleButton,
        emptyListTitle,
        queryPlaceholder,
        selectedId,
        listMaxHeight,
        selectedElement,
        isOptionFocused,
        isOptionActive,
        isOptionInactive,
        isOptionSelected,
        isOpen,
        onKeyPress,
        onKeyDown,
        onInputChange,
        onTitleClick,
        onListItemClick,
        onActionButtonClick,
        onToggleButtonClick,
        onDocumentClick,
        rootRef,
        listRef,
        queryRef,
        componentStyles
    } = props;

    let toggleButtonElement = null;

    let dropDownTitleElement = (
        <DropdownTitle
            onClick={onTitleClick}
            styles={componentStyles.title}
        >
            {emptyListTitle}
        </DropdownTitle>
    );

    if (selectedId && selectedElement) {
        dropDownTitleElement = (
            <DropdownTitle
                onClick={onTitleClick}
                styles={componentStyles.title}
            >
                {selectedElement.name}
            </DropdownTitle>
        );
    }

    if (isOpen) {
        dropDownTitleElement = (
            <Input
                error={error}
                elementRef={queryRef}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
                onChange={onInputChange}
                placeholder={
                    selectedId && selectedElement ?
                        selectedElement.name : queryPlaceholder
                }
                style={componentStyles.input}
            />
        );
    }

    if (showToggleButton) {
        toggleButtonElement = (
            <DropdownButton
                onClick={onToggleButtonClick}
                styles={componentStyles.arrowButton}
            >
                <Icon name="arrow-down"/>
            </DropdownButton>
        );
    }

    const listStyle = omitEmptyProperties({
        ...componentStyles.list,
        display:   isOpen && options.length ? 'block' : 'none',
        maxHeight: listMaxHeight
    });

    return (
        <DropdownMainWrapper
            styles={componentStyles.mainWrapper}
            className={className}
            applied={applied}
            ref={rootRef}
        >
            <EventListener
                onMouseDown={onDocumentClick}
                target={document}
            />
            <DropdownTitleWrapper
                styles={componentStyles.titleWrapper}
            >
                {dropDownTitleElement}
                {toggleButtonElement}
            </DropdownTitleWrapper>
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
                                key={id}
                                id={id}
                                onClick={onListItemClick(option)}
                                hover={isFocused}
                                style={componentStyles.listItem}
                            >
                                {
                                    icon && icon.name ?
                                        <Icon
                                            name={icon.name}
                                            size={icon.size}
                                            primary={isSelected || isActive}
                                            disabled={isInactive}
                                            // TODO remove
                                            // secondary={
                                            //     isSelected ? false : !isInactive
                                            // }
                                            style={componentStyles.icon}
                                        /> : null
                                }
                                <ListItemText
                                    active={isSelected || isActive}
                                    inactive={isSelected ? false : isInactive}
                                >
                                    {option.name}
                                </ListItemText>
                                {
                                    isActive ?
                                        <Icon
                                            name="delete"
                                            onClick={onActionButtonClick}
                                            className={ACTION_BTN_CLASS}
                                            primary={isSelected || isActive}
                                            disabled={isInactive}
                                            // TODO remove
                                            // secondary={
                                            //     isSelected || isActive ?
                                            //         false : !isInactive
                                            // }
                                            style={componentStyles.actionIcon}
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

export default DropdownSearchView;
