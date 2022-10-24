import error from './error';
import disabled from './disabled';

const basic = styles => {
    return {
        display:    'inline-block',
        boxSizing:  'border-box',
        textAlign:  'left',
        fontFamily: styles.fontFamily,
        fontSize:   styles.textNormal,
        lineHeight: styles.lineHeightNormal,
        color:      styles.primaryForeground,
        background: styles.primaryBackground
    };
};

const theme = (styles) => ({
    ...basic(styles),
    error:    { ...error(styles) },
    disabled: { ...disabled(styles) }
});

export default theme;


