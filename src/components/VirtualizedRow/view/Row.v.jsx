import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import ListItem from '../../ListItem';
import ListItemText from '../../ListItemText';


const RowView = props => {
    const {
        style,
        index,
        data,
        onMouseOver,
        onMouseLeave
    } = props;

    const {
        options,
        actionIconClass,
        onListItemClick,
        isOptionSelected,
        isOptionInactive,
        isOptionActive,
        isOptionFocused,
        iconStyles
    } = data;

    const option = options[index];

    const { id, name } = option;

    const isActive = isOptionActive(id);
    const isSelected = isOptionSelected(id);
    const isInactive = isOptionInactive(id);
    const isFocused = isOptionFocused(index);

    return (
        <ListItem
            key={id}
            id={id}
            style={style}
            onClick={onListItemClick(option)}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            hover={isFocused}
        >
            <ListItemText
                active={isSelected || isActive}
                inactive={isSelected ? false : isInactive}
                truncate={true}
            >
                {name}
            </ListItemText>
            {
                isActive ?
                    <Icon
                        name="delete"
                        className={actionIconClass}
                        secondary={isSelected || isActive ? false : !isInactive}
                        style={iconStyles}
                    /> : null
            }
        </ListItem>
    );
};

RowView.propTypes = {
    iconClassName: PropTypes.string,
    hover:         PropTypes.bool,
    onMouseOver:   PropTypes.func,
    onMouseLeave:  PropTypes.func
};

export default RowView;
