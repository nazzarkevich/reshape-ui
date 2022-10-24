import React from 'react';
import Dialog from './Dialog.c';
import { ThemeHoc } from '../theme';

const ThemeDialog = ThemeHoc(Dialog, 'dialog');

export default ThemeDialog;
