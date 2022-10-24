import { createStyled } from '../../utils';

export const ListItemText = createStyled('span')``;

export default function (customTheme, props, state) {
    let theme = { ...customTheme };

    if (props.inactive) {
        theme = {
            ...theme,
            ...theme.inactive
        };
    }

    if (props.active) {
        theme = {
            ...theme,
            ...theme.active
        };
    }

    if (props.accent) {
        theme = {
            ...theme,
            ...theme.accent
        };
    }

    if (props.truncate) {
        theme = {
            ...theme,
            overflow:     'hidden',
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis'
        };
    }

    return {
        cursor:       'default',
        color:        theme.color,
        userSelect:   'none',
        width:        theme.width,
        display:      theme.display,
        textAlign:    theme.textAlign,
        fontFamily:   theme.fontFamily,
        fontSize:     theme.fontSize,
        lineHeight:   theme.lineHeight,
        overflow:     theme.overflow,
        whiteSpace:   theme.whiteSpace,
        textOverflow: theme.textOverflow
    };
}

