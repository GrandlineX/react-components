export type LocalStorageEvent = 'update' | 'flag-update';
export default class LocalStorage {
  static events: Map<string, any[]> = new Map();

  static on<T>(name: LocalStorageEvent, listener: (d: T) => void) {
    if (!this.events.has(name)) {
      this.events.set(name, []);
    }

    this.events.get(name)?.push(listener);
  }

  static removeListener(name: LocalStorageEvent, listenerToRemove: any) {
    if (!this.events.has(name)) {
      throw new Error(
        `Can't remove a listener. Event "${name}" doesn't exits.`,
      );
    }

    const filterListeners = (listener: any) => listener !== listenerToRemove;

    const ev = this.events.get(name)?.filter(filterListeners) || [];
    this.events.set(name, ev);
  }

  private static emit<T>(name: LocalStorageEvent, data: T) {
    if (this.events.has(name)) {
      const fireCallbacks = (callback: (data: T) => void) => {
        callback(data);
      };

      this.events.get(name)?.forEach(fireCallbacks);
    }
  }

  static save(key: string, val: string) {
    window.localStorage.setItem(key, val);
    this.emit('update', key);
  }

  static load(key: string, defaultValue = '') {
    return window.localStorage.getItem(key) || defaultValue;
  }

  static jsonSave<T = any>(key: string, val: T) {
    try {
      this.save(key, JSON.stringify(val));
      return true;
    } catch (e) {
      return false;
    }
  }

  static jsonLoad<T = any>(key: string): T | null {
    try {
      return JSON.parse(this.load(key));
    } catch (e) {
      return null;
    }
  }

  static flagSave(key: string, val: boolean) {
    this.save(key, val ? 'true' : 'false');
    this.emit('flag-update', key);
  }

  static flagLoad(key: string) {
    return this.load(key, 'false') === 'true';
  }

  static delete(key: string) {
    window.localStorage.removeItem(key);
    this.emit('update', key);
  }
}
