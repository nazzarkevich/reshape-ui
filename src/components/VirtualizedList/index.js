import VirtualizedList from './VirtualizedList.c';
import { ThemeHoc } from '../theme';

const ThemeList = ThemeHoc(VirtualizedList, 'list');

export default ThemeList;
