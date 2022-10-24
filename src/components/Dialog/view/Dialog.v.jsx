import React from 'react';
import { Wrapper } from '../style';

const ListView = props => {
    const {
        children,
        className,
        rootRef,
        componentStyles
    } = props;

    return (
        <Wrapper
            ref={rootRef}
            className={className}
            styles={componentStyles}
        >
            {children}
        </Wrapper>
    );
};

ListView.displayName = 'ListView';

export default ListView;
