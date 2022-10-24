import colors from '../styles/colors';

const ICON_STATUS = {
    INITIAL: 'initial',
    ACTIVE:  'active',
    APPLIED: 'applied',
    ERROR:   'error'
};

// TODO remove after refactoring
// const ICON_STATE = {
//     [ICON_STATUS.INITIAL]: null,
//     [ICON_STATUS.ACTIVE]:  { active: true },
//     [ICON_STATUS.ERROR]:   { error: true }
// };

const ICON_STATE = {
    // [ICON_STATUS.INITIAL]: null,
    [ICON_STATUS.ACTIVE]:  colors.primary,
    [ICON_STATUS.ERROR]:   colors.warning
};

export { ICON_STATUS, ICON_STATE };
