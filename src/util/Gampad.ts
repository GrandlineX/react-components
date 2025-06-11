import { useCallback, useEffect, useRef, useState } from 'react';

export type GamePadButtons = {
  A: boolean;
  B: boolean;
  X: boolean;
  Y: boolean;
  LB: boolean;
  LT: boolean;
  LS: boolean;
  RB: boolean;
  RT: boolean;
  RS: boolean;
  Start: boolean;
  Back: boolean;
  DPadUp: boolean;
  DPadRight: boolean;
  DPadDown: boolean;
  DPadLeft: boolean;
};

export type GamePadAxis = {
  LeftStickX: number;
  LeftStickY: number;
  RightStickX: number;
  RightStickY: number;
  RightTrigger: number;
  LeftTrigger: number;
};
export const xboxLayout = {
  buttons: [
    'A',
    'B',
    'X',
    'Y',
    'LB',
    'RB',
    'LT',
    'RT',
    'Back',
    'Start',
    'LS',
    'RS',
    'DPadUp',
    'DPadDown',
    'DPadLeft',
    'DPadRight',
  ],
  axis: ['LeftStickX', '-LeftStickY', 'RightStickX', '-RightStickY'],
  buttonAxis: [
    null,
    null,
    null,
    null,
    null,
    null,
    'LeftTrigger',
    'RightTrigger',
  ],
};

export function buttonIndexToButtonName(index: number) {
  if (xboxLayout.buttons && xboxLayout.buttons.length >= index + 1) {
    return xboxLayout.buttons[index] as keyof GamePadButtons;
  }
  return null;
}

export function buttonIndexToAxisName(index: number) {
  if (xboxLayout.buttonAxis && xboxLayout.buttonAxis.length >= index + 1) {
    return xboxLayout.buttonAxis[index] as keyof GamePadAxis;
  }
  return null;
}

export function axisIndexToAxisName(index: number) {
  if (xboxLayout.axis && xboxLayout.axis.length >= index + 1) {
    return xboxLayout.axis[index] as keyof GamePadAxis;
  }
  return null;
}

export type GamepadListeners = {
  onConnect?: (gamepadIndex: number) => void;
  onDisconnect?: (gamepadIndex: number) => void;
  onAxisChange?: (
    axisName: keyof GamePadAxis,
    value: number,
    previousValue: number,
  ) => void;
  onRight?: () => void;
  onLeft?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onButtonChange?: (buttonName: keyof GamePadButtons, pressed: boolean) => void;
  onButtonDown?: (buttonName: keyof GamePadButtons) => void;
  onButtonUp?: (buttonName: keyof GamePadButtons) => void;
};

export function useGamePad(
  {
    onConnect,
    onDisconnect,
    onAxisChange,
    onLeft,
    onRight,
    onUp,
    onDown,
    onButtonChange,
    onButtonDown,
    onButtonUp,
  }: GamepadListeners,
  gamepadIndex = 0,
  stickThreshold = 0.5,
  deadZone = 0.08,
) {
  const [connected, setConnected] = useState<boolean>(false);
  const frameRef = useRef<number | undefined>(undefined);

  const [buttonState, setButtonState] = useState<GamePadButtons>({
    A: false,
    B: false,
    Back: false,
    DPadDown: false,
    DPadLeft: false,
    DPadRight: false,
    DPadUp: false,
    LB: false,
    LS: false,
    LT: false,
    RB: false,
    RS: false,
    RT: false,
    Start: false,
    X: false,
    Y: false,
  });

  const [axis, setAxis] = useState<GamePadAxis>({
    LeftStickX: 0,
    LeftStickY: 0,
    LeftTrigger: 0,
    RightStickX: 0,
    RightStickY: 0,
    RightTrigger: 0,
  });

  const updateAxis = useCallback(
    (axisName: keyof GamePadAxis, originalValue: number) => {
      if (
        axisName &&
        originalValue !== undefined &&
        originalValue !== null &&
        !Number.isNaN(originalValue)
      ) {
        const invert = axisName[0] === '-';
        let value = originalValue * (invert ? -1 : 1);

        if (Math.abs(value) < deadZone) {
          value = 0;
        }

        if (invert) {
          axisName = axisName.substring(1) as keyof GamePadAxis;
        }

        if (axis[axisName as keyof GamePadAxis] !== value) {
          const previousValue = axis[axisName];

          setAxis((prev) => ({
            ...prev,
            [axisName]: value,
          }));

          onAxisChange?.(axisName, value, previousValue);

          if (axisName === 'LeftStickX') {
            if (previousValue <= stickThreshold && value > stickThreshold) {
              onRight?.();
            }

            if (previousValue >= -stickThreshold && value < -stickThreshold) {
              onLeft?.();
            }
          }

          if (axisName === 'LeftStickY') {
            if (previousValue <= stickThreshold && value > stickThreshold) {
              onUp?.();
            }

            if (previousValue >= -stickThreshold && value < -stickThreshold) {
              onDown?.();
            }
          }
        }
      }
    },
    [
      axis,
      deadZone,
      onAxisChange,
      onDown,
      onLeft,
      onRight,
      onUp,
      stickThreshold,
    ],
  );
  const updateAllAxis = useCallback(
    (gamepad: Gamepad) => {
      for (let i = 0; i < gamepad.axes.length; ++i) {
        const axisName = axisIndexToAxisName(i);
        if (axisName) {
          updateAxis(axisName, gamepad.axes[i]);
        }
      }
    },
    [updateAxis],
  );
  const updateButton = useCallback(
    (buttonName: keyof GamePadButtons, pressed: boolean) => {
      if (buttonState[buttonName] === undefined) {
        return;
      }
      if (buttonState[buttonName] !== pressed) {
        setButtonState((prev) => ({ ...prev, [buttonName]: pressed }));

        onButtonChange?.(buttonName, pressed);
        if (pressed) {
          onButtonUp?.(buttonName);
        } else {
          onButtonDown?.(buttonName);
        }
      }
    },
    [buttonState, onButtonChange, onButtonDown, onButtonUp],
  );
  const updateAllButtons = useCallback(
    (gamepad: Gamepad) => {
      for (let i = 0; i < gamepad.buttons.length; ++i) {
        const { pressed } = gamepad.buttons[i];
        const { value } = gamepad.buttons[i];

        const buttonName = buttonIndexToButtonName(i);
        if (buttonName) {
          updateButton(buttonName, pressed);
        }

        const axisName = buttonIndexToAxisName(i);
        if (axisName) {
          updateAxis(axisName, value);
        }
      }
    },
    [updateAxis, updateButton],
  );

  const updateGamepad = useCallback(() => {
    const gamepads = navigator.getGamepads();

    if (
      gamepads.length &&
      gamepads.length > gamepadIndex &&
      gamepads[gamepadIndex]
    ) {
      const gamepad = gamepads[gamepadIndex];

      if (!connected) {
        setConnected(true);
        onConnect?.(gamepadIndex);
      }

      updateAllButtons(gamepad);
      updateAllAxis(gamepad);
    } else if (connected) {
      setConnected(false);
      onDisconnect?.(gamepadIndex);
    }

    if (window.requestAnimationFrame) {
      frameRef.current = window.requestAnimationFrame(updateGamepad);
    }
  }, [
    connected,
    gamepadIndex,
    onConnect,
    onDisconnect,
    updateAllAxis,
    updateAllButtons,
  ]);

  /**
   * Background update function
   */

  useEffect(() => {
    if (window.requestAnimationFrame) {
      frameRef.current = window.requestAnimationFrame(updateGamepad);
    }

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateGamepad]);
}
