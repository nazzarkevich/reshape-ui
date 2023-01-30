import color from 'color';

const tertiaryTheme = styles => {
    const selectedChildren = color(styles.primary)
      .alpha(.05)
      .string();
    return {
        background:  'rgba(128,128,255,.05)',
        borderColor: selectedChildren
    };
};

export default tertiaryTheme;
