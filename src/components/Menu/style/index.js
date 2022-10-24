import { createStyled } from '../../utils';

export const Menu = createStyled('div')``;

export default function (theme, props, state) {
    const { styles } = theme;

    return {
        menuStyle: {
            width:     theme.width,
            display:   theme.display,
            boxSizing: theme.boxSizing,
            position:  theme.position,
            top:       theme.top,
            right:     theme.right,
            left:      theme.left,
            bottom:    theme.bottom
        },
        listStyle: {
            overflow:  'visible',
            maxHeight: 'none'
        },
        iconStyle: {
            marginRight: styles.gutter
        }
    };
}

