const compileStyles = (
    createStyleSheet,
    props,
    state = {}
) => {
    // style - need to override theme styles
    const { theme, style } = props;

    return createStyleSheet(
        { ...theme, ...style },
        props,
        state
    );
};

export default compileStyles;
