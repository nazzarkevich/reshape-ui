import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from './components/theme';

import App from './App.jsx';

const RootPage = () => {
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  );
}

render(
  <RootPage/>,
  document.getElementById('root')
);
