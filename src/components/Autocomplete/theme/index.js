const basic = styles => {
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
        // titleWrapper
        titlePaddingLeft:  styles.gutter,
        titlePaddingRight: styles.gutter,
        // list
        listTop:    `calc(100% + ${styles.gutter}px)`,
        listBottom: 'auto',

        // listItem
        listItemPaddingLeft:  styles.gutter * 1.5
    };
};

export default function (styles) {
    let basicStyle = basic(styles);

    return { ...basicStyle };
}


