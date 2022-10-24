import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SwitchIconButtonView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import { ICON_STATUS, ICON_STATE } from './switchIconButton.ct';

class SwitchIconButton extends Component {
    constructor (props) {
        super(props);

        this.state = {
            status: props.status,
            hover:  false
        };
    }

    static displayName = 'SwitchIconButton';

    static propTypes = {
        id:                  PropTypes.string,
        style:               PropTypes.shape(),
        rotate:              PropTypes.number,
        status:              PropTypes.string,
        iconName:            PropTypes.string,
        iconColor:           PropTypes.string,
        className:           PropTypes.string,
        onIconClick:         PropTypes.func,
        switchedIconName:    PropTypes.string,
        onSwitchedIconClick: PropTypes.func
    };

    static defaultProps = {
        style:  {},
        status: ICON_STATUS.INITIAL
    };

    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.status !== nextProps.status) {
            return { status: nextProps.status };
        }

        return null;
    }

    handleMouseOver = () => {
        return this.setState({ hover: true });
    };

    handleMouseLeave = () => {
        return this.setState({ hover: false });
    };

    handleIconClick = event => {
        const { onIconClick } = this.props;

        if (typeof onIconClick === 'function') {
            onIconClick(event);
        }
    };

    handleSwitchedIconClick = event => {
        const { onSwitchedIconClick } = this.props;

        if (typeof onSwitchedIconClick === 'function') {
            onSwitchedIconClick(event);
        }
    };

    getIconColor = status => {
        return ICON_STATE[status];
    };

    isStatusActive = status => {
        return status === ICON_STATUS.ACTIVE;
    };

    render () {
        const { hover, status } = this.state;
        const {
            id,
            rotate,
            iconColor,
            iconName,
            className,
            switchedIconName
        } = this.props;

        const styles = compileStyles(
            stylesheet, this.props, this.state
        );

        const iconButtonProps = {
            id,
            rotate,
            iconName,
            hover,
            status,
            className,
            iconColor,
            switchedIconName,
            onIconClick:         this.handleIconClick,
            getIconColor:        this.getIconColor,
            onMouseOver:         this.handleMouseOver,
            onMouseLeave:        this.handleMouseLeave,
            isStatusActive:      this.isStatusActive,
            onSwitchedIconClick: this.handleSwitchedIconClick,
            styles
        };

        return <SwitchIconButtonView {...iconButtonProps}/>;
    }
}

export default SwitchIconButton;
