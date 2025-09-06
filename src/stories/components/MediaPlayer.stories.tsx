import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React, { createRef } from 'react';
import { Grid, MediaPlayer, MediaPlayerRefType } from '../../components';

const meta = {
  title: 'Components/MediaPlayer',
  component: MediaPlayer,
  tags: ['autodocs'],
  argTypes: {
    //    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MediaPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

const poster =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg';
const src =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
export const Default: Story = {
  args: {
    poster,
    src,
    width: '100%',
  },
};
const ref = createRef<MediaPlayerRefType>();

export const OnEvent: Story = {
  storyName: 'On Events',
  args: {
    poster,
    src,
    width: '100%',
    onStart: () => {
      console.log('onStart');
    },
    onEnded: () => {
      console.log('onEnded');
    },
    onPause: () => {
      console.log('onPause');
    },
    onPlay: () => {
      console.log('onPlay');
    },
    onDurationChange: (e) => {
      console.log('onDurationChange', e);
    },
    onProgress: (e) => {
      console.log('onProgress', e);
    },
  },
};
export const Custom_Controlls: Story = {
  args: {
    poster,
    src,
    width: '100%',
    controls: false,
    ref,
    bottomRow: (
      <Grid flex flexRow hCenter>
        <button
          onClick={() => {
            if (ref.current) {
              ref.current.seek(10);
            }
          }}
        >
          Skip +10
        </button>
        <button
          onClick={() => {
            if (ref.current) {
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
    ),
  },
};
