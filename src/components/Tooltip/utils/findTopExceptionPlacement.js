import { PLACEMENT } from '../tooltip.ct';

const findTopExceptionPlacement = tooltipInfo => {
    const { topPosition, tooltipHeight } = tooltipInfo;
    const bottomPosition = topPosition + tooltipHeight;
    const windowHeight = window.innerHeight;

    let placement = null;

    if (topPosition <= 0) {
        placement = PLACEMENT.BOTTOM;
    }

    if (bottomPosition >= windowHeight) {
        placement = PLACEMENT.TOP;
    }

    return placement;
};

export default findTopExceptionPlacement;
