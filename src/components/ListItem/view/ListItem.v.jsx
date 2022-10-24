import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../style';

const ListItemView = props => {
    const {
        id,
        data,
        onClick,
        children,
        className,
        elementRef,
        onMouseOver,
        onMouseEnter,
        onMouseLeave,
        componentStyles
    } = props;

    return (
        <ListItem
            id={id}
            data-id={data}
            ref={elementRef}
            onClick={onClick}
            className={className}
            onMouseOver={onMouseOver}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            styles={componentStyles}
        >
            {children}
        </ListItem>
    );
};

ListItemView.displayName = 'ListItemView';

ListItemView.propTypes = {
    id:              PropTypes.string,
    onClick:         PropTypes.func,
    className:       PropTypes.string,
    elementRef:      PropTypes.func,
    onMouseOver:     PropTypes.func,
    onMouseEnter:    PropTypes.func,
    onMouseLeave:    PropTypes.func,
    componentStyles: PropTypes.shape()
};

export default ListItemView;
