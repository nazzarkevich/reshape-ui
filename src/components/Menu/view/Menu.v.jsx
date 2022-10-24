import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Icon from '../../Icon';
import Divider from '../../Divider';
import List from '../../List';
import ListItem from '../../ListItem';
import ListItemText from '../../ListItemText';

import { Menu } from '../style';

const propTypes = {
    isOpen:          PropTypes.bool,
    isAccent:        PropTypes.func,
    isInactive:      PropTypes.func,
    className:       PropTypes.string,
    onKeyDown:       PropTypes.func,
    onClick:         PropTypes.func,
    onListItemClick: PropTypes.func,
    componentStyles: PropTypes.shape(),
    options:         PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })
    )
};

const MenuView = React.forwardRef((props, ref) => {
    const {
        onClick,
        isOpen,
        options,
        isAccent,
        isInactive,
        className,
        onListItemClick,
        componentStyles
    } = props;

    const {
        menuStyle,
        listStyle,
        iconStyle
    } = componentStyles;

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <Menu
            styles={menuStyle}
            className={className}
            onClick={onClick}
            ref={ref}
        >
            <List style={listStyle}>
                {
                    options && options.map(option => {
                        const { id, name, icon, hasDivider } = option;

                        const inactive = isInactive(id);
                        const accent = isAccent(id);

                        return (
                            <Fragment key={id}>
                                {
                                    hasDivider ?
                                        <Divider
                                            style={{
                                                marginTop: 4,
                                                marginBottom: 4
                                            }}
                                        />
                                        :
                                        null
                                }
                                <ListItem
                                    key={id}
                                    onClick={onListItemClick(option)}
                                >
                                    {
                                        icon && icon.name ?
                                            <Icon
                                                name={icon.name}
                                                size={icon.size}
                                                secondary={accent}
                                                style={iconStyle}
                                            /> : null
                                        // TODO remove after refactoring
                                        // <Icon
                                        //     name={icon.name}
                                        //     size={icon.size}
                                        //     secondary={!inactive}
                                        //     accent={accent}
                                        //     style={iconStyle}
                                        // /> : null
                                    }
                                    <ListItemText
                                        truncate
                                        accent={accent}
                                        inactive={inactive}
                                    >
                                        {name}
                                    </ListItemText>
                                </ListItem>
                            </Fragment>
                        );
                    })
                }
            </List>
        </Menu>,
        document.body
    );
});

MenuView.displayName = 'MenuView';
MenuView.propTypes = propTypes;

export default MenuView;
