import color from 'color';
import active from './active';

const basic = styles => {
    const hoverBackground = color(styles.primaryForeground)
        .alpha(styles.tertiaryOpacity)
        .rgb()
        .string();

    return {
        width:          styles.gutter * 3,
        height:         styles.gutter * 3,
        boxSizing:      'border-box',
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        borderRadius:   '1px',
        background:     'transparent',
        hoverBackground,

        //icon
        idleIconColor:  styles.primaryForeground,
        hoverIconColor: styles.primaryForeground
    };
};

const theme = styles => ({
    ...basic(styles),
    active: { ...active(styles) }
});

export default theme;
