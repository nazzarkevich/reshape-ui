import React from 'react';
import { ListItemText } from '../style';

const ListItemTextView = props => {
    const {
        children,
        className,
        componentStyles
    } = props;

    return (
        <ListItemText
            className={className}
            styles={componentStyles}
        >
            {children}
        </ListItemText>
    );
};

ListItemTextView.displayName = 'ListItemTextView';

export default ListItemTextView;
