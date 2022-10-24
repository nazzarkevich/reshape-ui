import React, { Component } from 'react';
import PropTypes from 'prop-types';

import stylesheet from '../List/style';
import compileStyles from '../utils/compileStyles';

import { normalizeStyles, getListHeight } from './utils';
import { ITEM_HEIGHT } from './virtualizedList.ct';

import VirtualizedRow from '../VirtualizedRow';

import { FixedSizeList } from 'react-window';

class VirtualizedList extends Component {

    static propTypes = {
        listRef:        PropTypes.shape(),
        listMaxHeight:  PropTypes.number,
        isOptionActive: PropTypes.func
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const {
            options,
            listRef,
            selectedId,
            optionIndex,
            listMaxHeight,
            actionIconClass,
            onListItemClick,
            isOptionSelected,
            isOptionActive,
            isOptionInactive,
            isOptionFocused,
            iconStyles
        } = this.props;

        const itemData = {
            options,
            selectedId,
            optionIndex,
            actionIconClass,
            onListItemClick,
            isOptionActive,
            isOptionSelected,
            isOptionInactive,
            isOptionFocused,
            iconStyles
        };

        // need to use index
        // const initialOffset = optionIndex ? optionIndex * ITEM_HEIGHT : 0;

        return (
            <FixedSizeList
                ref={listRef}
                itemData={itemData}
                itemSize={ITEM_HEIGHT}
                itemCount={options.length}
                className="virtualized-list"
                // initialScrollOffset={initialOffset}
                height={getListHeight(listMaxHeight)}
                style={{ ...normalizeStyles(componentStyles) }}
            >
                {VirtualizedRow}
            </FixedSizeList>
        );
    }
}

export default VirtualizedList;

