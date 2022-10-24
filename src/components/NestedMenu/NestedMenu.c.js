import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NestedMenuView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import Icon from '../Icon';
import List from '../List';
import ListItem from '../ListItem';
import ListItemText from '../ListItemText';
import { escapeRegExp } from '../utils';
import { KEY } from '../constants';
import { findRecursivelyOptionsById } from './utils';

import _isEqual from 'lodash/isEqual';
import Divider from '../Divider';

const propTypes = {
    open:            PropTypes.bool,
    modal:           PropTypes.bool,
    disableSearch:   PropTypes.bool,
    placeholder:     PropTypes.string,
    className:       PropTypes.string,
    inputSize:       PropTypes.string,
    onClose:         PropTypes.func,
    onKeyDown:       PropTypes.func,
    elementRef:      PropTypes.func,
    onInputChange:   PropTypes.func,
    // anchorEl:        PropTypes.oneOfType([
    //     PropTypes.func,
    //     PropTypes.instanceOf(Element)
    // ]),
    options:         PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })),
    searchOptions:   PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })),
    inactiveOptions: PropTypes.arrayOf(
        PropTypes.string
    )
};

const defaultProps = {
    options:         [],
    searchOptions:   [],
    inactiveOptions: [],
    placeholder:     'Add Element',
    disableSearch:   true,
    modal:           false
};

class NestedMenu extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            query:          null,
            selectedIds:    ['2'],
            optionIndex:    0,
            depthLevel:     0,
            selectedOption: null,
            options:        props.options,
            searchOptions:  props.options
        };
    }

    static displayName = 'NestedMenu';

    static propTypes = propTypes;

    static defaultProps = defaultProps;

    componentDidUpdate (prevProps, prevState) {
        const { query } = this.state;
        const {
            disableSearch,
            options,
            // anchorEl,
            open
        } = this.props;

        if (!_isEqual(prevProps.options, options)) {
            this.setState({ options });
        }

        if (prevState.query !== query) {
            this.setState({ options: this.getOptions() });
        }

        if (prevProps.open !== open && open) {
            !disableSearch && this.focusInput();
        }

        // if (prevProps.open !== open && anchorEl !== null) {
        //     const coordinates = calcMenuPosition(anchorEl, this.listElement);
        //
        //     this.setState({ menuCoords: coordinates });
        // }

    }

    closeMenu = () => {
        this.resetState();
    };

    resetState = () => {
        const { options } = this.props;

        this.setState({
            query:          null,
            selectedIds:    [],
            depthLevel:     0,
            optionIndex:    0,
            searchOptions:  options,
            selectedOption: null
        });
    };

    handleKeyDown = event => {
        const { onKeyDown } = this.props;

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }

        this.manageKeyDown(event);
    };

    manageKeyDown = event => {
        const { query } = this.state;

        if (!query) this.manageSublistNavigation(event);

        if (query) this.manageListNavigation(event);
    };

    manageSublistNavigation = event => {
        const {
            searchOptions,
            optionIndex,
            depthLevel,
            selectedOption
        } = this.state;
        const { key } = event;

        if (key === KEY.ESCAPE) this.closeMenu();

        if (key === KEY.ENTER) this.handleItemClick(selectedOption)(event);
        // arrow up/down button should select next/previous list element

        if (key === KEY.ARROW_UP && optionIndex > 0) {
            const prevOptionIndex = optionIndex - 1;
            const prevOption = searchOptions[prevOptionIndex];

            this.handleSelectedId(prevOption.id, depthLevel)();
            this.decrementOptionIndex();
            this.setOption(prevOption);
        }

        // set initial values if option is not selected
        if (key === KEY.ARROW_DOWN && !selectedOption) {
            const firstOption = searchOptions[0];

            this.handleSelectedId(firstOption.id, 0)();
            this.setOption(firstOption);
        }

        if (
            key === KEY.ARROW_DOWN &&
            selectedOption &&
            optionIndex < searchOptions.length - 1
        ) {
            const nextOptionIndex = optionIndex + 1;
            const nextOption = searchOptions[nextOptionIndex];

            this.handleSelectedId(nextOption.id, depthLevel)();
            this.incrementOptionIndex();
            this.setOption(nextOption);
        }

        if (key === KEY.ARROW_RIGHT) {
            if (this.hasOptionSublist(selectedOption)) {
                const { sublist } = selectedOption;

                this.setState(prevState => ({
                    optionIndex:    0,
                    depthLevel:     prevState.depthLevel + 1,
                    searchOptions:  sublist,
                    selectedOption: sublist[0]
                }), () => {
                    const { optionIndex, depthLevel } = this.state;

                    this.handleSelectedId(
                        sublist[optionIndex].id,
                        depthLevel
                    )();
                });
            }
        }

        if (key === KEY.ARROW_LEFT) {
            const { selectedOption } = this.state;

            const { options, optionIndex } = findRecursivelyOptionsById(
                this.props.options, selectedOption.id
            );
            const prevOption = options
                .find((option, index) => index === optionIndex);

            if (
                // return to previous list if optionIndex === 0
                this.state.optionIndex === 0 &&
                this.hasOptionSublist(prevOption)
            ) {
                this.setState(prevState => ({
                    depthLevel:     prevState.depthLevel - 1,
                    optionIndex,
                    // options from the same level
                    searchOptions:  options,
                    selectedOption: prevOption
                }), () => {
                    this.removeSelectedId(selectedOption.id)();
                });
            }
        }
    };

    manageListNavigation = event => {
        const { key } = event;

        const { options, optionIndex } = this.state;

        if (key === KEY.ESCAPE) this.closeMenu();

        if (key === KEY.ENTER) {
            const option = this.findOptionByIndex();

            if (option) this.handleItemClick(option)(event);
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
    };

    handleSelectedId = (id, depthLevel) => () => {
        const { selectedIds } = this.state;

        const updatedArray = [...selectedIds];

        updatedArray[depthLevel] = id;

        this.setState({
            selectedIds: updatedArray,
            depthLevel
        });
    };

    removeSelectedId = id => () => {
        const { selectedIds } = this.state;

        const updatedArray = selectedIds
            .filter(selectedId => selectedId !== id);

        this.setState({ selectedIds: updatedArray });
    };

    hasOptionSublist = option => {
        const { sublist } = option;

        return Boolean(sublist && Array.isArray(sublist) && sublist.length);
    };

    findOptionByIndex = () => {
        const { options, optionIndex } = this.state;

        return options.find((item, index) => optionIndex === index);
    };

    setOption = option => {
        this.setState({ selectedOption: option });
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

    isOptionFocused = (id, depthLevel) => {
        const { selectedIds } = this.state;

        return selectedIds[depthLevel] === id;
    };

    isOptionHovered = id => {
        const option = this.findOptionByIndex();

        return option && option.id === id;
    };

    filterOptions (options) {
        const { query } = this.state;

        const pattern = new RegExp(escapeRegExp(query), 'ig');

        return options.filter(item => item.name.match(pattern));
    }

    getOptions () {
        const { query } = this.state;
        const { options, searchOptions } = this.props;

        let result = options || searchOptions;

        if (query && searchOptions.length) {
            result = this.filterOptions(searchOptions);
        } else if (query && options.length) {
            result = this.filterOptions(options);
        }

        return result;
    }

    isOptionInactive = id => {
        const { inactiveOptions } = this.props;

        return inactiveOptions.includes(id);
    };

    handleQueryChange = event => {
        const { onInputChange } = this.props;

        if (typeof onInputChange === 'function') {
            onInputChange(event);
        }

        this.setState({ query: event.target.value });
    };

    handleItemClick = listItem => event => {
        const { onClose } = this.props;
        const { id, name } = listItem;
        // need because of nested structure
        event.stopPropagation();

        if (
            typeof onClose === 'function' &&
            !this.hasOptionSublist(listItem)
        ) {
            onClose({ id, name, event });

            this.closeMenu();
        }
    };

    renderMenuItem = (item, depthLevel, componentStyles) => {
        const { query, selectedIds } = this.state;
        const { id, name, icon, sublist, hasDivider } = item;

        const isSublistExist = sublist && sublist.length;

        const { listStyle, iconStyle, arrowStyle } = componentStyles;

        let sublistElement = null,
            sublistIcon = null;

        if (isSublistExist) {
            sublistIcon = (
                <Icon
                    disabled={this.isOptionInactive(id)}
                    name="arrow-right"
                    style={arrowStyle}
                />
            );
        }

        if (isSublistExist && selectedIds[depthLevel] === id) {
            const nextDepthLevel = depthLevel + 1;

            const { width } = this.getListDimensions();

            const composedListStyle = {
                ...listStyle,
                ...{ left: `${width}px`, top: '-4px' }
            };

            sublistElement = (
                <List
                    key={`sublist-${sublist.id}`}
                    style={composedListStyle}
                >
                    {
                        sublist.map(sublistItem =>
                            this.renderMenuItem(
                                sublistItem,
                                nextDepthLevel,
                                componentStyles
                            ))
                    }
                </List>
            );
        }

        return (
            <React.Fragment key={id}>
                {
                    hasDivider ?
                        <Divider
                            style={{
                                marginTop:    4,
                                marginBottom: 4
                            }}
                        /> : null
                }
                <ListItem
                    id={id}
                    hover={
                        query ?
                            this.isOptionHovered(id) :
                            this.isOptionFocused(id, depthLevel)
                    }
                    onClick={this.handleItemClick(item)}
                    onMouseLeave={this.removeSelectedId(id)}
                    onMouseEnter={this.handleSelectedId(id, depthLevel)}
                >
                    {sublistElement}
                    {
                        icon && icon.name ?
                            <Icon
                                disabled={this.isOptionInactive(id)}
                                name={icon.name}
                                style={iconStyle}
                            /> : null
                    }
                    <ListItemText
                        truncate
                        inactive={this.isOptionInactive(id)}
                    >
                        {name}
                    </ListItemText>
                    {sublistIcon}
                </ListItem>
            </React.Fragment>
        );
    };

    focusInput = () => {
        this.inputElement.focus();
    };

    inputRef = el => {
        this.inputElement = el;
    };

    listRef = el => {
        this.listElement = el;
    };

    rootRef = el => {
        this.root = el;

        const { elementRef } = this.props;

        if (typeof elementRef === 'function') {
            elementRef(this.root);
        }
    };

    getListDimensions () {
        return this.listElement.getBoundingClientRect();
    }

    render () {
        const {
            open,
            modal,
            className,
            inputSize,
            placeholder,
            disableSearch
        } = this.props;

        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const menuProps = {
            ...this.state,
            open,
            modal,
            className,
            inputSize,
            placeholder,
            disableSearch,
            listRef:        this.listRef,
            rootRef:        this.rootRef,
            inputRef:       this.inputRef,
            onKeyDown:      this.manageKeyDown,
            renderMenuItem: this.renderMenuItem,
            onQueryChange:  this.handleQueryChange,
            componentStyles
        };

        return <NestedMenuView {...menuProps}/>;
    }
}

export default NestedMenu;
