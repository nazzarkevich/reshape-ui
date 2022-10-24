import styled from 'styled-components';

/**
 * Taken from
 * https://github.com/facebook/react/blob/37e4329bc81def4695211d6e3795a654ef4d84f5/packages/react-dom/src/shared/CSSProperty.js
 */
const isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};

function setUnitsToPx (styles) {
    const nextStyles = { ...styles };

    Object.keys(nextStyles).forEach(name => {
        const value = nextStyles[name];

        /**
         * Taken from
         * https://github.com/facebook/react/blob/37e4329bc81def4695211d6e3795a654ef4d84f5/packages/react-dom/src/shared/dangerousStyleValue.js
         */
        if (
            typeof value === 'number' &&
            value !== 0 &&
            !({}.hasOwnProperty.call(isUnitlessNumber, name)
                && isUnitlessNumber[name]
            )
        ) {
            nextStyles[name] = `${value}px`;
        }
    });

    return nextStyles;
}
// return function with props, like element(props)
const createStyled = element => (...styledProps) =>
    styled[element](...styledProps, props => setUnitsToPx(props.styles));

export default createStyled;
