const basic = styles => ({
    width:         '100%',
    display:       'block',
    boxSizing:     'border-box',
    position:      'relative',
    paddingRight:  0,
    paddingLeft:   0,
    zIndex:        styles.zIndex,
    borderRadius:  2,
    overflow:      'auto',
    top:           'auto',
    right:         'auto',
    bottom:        'auto',
    left:          'auto',
    paddingTop:    styles.gutter / 2,
    paddingBottom: styles.gutter / 2,
    maxHeight:     styles.gutter * 20,
    background:    styles.primaryBackground
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


