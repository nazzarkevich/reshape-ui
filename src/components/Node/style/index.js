import { createStyled } from '../../utils';

export const Span = createStyled('span')``;
export const NodeWrapper = createStyled('div')``;

const styleSheet = (defaultTheme, props) => {
    let theme = { ...defaultTheme };

    const { styles } = theme;

    const {
        hovered,
        primary,
        secondary,
        tertiary,
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

    if (tertiary) {
        theme = {
            ...theme,
            ...theme.tertiary
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
        node:           {
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
            outline:      'none',
            whiteSpace:   'nowrap',
            fontSize:   theme.fontSize,
            fontFamily: theme.fontFamily,
            lineHeight: theme.lineHeight
        },
        title: {
            marginLeft: styles.gutter,
            color:      styles.primary
        },
        label:          {
            marginLeft: styles.gutter,
            color:      theme.color
        },
        contentWrapper: {
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis',
            overflow:     'hidden'
        },
        content:        {
            marginLeft: styles.gutter,
            color:      theme.contentColor
        }
        // toggleButton: {
        //     fill: theme.iconColor
        // },
        // elementIcon:  {
        //     fill:       theme.iconColor,
        //     marginLeft: theme.elementIconMarginLeft
        // },
        // endIcon:     {
        //     fill:     theme.iconColor,
        //     position: 'absolute',
        //     right:    styles.gutter
        // },
    };
};

export default styleSheet;
