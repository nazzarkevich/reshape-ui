import { createStyled } from '../../utils';

const Button = createStyled('div')``;

const styleSheet = (customTheme, props) => {
    let theme = { ...customTheme };

    if (props.active) {
        theme = {
            ...theme,
            ...theme.active
        }
    }

    if (props.primary) {
        theme = {
            ...theme,
            idleIconColor: theme.styles.primary,
            hoverIconColor: theme.styles.primary
        }
    }


    return {
        wrapper: {
            width:          theme.width,
            height:         theme.height,
            boxSizing:      theme.boxSizing,
            display:        theme.display,
            alignItems:     theme.alignItems,
            justifyContent: theme.justifyContent,
            borderRadius:   theme.borderRadius,
            background:     theme.background,
            '&:hover':      {
                background: theme.hoverBackground
            }
        },
        icon:    {
            // ref:        Button,
            fill:       theme.idleIconColor,
            hoverColor: theme.hoverIconColor
        }
    };
};

export default styleSheet;
export { Button };
