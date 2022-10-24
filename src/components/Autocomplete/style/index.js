import { createStyled } from '../../utils';

export const DropdownMainWrapper = createStyled('div')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };

    const { styles } = theme;

    theme = {
        ...theme,
        inputColor: theme.idleInputColor
    };

    if (props.listPosition === 'top') {
        theme = {
            ...theme,
            listTop:    'auto',
            listBottom: `calc(100% + ${styles.gutter}px)`
        };
    }

    return {
        mainWrapper:  {
            width:      theme.width,
            background: theme.background,
            boxSizing:  theme.boxSizing,
            position:   theme.position,
            top:        theme.top,
            right:      theme.right,
            bottom:     theme.bottom,
            left:       theme.left,
            display:    theme.display,
            flexShrink: theme.flexShrink
        },
        arrowButton:  {
            position:   'absolute',
            top:        0,
            right:      styles.gutter,
            height:     '100%',
            display:    'flex',
            alignItems: 'center'
        },
        icon:         {
            marginRight: styles.gutter
        },
        actionIcon:   {
            position: 'absolute',
            right:    styles.gutter
        },
        list:         {
            width:     theme.listWidth,
            left:      theme.listLeft,
            position:  'absolute',
            top:       theme.listTop,
            bottom:    theme.listBottom,
            maxHeight: theme.maxHeight
        },
        listItem:     {
            paddingLeft:  theme.listItemPaddingLeft,
            paddingRight: theme.listItemPaddingRight
        }
    };
}

