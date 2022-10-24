import color from 'color';

const basic = styles => {
    const {
        primaryForeground,
        primaryOpacity
    } = styles;

    const borderColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    const hoverBorderColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    return {
        display:          'inline-block',
        boxSizing:        'border-box',
        width:            styles.gutter * 3 + 1,
        height:           styles.gutter * 3 + 1,
        position:         'relative',
        backgroundColor:  'transparent',
        borderColor,
        borderHoverColor: hoverBorderColor
    };
};

const theme = styles => ({
    ...basic(styles)
});

export default theme;


