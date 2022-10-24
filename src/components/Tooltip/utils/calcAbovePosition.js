import { INDENT } from '../tooltip.ct';

const calcAbovePosition = payload => {
    const { rootTop, tooltipHeight } = payload;

    return rootTop - tooltipHeight - INDENT;
};

export default calcAbovePosition;