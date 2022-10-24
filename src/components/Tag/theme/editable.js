import color from 'color';

export default function (styles) {
    const accentColor = color(styles.primary);

    const backgroundColor = color(accentColor).alpha(0.5).rgb().string();
    const borderColor = color(accentColor).alpha(0).rgb().string();

    return {
        borderColor,
        cursor:     'text',
        color:      styles.active,
        background: backgroundColor
    };
}
