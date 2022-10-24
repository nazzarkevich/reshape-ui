import VirtualizedDropdown from './VirtualizedDropdown.c';
import { ThemeHoc } from '../theme';

const ThemedVirtualizedDropdown = ThemeHoc(
    VirtualizedDropdown, 'dropdownSearch'
);

export default ThemedVirtualizedDropdown;
