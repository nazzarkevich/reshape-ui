import { createStyled } from '../../utils';

export const Text = createStyled('span')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };

    if (props.editable) {
        theme = {
            ...theme,
            ...theme.editable
        };
    }

    if (props.error) {
        theme = {
            ...theme,
            ...theme.error
        };
    }

    if (props.disabled) {
        theme = {
            ...theme,
            ...theme.disabled
        };
    }

    return {
        display:      theme.display,
        padding:      theme.padding,
        boxSizing:    theme.boxSizing,
        fontFamily:   theme.fontFamily,
        fontSize:     theme.fontSize,
        lineHeight:   theme.lineHeight,
        textAlign:    theme.textAlign,
        color:        theme.color,
        cursor:       theme.cursor,
        background:   theme.background,
        whiteSpace:   'nowrap',
        overflow:     'hidden',
        wordBreak:    'break-word',
        outline:      'none',
        '&:hover':    {
            background:  theme.hoverBackground,
            borderColor: theme.hoverBorderColor
        }
    };
}
