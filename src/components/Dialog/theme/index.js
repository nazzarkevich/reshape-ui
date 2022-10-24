const basic = styles => ({
    padding:      styles.gutter,
    width:        '100%',
    display:      'block',
    boxSizing:    'border-box',
    position:     'relative',
    zIndex:       styles.zIndex,
    borderRadius: 2,
    overflow:     'auto',
    top:          'auto',
    right:        'auto',
    bottom:       'auto',
    left:         'auto',
    background:   styles.primaryBackground
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


