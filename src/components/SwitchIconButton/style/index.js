import { createStyled } from '../../utils';
import { ICON_STATUS } from '../switchIconButton.ct';

export const IconButton = createStyled('div')``;

export default function (customTheme, props, state) {
    // important to copy basic theme
    let theme = { ...customTheme };

    const { status } = props;

    if (state.hover) {
        theme = {
            ...theme,
            background: theme.hoverBackground
        };
    }

    if (status === ICON_STATUS.ACTIVE) {
        theme = {
            ...theme,
            background: theme.activeHoverBackground
        };
    }

    if (status === ICON_STATUS.APPLIED) {
        theme = {
            ...theme,
            background: theme.secondaryHoverBackground
        };
    }

    return {
        wrapper: {
            padding:    theme.padding,
            display:    theme.display,
            boxSizing:  theme.boxSizing,
            background: theme.background
        }
    };
}
