import React, {
  createRef,
  ElementRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  MediaPlayerParentFunction,
  MediaPlayerPlaybackRates,
  MediaPlayerProps,
  playerSelector,
  PlayerType,
} from './lib';
import { FilePlayer, FilePlayerRefType } from './player/FilePlayer';
import {
  FileAudioPlayerRefType,
  FileAudiPlayer,
} from './player/FileAudioPlayer';

export type MediaPlayerRefType = ElementRef<typeof MediaPlayer>;

export const MediaPlayer = forwardRef<
  MediaPlayerParentFunction,
  MediaPlayerProps<any>
>((props, ref) => {
  const refX = createRef<FilePlayerRefType | FileAudioPlayerRefType>();
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
  switch (playerSelector(props)) {
    case PlayerType.FILE_AUDIO:
      return (
        <FileAudiPlayer
          ref={refX}
          playerProps={props as MediaPlayerProps<HTMLAudioElement>}
        />
      );
    case PlayerType.FILE:
    default:
      return (
        <FilePlayer
          ref={refX}
          playerProps={props as MediaPlayerProps<HTMLVideoElement>}
        />
      );
  }
});
