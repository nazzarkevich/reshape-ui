import color from 'color';
import error from './error';

const basic = styles => {
    const { primaryForeground } = styles;

    const placeholderColor = color(primaryForeground)
        .alpha(0.50)
        .rgb()
        .string();

    return {
        display: 'block',
        height: styles.gutter * 4,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        boxSizing: 'border-box',
        fontFamily: styles.fontFamily,
        fontSize: styles.textLarge,
        lineHeight: styles.lineHeightLarge,
        fontWeight: styles.fontWeightNormal,
        idleColor: styles.primaryForeground,
        idlePlaceholder: placeholderColor,
        idleBorderStyle: 'none',
        idleBackground: 'transparent',
        idleBoxShadow: 'none',
        idleOutline: 'none'
    };
};

export default function (styles) {
    let basicStyle = basic(styles);

    return {
        ...basicStyle,
        error: {
            ...basicStyle,
            ...error(styles)
        }
    };
}


