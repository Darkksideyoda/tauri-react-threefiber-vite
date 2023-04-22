import React, { useCallback } from 'react';
import useSound from 'use-sound';

import { SfxActions } from '../../views/Menus/MainMenu';

type Props = {
  buttonLabel: string;
  onClick?: () => void;
  sfxUrl: SfxActions;
};

function ButtonSfx(props: Props) {
  const { buttonLabel, onClick, sfxUrl } = props;

  const [playHoverSfx, { stop: stopHoverSfx }] = useSound(sfxUrl.onHoverSound ?? '');
  const [playClickSfx] = useSound(sfxUrl.onClickSound ?? '', {
    volume: 0.4
  });

  const handleOnClick = useCallback(() => {
    playClickSfx();
    if (onClick) {
      onClick();
    }
  }, [onClick, playClickSfx]);

  return (
    <button
      onMouseEnter={() => playHoverSfx()}
      onMouseLeave={() => stopHoverSfx()}
      onClick={handleOnClick}
      className="rounded-lg hover:text-gray-500/50 font-main_menu text-5xl text-white/60 py-2"
    >
      {buttonLabel}
    </button>
  );
}

export default React.memo(ButtonSfx);
