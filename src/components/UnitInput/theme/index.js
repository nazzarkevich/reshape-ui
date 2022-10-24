const basic = styles => ({
    width:      styles.gutter * 7,
    display:    'flex',
    alignItems: 'baseline',
    position:   'relative'
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


