import color from 'color';

const disabledTheme = styles => {
    const disabledColor = color(styles.primaryForeground)
        .alpha(styles.primaryOpacity)
        .rgb()
        .string();

    return { color: disabledColor };
};

export default disabledTheme;
