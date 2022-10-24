const omitEmptyProperties = obj => {
    const keys = Object.keys(obj);

    return keys.reduce((accumulator, current) => {
        if (
            obj[current] !== undefined &&
            obj[current] !== null
        ) {
            accumulator = {
                ...accumulator,
                [current]: obj[current]
            }
        }

        return accumulator;
    }, {});
};

export default omitEmptyProperties;