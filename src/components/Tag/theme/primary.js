import color from 'color';

export default function (styles) {
    const backgroundColor = color(styles.primary)
        .alpha(styles.tertiaryOpacity)
        .rgb()
        .string();

    const hoverBackgroundColor = color(styles.primary)
        .alpha(styles.primaryOpacity)
        .rgb()
        .string();

    return {
        background:      backgroundColor,
        hoverBackground: hoverBackgroundColor
    };
}
