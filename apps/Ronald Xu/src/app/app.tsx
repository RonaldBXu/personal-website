import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { AppRouter } from './routing';
import 'antd/dist/antd.css';

const themes = {
  dark: `assets/css/dark-theme.css`,
  light: `assets/css/light-theme.css`,
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export { App };
