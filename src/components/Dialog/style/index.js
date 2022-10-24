import { createStyled } from '../../utils';
import color from 'color';

export const Wrapper = createStyled('div')``;

export default function (theme) {
    const { styles } = theme;
    const { primaryForeground } = styles;

    const scrollbarBackground = color(primaryForeground)
        .alpha(0.1)
        .rgb()
        .string();

    let scrollStyle = {};

    if (window && (/WebKit/i).test(window.navigator.userAgent)) {
        scrollStyle = {
            '&::-webkit-scrollbar': {
                width:    `${styles.gutter - 2 }px`,
                position: 'absolute'
            },
            '&::-webkit-scrollbar:horizontal': {
                height: styles.gutter / 2
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
                background: scrollbarBackground
            },
            [`&::-webkit-scrollbar-button, &::-webkit-scrollbar-corner, &::-webkit-resizer`]: {
                display: 'none'
            }
        };
    }

    return {
        // TODO rename to style change entire approach
        ...theme,
        top:           theme.top,
        right:         theme.right,
        bottom:        theme.bottom,
        left:          theme.left,
        width:         theme.width,
        zIndex:        theme.zIndex,
        display:       theme.display,
        overflow:      theme.overflow,
        position:      theme.position,
        padding:       theme.padding,
        maxHeight:     theme.maxHeight,
        background:    theme.background,
        borderRadius:  theme.borderRadius,
        boxSizing:     theme.boxSizing,
        boxShadow:     `0px 2px 8px ${styles.primaryShadow}`,
        ...scrollStyle
    };
}

