import { createStyled } from '../../utils';

export const Element = createStyled('div')``;
export const ElementText = createStyled('span')``;

export default function (customTheme, props, state) {
    let theme = {
        ...customTheme
    };

    const { styles } = theme;

    const {
        hovered,
        primary,
        secondary,
        disabled
    } = props;

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

    if (disabled) {
        theme = {
            ...theme,
            ...theme.disabled
        };
    }

    if (hovered) {
        theme = {
            ...theme,
            borderColor: theme.hoverBorderColor
        };
    }

    return {
        element:       {
            display:      theme.display,
            alignItems:   theme.alignItems,
            width:        theme.width,
            height:       theme.height,
            minHeight:    theme.minHeight,
            background:   theme.background,
            padding:      theme.padding,
            boxSizing:    theme.boxSizing,
            borderWidth:  theme.borderWidth,
            borderStyle:  theme.borderStyle,
            borderColor:  theme.borderColor,
            borderRadius: theme.borderRadius,
            position:     theme.position,
            userSelect:   'none',
            outline:      'none'
        },
        toggleButton:  {
            fill: theme.iconColor
        },
        elementIcon:   {
            fill:       theme.iconColor,
            marginLeft: theme.elementIconMarginLeft
        },
        displayButton: {
            fill:     theme.iconColor,
            position: 'absolute',
            right:    styles.gutter
        },
        elementText:   {
            marginLeft:   styles.gutter,
            color:        theme.color,
            fontSize:     theme.fontSize,
            fontFamily:   theme.fontFamily,
            lineHeight:   theme.lineHeight,
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis',
            overflow:     'hidden'
        }
    };
}
