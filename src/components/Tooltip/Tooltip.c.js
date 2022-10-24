import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TooltipView from './view';
import stylesheet from './style';
import compileStyles from '../utils/compileStyles';
import {
    calcLeftPosition,
    calcTopPosition
} from './utils';

import {
    PLACEMENT,
    DEFAULT_TITLE,
    ENTER_DELAY,
    TOOLTIP_SCROLL_CONTAINER
} from './tooltip.ct';

class Tooltip extends Component {
    constructor (props) {
        super(props);

        this.state = {
            show:     false,
            hover:    false,
            position: null
        };

        this.scrollContainer = null;
    }

    static displayName = 'Tooltip';

    static propTypes = {
        id:         PropTypes.string,
        placement:  PropTypes.string,
        title:      PropTypes.string,
        className:  PropTypes.string,
        // The number of milliseconds
        // to wait before showing the tooltip
        enterDelay: PropTypes.number,
        children:   PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]).isRequired
    };

    static defaultProps = {
        placement:  PLACEMENT.TOP,
        title:      DEFAULT_TITLE,
        enterDelay: ENTER_DELAY
    };

    componentDidMount () {
        this.scrollContainer = document.querySelector(`.${TOOLTIP_SCROLL_CONTAINER}`);

        if (this.scrollContainer) {
            this.scrollContainer.addEventListener(
                'scroll',
                this.handleContainerScroll
            );
        }
    }

    componentWillUnmount () {
        if (this.scrollContainer) {
            this.scrollContainer.removeEventListener(
                'scroll',
                this.handleContainerScroll
            );
        }
    }

    componentDidUpdate (prevProps, prevState) {
        const { hover, show } = this.state;
        const { enterDelay } = this.props;

        if (hover && hover !== prevState.hover) {
            this.timerId = setTimeout(this.showTooltip, enterDelay);
        }

        if (!hover && hover !== prevState.hover) {
            this.hideTooltip();
        }

        if (show && show !== prevState.show) {
            this.setPosition();
        }
    }

    handleContainerScroll = () => {
        const { show } = this.state;

        if (show) this.hideTooltip();
    };

    showTooltip = () => {
        this.setState({ show: true });
    };

    hideTooltip = () => {
        clearTimeout(this.timerId);
        this.setState({ show: false });
    };

    handleMouseOver = () => {
        this.setState({ hover: true });
    };

    handleMouseLeave = () => {
        this.setState({ hover: false });
    };

    setTooltipRef = el => {
        this.tooltip = el;
    };

    setRootRef = el => {
        this.root = el;
    };

    getPosition = () => {
        const { placement } = this.props;
        const rootInfo = this.root.firstChild.getBoundingClientRect();
        const tooltipInfo = this.tooltip.getBoundingClientRect();

        return {
            left: calcLeftPosition(rootInfo, tooltipInfo, placement),
            top:  calcTopPosition(rootInfo, tooltipInfo, placement)
        };
    };

    setPosition = () => {
        const position = this.getPosition();

        this.setState({ position });
    };

    render () {
        const { id, children, placement, title, className } = this.props;
        const { position: tooltipPosition, show } = this.state;
        const componentStyles = compileStyles(
            stylesheet, this.props, this.state
        );

        const props = {
            id,
            show,
            title,
            className,
            placement,
            children,
            tooltipPosition,
            componentStyles,
            setRootRef:    this.setRootRef,
            setTooltipRef: this.setTooltipRef,
            onMouseOver:   this.handleMouseOver,
            onMouseLeave:  this.handleMouseLeave
        };

        return <TooltipView {...props}/>;
    }
}

export default Tooltip;
