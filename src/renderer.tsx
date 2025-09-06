import React, { useRef, useState } from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { GLang, initDefaultGLXContext, UIContext, UIContextData } from './util';
import {
  Grid,
  MediaPlayer,
  MediaPlayerRefType,
  PlayerUpdateEvent,
} from './components';
import MediaplayerDevControls from './dev/MediaplayerDevControls';

const root = createRoot(document.getElementById('root')!);

initDefaultGLXContext();

const context = new UIContextData({
  portalRoot: document.body,
  lang: new GLang(null),
});
const srcList = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://www.twitch.tv/videos/1926383874',
];

const App = () => {
  const [pos, setPos] = useState<number>(2);
  const ref = useRef<MediaPlayerRefType>(null);
  const [progress, setProgress] = useState<PlayerUpdateEvent<any>>();
  const [started, setStarted] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <Grid flex flexC gap={8}>
      <select value={pos}>
        {srcList.map((src, index) => (
          <option value={index} onClick={() => setPos(index)}>
            {src}
          </option>
        ))}
      </select>
      <MediaPlayer
        ref={ref}
        src={srcList[pos]}
        width="600px"
        height="338px"
        onProgress={setProgress}
        onStart={() => setStarted(true)}
        onEnded={() => setStarted(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        controls
      />
      <MediaplayerDevControls
        ref={ref}
        progress={progress}
        started={started}
        play={playing}
      />
    </Grid>
  );
};

root.render(
  <div className="root root-dark">
    {/** ***************************************************** */}
    <UIContext.Provider value={context}>
      <App />
    </UIContext.Provider>
  </div>,
);
