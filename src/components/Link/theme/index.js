import active from './active';
import inactive from './inactive';

const basic = styles => {
    return {
        cursor:         'pointer',
        color:          styles.primaryForeground,
        fontFamily:     styles.fontFamily,
        fontSize:       styles.textNormal,
        fontWeight:     styles.fontWeightNormal,
        lineHeight:     styles.lineHeightNormal,
        textDecoration: 'none'
    };
};

const theme = (styles) => ({
    ...basic(styles),
    active:   { ...active(styles) },
    inactive: { ...inactive(styles) }
});

export default theme;


