import { createStyled } from '../../utils';
import color from 'color';

export const List = createStyled('ul')``;

export default function (theme, props, state) {
    const { styles } = theme;
    const { primaryForeground } = styles;

    const scrollbarBackground = color(primaryForeground)
        .alpha(0.1)
        .rgb()
        .string();

    let scrollStyle = {};

    if (window && (/WebKit/i).test(window.navigator.userAgent)) {
        scrollStyle = {
            '&::-webkit-scrollbar':                                                         {
                width:    styles.gutter - 2 + 'px',
                position: 'absolute'
            },
            '&::-webkit-scrollbar:horizontal':                                              {
                height: styles.gutter / 2
            },
            '&::-webkit-scrollbar-track':                                                   {
                background: 'transparent'
            },
            '&::-webkit-scrollbar-thumb':                                                   {
                background: scrollbarBackground
            },
            '&::-webkit-scrollbar-button, &::-webkit-scrollbar-corner, &::-webkit-resizer': {
                display: 'none'
            }
        };
    }

    return {
        margin:        0,
        marginTop:     theme.marginTop,
        top:           theme.top,
        right:         theme.right,
        bottom:        theme.bottom,
        left:          theme.left,
        listStyle:     'none',
        width:         theme.width,
        zIndex:        theme.zIndex,
        display:       theme.display,
        overflow:      theme.overflow,
        position:      theme.position,
        paddingTop:    theme.paddingTop,
        paddingRight:  theme.paddingRight,
        paddingBottom: theme.paddingBottom,
        paddingLeft:   theme.paddingLeft,
        maxHeight:     theme.maxHeight,
        background:    theme.background,
        borderRadius:  theme.borderRadius,
        boxSizing:     theme.boxSizing,
        boxShadow:     `0px 2px 8px ${styles.primaryShadow}`,
        transform:     theme.transform,
        ...scrollStyle
    };
}

