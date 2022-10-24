let result = {};

const findRecursivelyOptionsById = (options, id) => {
    options.forEach((option, index) => {
        if (option.id === id) {
            result = {
                options,
                optionIndex: index
            };

            return result;
        }

        if (
            option.sublist &&
            option.sublist.find(option => option.id === id)
        ) {
            result = {
                options,
                optionIndex: index
            };

            return result;

        } else if (option.sublist) {
            result = findRecursivelyOptionsById(option.sublist, id);
        }
    });

    return result;
};

export default findRecursivelyOptionsById;