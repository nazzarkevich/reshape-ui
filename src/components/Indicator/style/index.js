import { createStyled } from '../../utils';

export const IndicatorWrapper = createStyled('div')``;

const styleSheet = (theme) => ({
    display:    theme.display,
    cursor:     theme.cursor,
    alignItems: theme.alignItems,
    position:   theme.position

});

export default styleSheet;

