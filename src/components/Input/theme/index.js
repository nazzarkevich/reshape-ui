import color from 'color';

import secondary from './secondary';
import medium from './medium';
import error from './error';

const basic = styles => {
    const { primaryForeground } = styles;

    const placeholderColor = color(primaryForeground)
        .alpha(0.50)
        .rgb()
        .string();

    const hoverPlaceholderColor = color(primaryForeground)
        .alpha(0.75)
        .rgb()
        .string();

    return {
        width:           '100%',
        display:         'inline-block',
        paddingTop:      0,
        paddingRight:    0,
        paddingBottom:   0,
        paddingLeft:     0,
        boxSizing:       'border-box',
        fontFamily:      styles.fontFamily,
        fontSize:        styles.textNormal,
        lineHeight:      styles.lineHeightNormal,
        fontWeight:      styles.fontWeightNormal,
        idleColor:       styles.primary,
        idlePlaceholder: placeholderColor,
        idleBorderStyle: 'none',
        idleBackground:  'transparent',
        idleBoxShadow:   'none',
        idleOutline:     'none',
        hoverPlaceholderColor
    };
};

const theme = styles => ({
    ...basic(styles),
    secondary: { ...secondary(styles) },
    medium:    { ...medium(styles) },
    error:     { ...error(styles) }
});

export default theme;

