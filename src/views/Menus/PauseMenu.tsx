import React from 'react';
import { useNavigate } from 'react-router-dom';

import { appWindow } from '@tauri-apps/api/window';

import ButtonSfx from '../../components/ButtonSfx/ButtonSfx';

import { sfxUrl } from './MainMenu';

type Props = {
  onCloseMenu: () => void;
};

function PauseMenu(props: Props) {
  const { onCloseMenu } = props;
  const navigate = useNavigate();

  const handleResumeDemo = async () => {
    await appWindow.setFullscreen(true);
    onCloseMenu();
  };

  const handleClosePauseMenu = async () => {
    await appWindow.setFullscreen(true);
    navigate('/main-menu');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="grid p-20">
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Resume Demo" onClick={handleResumeDemo} />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Settings" />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="Info" />
        <ButtonSfx sfxUrl={sfxUrl} buttonLabel="QUIT" onClick={handleClosePauseMenu} />
      </div>
    </div>
  );
}

export default PauseMenu;
