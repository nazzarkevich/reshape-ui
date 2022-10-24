import { createStyled } from '../../utils';

export const LinkItemText = createStyled('a')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };

    if (props.fullWidth) {
        theme = {
            ...theme,
            display: 'block',
            width:   '100%'
        };
    }

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

    if (props.truncate) {
        theme = {
            ...theme,
            overflow:     'hidden',
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis'
        };
    }

    return {
        userSelect:     'none',
        cursor:         theme.cursor,
        width:          theme.width,
        display:        theme.display,
        color:          theme.color,
        fontFamily:     theme.fontFamily,
        fontSize:       theme.fontSize,
        lineHeight:     theme.lineHeight,
        overflow:       theme.overflow,
        whiteSpace:     theme.whiteSpace,
        textOverflow:   theme.textOverflow,
        textDecoration: theme.textDecoration,
        textAlign:      theme.textAlign
    };
}

