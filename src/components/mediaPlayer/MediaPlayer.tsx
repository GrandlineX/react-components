import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import {
  MediaPlayerParentFunction,
  MediaPlayerPlaybackRates,
  MediaPlayerProps,
  MediaPlayerRefType,
  PlayerCompList,
  PlayerType,
} from './lib';
import FileAudiPlayer from './player/FileAudioPlayer';
import FilePlayer from './player/FilePlayer';

const basePlayer: PlayerCompList[] = [
  {
    canPlay: ({ player }) => player === PlayerType.FILE_AUDIO,
    component: FileAudiPlayer,
  },
  { canPlay: () => true, component: FilePlayer },
];

const MediaPlayer = forwardRef<
  MediaPlayerParentFunction,
  MediaPlayerProps<any>
>((props, ref) => {
  const refX = useRef<MediaPlayerRefType>(null);
  useImperativeHandle(ref, () => ({
    seekTo(to: number) {
      if (refX.current) {
        refX.current.seekTo(to);
      }
    },
    getRawPlayer<Y>(): Y | null {
      return refX.current?.getRawPlayer() as Y | null;
    },
    play() {
      if (refX.current) {
        refX.current.play();
      }
    },
    pause() {
      if (refX.current) {
        refX.current.pause();
      }
    },
    getDuration() {
      if (refX.current) {
        refX.current.getDuration();
      }
      return -1;
    },
    getCurrentTime() {
      if (refX.current) {
        return refX.current.getCurrentTime();
      }
      return -1;
    },
    setPlayBackRate(rate: MediaPlayerPlaybackRates) {
      if (refX.current) {
        refX.current.setPlayBackRate(rate);
      }
    },
  }));

  const SelectedPlayer = useMemo(() => {
    return basePlayer.find((p) => p.canPlay(props))?.component;
  }, [props]);

  if (!SelectedPlayer) {
    return null;
  }

  return (
    <SelectedPlayer
      ref={refX}
      playerProps={props as MediaPlayerProps<HTMLAudioElement>}
    />
  );
});

export default MediaPlayer;
