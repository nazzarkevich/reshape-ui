import { createStyled } from '../../utils';

export const Wrapper = createStyled('div')``;
export const Axis = createStyled('div')``;
export const Marker = createStyled('span')``;

export default function (customTheme, props) {
    let theme = { ...customTheme };

    let mainAxisDegree = 0,
        crossAxisDegree = 90;

    if (props.mainAxisDegree || props.mainAxisDegree === 0) {
        mainAxisDegree = props.mainAxisDegree;
    }

    if (props.crossAxisDegree || props.crossAxisDegree === 0) {
        crossAxisDegree = props.crossAxisDegree;
    }

    const { styles } = theme;

    const axis = {
        display:        'flex',
        width:          '100%',
        alignItems:     'center',
        justifyContent: 'space-between',
        position:       'absolute',
        top:            `calc(50% - 3.5px)`
    };

    let markerColor = styles.primary;

    if (props.secondary) {
        markerColor = styles.primaryForeground;
    }

    return {
        ...theme,
        width:     theme.width,
        height:    theme.height,
        color:     theme.color,
        position:  theme.position,
        boxSizing: theme.boxSizing,
        mainAxis:  {
            ...axis,
            zIndex:    '2',
            transform: `rotate(${mainAxisDegree}deg)`
        },
        crossAxis: {
            ...axis,
            zIndex:    '1',
            transform: `rotate(${crossAxisDegree}deg)`
        },
        marker:    {
            boxSizing:       theme.boxSizing,
            backgroundColor: theme.backgroundColor,
            borderWidth:     '1px',
            borderStyle:     'solid',
            borderColor:     theme.borderColor,
            borderRadius:    10,
            width:           7,
            height:          7,
            '&:hover':       {
                borderColor: theme.borderHoverColor
            },
            '&.active':      {
                borderColor:     markerColor,
                backgroundColor: markerColor
            }
        }
    };
}
