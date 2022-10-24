import hover from './hover';

const basic = styles => ({
    display:         'flex',
    boxSizing:       'border-box',
    alignItems:      'center',
    position:        'relative',
    paddingTop:      0,
    paddingBottom:   0,
    paddingRight:    styles.gutter * 1.5,
    paddingLeft:     styles.gutter * 1.5,
    background:      styles.background,
    hoverBackground: styles.tertiaryBackground
});

const theme = (styles) => ({
    ...basic(styles),
    hover: { ...hover(styles) }
});

export default theme;


