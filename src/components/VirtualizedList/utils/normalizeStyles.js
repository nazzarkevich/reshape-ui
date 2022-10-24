/* eslint-disable no-param-reassign */

const capitalizeLetter = str => {
    return str
        .split('-')
        .map(item => item[0].toUpperCase() + item.substr(1))
        .join('');
};

const normalizeStyles = styles => {
    return Object
        .keys(styles)
        .reduce((acc, property) => {
            if (property.includes('&::')) {
                const key = capitalizeLetter(property);

                acc = {
                    ...acc,
                    [key]: styles[property]
                };
            } else {
                acc = {
                    ...acc,
                    [property]: styles[property]
                };
            }

            return acc;
        }, {});
};

export default normalizeStyles;
