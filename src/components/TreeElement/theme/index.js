import active from './active';
import primary from './primary';
import editable from './editable';
import secondary from './secondary';
import disabled from './disabled';

const basic = styles => {
    return {
        height:            1,
        minHeight:         styles.gutter * 4,
        color:             styles.primaryForeground,
        background:        styles.primaryBackground,
        fontFamily:        styles.fontFamily,
        lineHeight:        styles.lineHeightNormal,
        fontSize:          styles.textNormal,
        paddingLeft:       styles.gutter * 1.25, // 10px
        paddingRight:      styles.gutter * 1.25,
        paddingBottom:     styles.gutter * 1.25,
        paddingTop:        styles.gutter * 1.25,
        display:           'flex',
        alignItems:        'center',
        boxSizing:         'border-box',
        borderWidth:       '1px',
        borderStyle:       'solid',
        borderTopColor:    'transparent',
        borderRightColor:  'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor:   'transparent',
        borderRadius:      0,
        position:          'relative',
        // hover
        hoverBorderColor:  styles.primary
    };
};

const theme = (styles) => ({
    ...basic(styles),
    primary:   { ...primary(styles) },
    secondary: { ...secondary(styles) },
    disabled:  { ...disabled(styles) },
    active:    { ...active(styles) },
    editable:  { ...editable(styles) }
});

export default theme;


