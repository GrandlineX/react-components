import { lazy } from 'react';
import { PlayerCompList, PlayerType } from '../lib';

const basePlayer: PlayerCompList[] = [
  {
    canPlay: ({ src }) => {
      if (typeof src !== 'string') return false;
      return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(src);
    },
    component: lazy(() => import('./YouTubePlayer')),
  },
  {
    canPlay: ({ player }) => player === PlayerType.FILE_AUDIO,
    component: lazy(() => import('./FileAudioPlayer')),
  },
  {
    canPlay: () => true,
    component: lazy(() => import('./FilePlayer')),
  },
];

export default basePlayer;
