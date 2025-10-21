export type StyleMetaProp = [string, string][];
export type StyleMeta = {
  className: string;
  properties: StyleMetaProp;
  description?: string;
  extend?: string[];
  hide?: boolean;
};
export type StyleTableProps = {
  data: StyleMeta[];
  showDescription?: boolean;
};
