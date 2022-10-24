import color from 'color';

const primaryTheme = styles => {
    const backgroundColor = color(styles.primary)
        .alpha(styles.secondaryOpacity)
        .rgb()
        .string();

    return {
        background: backgroundColor
    };
};

export default primaryTheme;
