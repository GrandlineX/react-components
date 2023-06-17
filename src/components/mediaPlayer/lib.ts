import { ReactNode } from 'react';

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
}
export function playerSelector(props: MediaPlayerProps<any>): PlayerType {
  return PlayerType.FILE;
}
export type MediaPlayerParentFunction = {
  seekTo(to: number): void;
  getRawPlayer<Y>(): Y | null;
  play(): void;
  pause(): void;
  getDuration(): number;
  getCurrentTime(): number;
};
