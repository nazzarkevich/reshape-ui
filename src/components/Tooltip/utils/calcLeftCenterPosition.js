const calcLeftCenterPosition = payload => {
    const { rootLeft, rootWidth, tooltipWidth } = payload;

    return rootLeft + rootWidth / 2 - tooltipWidth / 2;
};

export default calcLeftCenterPosition;
