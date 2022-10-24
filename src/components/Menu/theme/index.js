const basic = () => ({
    width:     '100%',
    display:   'block',
    boxSizing: 'border-box',
    position:  'absolute',
    top:       'auto',
    right:     'auto',
    left:      'auto',
    bottom:    'auto'
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


