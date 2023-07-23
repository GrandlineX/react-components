/**
 * Helper function to get the window object. Fix for webpack build.
 */
export default function getSaveWindow() {
  return typeof window !== 'undefined'
    ? window
    : ({
        document: {
          body: {},
        },
      } as unknown as Window);
}
