const basic = () => ({
    width:     '100%',
    display:   'block',
    boxSizing: 'border-box',
    position:  'relative'
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


