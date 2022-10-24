import React from 'react';
import { List } from '../style';

const ListView = props => {
    const {
        children,
        className,
        onClick,
        rootRef,
        componentStyles
    } = props;

    return (
        <List
            ref={rootRef}
            className={className}
            styles={componentStyles}
            onClick={onClick}
        >
            {children}
        </List>
    );
};

ListView.displayName = 'ListView';

export default ListView;
