import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { exit } from '@tauri-apps/api/process';

import ButtonClickSFX from '../../assets/Sounds/Sfx/buttonClickSfx.mp3';
import ButtonHoverSFX from '../../assets/Sounds/Sfx/buttonHoverSfx.mp3';
import ButtonSfx from '../../components/ButtonSfx/ButtonSfx';

export interface SfxActions {
  onHoverSound?: string;
  onClickSound?: string;
}

export const sfxUrl = { onHoverSound: ButtonHoverSFX, onClickSound: ButtonClickSFX };

function MainMenu() {
  const navigate = useNavigate();

  const closeTauriApp = async () => {
    await exit(1);
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-slate-950 from-10% via-teal-950 via-50% to-slate-900 to-90% min-h-screen backdrop-blur-lg grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="flex flex-col items-start justify-end p-20">
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Play Demo" onClick={() => navigate('/play-demo')} />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Settings" />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Info" />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Exit" onClick={closeTauriApp} />
      </div>
    </motion.div>
  );
}

export default MainMenu;
