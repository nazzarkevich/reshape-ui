import { createStyled } from '../../utils';

export const TabsWrapper = createStyled('div')``;

const styleSheet = (defaultTheme) => {
    let theme = { ...defaultTheme };

    return {
        display:    theme.display,
        alignItems: theme.alignItems
    };
};

export default styleSheet;
