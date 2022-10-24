import React from 'react';
import ListItemText from './ListItemText.c';
import { ThemeHoc } from '../theme';

const ThemeListItemText = ThemeHoc(ListItemText, 'listItemText');

export default ThemeListItemText;
