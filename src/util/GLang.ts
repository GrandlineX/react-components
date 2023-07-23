export interface LangDataDataElement {
  key: string;
  value: string;
}
export interface LangData {
  code: string;
  label: string;
  data: LangDataDataElement[];
}
export class GLang {
  code: string;

  map: Map<string, string>;

  constructor(langDat: LangData | null) {
    this.code = '';
    this.map = new Map<string, string>();
    if (langDat) {
      this.loadLang(langDat);
    }
    const win = window as any;
    if (win && !win.missingTrans) {
      win.missingTrans = new Set<string>();
      win.getMissingTrans = () => {
        const missingTrans = win.missingTrans as Set<string>;
        const out: Record<string, string> = {};
        missingTrans.forEach((val) => {
          out[val] = '';
        });
        console.log(out);
      };
    }
  }

  getMissingSet() {
    const win = window as any;
    if (win && win.missingTrans) {
      return win.missingTrans as Set<string>;
    }
    return null;
  }

  clear() {
    this.map.clear();
  }

  loadLang(lang: LangData): void {
    this.code = lang.code;
    lang.data.forEach(({ key, value }) => {
      this.map.set(key, value);
    });
  }

  loadDev(lang: Record<string, string>): void {
    Object.keys(lang).forEach((key) => {
      this.map.set(key, lang[key]);
    });
  }

  get(key: string): string {
    return this.translate(key);
  }

  private translate(key: string): string {
    const set = this.getMissingSet();

    if (this.map.has(key)) {
      if (set && set.has(key)) {
        set.delete(key);
      }
      return this.map.get(key) || '';
    }
    if (set && !set.has(key)) {
      set.add(key);
      console.warn(`+Missing translation: ${key}`);
    }
    if (!set) {
      console.warn(`-Missing translation: ${key}`);
    }

    return key;
  }
}
