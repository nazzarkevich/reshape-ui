const DEFAULT_VALUE = 0;

const getInitialOptionIndex = props => {
    const { value, options } = props;

    let result = DEFAULT_VALUE;

    if (value) {
        result = options.findIndex(option => option.id === value);
    }

    return result;
}

export default getInitialOptionIndex;