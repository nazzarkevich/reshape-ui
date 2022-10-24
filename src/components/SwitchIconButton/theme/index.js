import color from 'color';

const basic = styles => {
    const hoverColor = color(styles.primaryForeground)
        .alpha(0.05)
        .rgb()
        .string();

    const activeHoverBackground = color(styles.primary)
        .alpha(0.1)
        .rgb()
        .string();

    const secondaryHoverBackground = color(styles.primaryForeground)
        .alpha(0.1)
        .rgb()
        .string();

    return {
        padding:         '6px',
        display:         'inline-flex',
        boxSizing:       'border-box',
        background:      'transparent',
        hoverBackground: hoverColor,
        activeHoverBackground,
        secondaryHoverBackground
    };
};

export default function (styles) {
    let basicStyle = basic(styles);

    return {
        ...basicStyle
    };
}


