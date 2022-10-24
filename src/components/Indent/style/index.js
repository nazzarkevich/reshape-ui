import { createStyled } from '../../utils';

export const IndentItem = createStyled('span')``;
export const IndentWrapper = createStyled('span')``;

const styleSheet = (theme) => ({
    wrapper: {
        display: theme.display,
        height:  theme.height
    },
    indent:        {
        display: theme.display,
        width:   theme.width,
        height:  theme.height
    }
});

export default styleSheet;

