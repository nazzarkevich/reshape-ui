import { createStyled } from '../../utils';
import { VARIANTS } from '../button.ct';

export const Button = createStyled('button')``;

export default function (customTheme, props) {
    let theme = {
        ...customTheme
    };

    const { styles } = theme;
    const {
        secondary,
        medium,
        large,
        fullWidth,
        inverse,
        rounded,
        variant
    } = props;

    if (secondary) {
        theme = {
            ...theme,
            ...theme.secondary
        };
    }

    if (medium) {
        theme = {
            ...theme,
            ...theme.medium
        };
    }

    if (large) {
        theme = {
            ...theme,
            ...theme.large
        };
    }

    if (fullWidth) {
        theme = {
            ...theme,
            ...theme.fullWidth
        };
    }

    if (inverse) {
        theme = {
            ...theme,
            ...theme.inverse
        };
    }

    if (rounded) {
        theme = {
            ...theme,
            borderRadius: '100%',
            width:        styles.gutter * 5,
            height:       styles.gutter * 5,
            paddingRight: 0,
            paddingLeft:  0
        };
    }

    if (variant === VARIANTS.CONTAINED) {
        theme = {
            ...theme,
            borderColor: 'transparent',
            boxShadow:   `0px 2px 8px ${styles.primaryShadow}`
        };
    }

    return {
        paddingRight: theme.paddingRight,
        paddingLeft:  theme.paddingLeft,
        borderRadius: theme.borderRadius,
        borderWidth:  theme.borderWidth,
        borderStyle:  theme.borderStyle,
        borderColor:  theme.borderColor,
        fontFamily:   theme.fontFamily,
        lineHeight:   theme.lineHeight,
        background:   theme.background,
        fontWeight:   theme.fontWeight,
        boxSizing:    theme.boxSizing,
        fontSize:     theme.fontSize,
        display:      theme.display,
        width:        theme.width,
        height:       theme.height,
        color:        theme.color,
        outline:      'none',
        boxShadow:    theme.boxShadow
    };
}
