import inverse from './inverse';
import medium from './medium';

const basic = styles => {
    return {
        borderColor:  styles.primaryForeground,
        background:   styles.primaryBackground,
        lineHeight:   styles.lineHeightNormal,
        fontWeight:   styles.fontWeightLight,
        color:        styles.primaryForeground,
        fontFamily:   styles.fontFamily,
        fontSize:     styles.textMedium,
        paddingRight: styles.gutter - 3,
        paddingLeft:  styles.gutter - 3,
        height:       styles.gutter * 4.5,
        display:      'inline-flex',
        alignItems:   'center',
        boxSizing:    'border-box',
        borderStyle:  'solid',
        borderRadius: '2px',
        borderWidth:  '1px',
        // Icon styles
        iconWidth:    styles.gutter * 3,
        iconHeight:   styles.gutter * 3,
        iconFill:     styles.primaryForeground,
        cursor:       'pointer'
    };
};

const theme = (styles) => ({
    ...basic(styles),
    inverse: { ...inverse(styles) },
    medium:  { ...medium(styles) }
});

export default theme;


