import React, {
  createRef,
  ElementRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { cnx } from '../../../util';
import {
  FilePlayerProps,
  MediaPlayerParentFunction,
  MediaPlayerPlaybackRates,
} from '../lib';

export type FileAudioPlayerRefType = ElementRef<typeof FileAudiPlayer>;
export type FileAudioPlayerParentFunction = MediaPlayerParentFunction;
export const FileAudiPlayer = forwardRef<
  FileAudioPlayerParentFunction,
  FilePlayerProps
>((props, ref) => {
  const refX = createRef<HTMLVideoElement>();

  useImperativeHandle(ref, () => ({
    seekTo(to: number) {
      if (refX.current) {
        refX.current.currentTime = to;
      }
    },
    getRawPlayer<Y>(): Y | null {
      return refX.current as Y | null;
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
        return refX.current.duration;
      }
      return -1;
    },
    getCurrentTime() {
      if (refX.current) {
        return refX.current.currentTime;
      }
      return -1;
    },
    setPlayBackRate(rate: MediaPlayerPlaybackRates) {
      if (refX.current) {
        refX.current.playbackRate = rate;
      }
    },
  }));

  const { playerProps } = props;
  const {
    className,
    src,
    tracks,
    controls,
    loop,
    autoplay,
    muted,
    crossorigin,
    preload,
    onEnded,
    onPause,
    onPlay,
    onStart,
    onDurationChange,
    onProgress,
    bottomRow,
  } = playerProps;
  const isSimpleSrc = typeof src === 'string';

  return (
    <>
      <audio
        controls={controls}
        className={cnx('glx-media-player', className)}
        ref={refX}
        src={isSimpleSrc ? src : undefined}
        loop={loop}
        muted={muted}
        autoPlay={autoplay}
        crossOrigin={crossorigin}
        onProgress={(event) => {
          const target = event.target as HTMLVideoElement;
          onProgress?.({
            target,
            currentTime: target.currentTime,
            duration: target.duration,
          });
        }}
        onTimeUpdate={(event) => {
          const target = event.target as HTMLVideoElement;
          onProgress?.({
            target,
            currentTime: target.currentTime,
            duration: target.duration,
          });
        }}
        onDurationChange={(event) => {
          const target = event.target as HTMLVideoElement;
          onDurationChange?.({
            target,
            currentTime: target.currentTime,
            duration: target.duration,
          });
        }}
        onLoadedMetadata={() => {
          onStart?.();
        }}
        preload={preload}
        onEnded={() => {
          onEnded?.();
        }}
        onPause={() => {
          onPause?.();
        }}
        onPlay={() => {
          onPlay?.();
        }}
      >
        {!isSimpleSrc
          ? src.map((s) => <source src={s.src} type={s.type} />)
          : null}
        {tracks?.map((track) => (
          <track
            default={track.default}
            kind={track.kind}
            src={track.src}
            srcLang={track.srclang}
            label={track.label}
          />
        ))}
      </audio>
      {bottomRow}
    </>
  );
});

FileAudiPlayer.defaultProps = {
  ref: undefined,
};
