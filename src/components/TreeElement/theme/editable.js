import color from 'color';

const editableTheme = styles => {
    const { primary, primaryOpacity } = styles;

    const backgroundColor = color(primary)
        .alpha(primaryOpacity)
        .rgb()
        .string();

    return {
        color: styles.active,
        iconColor: styles.active,
        background: backgroundColor
    };
};

export default editableTheme;
