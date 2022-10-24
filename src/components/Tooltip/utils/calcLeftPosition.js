import { PLACEMENT } from '../tooltip.ct';

import calcLeftStartPosition from './calcLeftStartPosition';
import calcLeftCenterPosition from './calcLeftCenterPosition';
import calcLeftEndPosition from './calcLeftEndPosition';
import findLeftExceptionPlacement from './findLeftExceptionPlacement';

const placementVariants = {
    [PLACEMENT.TOP]:       payload => calcLeftCenterPosition(payload),
    [PLACEMENT.TOP_START]: payload => calcLeftStartPosition(payload),
    [PLACEMENT.TOP_END]:   payload => calcLeftEndPosition(payload),
    [PLACEMENT.BOTTOM]:    payload => calcLeftCenterPosition(payload)
};

const calcLeftPosition = (rootInfo, tooltipInfo, placement) => {
    const {
        left: rootLeft,
        right: rootRight,
        width: rootWidth
    } = rootInfo;

    const {
        width: tooltipWidth
    } = tooltipInfo;

    const payload = {
        rootLeft,
        rootRight,
        rootWidth,
        tooltipWidth
    };

    const leftPosition = placementVariants[placement](payload);

    const exceptionPlacement = findLeftExceptionPlacement({
        leftPosition,
        tooltipWidth
    });

    if (exceptionPlacement) {
        return placementVariants[exceptionPlacement](payload);
    } else {
        return leftPosition;
    }
};

export default calcLeftPosition;
