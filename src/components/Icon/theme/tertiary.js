const tertiaryTheme = styles => ({
    fill: styles.tertiary
});

// TODO remove after refactoring - disabled state
// const tertiaryTheme = styles => {
//     const { primaryForeground, secondaryOpacity } = styles;
//
//     const foregroundColor = color(primaryForeground)
//         .alpha(secondaryOpacity)
//         .rgb()
//         .string();
//
//     return {
//         fill: foregroundColor
//     }
// };

export default tertiaryTheme;
