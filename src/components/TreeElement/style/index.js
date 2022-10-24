import { createStyled } from '../../utils';

export const Element = createStyled('div')``;
export const ElementText = createStyled('span')``;
export const IconWrapper = createStyled('div')``;

export default function (customTheme, props, state) {
    let theme = {
        ...customTheme
    };

    const { styles } = theme;

    const {
        active,
        primary,
        secondary,
        editable,
        disabled
    } = props;

    if (state.hover) {
        theme = {
            ...theme,
            borderTopColor:    theme.hoverBorderColor,
            borderRightColor:  theme.hoverBorderColor,
            borderBottomColor: theme.hoverBorderColor,
            borderLeftColor:   theme.hoverBorderColor
        };
    }

    if (props.statusIconName) {
        theme = {
            ...theme,
            paddingRight: styles.gutter * 4
        };
    }

    if (active) {
        theme = {
            ...theme,
            ...theme.active
        };
    }

    if (primary) {
        theme = {
            ...theme,
            ...theme.primary
        };
    }

    if (secondary) {
        theme = {
            ...theme,
            ...theme.secondary
        };
    }

    if (editable) {
        theme = {
            ...theme,
            ...theme.editable
        };
    }

    if (disabled) {
        theme = {
            ...theme,
            ...theme.disabled
        };
    }

    const iconWrapper = {
        height:     '100%',
        display:    'flex',
        alignItems: 'center',
        position:   'absolute'
    };

    return {
        element:           {
            display:           theme.display,
            alignItems:        theme.alignItems,
            width:             theme.width,
            height:            theme.height,
            minHeight:         theme.minHeight,
            background:        theme.background,
            paddingLeft:       theme.paddingLeft,
            paddingRight:      theme.paddingRight,
            paddingTop:        theme.paddingTop,
            paddingBottom:     theme.paddingBottom,
            boxSizing:         theme.boxSizing,
            borderWidth:       theme.borderWidth,
            borderStyle:       theme.borderStyle,
            borderRadius:      theme.borderRadius,
            borderTopColor:    theme.borderTopColor,
            borderRightColor:  theme.borderRightColor,
            borderBottomColor: theme.borderBottomColor,
            borderLeftColor:   theme.borderLeftColor,
            position:          theme.position,
            userSelect:        'none'
        },
        toggleButton:      {
            fill:        theme.iconColor,
            marginRight: styles.gutter
        },
        elementIcon:       {
            fill:        theme.iconColor,
            marginRight: styles.gutter
        },
        statusIconWrapper: {
            ...iconWrapper,
            right: styles.gutter / 2
        },
        actionIconWrapper: {
            ...iconWrapper,
            right: styles.gutter * 3 + styles.gutter / 2
        },
        statusIcon:        {
            fill: theme.iconColor
        },
        elementText:       {
            color:        theme.color,
            fontSize:     theme.fontSize,
            fontFamily:   theme.fontFamily,
            lineHeight:   theme.lineHeight,
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis',
            overflow:     'hidden'
        },
        input:             {
            width:           'auto',
            idleColor:       styles.active,
            idlePlaceholder: styles.active,
            flexGrow:        1
        }
    };
}
