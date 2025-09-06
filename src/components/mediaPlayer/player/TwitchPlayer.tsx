import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { cnx } from '../../../util';
import { MediaPlayerFunction, PlayerProps } from '../lib';

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

const TwitchPlayer = forwardRef<MediaPlayerFunction, PlayerProps<any>>(
  (props, ref) => {
    const [playling, setPlaying] = useState(false);
    const embedRef = useRef<HTMLDivElement>(null);
    const [init, setInit] = useState<boolean>(false);
    const [player, setPlayer] = useState<any>(null);
    const { playerProps } = props;
    const {
      className,
      src,
      width,
      height,
      controls,
      autoplay,
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
      if ((window as any).Twitch && (window as any).Twitch.Embed) return;
      if (!document.getElementById('twitch-embed-script')) {
        const script = document.createElement('script');
        script.id = 'twitch-embed-script';
        script.src = 'https://embed.twitch.tv/embed/v1.js';
        document.body.appendChild(script);
      }
    }, []);

    useEffect(() => {
      if (playling && player && onProgress) {
        onDurationChange?.({
          target: player,
          currentTime: player.getPlayer?.()?.getCurrentTime?.() ?? 0,
          duration: player.getPlayer?.()?.getDuration?.() ?? 0,
        });
        const interval = setInterval(() => {
          onProgress?.({
            target: player,
            currentTime: player.getPlayer?.()?.getCurrentTime?.() ?? 0,
            duration: player.getPlayer?.()?.getDuration?.() ?? 0,
          });
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }
      return () => {};
    }, [player, playling]);

    useEffect(() => {
      if (init && !player) {
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

        options.controls = controls === true;

        const pl = new (window as any).Twitch.Embed(
          embedRef.current!.id,
          options,
        );
        pl.addEventListener('play', () => {
          setPlaying(true);
          onPlay?.();
        });
        pl.addEventListener('pause', () => {
          setPlaying(false);
          onPause?.();
        });
        pl.addEventListener('ended', () => {
          setPlaying(false);
          onEnded?.();
        });
        pl.addEventListener('ready', () => {
          onDurationChange?.({
            target: pl,
            currentTime: pl.getPlayer?.()?.getCurrentTime?.() ?? 0,
            duration: pl.getPlayer?.()?.getDuration?.() ?? 0,
          });
          onStart?.();
        });
        pl.addEventListener('playing', () => {
          setPlaying(true);
          onPlay?.();
        });
        console.log(pl);
        pl.addEventListener('timeupdate', () => {
          console.log('timeupdate');
        });
        setPlayer(pl);
        return () => {
          if (pl) {
            pl.removeEventListener?.('play', onPlay);
            pl.removeEventListener?.('pause', onPause);
            pl.removeEventListener?.('ended', onEnded);
            pl.removeEventListener?.('ready', onStart);
            pl.removeEventListener?.('playing', onPlay);
            pl.removeEventListener?.('timeupdate', onProgress);
          }
        };
      }
      return () => {};
    }, [player, init]);

    // Create Twitch embed
    useEffect(() => {
      if (!twitchInfo || !embedRef.current) return;
      if (!(window as any).Twitch || !(window as any).Twitch.Embed) {
        document
          .getElementById('twitch-embed-script')
          ?.addEventListener('load', () => {
            setInit(true);
          });
      } else {
        setInit(true);
      }
    }, [twitchInfo, embedRef]);

    // Imperative API
    useImperativeHandle(ref, () => ({
      seekTo(to: number) {
        player?.getPlayer?.()?.seek?.(to);
      },
      getRawPlayer<Y>(): Y | null {
        return player?.getPlayer?.() as Y | null;
      },
      play() {
        player?.getPlayer?.()?.play?.();
      },
      pause() {
        player?.getPlayer?.()?.pause?.();
      },
      getDuration() {
        return player?.getPlayer?.()?.getDuration?.() ?? -1;
      },
      getCurrentTime() {
        return player?.getPlayer?.()?.getCurrentTime?.() ?? -1;
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
