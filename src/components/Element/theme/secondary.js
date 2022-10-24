const secondaryTheme = styles => {
    return {
        color:       styles.active,
        iconColor:   styles.active,
        background:  styles.secondary,
        borderColor: styles.secondary
    };
};

export default secondaryTheme;
