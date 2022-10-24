import { createStyled } from '../../utils';

export const Wrapper = createStyled('div')``;
export const Title = createStyled('span')``;

export default function (theme, props) {
    const { styles } = theme;

    return {
        // menuStyle: {
        //     width:     theme.width,
        //     display:   theme.display,
        //     boxSizing: theme.boxSizing,
        //     position:  theme.position,
        //     top:       theme.top,
        //     right:     theme.right,
        //     left:      theme.left,
        //     bottom:    theme.bottom
        // },
        wrapperStyle:      {
            width:    theme.width,
            position: 'relative'
        },
        titleStyle:        {
            display:    'block',
            cursor:     'pointer',
            textAlign:  'center',
            color:      styles.primary,
            fontSize:   styles.textNormal,
            fontFamily: styles.fontFamily,
            lineHeight: styles.lineHeightNormal,
            fontWeight: styles.fontWeightNormal
        },
        listStyle:         {
            marginTop: styles.gutter / 2,
            transform: 'translateX(-50%)',
            position:  'absolute',
            overflow:  'visible',
            maxHeight: 'none',
            left:      '50%'
        },
        listItemStyle:     {
            paddingLeft:  styles.gutter / 2,
            paddingRight: styles.gutter / 2
        },
        listItemTextStyle: {
            width:     '100%',
            display:   'block',
            textAlign: 'center'
        }
    };
}

