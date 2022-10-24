import color from 'color';

export default function (styles) {
    const inactiveColor = color(styles.primaryForeground)
        .alpha(0.50)
        .rgb()
        .string();

    return {
        color: inactiveColor
    };
}
