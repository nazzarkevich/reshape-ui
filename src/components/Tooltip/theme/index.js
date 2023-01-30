const basic = styles => {
    return {
        tooltip: {
            padding:      styles.gutter,
            background:   styles.primaryBackground,
            borderRadius: '2px',
            boxSizing:    'border-box',
            boxShadow:    `0px 2px 8px ${styles.primaryShadow}`,
            color:        styles.primaryForeground,
            fontFamily:   styles.fontFamily,
            fontSize:     styles.textNormal,
            fontWeight:   styles.fontWeightNormal,
            lineHeight:   styles.lineHeightNormal,
            position:     'fixed',
            zIndex:       styles.zIndex
        },
        wrapper: {
            display: 'inline-flex'
        }
    };
};

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


