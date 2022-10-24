import React from 'react';
import PropTypes from 'prop-types';
import {
    DropdownMainWrapper,
    DropdownTitleWrapper,
    DropdownTitle,
    DropdownButton
} from '../style';

import Icon from '../../Icon';
import Input from '../../Input';

import EventListener from 'react-event-listener';
import VirtualizedList from '../../VirtualizedList';

import { ACTION_BTN_CLASS } from '../dropdownSearch.ct';

const VirtualizedDropdownView = props => {
    const {
        error,
        options,
        applied,
        className,
        showToggleButton,
        emptyListTitle,
        queryPlaceholder,
        selectedId,
        optionIndex,
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

    if (selectedId) {
        dropDownTitleElement = (
            <DropdownTitle
                onClick={onTitleClick}
                styles={componentStyles.title}
            >
                {selectedElement && selectedElement.name}
            </DropdownTitle>
        );
    }

    if (isOpen) {
        dropDownTitleElement = (
            <Input
                data-hj-whitelist=""
                error={error}
                elementRef={queryRef}
                onKeyPress={onKeyPress}
                onKeyDown={onKeyDown}
                onChange={onInputChange}
                placeholder={selectedId ? selectedElement.name : queryPlaceholder}
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

    return (
        <DropdownMainWrapper
            className={className}
            styles={componentStyles.mainWrapper}
            applied={applied}
            ref={rootRef}
        >
            <EventListener
                target={document}
                onMouseDown={onDocumentClick}
            />
            <DropdownTitleWrapper styles={componentStyles.titleWrapper}>
                {dropDownTitleElement}
                {toggleButtonElement}
            </DropdownTitleWrapper>
            {
                isOpen && options.length ?
                    <VirtualizedList
                        options={options}
                        listRef={listRef}
                        listMaxHeight={listMaxHeight}
                        onListItemClick={onListItemClick}
                        selectedId={selectedId}
                        optionIndex={optionIndex}
                        actionIconClass={ACTION_BTN_CLASS}
                        isOptionSelected={isOptionSelected}
                        isOptionActive={isOptionActive}
                        isOptionInactive={isOptionInactive}
                        isOptionFocused={isOptionFocused}
                        iconStyles={componentStyles.icon}
                        style={componentStyles.list}
                    /> : null
            }
        </DropdownMainWrapper>
    );
};

VirtualizedDropdownView.propTypes = {
    optionIndex:    PropTypes.number,
    isOptionActive: PropTypes.func
};

VirtualizedDropdownView.displayName = 'VirtualizedDropdownView';

export default VirtualizedDropdownView;
