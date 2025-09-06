import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import {
  MediaPlayerParentFunction,
  MediaPlayerPlaybackRates,
  MediaPlayerProps,
  MediaPlayerRefType,
  PlayerCompList,
} from './lib';
import basePlayer from './player';

const MediaPlayer = forwardRef<
  MediaPlayerParentFunction,
  MediaPlayerProps<any> & {
    customPlayer?: PlayerCompList[];
  }
>((props, ref) => {
  const { customPlayer } = props;
  const refX = useRef<MediaPlayerRefType>(null);
  useImperativeHandle(ref, () => ({
    seekTo(to: number) {
      if (refX.current) {
        refX.current.seekTo(to);
      }
    },
    seek(sec: number) {
      if (refX.current) {
        const current = refX.current.getCurrentTime();
        refX.current.seekTo(current + sec);
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
    if (customPlayer) {
      const cP = customPlayer.find((p) => p.canPlay(props))?.component;
      if (cP) {
        return cP;
      }
    }
    return basePlayer.find((p) => p.canPlay(props))?.component;
  }, [customPlayer, props]);

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
