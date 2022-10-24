import active from './active';
import inactive from './inactive';
import accent from './accent';

const basic = styles => {
    return {
        color:      styles.primaryForeground,
        fontFamily: styles.fontFamily,
        fontSize:   styles.textNormal,
        fontWeight: styles.fontWeightNormal,
        lineHeight: styles.lineHeightLarge
    };
};

const theme = (styles) => ({
    ...basic(styles),
    active:   { ...active(styles) },
    accent:   { ...accent(styles) },
    inactive: { ...inactive(styles) }
});

export default theme;


