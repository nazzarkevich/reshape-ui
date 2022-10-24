const calcLeftEndPosition = payload => {
    const { rootRight, tooltipWidth } = payload;

    return rootRight - tooltipWidth;
};

export default calcLeftEndPosition;
