import { createStyled } from '../../utils';

export const ListItem = createStyled('li')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };


    if (props.hover) {
        theme = {
            ...theme,
            ...theme.hover
        };
    }

    return {
        margin:        0,
        boxSizing:     theme.boxSizing,
        display:       theme.display,
        position:      theme.position,
        left:          theme.left,
        right:         theme.right,
        top:           theme.top,
        bottom:        theme.bottom,
        width:         theme.width,
        height:        theme.height,
        alignItems:    theme.alignItems,
        paddingTop:    theme.paddingTop,
        paddingRight:  theme.paddingRight,
        paddingBottom: theme.paddingBottom,
        paddingLeft:   theme.paddingLeft,
        background:    theme.background,
        overflow:      theme.overflow,
        '&:hover':     {
            background: theme.hoverBackground
        }
    };
}

