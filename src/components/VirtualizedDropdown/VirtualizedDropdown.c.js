import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VirtualizedDropdownView from './view';

import { KEY } from '../constants';

import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import { escapeRegExp } from '../utils';

import { ACTION_BTN_CLASS } from './dropdownSearch.ct';
import { setInitialOptionIndex, sortByIds } from './utils';

class VirtualizedDropdown extends Component {
    constructor (props) {
        super(props);

        this.state = {
            query:       null,
            selectedId:  props.value,
            isOpen:      props.open,
            error:       props.error,
            options:     props.options,
            optionIndex: setInitialOptionIndex(props)
        };

        this.listRef = React.createRef();
    }

    static displayName = 'VirtualizedDropdown';

    static defaultProps = {
        value:            null,
        open:             false,
        error:            false,
        hidden:           false,
        options:          [],
        activeOptions:    [],
        showToggleButton: false,
        emptyListTitle:   'Select Item',
        queryPlaceholder: 'Select Item'
    };

    static propTypes = {
        open:                PropTypes.bool,
        value:               PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.oneOf([null])
        ]),
        error:               PropTypes.bool,
        className:           PropTypes.string,
        listMaxHeight:       PropTypes.string,
        emptyListTitle:      PropTypes.string,
        queryPlaceholder:    PropTypes.string,
        showToggleButton:    PropTypes.bool,
        hidden:              PropTypes.bool,
        onChange:            PropTypes.func,
        onKeyPress:          PropTypes.func,
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

    componentDidUpdate (prevProps, prevState) {
        const { query, isOpen } = this.state;
        const { error, options, value } = this.props;

        // to connect external component state with local state
        // need to pass value as a prop
        if (prevProps.value !== value) {
            this.setState({ selectedId: value });
        }

        if (prevState.query !== query && query) {
            this.setState({ options: this.filterOptions() });
        }

        if (prevState.query !== query && !query) {
            this.setState({ options });
        }

        // when dropdown is open and user is typing
        // reset optionIndex to the first element
        if (isOpen && prevState.query !== query) {
            this.setState({ optionIndex: 0 });
        }

        if (prevProps.error !== error) {
            this.setState({ error });
        }
    }

    componentDidMount () {
        // need because can mount without triggering open event
        this.focusInput();
    }

    resetState = () => {
        this.setState({
            query:       null,
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
            // need to set optionIndex for navigation
            // return index from method
            const optionIndex = this.findOptionIndexById(id);

            this.setState({
                selectedId: id,
                optionIndex,
                event
            }, this.handleChange);

            this.hideList();
        }
    };

    hideList () {
        this.setState({
            isOpen: false,
            query:  null
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

    findOptionIndexById = id => {
        const { options } = this.props;

        return options.findIndex(option => option.id === id);
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

    handleChange = () => {
        const { onChange } = this.props;

        if (typeof onChange === 'function') {
            const { selectedId } = this.state;

            const selectedElement = this.getElementById(selectedId);

            onChange(selectedElement);
        }
    };

    handleTitleClick = () => {
        this.setState({ isOpen: true }, this.focusInput);
    };

    handleToggleButtonClick = () => {
        this.setState((state) => ({ isOpen: !state.isOpen }), this.focusInput);
    };

    handleQueryChange = event => {
        const { onInputChange } = this.props;
        const { target: { value } } = event;

        if (typeof onInputChange === 'function') {
            onInputChange(event);
        }

        this.setState({ query: value });
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
        const { optionIndex } = this.state;
        const { options } = this.state;
        const { key } = event;

        if (key === KEY.ESCAPE) this.hideList();

        if (key === KEY.ENTER) {
            const option = this.findOptionByIndex(optionIndex);

            if (option) {
                this.handleListItemClick(option)(event);
            } else {
                this.hideList();
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

        this.listRef.current.scrollToItem(itemIndex);
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
            this.hideList();
        }
    };

    focusInput () {
        if (this.input && this.input !== null) {
            this.input.focus();
        }
    }

    inputRef = el => {
        this.input = el;
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
            activeOptions,
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
            options: sortByIds(options, activeOptions),
            className,
            selectedId,
            optionIndex,
            showToggleButton,
            emptyListTitle,
            queryPlaceholder,
            listMaxHeight,
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

        return <VirtualizedDropdownView {...dropdownProps}/>;
    }
}

export default VirtualizedDropdown;
