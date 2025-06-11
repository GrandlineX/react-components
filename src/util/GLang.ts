import { addGLXField, getGLXField } from './GlxHelper';
import { GlangClient, LangData } from './GLXContext';

/**
 * GLang class for managing language data.
 */
export default class GLang implements GlangClient {
  code: string;

  map: Map<string, string>;

  doneSet = new Set<string>();

  isDev: boolean;

  /**
   * Creates an instance of GLang.
   * @param langDat - The language data to load.
   * @param isDev - Whether the instance is in development mode.
   */
  constructor(langDat: LangData | null, isDev = false) {
    this.code = '';
    this.map = new Map<string, string>();
    this.isDev = isDev;
    if (langDat) {
      this.loadLang(langDat);
    }
    addGLXField('glang', this);
  }

  /**
   * Clears the language map.
   */
  clear() {
    this.map.clear();
  }

  /**
   * Loads a language data object into the GLang instance.
   * @param lang - The language data to load.
   */
  loadLang(lang: LangData): void {
    this.code = lang.code;
    lang.data.forEach(({ key, value }) => {
      this.map.set(key, value);
    });
  }

  /**
   * Loads a development language object into the GLang instance.
   * @param lang - The development language object to load, where keys are strings and values are translations.
   */
  loadDev(lang: Record<string, string>): void {
    Object.keys(lang).forEach((key) => {
      this.map.set(key, lang[key]);
    });
  }

  /**
   * Retrieves a translation for a given key.
   * If the key is not found, it returns the key itself.
   * @param key - The key to retrieve the translation for.
   * @returns The translation string or the key if not found.
   */
  get(key: string): string {
    const t = this.map.get(key);
    if (!this.doneSet.has(key) && t !== undefined) {
      this.doneSet.add(key);
    }
    if (this.isDev && !t) {
      getGLXField('log')?.add({
        time: Date.now(),
        sender: 'glang',
        type: 'missing',
        message: `Key "${key}" is missing in GLang map.`,
      });
    }
    return t || key;
  }
}
