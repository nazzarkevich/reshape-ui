import { createStyled } from '../../utils/';

export const FormInput = createStyled('input')``;

export default function(theme, props, state) {
    theme = {
        ...theme,
        color: theme.idleColor,
        placeholder: theme.idlePlaceholder,
        borderStyle: theme.idleBorderStyle,
        background: theme.idleBackground,
        boxShadow: theme.idleBoxShadow,
        outline: theme.idleOutline,
    };

    if (props.applied) {
        theme = {
            ...theme,
            color: theme.appliedColor,
            placeholder: theme.appliedPlaceholder,
        };
    }

    if (props.error) {
        theme = {
            ...theme,
            ...theme.error
        };
    }

    return {
        width:   '100%',
        display: theme.display,
        height:  theme.height,
        padding: theme.padding,
        paddingTop: theme.paddingTop,
        paddingRight: theme.paddingRight,
        paddingBottom: theme.paddingBottom,
        paddingLeft: theme.paddingLeft,
        boxSizing: theme.boxSizing,
        borderWidth: theme.borderWidth,
        borderStyle: theme.borderStyle,
        borderColor: theme.borderColor,
        borderRadius: theme.borderRadius,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSize,
        fontWeight: theme.fontWeight,
        lineHeight: theme.lineHeight,
        color: theme.color,
        background: theme.background,
        outline: theme.outline,
        '&::placeholder': {
            color: theme.placeholder
        },
        '&:focus': {
            outline: '0 none'
        }
    };
}
