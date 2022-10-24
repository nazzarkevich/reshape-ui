import { createStyled } from '../../utils/';

export const Input = createStyled('input')``;

export default function (customTheme, props, state) {
    let theme = { ...customTheme };

    theme = {
        ...theme,
        color:       theme.idleColor,
        placeholder: theme.idlePlaceholder,
        borderStyle: theme.idleBorderStyle,
        background:  theme.idleBackground,
        boxShadow:   theme.idleBoxShadow,
        outline:     theme.idleOutline
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

    if (props.truncate) {
        theme = {
            ...theme,
            whiteSpace:   'nowrap',
            overflow:     'hidden',
            textOverflow: 'ellipsis'
        };
    }

    if (props.error || state.error) {
        theme = {
            ...theme,
            ...theme.error
        };
    }

    return {
        width:         theme.width,
        height:        theme.height,
        display:       theme.display,
        marginLeft:    theme.marginLeft,
        marginRight:   theme.marginRight,
        padding:       theme.padding,
        paddingTop:    theme.paddingTop,
        paddingRight:  theme.paddingRight,
        paddingBottom: theme.paddingBottom,
        paddingLeft:   theme.paddingLeft,
        boxSizing:     theme.boxSizing,
        borderWidth:   theme.borderWidth,
        borderStyle:   theme.borderStyle,
        borderColor:   theme.borderColor,
        borderRadius:  theme.borderRadius,
        fontFamily:    theme.fontFamily,
        fontSize:      theme.fontSize,
        fontWeight:    theme.fontWeight,
        lineHeight:    theme.lineHeight,
        color:         theme.color,
        flexGrow:      theme.flexGrow,
        background:    theme.background,
        outline:       theme.outline,
        whiteSpace:    theme.whiteSpace,
        overflow:      theme.overflow,
        textOverflow:  theme.textOverflow,

        '&::placeholder': {
            color: theme.placeholder
        },

        // '&:hover::placeholder': {
        //     color: theme.hoverPlaceholderColor
        // },

        '&:focus': {
            outline: '0 none'
        }
    };
}
