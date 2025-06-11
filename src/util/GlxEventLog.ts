import { GLXEvent, GLXEventLogClient } from './GLXContext';

/**
 * A simple event log implementation for GLX.
 */
export default class GlxEventLog implements GLXEventLogClient {
  events: GLXEvent[] = [];

  logLimit: number;

  constructor(logLimit: number = 1000) {
    this.events = [];
    this.logLimit = logLimit;
  }

  /**
   * Adds one or more events to the log.
   * If the log exceeds the limit, the oldest events are removed.
   * @param event - The event(s) to add to the log.
   */
  add(...event: GLXEvent[]): void {
    this.events.push(...event);
    while (this.events.length > this.logLimit) {
      this.events.shift();
    }
  }

  /**
   * Retrieves all events from the log.
   * If a sender is specified, only events from that sender are returned.
   * @param sender - Optional sender to filter events by.
   * @returns An array of GLXEvent objects.
   */
  getLogs(sender?: string): GLXEvent[] {
    if (sender) {
      return this.events.filter((event) => event.sender === sender);
    }
    return this.events;
  }
}
