import NestedMenu from './NestedMenu.c';
import { ThemeHoc } from '../theme';

const ThemeMenu = ThemeHoc(NestedMenu, 'searchMenu');

export default ThemeMenu;
