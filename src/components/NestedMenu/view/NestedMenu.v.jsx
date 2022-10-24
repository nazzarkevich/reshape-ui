import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import List from '../../List';
import Input from '../../Input';
import { Menu } from '../style';

const propTypes = {
    open:            PropTypes.bool,
    modal:           PropTypes.bool,
    query:           PropTypes.string,
    inputSize:       PropTypes.string,
    rootRef:         PropTypes.func,
    listRef:         PropTypes.func,
    inputRef:        PropTypes.func,
    className:       PropTypes.string,
    placeholder:     PropTypes.string,
    onKeyDown:       PropTypes.func,
    disableSearch:   PropTypes.bool,
    onQueryChange:   PropTypes.func,
    renderMenuItem:  PropTypes.func,
    options:         PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })),
    componentStyles: PropTypes.shape(),
    // menuCoords:      PropTypes.shape({
    //     top:  PropTypes.number,
    //     left: PropTypes.number
    // })
};

const NestedMenuView = props => {
    const {
        open,
        modal,
        query,
        options,
        listRef,
        rootRef,
        inputRef,
        className,
        // menuCoords,
        onKeyDown,
        inputSize,
        placeholder,
        disableSearch,
        onQueryChange,
        renderMenuItem,
        componentStyles
    } = props;

    const {
        menuStyle,
        inputStyle,
        mainListStyle,
        searchListStyle
    } = componentStyles;

    let listElement = null;

    if (options.length) {
        let listStyle = { ...mainListStyle };

        if (query) listStyle = { ...listStyle, ...searchListStyle };

        listElement = (
            <List
                style={listStyle}
                elementRef={listRef}
            >
                {
                    options.map(listItem =>
                        renderMenuItem(listItem, 0, componentStyles))
                }
            </List>
        );
    }

    const menuElement = (
        <Menu
            className={className}
            styles={menuStyle}
            ref={rootRef}
        >
            {
                !disableSearch ?
                    <Input
                        secondary
                        elementRef={inputRef}
                        onChange={onQueryChange}
                        placeholder={placeholder}
                        onKeyDown={onKeyDown}
                        style={inputStyle}
                        medium={inputSize === 'medium'}
                    /> : null
            }
            {listElement}
        </Menu>
    );


    if (open && modal) {
        return ReactDOM.createPortal(menuElement, document.body);
    }

    if (open) {
        return menuElement;
    }

    return null;
};

NestedMenuView.propTypes = propTypes;

export default NestedMenuView;
