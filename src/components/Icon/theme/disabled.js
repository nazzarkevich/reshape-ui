import color from 'color';

const disabledTheme = styles => {
    const { primaryForeground, primaryOpacity } = styles;

    const foregroundColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    return {
        fill: foregroundColor
    }
};

export default disabledTheme;
