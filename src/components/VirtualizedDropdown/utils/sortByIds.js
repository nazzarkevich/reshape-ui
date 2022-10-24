const sortByIds = (array, ids) => {
    if (ids.length) {
        return [
            ...array.filter(({ id }) => ids.includes(id)),
            ...array.filter(({ id }) => !ids.includes(id))
        ];
    }

    return array;
}

export default sortByIds;
