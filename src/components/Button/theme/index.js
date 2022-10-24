import fullWidth from './fullWidth';
import inverse from './inverse';
import medium from './medium';
import large from './large';

const basic = styles => {
    return {
        borderColor:  styles.primaryForeground,
        background:   styles.primaryBackground,
        lineHeight:   styles.lineHeightNormal,
        fontWeight:   styles.fontWeightLight,
        color:        styles.primaryForeground,
        fontFamily:   styles.fontFamily,
        fontSize:     styles.textMedium,
        paddingRight: styles.gutter * 1.5,
        paddingLeft:  styles.gutter * 1.5,
        height:       styles.gutter * 4.5,
        display:      'inline-block',
        boxSizing:    'border-box',
        borderStyle:  'solid',
        borderRadius: '2px',
        borderWidth:  '1px',
        boxShadow:    'none'
    };
};

const theme = (styles) => ({
    ...basic(styles),
    fullWidth: { ...fullWidth(styles) },
    inverse:   { ...inverse(styles) },
    medium:    { ...medium(styles) },
    large:     { ...large(styles) }
});

export default theme;


