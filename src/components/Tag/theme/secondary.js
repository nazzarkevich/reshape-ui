import color from 'color';

export default function (styles) {
    const { primary, primaryForeground, primaryOpacity } = styles;

    const borderColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    return {
        color: primaryForeground,
        borderColor,
        hoverBorderColor: primary
    };
}
