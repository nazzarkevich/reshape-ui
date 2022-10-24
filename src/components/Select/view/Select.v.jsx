import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Title } from '../style';

import List from '../../List';
import ListItem from '../../ListItem';
import ListItemText from '../../ListItemText';

const propTypes = {
    open:            PropTypes.bool,
    value:           PropTypes.string,
    className:       PropTypes.string,
    onKeyDown:       PropTypes.func,
    onClick:         PropTypes.func,
    setRootRef:      PropTypes.func,
    onTitleClick:    PropTypes.func,
    onOptionClick:   PropTypes.func,
    componentStyles: PropTypes.shape(),
    options:         PropTypes.arrayOf(
        PropTypes.shape({
            id:   PropTypes.string,
            name: PropTypes.string
        })
    )
};

const SelectView = props => {
    const {
        open,
        value,
        options,
        className,
        setRootRef,
        onTitleClick,
        onOptionClick,
        componentStyles
    } = props;

    const {
        listStyle,
        titleStyle,
        wrapperStyle,
        listItemStyle,
        listItemTextStyle
    } = componentStyles;

    const optionList = (
        <List
            className={className}
            style={{
                ...listStyle,
                width: wrapperStyle.width
            }}
        >
            {
                options && options.map(option => {
                    const { id, name } = option;

                    const active = value === id;

                    return (
                        <Fragment key={id}>
                            <ListItem
                                key={id}
                                style={listItemStyle}
                                onClick={onOptionClick(option)}
                            >
                                <ListItemText
                                    truncate
                                    active={active}
                                    style={listItemTextStyle}
                                >
                                    {name}
                                </ListItemText>
                            </ListItem>
                        </Fragment>
                    );
                })
            }
        </List>
    );

    return (
        <Wrapper ref={setRootRef} styles={wrapperStyle}>
            <Title
                onClick={onTitleClick}
                styles={titleStyle}
            >
                {value}
            </Title>
            {open ? optionList : null}
        </Wrapper>
    );
};

SelectView.displayName = 'SelectView';
SelectView.propTypes = propTypes;

export default SelectView;
