import { PLACEMENT, VIEWPORT_SPACE } from '../tooltip.ct';

const findLeftExceptionPlacement = tooltipInfo => {
    const { leftPosition, tooltipWidth } = tooltipInfo;
    const rightPosition = leftPosition + tooltipWidth;
    const windowWidth = window.innerWidth;
    const rightDistance = windowWidth - rightPosition;

    let placement = null;

    if (rightDistance <= VIEWPORT_SPACE) {
        placement = PLACEMENT.TOP_END;
    }

    if (leftPosition <= 0) {
        placement = PLACEMENT.TOP_START;
    }

    return placement;
};

export default findLeftExceptionPlacement;
