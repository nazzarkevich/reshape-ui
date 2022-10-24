import { createStyled } from '../../utils';

export const List = createStyled('ul')``;
export const Menu = createStyled('div')``;

export default function (theme) {
    const { styles } = theme;

    const listStyle = {
        position:  'absolute',
        overflow:  'visible',
        maxHeight: 'none'
    };

    return {
        menuStyle:       {
            display:  'inline-flex',
            position: theme.position,
            width:    theme.width,
            left:     theme.left,
            top:      theme.top
        },
        inputStyle:      {
            paddingLeft:  styles.gutter * 1.5,
            paddingRight: styles.gutter * 1.5
        },
        listStyle:       { ...listStyle },
        mainListStyle:   {
            ...listStyle,
            top: `calc(100% + ${styles.gutter}px)`
        },
        searchListStyle: {
            ...listStyle,
            maxHeight: styles.gutter * 35,
            overflow:  'auto'
        },
        iconStyle:       {
            marginRight: styles.gutter
        },
        arrowStyle:      {
            position: 'absolute',
            right:    styles.gutter
        }
    };
}

