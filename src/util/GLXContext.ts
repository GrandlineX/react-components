export interface LangDataDataElement {
  key: string;
  value: string;
}
export interface LangData {
  code: string;
  label: string;
  data: LangDataDataElement[];
}

export interface GlangClient {
  code: string;
  map: Map<string, string>;
  doneSet: Set<string>;
  get(key: string): string;
  loadLang(lang: LangData): void;
  loadDev(lang: Record<string, string>): void;
  clear(): void;
}

export interface GLXEventLogClient {
  add(event: GLXEvent): void;
  getLogs(): GLXEvent[];
}

export interface WebEmitterClient {
  on<T>(name: string, listener: (d: T) => void): void;
  removeListener(name: string, listenerToRemove: any): void;
  emit<T>(name: string, data: T): void;
}

export type GLXEvent<T = any> = {
  time: number;
  sender: string;
  type: string;
  message?: string;
  data?: T;
};

export type GLXContext = {
  log?: GLXEventLogClient;
  glang?: GlangClient;
  uiEvents?: WebEmitterClient;
  con?: unknown;
};
