import { createStyled } from '../../utils';

export const Tag = createStyled('div')``;

export default function (theme, props, state) {
    // Important to copy nested object
    if (props.primary) {
        theme = {
            ...theme,
            ...theme.primary
        };
    }

    if (props.active) {
        theme = {
            ...theme,
            ...theme.active
        };
    }

    if (props.secondary) {
        theme = {
            ...theme,
            ...theme.secondary
        };
    }

    if (props.editable) {
        theme = {
            ...theme,
            ...theme.editable
        };
    }

    if (props.error || state.error) {
        theme = {
            ...theme,
            ...theme.error
        };
    }

    return {
        display:      theme.display,
        padding:      theme.padding,
        boxSizing:    theme.boxSizing,
        borderWidth:  theme.borderWidth,
        borderStyle:  theme.borderStyle,
        borderColor:  theme.borderColor,
        borderRadius: theme.borderRadius,
        fontFamily:   theme.fontFamily,
        fontSize:     theme.fontSize,
        lineHeight:   theme.lineHeight,
        textAlign:    theme.textAlign,
        color:        theme.color,
        cursor:       theme.cursor,
        background:   theme.background,
        wordBreak:    'break-word',
        outline:      'none'
        // '&:hover':    {
        //     background:  theme.hoverBackground,
        //     borderColor: theme.hoverBorderColor
        // }
    };
}
