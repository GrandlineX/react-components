import { getGLXField } from './GlxHelper';
import { WebEmitterClient } from './GLXContext';

/**
 * WebEmitter class for managing event listeners and emitters in a web context.
 */
export default class WebEmitter implements WebEmitterClient {
  events: Map<string, ((d: any) => void)[]>;

  protected isDev: boolean;

  /**
   * Creates an instance of WebEmitter.
   * @param isDev - Whether the instance is in development mode.
   */
  constructor(isDev = false) {
    this.events = new Map();
    this.isDev = isDev;
  }

  /**
   * Adds an event listener for a specific event name.
   * @param name - The name of the event to listen for.
   * @param listener - The callback function to execute when the event is emitted.
   */
  on<T>(name: string, listener: (d: T) => void) {
    if (!this.events.has(name)) {
      this.events.set(name, []);
    }

    this.events.get(name)?.push(listener);
  }

  /**
   * Removes a specific listener from an event.
   * @param name - The name of the event.
   * @param listenerToRemove - The listener function to remove.
   */
  removeListener(name: string, listenerToRemove: any) {
    if (!this.events.has(name)) {
      throw new Error(
        `Can't remove a listener. Event "${name}" doesn't exits.`,
      );
    }

    const filterListeners = (listener: any) => listener !== listenerToRemove;

    const ev = this.events.get(name)?.filter(filterListeners) || [];
    this.events.set(name, ev);
  }

  /**
   * Emits an event with the specified name and data.
   * Calls all listeners registered for that event.
   * @param name - The name of the event to emit.
   * @param data - The data to pass to the listeners.
   */
  emit<T>(name: string, data: T) {
    if (this.events.has(name)) {
      const fireCallbacks = (callback: (data: T) => void) => {
        callback(data);
      };
      if (this.isDev) {
        getGLXField('log')?.add({
          time: Date.now(),
          type: name,
          sender: 'web-emitter',
          data,
        });
      }
      this.events.get(name)?.forEach(fireCallbacks);
    }
  }
}
