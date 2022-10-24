const RELATIVE_LENGTHS = {
    EM:   'em',
    EX:   'ex',
    CH:   'ch',
    REM:  'rem',
    VW:   'vw',
    VH:   'vh',
    VMIN: 'vmin',
    VMAX: 'vmax',
    PCT:  '%'
};

const ABSOLUTE_LENGTHS = {
    CM: 'cm',
    MM: 'mm',
    IN: 'in',
    PX: 'px',
    PT: 'pt',
    PC: 'pc'
};

const UNIT = {
    ...ABSOLUTE_LENGTHS,
    ...RELATIVE_LENGTHS
}

export default UNIT;
