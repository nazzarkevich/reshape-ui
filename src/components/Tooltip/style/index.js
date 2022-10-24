import { createStyled } from '../../utils';

export const Wrapper = createStyled('div')``;
export const Tooltip = createStyled('span')``;

export default function (customTheme, props, state) {
    let theme = { ...customTheme };

    return {
        tooltip: {
            padding:      theme.tooltip.padding,
            background:   theme.tooltip.background,
            borderRadius: theme.tooltip.borderRadius,
            boxShadow:    theme.tooltip.boxShadow,
            boxSizing:    theme.tooltip.boxSizing,
            color:        theme.tooltip.color,
            fontFamily:   theme.tooltip.fontFamily,
            fontSize:     theme.tooltip.fontSize,
            fontWeight:   theme.tooltip.fontWeight,
            lineHeight:   theme.tooltip.lineHeight,
            position:     theme.tooltip.position,
            zIndex:       theme.tooltip.zIndex
        },
        wrapper: {
            display:   theme.wrapper.display,
            boxSizing: theme.wrapper.boxSizing
        }
    };
}

