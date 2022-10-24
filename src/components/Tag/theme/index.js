import error from './error';
import active from './active';
import primary from './primary';
import secondary from './secondary';
import editable from './editable';

const basic = styles => {
    return {
        display:      'inline-block',
        padding:      styles.gutter - 3,
        boxSizing:    'border-box',
        borderWidth:  '1px',
        borderStyle:  'solid',
        borderColor:  styles.primary,
        borderRadius: '2px',
        fontFamily:   styles.fontFamily,
        fontSize:     styles.textNormal,
        lineHeight:   styles.textNormal,
        textAlign:    'left',
        color:        styles.primary,
        background:   styles.primaryBackground
    };
};

const theme = (styles) => ({
    ...basic(styles),
    error:     { ...error(styles) },
    active:    { ...active(styles) },
    primary:   { ...primary(styles) },
    secondary: { ...secondary(styles) },
    editable:  { ...editable(styles) }
});

export default theme;


