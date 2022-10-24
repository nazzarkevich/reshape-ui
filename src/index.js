import React from 'react';
import { render } from 'react-dom';

import App from './App.jsx';

let cache = {};

const importAll = (r) => {
    r.keys().forEach(key => cache[key] = r(key));
};

importAll(require.context('./components/assets/icons', false, /\.svg$/));

render(<App/>, document.getElementById('root'));
