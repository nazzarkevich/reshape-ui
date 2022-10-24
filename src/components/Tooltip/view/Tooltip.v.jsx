import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Wrapper, Tooltip } from '../style';

const TooltipView = props => {
    const {
        id,
        show,
        title,
        children,
        className,
        setRootRef,
        setTooltipRef,
        tooltipPosition,
        onMouseOver,
        onMouseLeave,
        componentStyles
    } = props;

    const tooltipStyles = {
        ...componentStyles.tooltip,
        ...tooltipPosition
    };

    let tooltipElement = null;

    if (show) {
        tooltipElement = (
            ReactDOM.createPortal(
                <Tooltip
                    role="tooltip"
                    className="tooltip"
                    ref={setTooltipRef}
                    styles={tooltipStyles}
                >
                    {title}
                </Tooltip>,
                document.body
            )
        );
    }

    return (
        <Fragment>
            <Wrapper
                id={id}
                ref={setRootRef}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                className={className}
                styles={componentStyles.wrapper}
            >
                {children}
            </Wrapper>
            {tooltipElement}
        </Fragment>
    );
};

TooltipView.displayName = 'TooltipView';

TooltipView.propTypes = {
    id:              PropTypes.string,
    show:            PropTypes.bool,
    title:           PropTypes.string,
    className:       PropTypes.string,
    setRootRef:      PropTypes.func,
    setTooltipRef:   PropTypes.func,
    onMouseOver:     PropTypes.func,
    onMouseLeave:    PropTypes.func,
    tooltipPosition: PropTypes.shape({
        left: PropTypes.number
    }),
    componentStyles: PropTypes.shape({}),
    children:        PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TooltipView;
