import color from 'color';

const basic = styles => {
    const { primaryForeground, primaryOpacity } = styles;

    const idleTitleColor = color(primaryForeground)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    const hoverTitleColor = color(primaryForeground)
        .alpha(0.75)
        .rgb()
        .string();

    return {
        width:          '100%',
        display:        'block',
        boxSizing:      'border-box',
        position:       'relative',
        background:     'transparent',
        fontFamily:     styles.fontFamily,
        fontSize:       styles.textNormal,
        lineHeight:     styles.lineHeightNormal,
        fontWeight:     styles.fontWeightNormal,
        // input
        idleInputColor: styles.primaryForeground,

        //title
        idleTitleColor,
        primaryTitleColor:   styles.primary,
        secondaryTitleColor: styles.primaryForeground,
        // hover
        hoverTitleColor,

        // list
        listTop:    `calc(100% + ${styles.gutter}px)`,
        listBottom: '0px'
    };
};

export default function (styles) {
    let basicStyle = basic(styles);

    return {
        ...basicStyle
    };
}


