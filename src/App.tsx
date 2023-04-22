import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SplashScreen from './components/SplashScreen';
import MainMenu from './views/Menus/MainMenu';
import RenderBox from './views/Scenes/DemoScene';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/main-menu" element={<MainMenu />} />
      <Route path="/play-demo" element={<RenderBox />} />
    </Routes>
  );
}

export default App;
