import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from '../style';

const IconView = (props) => {
    const {
        id,
        name,
        onClick,
        onMouseOver,
        onMouseLeave,
        className,
        elementRef,
        componentStyles
    } = props;

    return (
        <Svg
            id={id}
            ref={elementRef}
            onClick={onClick}
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            className={className}
            styles={componentStyles.svg}
        >
            <use xlinkHref={`#${name}`}/>
        </Svg>
    );
};

IconView.propTypes = {
    id:         PropTypes.string,
    name:       PropTypes.string,
    size:       PropTypes.string,
    error:      PropTypes.bool,
    active:     PropTypes.bool,
    secondary:  PropTypes.bool,
    className:  PropTypes.string,
    onClick:    PropTypes.func,
    elementRef: PropTypes.func
};

export default IconView;
