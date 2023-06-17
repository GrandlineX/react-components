import { getIcon, INames } from '@grandlinex/react-icons';

export type IconProps = {
  name: INames;
  size?: number;
  width?: number;
  height?: number;
};
export default function ({ name, size, width, height }: IconProps) {
  return getIcon(name)({
    size,
    width,
    height,
  });
}
