import { PLACEMENT } from '../tooltip.ct';

import calcAbovePosition from './calcAbovePosition';
import calcUnderPosition from './calcUnderPosition';
import findTopExceptionPlacement from './findTopExceptionPlacement';

const placementVariants = {
    [PLACEMENT.TOP]:       payload => calcAbovePosition(payload),
    [PLACEMENT.TOP_END]:   payload => calcAbovePosition(payload),
    [PLACEMENT.TOP_START]: payload => calcAbovePosition(payload),
    [PLACEMENT.BOTTOM]:    payload => calcUnderPosition(payload)
};

const calcTopPosition = (rootInfo, tooltipInfo, placement) => {
    const { top: rootTop, bottom: rootBottom } = rootInfo;
    const {
        height: tooltipHeight
    } = tooltipInfo;

    const payload = {
        rootTop,
        rootBottom,
        tooltipHeight
    };

    const topPosition = placementVariants[placement](payload);

    const exceptionPlacement = findTopExceptionPlacement({
        topPosition,
        tooltipHeight
    });

    if (exceptionPlacement) {
        return placementVariants[exceptionPlacement](payload);
    } else {
        return topPosition;
    }
};

export default calcTopPosition;
