import color from 'color';

const disabledTheme = styles => {
    const { primaryForeground, primaryOpacity } = styles;

    const disabledColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    return {
        color: disabledColor,
        iconColor: disabledColor
    };
};

export default disabledTheme;
