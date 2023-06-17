import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IOArrowUndoCircle, IOColorFill } from '@grandlinex/react-icons';
import Grid from '../layout/Grid/Grid';
import { IconButton } from '../button/IconButton';

export interface CanvasProps {
  width?: number | string;
  height?: number | string;
  onChange?: (base: string) => void;
}

export type Coordinate = {
  x: number;
  y: number;
};

const Draw = ({ width, height, onChange }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<string>('blue');
  const [lineWidth, setLineWidth] = useState<number>(5);
  const [data, setData] = useState<string[]>([]);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );

  const getCoordinates = (
    event: MouseEvent | TouchEvent
  ): Coordinate | undefined => {
    if (!canvasRef.current) {
      return undefined;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const { left, top } = canvas.getBoundingClientRect();
    const leftR = Math.round(left);
    const topR = Math.round(top);
    if (window.TouchEvent && event instanceof TouchEvent) {
      return {
        x: event.changedTouches[0].pageX - leftR,
        y: event.changedTouches[0].pageY - topR,
      };
    }

    if (event instanceof MouseEvent) {
      return {
        x: event.pageX - leftR,
        y: event.pageY - topR,
      };
    }

    return {
      x: 0,
      y: 0,
    };
  };

  const startPaint = useCallback((event: MouseEvent | TouchEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setMousePosition(coordinates);
      setIsPainting(true);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('touchstart', startPaint);
    return () => {
      canvas.removeEventListener('mousedown', startPaint);
      canvas.removeEventListener('touchstart', startPaint);
    };
  }, [startPaint]);

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      context.strokeStyle = color;
      context.lineJoin = 'round';
      context.lineWidth = lineWidth;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();
      context.stroke();
    }
  };

  const paint = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
  }, []);

  useEffect(() => {
    if (!isPainting && canvasRef.current) {
      const dat = canvasRef.current.toDataURL();
      setData(data.concat(dat));
      onChange?.(dat);
    }
  }, [isPainting]);
  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    canvas.addEventListener('touchmove', paint);
    return () => {
      canvas.removeEventListener('mousemove', paint);
      canvas.removeEventListener('touchmove', paint);
    };
  }, [paint]);

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    canvas.addEventListener('touchend', exitPaint);
    return () => {
      canvas.removeEventListener('mouseup', exitPaint);
      canvas.removeEventListener('mouseleave', exitPaint);
      canvas.removeEventListener('touchend', exitPaint);
    };
  }, [exitPaint]);

  return (
    <Grid className="glx-draw">
      <Grid
        className="glx-draw--header glx-flex-wrap"
        flex
        flexR
        gap={8}
        vCenter
        style={{
          width,
        }}
      >
        <IconButton
          disabled={data.length < 2}
          onClick={() => {
            const canvas = canvasRef.current;
            if (canvas) {
              const context = canvas.getContext('2d');
              if (context) {
                const img = new Image();
                img.onload = () => {
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  context.drawImage(img, 0, 0);
                };

                const x = data.slice(0, data.length - 1);

                img.src = x[x.length - 1];

                onChange?.(x[x.length - 1]);

                setData(x);
              }
            }
          }}
        >
          <IOArrowUndoCircle />
        </IconButton>
        {[
          'blue',
          'red',
          'green',
          'yellow',
          'orange',
          'cyan',
          'pink',
          'purple',
          'black',
        ].map((x) => (
          <IconButton
            key={`color_${x}`}
            color={x as any}
            onClick={() => {
              setColor(x);
            }}
          >
            <IOColorFill />
          </IconButton>
        ))}
        <IconButton
          onClick={() => {
            setColor('white');
          }}
        >
          <IOColorFill />
        </IconButton>
        <div>Current color:</div>
        <div
          style={{
            width: '50px',
            height: '25px',
            backgroundColor: color,
          }}
        />
        <div>Line width:</div>
        <div>
          <input
            type="range"
            min={1}
            step={1}
            max={40}
            value={lineWidth}
            onChange={(e) => {
              setLineWidth(parseInt(e.target.value, 10));
            }}
          />
        </div>
        <div>{lineWidth}px</div>
      </Grid>
      <canvas
        style={{ border: '1px solid white' }}
        ref={canvasRef}
        height={height}
        width={width}
      />
    </Grid>
  );
};

Draw.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  onChange: undefined,
};

export default Draw;
