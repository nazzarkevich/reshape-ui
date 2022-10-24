import { createStyled } from '../../utils';

export const DropdownMainWrapper = createStyled('div')``;
export const DropdownTitleWrapper = createStyled('div')``;
export const DropdownTitle = createStyled('span')``;
export const DropdownButton = createStyled('span')``;

export default function (customTheme, props, state) {
    let theme = { ...customTheme };

    const { styles } = theme;

    theme = {
        ...theme,
        titleColor: theme.idleTitleColor,
        inputColor: theme.idleInputColor
    };

    if (state.selectedId) {
        theme = {
            ...theme,
            titleColor:      theme.primaryTitleColor,
            hoverTitleColor: theme.primaryTitleColor
        };
    }

    if (props.secondary) {
        theme = {
            ...theme,
            titleColor:      theme.secondaryTitleColor,
            hoverTitleColor: theme.secondaryTitleColor
        };
    }

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
        titleWrapper: {
            width:        '100%',
            display:      'flex',
            alignItems:   'center',
            borderRadius: 2,
            paddingLeft:  theme.titleWrapperPaddingLeft,
            paddingRight: theme.titleWrapperPaddingRight,
            position:     'relative',
            boxSizing:    'border-box',
            userSelect:   'none'
        },
        title:        {
            color:      theme.titleColor,
            fontFamily: theme.fontFamily,
            fontSize:   theme.fontSize,
            lineHeight: theme.lineHeight,
            display:    'block',
            '&:hover':  {
                color: theme.hoverTitleColor
            }
        },
        input:        {
            // override default input idle color
            idleColor: theme.inputColor
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
            width:    theme.listWidth,
            left:     theme.listLeft,
            position: 'absolute',
            top:      theme.listTop,
            bottom:   theme.listBottom
        },
        listItem:     {
            paddingLeft:  theme.listItemPaddingLeft,
            paddingRight: theme.listItemPaddingRight
        }
    };
}

