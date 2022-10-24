import tertiary from './tertiary';
import primary from './primary';
import secondary from './secondary';
import disabled from './disabled';
import inverse from './inverse';
import error from './error';

const basic = styles => {
    const { primaryForeground } = styles;

    return {
        // svg
        fill:       primaryForeground,
        stroke:     primaryForeground,
        display:    'inline-block',
        boxSizing:  'border-box',
        width:      styles.gutter * 1.5,
        height:     styles.gutter * 1.5,
        transform:  'none',
        cursor:     'default',
        visibility: 'visible'
    };
};

const theme = styles => ({
    ...basic(styles),
    primary:   { ...primary(styles) },
    secondary: { ...secondary(styles) },
    error:     { ...error(styles) },
    tertiary:  { ...tertiary(styles) },
    disabled:  { ...disabled(styles) },
    inverse:   { ...inverse(styles) }
});

export default theme;


