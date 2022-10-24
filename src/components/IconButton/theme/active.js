import color from 'color';

const activeTheme = styles => {
    const background = color(styles.primaryForeground)
        .alpha(styles.tertiaryOpacity)
        .rgb()
        .string();

    return { background };
};

export default activeTheme;
