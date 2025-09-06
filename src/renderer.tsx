import React, { useRef, useState } from 'react';
import '../themes/dev.scss';
import { createRoot } from 'react-dom/client';
import { GLang, initDefaultGLXContext, UIContext, UIContextData } from './util';
import {
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
const App = () => {
  const ref = useRef<MediaPlayerRefType>(null);
  const [progress, setProgress] = useState<PlayerUpdateEvent<any>>();
  return (
    <div>
      <MediaPlayer
        ref={ref}
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="600px"
        onProgress={setProgress}
      />
      <MediaplayerDevControls ref={ref} progress={progress} />
    </div>
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
