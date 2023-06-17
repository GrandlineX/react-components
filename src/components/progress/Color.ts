export default function colorSelect(
  value: number,
  colors: [string, string, string] = ['#1d47b0', '#ce8b2b', '#b4312d']
) {
  if (value < 85) {
    return colors[0];
  }
  if (value < 95) {
    return colors[1];
  }
  return colors[2];
}
