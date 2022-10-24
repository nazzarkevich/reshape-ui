import { createStyled } from '../../utils';

export const Svg = createStyled('svg')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };

    const { styles } = theme;

    const {
        size,
        rotate,
        hidden
    } = props;

    if (props.primary) {
        theme = {
            ...theme,
            ...theme.primary
        };
    }

    if (props.active) {
        theme = {
            ...theme,
            fill: styles.active
        };
    }

    if (props.disabled) {
        theme = {
            ...theme,
            ...theme.disabled
        };
    }

    if (props.secondary) {
        theme = {
            ...theme,
            ...theme.secondary
        };
    }

    if (props.tertiary) {
        theme = {
            ...theme,
            ...theme.tertiary
        };
    }

    if (props.error) {
        theme = {
            ...theme,
            ...theme.error
        };
    }

    if (props.inverse) {
        theme = {
            ...theme,
            ...theme.inverse
        };
    }

    if (size === 'extra-small') {
        theme = {
            ...theme,
            width:  7,
            height: 7
        };
    }

    if (size === 'small') {
        theme = {
            ...theme,
            width:  styles.gutter * 1.5,
            height: styles.gutter * 1.5
        };
    }

    if (size === 'medium') {
        theme = {
            ...theme,
            width:  styles.gutter * 3,
            height: styles.gutter * 3
        };
    }

    if (rotate) {
        theme = {
            ...theme,
            transform: `rotate(${rotate}deg)`
        };
    }

    if (hidden) {
        theme = {
            ...theme,
            visibility: 'hidden'
        };
    }

    if (props.hoverColor) {
        theme = {
            ...theme,
            hoverColor: props.hoverColor
        };
    }

    if (props.cursor) {
        theme = {
            ...theme,
            cursor: props.cursor
        };
    }

    // style object has priority
    if (props.style) {
        theme = {
            ...theme,
            ...props.style
        };
    }

    return {
        svg: {
            width:         theme.width,
            height:        theme.height,
            display:       theme.display,
            boxSizing:     theme.boxSizing,
            verticalAlign: theme.verticalAlign,
            marginRight:   theme.marginRight,
            marginTop:     theme.marginTop,
            marginBottom:  theme.marginBottom,
            marginLeft:    theme.marginLeft,
            transform:     theme.transform,
            visibility:    theme.visibility,
            position:      theme.position,
            cursor:        theme.cursor,
            top:           theme.top,
            right:         theme.right,
            bottom:        theme.bottom,
            left:          theme.left,
            flexShrink:    0,
            'use':         {
                fill: theme.fill
            },
            // [`${theme.ref}:hover &`]: {
            //     use: {
            //         fill: theme.hoverColor
            //     }
            // },
            '&:hover':     {
                use: {
                    fill: theme.hoverColor
                }
            }
        }
    };
}
