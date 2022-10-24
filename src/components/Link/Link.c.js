import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LinkView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';

class Link extends PureComponent {
    constructor (props) {
        super(props);
    }

    static displayName = 'Link';

    static propTypes = {
        href:      PropTypes.string,
        target:    PropTypes.string,
        active:    PropTypes.bool,
        inactive:  PropTypes.bool,
        truncate:  PropTypes.bool,
        fullWidth: PropTypes.bool,
        className: PropTypes.string,
        onClick:   PropTypes.func,
        children:  PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
    };

    handleClick = event => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    render () {
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const {
            href,
            target,
            children,
            className
        } = this.props;

        const listItemText = {
            href,
            target,
            className,
            onClick: this.handleClick,
            componentStyles
        };

        return (
            <LinkView {...listItemText}>
                {children}
            </LinkView>
        );
    }
}

export default Link;
