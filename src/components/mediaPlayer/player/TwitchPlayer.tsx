import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react';
import { cnx } from '../../../util';
import { FilePlayerProps, MediaPlayerFunction } from '../lib';

// Helper to extract Twitch video/clip ID from src
function getTwitchInfo(src: string | { src: string }) {
  const url = typeof src === 'string' ? src : src.src;
  // Video: https://www.twitch.tv/videos/123456789
  const videoMatch = url.match(/twitch\.tv\/videos\/(\d+)/);
  if (videoMatch) return { type: 'video', id: videoMatch[1] };
  // Clip: https://clips.twitch.tv/ClipSlug or https://www.twitch.tv/username/clip/ClipSlug
  const clipMatch = url.match(/clips\.twitch\.tv\/([a-zA-Z0-9_-]+)/);
  if (clipMatch) return { type: 'clip', id: clipMatch[1] };
  const clipAltMatch = url.match(/twitch\.tv\/.+\/clip\/([a-zA-Z0-9_-]+)/);
  if (clipAltMatch) return { type: 'clip', id: clipAltMatch[1] };
  return null;
}

const TwitchPlayer = forwardRef<MediaPlayerFunction, FilePlayerProps>(
  (props, ref) => {
    const embedRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
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
    const twitchInfo = getTwitchInfo(typeof src === 'string' ? src : '');

    // Load Twitch embed script
    useEffect(() => {
      console.log('Loading Twitch embed script');
      if ((window as any).Twitch && (window as any).Twitch.Embed) return;
      if (!document.getElementById('twitch-embed-script')) {
        const script = document.createElement('script');
        script.id = 'twitch-embed-script';
        script.src = 'https://embed.twitch.tv/embed/v1.js';
        document.body.appendChild(script);
      }
    }, []);

    // Create Twitch embed
    useEffect(() => {
      if (!twitchInfo || !embedRef.current) return () => {};
      function createEmbed() {
        console.log('PlayerRef', playerRef.current);
        if (playerRef.current) return;
        const options: any = {
          width: width || '100%',
          height: height || 360,
          autoplay: !!autoplay,
          parent: [window.location.hostname],
        };
        if (twitchInfo!.type === 'video') {
          options.video = twitchInfo!.id;
        } else {
          options.clip = twitchInfo!.id;
        }
        if (controls !== undefined) options.controls = controls;
        if (loop !== undefined) options.loop = loop;
        playerRef.current = new (window as any).Twitch.Embed(
          embedRef.current!.id,
          options,
        );
        playerRef.current.addEventListener('play', () => onPlay?.());
        playerRef.current.addEventListener('pause', () => onPause?.());
        playerRef.current.addEventListener('ended', () => onEnded?.());
        playerRef.current.addEventListener('ready', () => onStart?.());
        playerRef.current.addEventListener('playing', () => onPlay?.());
        playerRef.current.addEventListener('timeupdate', () => {
          const player = playerRef.current.getPlayer();
          onProgress?.({
            target: player,
            currentTime: player.getCurrentTime(),
            duration: player.getDuration(),
          });
          onDurationChange?.({
            target: player,
            currentTime: player.getCurrentTime(),
            duration: player.getDuration(),
          });
        });
      }
      if ((window as any).Twitch && (window as any).Twitch.Embed) {
        createEmbed();
      } else {
        document
          .getElementById('twitch-embed-script')
          ?.addEventListener('load', () => {
            createEmbed();
          });
      }
      return () => {
        if (playerRef.current) {
          playerRef.current.removeEventListener?.('play', onPlay);
          playerRef.current.removeEventListener?.('pause', onPause);
          playerRef.current.removeEventListener?.('ended', onEnded);
          playerRef.current.removeEventListener?.('ready', onStart);
          playerRef.current.removeEventListener?.('playing', onPlay);
          playerRef.current.removeEventListener?.('timeupdate', onProgress);
          playerRef.current = null;
        }
      };
    }, [twitchInfo, playerRef]);

    // Imperative API
    useImperativeHandle(ref, () => ({
      seekTo(to: number) {
        const player = playerRef.current?.getPlayer?.();
        player?.seek?.(to);
      },
      getRawPlayer<Y>(): Y | null {
        return playerRef.current?.getPlayer?.() as Y | null;
      },
      play() {
        const player = playerRef.current?.getPlayer?.();
        player?.play?.();
      },
      pause() {
        const player = playerRef.current?.getPlayer?.();
        player?.pause?.();
      },
      getDuration() {
        const player = playerRef.current?.getPlayer?.();
        return player?.getDuration?.() ?? -1;
      },
      getCurrentTime() {
        const player = playerRef.current?.getPlayer?.();
        return player?.getCurrentTime?.() ?? -1;
      },
      setPlayBackRate() {},
    }));

    return (
      <>
        <div className={cnx('glx-media-player', className)}>
          {twitchInfo ? (
            <div
              ref={embedRef}
              id={`twitch-embed-${twitchInfo.type}-${twitchInfo.id}`}
              style={{ width: width || '100%', height: height || 360 }}
            />
          ) : (
            <div>Invalid Twitch URL</div>
          )}
        </div>
        {bottomRow}
      </>
    );
  },
);

export default TwitchPlayer;
