import React, {
  createRef,
  ElementRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  MediaPlayerParentFunction,
  MediaPlayerProps,
  playerSelector,
  PlayerType,
} from './lib';
import { FilePlayer, FilePlayerRefType } from './player/FilePlayer';

export type MediaPlayerRefType = ElementRef<typeof MediaPlayer>;

export const MediaPlayer = forwardRef<
  MediaPlayerParentFunction,
  MediaPlayerProps<any>
>((props, ref) => {
  const refX = createRef<FilePlayerRefType>();
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
  }));
  switch (playerSelector(props)) {
    case PlayerType.FILE:
    default:
      return (
        <FilePlayer
          ref={refX}
          playerProps={props as MediaPlayerProps<HTMLVideoElement>}
        />
      );
  }
}); // <X = any>(props: MediaPlayerProps<X>)

MediaPlayer.defaultProps = {
  className: undefined,
  controls: true,
  poster: undefined,
  preload: undefined,
  width: undefined,
  height: undefined,
  autoplay: undefined,
  loop: undefined,
  muted: undefined,
  crossorigin: undefined,
  onEnded: undefined,
  onPause: undefined,
  onPlay: undefined,
  onStart: undefined,
  onProgress: undefined,
  onDurationChange: undefined,
};
