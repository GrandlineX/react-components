import {
  ComponentRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

export type MediaPlayerSrc = {
  src: string;
  type: string;
};

export type PlayerTracks = Partial<
  Pick<HTMLTrackElement, 'default' | 'kind' | 'label' | 'src' | 'srclang'>
>;

export type MediaPlayerProps<X> = {
  // required
  src: string | MediaPlayerSrc[];
  tracks?: PlayerTracks[];
  // optional props
  className?: string;
  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  width?: string | number;
  height?: string | number;
  crossorigin?: 'anonymous' | 'use-credentials';
  // optional functions
  onEnded?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onStart?: () => void;
  onDurationChange?: (event: PlayerUpdateEvent<X>) => void;
  onProgress?: (event: PlayerUpdateEvent<X>) => void;
  bottomRow?: ReactNode;
  player?: PlayerType;
  custom?: Record<string, any>;
};

export type PlayerProps<X> = {
  playerProps: MediaPlayerProps<X>;
};
export type FilePlayerProps = PlayerProps<HTMLVideoElement>;

export type PlayerUpdateEvent<X> = {
  target: X;
  currentTime: number;
  duration: number;
};

export enum PlayerType {
  FILE,
  FILE_AUDIO,
}
export function playerSelector(props: MediaPlayerProps<any>): PlayerType {
  if (props.player) {
    return props.player;
  }
  return PlayerType.FILE;
}
export type MediaPlayerPlaybackRates =
  | 1.0
  | 1.25
  | 1.5
  | 0.5
  | 2.0
  | -1.0
  | -0.5;

export type MediaPlayerFunction = {
  seekTo(to: number): void;
  getRawPlayer<Y>(): Y | null;
  play(): void;
  pause(): void;
  getDuration(): number;
  getCurrentTime(): number;
  setPlayBackRate(rate: MediaPlayerPlaybackRates): void;
};
export type MediaPlayerParentFunction = {
  seek(seconds: number): void;
} & MediaPlayerFunction;

export type MediaPlayerRefType = ComponentRef<
  ForwardRefExoticComponent<
    MediaPlayerProps<any> & RefAttributes<MediaPlayerParentFunction>
  >
>;

export type PlayerCompList = {
  canPlay: (props: MediaPlayerProps<any>) => boolean;
  component: ForwardRefExoticComponent<
    PlayerProps<any> & RefAttributes<MediaPlayerFunction>
  >;
};
