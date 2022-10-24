import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutocompleteView from './view';

import stylesheet from './style';
import { escapeRegExp } from '../utils';
import compileStyles from '../utils/compileStyles';

import {
    REASON,
    scrollIntoViewOptions
} from './autocomplete.ct';

import { KEY, EVENT } from '../constants';

import _isEqual from 'lodash/isEqual';

// const isValueValid = value => typeof value === 'string' || value === null;

const propTypes = {
    value:             PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({})
    ]),
    error:             PropTypes.bool,
    open:              PropTypes.bool,
    disabled:          PropTypes.bool,
    freeSolo:          PropTypes.bool,
    secondary:         PropTypes.bool,
    className:         PropTypes.string,
    placeholder:       PropTypes.string,
    onChange:          PropTypes.func.isRequired,
    onKeyDown:         PropTypes.func,
    onInputChange:     PropTypes.func,
    elementRef:        PropTypes.func,
    showDeleteButton:  PropTypes.bool,
    onActionIconClick: PropTypes.func,
    options:           PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    inactiveOptions:   PropTypes.arrayOf(PropTypes.string),
    activeOptions:     PropTypes.arrayOf(PropTypes.string),
    applied:           PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

const defaultProps = {
    open:             false,
    error:            false,
    disabled:         false,
    // If true, the Autocomplete is free solo,
    // meaning that the user input is not bound to provided options.
    freeSolo:         false,
    options:          [],
    placeholder:      'Select Item',
    showDeleteButton: true
};

// const getSuggestedOption = (options, query) => {
//     if (options && !options.length && query !== '') {
//         return [
//             {
//                 id:   'create',
//                 name: `create ${query}`
//             }
//         ];
//     }
//
//     return options;
// };

class Autocomplete extends Component {
    constructor (props) {
        super(props);

        this.state = {
            query:       null,
            optionIndex: -1,
            isOpen:      props.open,
            options:     props.options
        };
    }

    static displayName = 'Autocomplete';

    static defaultProps = defaultProps;

    static propTypes = propTypes;

    componentDidUpdate (prevProps, prevState) {
        const { query } = this.state;
        const { options, open } = this.props;

        // need to reset optionIndex for navigation
        if (query !== null && prevState.query !== query) {
            this.setState({ options: this.filterOptions() });
        }

        // TODO check this
        if (!_isEqual(prevProps.options, options)) {
            this.setState({ options });
        }

        if (prevProps.open !== open) {
            this.setState({ isOpen: open }, () => {
                if (this.state.isOpen) this.focusInput();
            });
        }

        if (this.state.isOpen && !prevState.isOpen) {
            this.addEventListeners();
        }

        if (!this.state.isOpen && prevState.isOpen) {
            this.removeEventListeners();
        }
    }

    addEventListeners = () => {
        document.addEventListener(EVENT.CLICK, this.handleOutsideClick);
    };

    removeEventListeners = () => {
        document.removeEventListener(EVENT.CLICK, this.handleOutsideClick);
    };

    close () {
        this.input.blur();

        this.setState({
            // TODO think about resetting query state after closing
            query:       '',
            isOpen:      false,
            optionIndex: -1
        });
    }

    filterOptions () {
        const { query } = this.state;
        const { options } = this.props;

        const pattern = new RegExp(escapeRegExp(query), 'ig');

        return options.filter(item => item.name.match(pattern));
    }

    // TODO remove it later
    // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
    // handleListItemClick = ({ id }) => event => {
    //     event.persist();
    //
    //     const actionButton = event.target.closest(`.${ACTION_BTN_CLASS}`);
    //
    //     if (actionButton) this.handleActionButtonClick(id);
    //
    //     if (!actionButton) {
    //         // need to prevent closing while clicking on action button
    //         this.setState({ event });
    //
    //         this.handleChange(event, id);
    //
    //         this.close();
    //     }
    // };

    handleListItemClick = ({ id, name }) => event => {
        this.handleChange(event, { id, name });

        this.close();
    };

    handleActionIconClick = id => event => {
        const { onActionIconClick } = this.props;

        if (typeof onActionIconClick === 'function') {
            onActionIconClick(event, id);
        }
    };

    isOptionSelected = id => {
        const { value } = this.props;

        return value === id;
    };

    isOptionFocused = index => {
        const { optionIndex } = this.state;

        return optionIndex === index;
    };

    isOptionActive = id => {
        const { activeOptions } = this.props;

        let result = false;

        if (activeOptions && activeOptions.length) {
            result = activeOptions.find(optionId => optionId === id);
        }

        return Boolean(result);
    };

    isOptionInactive = id => {
        const { inactiveOptions } = this.props;

        let result = false;

        if (inactiveOptions && inactiveOptions.length) {
            result = inactiveOptions.find(optionId => optionId === id);
        }

        return Boolean(result);
    };

    handleChange = (event, value, reason = REASON.SELECT) => {
        const { onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange(event, value, reason);
        }
    };

    handleToggleButtonClick = () => {
        this.setState((state) => ({ isOpen: !state.isOpen }), this.focusInput);
    };

    handleQueryChange = event => {
        const { onInputChange } = this.props;

        if (typeof onInputChange === 'function') {
            onInputChange(event);
        }

        this.setState({ query: event.target.value });
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }

        this.manageKeyDown(event);
    };

    handleInputFocus = () => {
        const { disabled } = this.props;

        if (!this.state.isOpen && !disabled) {
            this.setState(
                { isOpen: true },
                this.focusInput
            );
        }
    };

    handleEnterKeyDown = event => {
        const { freeSolo } = this.props;
        const { optionIndex, query } = this.state;
        const option = this.findOptionByIndex(optionIndex);

        if (option) {
            this.handleListItemClick(option)(event);
            this.close();
        }

        if (!option && freeSolo) {
            this.handleChange(event, query, REASON.CREATE);
            this.close();
        }
    };

    manageKeyDown = event => {
        const { optionIndex, options } = this.state;
        const { key } = event;

        if (key === KEY.ESCAPE) this.close();

        if (key === KEY.ENTER) {
            this.handleEnterKeyDown(event);
        }

        // prevent moving caret to the start
        if (key === KEY.ARROW_UP) event.preventDefault();
        // arrow up/down button should select next/previous list element
        if (key === KEY.ARROW_UP && optionIndex > 0) {
            this.decrementOptionIndex();
        }

        if (key === KEY.ARROW_DOWN && optionIndex < options.length - 1) {
            this.incrementOptionIndex();
        }

        if (key === KEY.ARROW_UP || key === KEY.ARROW_DOWN) {
            this.scrollToItem(event);
        }
    };

    scrollToItem = event => {
        const { optionIndex } = this.state;
        const { options } = this.state;
        const { key } = event;

        let itemIndex = optionIndex;

        if (key === KEY.ARROW_UP && optionIndex > 0) {
            // prevIndex
            itemIndex = optionIndex - 1;
        }

        if (key === KEY.ARROW_DOWN && optionIndex < options.length - 1) {
            // nextIndex
            itemIndex = optionIndex + 1;
        }

        if (this.listElement) {
            const listChildren = Array.from(this.listElement.childNodes);
            const listItem = listChildren
                .find((item, index) => index === itemIndex);

            if (listItem) {
                const listDimensions = this.listElement.getBoundingClientRect();
                const listItemDimensions = listItem.getBoundingClientRect();

                const listItemTop = listItemDimensions.top;

                const listHeight = listDimensions.height;
                const listTop = listDimensions.top;

                if (listItemTop > listHeight) {
                    listItem.scrollIntoView({
                        ...scrollIntoViewOptions,
                        block: 'end'
                    });
                }

                if (listItemTop < listTop) {
                    listItem.scrollIntoView(scrollIntoViewOptions);
                }
            }
        }
    };

    findOptionByIndex = optionIndex => {
        const { options } = this.state;

        return options.find((item, index) => optionIndex === index);
    };

    incrementOptionIndex = () => {
        this.setState(prevState => ({
            optionIndex: prevState.optionIndex + 1
        }));
    };

    decrementOptionIndex = () => {
        this.setState(prevState => ({
            optionIndex: prevState.optionIndex - 1
        }));
    };

    getSelectedOption = () => {
        const { options } = this.props;

        return options.find(this.isOptionSelected);
    };

    // onMouseDown event because title is unmounted after bubbling
    handleOutsideClick = event => {
        if (
            this.state.isOpen &&
            this.root &&
            !this.root.contains(event.target)
        ) {
            this.close();
        }
    };

    focusInput () {
        if (this.input !== undefined && this.input !== null) {
            this.input.focus();
        }
    }

    inputRef = el => {
        this.input = el;
    };

    listRef = el => {
        this.listElement = el;
    };

    setRootRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }

        this.root = el;
    };

    render () {
        const {
            error,
            value,
            applied,
            className,
            secondary,
            placeholder,
            showDeleteButton
        } = this.props;

        const {
            query,
            isOpen,
            options,
            optionIndex
        } = this.state;

        const styles = compileStyles(
            stylesheet, this.props, this.state
        );

        const inputValue = query || query === '' ? query : value;

        const props = {
            error,
            applied,
            isOpen,
            options,
            className,
            secondary,
            inputValue,
            optionIndex,
            placeholder,
            showDeleteButton,
            isOptionFocused:     this.isOptionFocused,
            isOptionActive:      this.isOptionActive,
            isOptionInactive:    this.isOptionInactive,
            isOptionSelected:    this.isOptionSelected,
            onActionIconClick:   this.handleActionIconClick,
            onToggleButtonClick: this.handleToggleButtonClick,
            onListItemClick:     this.handleListItemClick,
            onInputChange:       this.handleQueryChange,
            onInputFocus:        this.handleInputFocus,
            onKeyDown:           this.handleKeyDown,
            setRootRef:          this.setRootRef,
            listRef:             this.listRef,
            inputRef:            this.inputRef,
            styles
        };

        return <AutocompleteView {...props}/>;
    }
}

export default Autocomplete;
