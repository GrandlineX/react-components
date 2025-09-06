import React, { RefObject } from 'react';
import { Grid, MediaPlayerRefType, PlayerUpdateEvent } from '../components';

export default function MediaplayerDevControls({
  ref,
  progress,
  started,
  play,
}: {
  ref: RefObject<MediaPlayerRefType | null>;
  progress?: PlayerUpdateEvent<any>;
  started?: boolean;
  play?: boolean;
}) {
  return (
    <Grid flex flexC gap={12}>
      <Grid
        flex
        flexRow
        hCenter
        style={{
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          className="console-process-bar"
          style={{
            width: `${((progress?.currentTime || 0) / (progress?.duration || 1)) * 100}%`,
            position: 'absolute',
            left: 0,
            bottom: '-10px',
            height: '10px',
            backgroundColor: 'dodgerblue',
          }}
        />
      </Grid>

      <Grid flex flexRow hCenter>
        Progress: {progress?.currentTime} / {progress?.duration}
      </Grid>

      <Grid flex flexRow hCenter>
        <button
          onClick={() => {
            if (ref.current) {
              console.log(ref.current.getCurrentTime());
              ref.current.seek(10);
            }
          }}
        >
          Skip +10
        </button>
        <button
          onClick={() => {
            if (ref.current) {
              console.log(ref.current.getCurrentTime());
              ref.current.seek(-10);
            }
          }}
        >
          Skip -10
        </button>
        <button
          onClick={() => {
            ref.current?.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            ref.current?.pause();
          }}
        >
          Pause
        </button>

        <select
          defaultValue={1.0}
          onChange={(e) => {
            ref.current?.setPlayBackRate(e.target.value as any);
          }}
        >
          <option value={0.5}>0.5x</option>
          <option value={1.0}>1x</option>
          <option value={1.25}>1.25x</option>
          <option value={1.5}>1.5x</option>
          <option value={2.0}>2x</option>
        </select>
      </Grid>
      <Grid flex flexC vCenter>
        <Grid>Started: {started ? 'true' : 'false'}</Grid>
        <Grid>Playing: {play ? 'true' : 'false'}</Grid>
      </Grid>
    </Grid>
  );
}
