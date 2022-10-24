/* eslint-disable */

import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// window.visualViewport = {
//     width: 1440,
//     height: 800
// };

const navigatorSettings = {
    platform: process.platform || 'mac',
    userAgent: 'node.js',
    appName: 'relate'
};

global.window = window;
global.navigator = navigatorSettings;
