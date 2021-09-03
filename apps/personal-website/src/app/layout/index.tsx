import React, { useState } from 'react';
import { AppHeader } from '../header';
import '../../assets/css/light-theme.css';
import { AppContent } from './app-content';
import { message } from 'antd';

const AppLayout: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);
  const changeMode = () => {
    if (!dark) {
      setDark(true);
      require('../../assets/css/dark-theme.css');
      message.info("What's this?", 3);
    }
  };
  return (
    <div>
      <AppHeader changeMode={changeMode} dark={dark} />
      <AppContent dark={dark} />
    </div>
  );
};

export { AppLayout };
