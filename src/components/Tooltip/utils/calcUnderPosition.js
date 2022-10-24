import { INDENT } from '../tooltip.ct';

const calcUnderPosition = payload => {
    const { rootBottom } = payload;

    return rootBottom + INDENT;
};

export default calcUnderPosition;
