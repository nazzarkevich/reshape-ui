import React from 'react';
import Tooltip from './Tooltip.c';
import { ThemeHoc } from '../theme';

const ThemeTooltip = ThemeHoc(Tooltip, 'tooltip');

export default ThemeTooltip;
