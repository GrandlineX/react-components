import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Grid, MediaPlayer } from '../../components';
import { MediaPlayerRefType } from '../../components/mediaPlayer/MediaPlayer';

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
const ref = React.createRef<MediaPlayerRefType>();

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
              console.log(ref.current.getCurrentTime());
              ref.current.seekTo(ref.current.getCurrentTime() + 10);
            }
          }}
        >
          Skip +10
        </button>
        <button
          onClick={() => {
            if (ref.current) {
              console.log(ref.current.getCurrentTime());
              ref.current.seekTo(ref.current.getCurrentTime() - 10);
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
      </Grid>
    ),
  },
};
