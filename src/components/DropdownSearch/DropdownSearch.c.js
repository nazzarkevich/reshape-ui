import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownSearchView from './view/DropdownSearch.v';

import stylesheet from './style';
import { escapeRegExp } from '../utils';
import compileStyles from '../utils/compileStyles';

import {
    RESET_ID,
    ACTION_BTN_CLASS,
    scrollIntoViewOptions
} from './dropdownSearch.ct';

import { KEY } from '../constants';

import _isEqual from 'lodash/isEqual';

const isValueValid = value => typeof value === 'string' || value === null;

const propTypes = {
    value:               PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({})
    ]),
    error:               PropTypes.bool,
    open:                PropTypes.bool,
    reset:               PropTypes.bool,
    disabled:            PropTypes.bool,
    className:           PropTypes.string,
    listMaxHeight:       PropTypes.string,
    emptyListTitle:      PropTypes.string,
    resetId:             PropTypes.string,
    // TODO time decision, need to add dynamic position calculation
    listPosition:        PropTypes.string,
    queryPlaceholder:    PropTypes.string,
    showToggleButton:    PropTypes.bool,
    hidden:              PropTypes.bool,
    onChange:            PropTypes.func.isRequired,
    onKeyDown:           PropTypes.func,
    onKeyPress:          PropTypes.func,
    onInputChange:       PropTypes.func,
    elementRef:          PropTypes.func,
    onActionButtonClick: PropTypes.func,
    options:             PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    inactiveOptions:     PropTypes.arrayOf(
        PropTypes.string
    ),
    activeOptions:       PropTypes.arrayOf(
        PropTypes.string
    ),
    applied:             PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
};

const defaultProps = {
    open:             false,
    reset:            false,
    error:            false,
    hidden:           false,
    disabled:         false,
    freeSolo:         false,
    options:          [],
    resetId:          RESET_ID,
    showToggleButton: false,
    emptyListTitle:   'Select Item',
    queryPlaceholder: 'Select Item'
};

class DropdownSearch extends Component {
    constructor (props) {
        super(props);

        this.state = {
            query:       '',
            selectedId:  null,
            optionIndex: 0,
            isOpen:      props.open,
            error:       props.error,
            options:     props.options
        };
    }

    static displayName = 'DropdownSearch';

    static defaultProps = defaultProps;

    static propTypes = propTypes;

    // need to connect parent component state with local state
    static getDerivedStateFromProps (nextProps, prevState) {
        const { value } = nextProps;

        if (isValueValid(value) && value !== prevState.selectedId) {
            return {
                query:      '',
                selectedId: value
            };
        }

        return null;
    }

    componentDidUpdate (prevProps, prevState) {
        const { selectedId, query } = this.state;
        const { error, resetId, options, open } = this.props;

        if (prevState.selectedId !== selectedId && selectedId === resetId) {
            this.resetState();
        }

        if (prevState.query !== query) {
            // need to reset optionIndex for navigation
            this.setState({
                options:     this.filterOptions(),
                optionIndex: 0
            });
        }

        if (!_isEqual(prevProps.options, options)) {
            this.setState({ options });
        }

        if (prevProps.error !== error) {
            this.setState({ error });
        }

        if (prevProps.open !== open) {
            this.setState({ isOpen: open }, () => {
                if (this.state.isOpen) this.focusInput();
            });
        }
    }

    componentDidMount () {
        // need because can mount without triggering open event
        this.focusInput();
    }

    resetState = () => {
        this.setState({
            query:       '',
            error:       false,
            isOpen:      false,
            optionIndex: 0,
            selectedId:  null
        });
    };

    filterOptions () {
        const { query } = this.state;
        const { options } = this.props;

        const pattern = new RegExp(escapeRegExp(query), 'ig');

        return options.filter(item => item.name.match(pattern));
    }

    // https://stackoverflow.com/questions/42089795/reactjs-cant-set-state-from-an-event-with-event-persist
    handleListItemClick = ({ id }) => event => {
        event.persist();

        const actionButton = event.target.closest(`.${ACTION_BTN_CLASS}`);

        if (actionButton) this.handleActionButtonClick(id);

        if (!actionButton) {
            // need to prevent closing while clicking on action button
            this.setState({ event });

            this.handleChange(id);

            this.close();
        }
    };

    close () {
        this.setState({
            query:       '',
            isOpen:      false,
            optionIndex: 0
        });
    }

    getElementById = id => {
        const { options } = this.props;

        let element = null;

        if (id) {
            element = options.find(item => item.id === id);
        }

        return element;
    };

    isOptionSelected = id => {
        const { selectedId } = this.state;

        let result = false;

        if (selectedId && id) result = selectedId === id;

        return result;
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

    handleActionButtonClick = listItemId => {
        const { onActionButtonClick } = this.props;

        if (typeof onActionButtonClick === 'function') {
            onActionButtonClick(listItemId);
        }
    };

    handleChange = selectedId => {
        const { onChange } = this.props;

        if (typeof onChange === 'function') {
            const selectedElement = this.getElementById(selectedId);

            onChange(selectedElement);
        }
    };

    handleTitleClick = () => {
        const { disabled } = this.props;

        if (!disabled) {
            this.setState({ isOpen: true }, this.focusInput);
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

    handleKeyPress = event => {
        const { onKeyPress } = this.props;

        if (typeof onKeyPress === 'function') {
            onKeyPress(event);
        }
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }

        this.manageKeyDown(event);
    };

    manageKeyDown = event => {
        const { optionIndex, options } = this.state;
        const { key } = event;

        if (key === KEY.ESCAPE) this.close();

        if (key === KEY.ENTER) {
            const option = this.findOptionByIndex(optionIndex);

            if (option) {
                this.handleListItemClick(option)(event);
            } else {
                this.close();
            }
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

    // onMouseDown event because title is unmounted after bubbling
    handleOutsideClick = event => {
        if (this.state.isOpen && !this.root.contains(event.target)) {
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

    rootRef = el => {
        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(el);
        }

        this.root = el;
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );
        const {
            applied,
            className,
            listMaxHeight,
            emptyListTitle,
            queryPlaceholder,
            showToggleButton
        } = this.props;

        const {
            error,
            isOpen,
            options,
            selectedId,
            optionIndex
        } = this.state;

        const dropdownProps = {
            error,
            applied,
            isOpen,
            options,
            className,
            selectedId,
            optionIndex,
            showToggleButton,
            emptyListTitle,
            queryPlaceholder,
            listMaxHeight,
            onActionButtonClick: this.handleActionButtonClick,
            selectedElement:     this.getElementById(selectedId),
            onTitleClick:        this.handleTitleClick,
            isOptionFocused:     this.isOptionFocused,
            isOptionActive:      this.isOptionActive,
            isOptionInactive:    this.isOptionInactive,
            isOptionSelected:    this.isOptionSelected,
            onToggleButtonClick: this.handleToggleButtonClick,
            onListItemClick:     this.handleListItemClick,
            onInputChange:       this.handleQueryChange,
            onDocumentClick:     this.handleOutsideClick,
            onKeyPress:          this.handleKeyPress,
            onKeyDown:           this.handleKeyDown,
            rootRef:             this.rootRef,
            listRef:             this.listRef,
            queryRef:            this.inputRef,
            componentStyles
        };

        return <DropdownSearchView {...dropdownProps}/>;
    }
}

export default DropdownSearch;
