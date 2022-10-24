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

    if (props.applied) {
        theme = {
            ...theme,
            titleColor: theme.secondaryTitleColor
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
            display:    theme.display
        },
        titleWrapper: {
            width:        '100%',
            display:      'flex',
            alignItems:   'center',
            borderRadius: 2,
            paddingLeft:  styles.gutter,
            paddingRight: styles.gutter,
            position:     'relative',
            boxSizing:    'border-box',
            userSelect:   'none'
        },
        title:        {
            color:        theme.titleColor,
            fontFamily:   theme.fontFamily,
            fontSize:     theme.fontSize,
            lineHeight:   theme.lineHeight,
            display:      'block',
            width:        'calc(100% - 12px)',
            '&:hover':    {
                color: theme.hoverTitleColor
            },
            overflow:     'hidden',
            whiteSpace:   'nowrap',
            textOverflow: 'ellipsis'
        },
        input:        {
            // override default input idle color
            idleColor:    theme.inputColor,
            paddingRight: styles.gutter * 2
        },
        arrowButton:  {
            position:   'absolute',
            top:        0,
            right:      styles.gutter,
            height:     '100%',
            display:    'flex',
            alignItems: 'center'
        },
        list:         {
            top:      theme.listTop,
            bottom:   theme.listBottom,
            position: 'absolute'
        },
        icon:         {
            position: 'absolute',
            right:    styles.gutter
        }
    };
}

