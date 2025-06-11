import { GLXContext } from './GLXContext';

/**
 * Helper function to get a safe window object.
 */
export function getSaveWindow() {
  return typeof window !== 'undefined'
    ? window
    : ({
        document: {
          body: {},
        },
      } as unknown as Window);
}

/**
 * Helper function to add a field to the GLXContext.
 * @param field - The field to add to the GLXContext.
 * @param data - The data to set for the field.
 */
export function addGLXField<K extends keyof GLXContext>(
  field: K,
  data: GLXContext[K],
) {
  const window = getSaveWindow();
  if (!window.__glx) {
    window.__glx = {};
  }
  window.__glx[field] = data;
}

/**
 * Helper function to get a field from the GLXContext.
 * @param field - The field to get from the GLXContext.
 */
export function getGLXField<K extends keyof GLXContext>(
  field: K,
): GLXContext[K] | null {
  const window = getSaveWindow();
  if (!window.__glx) {
    return null;
  }
  return window.__glx[field];
}
