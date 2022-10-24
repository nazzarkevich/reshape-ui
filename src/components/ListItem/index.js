import ListItem from './ListItem.c';
import { ThemeHoc } from '../theme';

const ThemeListItem = ThemeHoc(ListItem, 'listItem');

export default ThemeListItem;
