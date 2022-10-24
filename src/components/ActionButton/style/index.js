import { createStyled } from '../../utils';

export const Button = createStyled('button')``;

export default function(customTheme, props, state) {
    let theme = {
        ...customTheme
    };

    if (props.secondary) {
        theme = {
            ...theme,
            ...theme.secondary
        };
    }

    if (props.medium) {
        theme = {
            ...theme,
            ...theme.medium
        };
    }

    if (props.inverse) {
        theme = {
            ...theme,
            ...theme.inverse
        };
    }

    return {
        paddingRight: theme.paddingRight,
        paddingLeft:  theme.paddingLeft,
        borderRadius: theme.borderRadius,
        borderWidth:  theme.borderWidth,
        borderStyle:  theme.borderStyle,
        borderColor:  theme.borderColor,
        fontFamily:   theme.fontFamily,
        lineHeight:   theme.lineHeight,
        background:   theme.background,
        alignItems:   theme.alignItems,
        fontWeight:   theme.fontWeight,
        boxSizing:    theme.boxSizing,
        fontSize:     theme.fontSize,
        display:      theme.display,
        height:       theme.height,
        color:        theme.color,
        width:        theme.width,
        outline:      'none',
        cursor:       theme.cursor,
        icon:         {
            width:  theme.iconWidth,
            height: theme.iconHeight,
            fill:   theme.iconFill,
            cursor: theme.cursor
        }
    };
}
