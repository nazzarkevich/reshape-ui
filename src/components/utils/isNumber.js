import { REG_EXP } from '../constants';

const isNumber = str => REG_EXP.ONLY_NUMBERS.test(str);

export default isNumber;
