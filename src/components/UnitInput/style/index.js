import { createStyled } from '../../utils';

export const Wrapper = createStyled('div')``;

export default function (theme) {
    const { styles } = theme;

    return {
        wrapper:  {
            width:      theme.width,
            display:    theme.display,
            position:   theme.position,
            alignItems: theme.alignItems
        },
        dropdown: {
            listWidth:            'auto',
            listItemPaddingLeft:  styles.gutter,
            listItemPaddingRight: styles.gutter,
            titlePaddingLeft:     0,
            titlePaddingRight:    0
        }
    };
}

