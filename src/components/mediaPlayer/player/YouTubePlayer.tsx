import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { cnx } from '../../../util';
import {
  MediaPlayerFunction,
  MediaPlayerPlaybackRates,
  PlayerProps,
} from '../lib';

// Helper to extract YouTube video ID from src
function getYouTubeId(src: string | { src: string }): string | null {
  const url = typeof src === 'string' ? src : src.src;
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

const YouTubePlayer = forwardRef<MediaPlayerFunction, PlayerProps<any>>(
  (props, ref) => {
    const playerRef = useRef<any>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { playerProps } = props;
    const {
      className,
      src,
      width,
      height,
      controls,
      autoplay,
      loop,
      onEnded,
      onPause,
      onPlay,
      onStart,
      onDurationChange,
      onProgress,
      bottomRow,
    } = playerProps;
    const videoId = getYouTubeId(typeof src === 'string' ? src : src[0]);
    // Load YouTube IFrame API
    useEffect(() => {
      if ((window as any).YT) return;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }, []);
    // Create player when API is ready
    useEffect(() => {
      function onYouTubeIframeAPIReady() {
        if (!videoId || !iframeRef.current) return;
        playerRef.current = new (window as any).YT.Player(iframeRef.current, {
          videoId,
          events: {
            onReady: (e: any) => {
              if (autoplay) playerRef.current.playVideo();
              onStart?.();
              if (e.target.playerInfo) {
                onDurationChange?.({
                  target: e.target,
                  currentTime: e.target.playerInfo.currentTime,
                  duration: e.target.playerInfo.duration,
                });
              }
            },
            onStateChange: (e: any) => {
              if (e.data === 0) onEnded?.();
              if (e.data === 1) onPlay?.();
              if (e.data === 2) onPause?.();
            },
            onVideoProgress: (e: any) => {
              if (e.target.playerInfo) {
                onProgress?.({
                  target: e.target,
                  currentTime: e.target.playerInfo.currentTime,
                  duration: e.target.playerInfo.duration,
                });
              }
            },
          },
        });
      }
      if ((window as any).YT && (window as any).YT.Player) {
        onYouTubeIframeAPIReady();
      } else {
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
      // Cleanup
      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
          playerRef.current = null;
        }
      };
    }, [videoId]);
    // Imperative API
    useImperativeHandle(ref, () => ({
      seekTo(to: number) {
        playerRef.current?.seekTo(to, true);
      },
      getRawPlayer<Y>(): Y | null {
        return playerRef.current as Y | null;
      },
      play() {
        playerRef.current?.playVideo();
      },
      pause() {
        playerRef.current?.pauseVideo();
      },
      getDuration() {
        return playerRef.current?.getDuration?.() ?? -1;
      },
      getCurrentTime() {
        return playerRef.current?.getCurrentTime?.() ?? -1;
      },
      setPlayBackRate(rate: MediaPlayerPlaybackRates) {
        playerRef.current?.setPlaybackRate?.(rate);
      },
    }));

    return (
      <>
        <div className={cnx('glx-media-player', className)}>
          <iframe
            ref={iframeRef}
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=${controls ? 1 : 0}&loop=${loop ? 1 : 0}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Player"
          />
        </div>
        {bottomRow}
      </>
    );
  },
);

export default YouTubePlayer;
