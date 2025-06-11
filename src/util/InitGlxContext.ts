import WebEmitter from './WebEmitter';
import { addGLXField } from './GlxHelper';
import GlxEventLog from './GlxEventLog';

/**
 * Initialize default GLX context with event log and web emitter.
 * @param isDev - Whether to enable development mode for logging.
 * @param logLimit - Maximum number of events to keep in the log.
 */
export default function initDefaultGLXContext(
  isDev = false,
  logLimit?: number,
) {
  addGLXField('log', new GlxEventLog(logLimit));
  addGLXField('uiEvents', new WebEmitter(isDev));
}
