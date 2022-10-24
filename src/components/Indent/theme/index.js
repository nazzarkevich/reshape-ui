const basic = styles => ({
    display: 'inline-block',
    width:   styles.gutter * 2.5, // 20px
    height:  styles.gutter * 2.5
});

const theme = (styles) => ({
    ...basic(styles)
});

export default theme;


