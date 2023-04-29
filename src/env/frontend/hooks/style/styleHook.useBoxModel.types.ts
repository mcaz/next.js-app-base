export type TComponentRect = Partial<Omit<DOMRectReadOnly, 'toJSON'>>;

export type TRect = TComponentRect & {
  detailedWidth?: number;
  detailedHeight?: number;
};
