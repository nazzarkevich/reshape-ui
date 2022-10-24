import primary from './primary';
import secondary from './secondary';
import disabled from './disabled';

const basic = styles => {
    return {
        height:       1,
        minHeight:    styles.gutter * 4,
        color:        styles.primaryForeground,
        background:   styles.primaryBackground,
        fontFamily:   styles.fontFamily,
        lineHeight:   styles.lineHeightNormal,
        fontSize:     styles.textNormal,
        padding:      styles.gutter * 1.25, // 10px
        display:      'flex',
        alignItems:   'center',
        boxSizing:    'border-box',
        borderWidth:  '1px',
        borderStyle:  'solid',
        borderColor:  'transparent',
        borderRadius: 0,
        position:     'relative',

        // elementIcon
        elementIconMarginLeft: styles.gutter,

        // hover
        hoverBorderColor: styles.primary
    };
};

const theme = (styles) => ({
    ...basic(styles),
    primary:   { ...primary(styles) },
    secondary: { ...secondary(styles) },
    disabled:  { ...disabled(styles) }
});

export default theme;


