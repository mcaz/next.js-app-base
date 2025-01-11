export class DtoBase {
  constructor(data: Partial<DtoBase>) {
    Object.assign(this, data);
  }

  stringify() {
    return DtoBase.stringify(this);
  }

  static stringify(dto: DtoBase | DtoBase[]) {
    return JSON.stringify(dto);
  }

  static parse<T extends DtoBase>(
    this: new (data: Partial<T>) => T,
    str: string
  ) {
    try {
      return new this(JSON.parse(str));
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return null;
    }
  }

  static parseToArray<T extends DtoBase>(
    this: new (data: Partial<T>) => T,
    str?: Nullable<string>
  ) {
    try {
      const parsed = JSON.parse(str || '[]');

      if (!Array.isArray(parsed)) {
        throw new Error('Invalid JSON format: expected an array');
      }

      return parsed.map((dto) => new this(dto));
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return [];
    }
  }

  static from<T extends DtoBase>(
    this: new (data: Partial<T>) => T,
    item: T
  ): T {
    return new this(item);
  }

  static fromArray<T extends DtoBase>(
    this: new (data: Partial<T>) => T,
    items: Nullable<T[]>
  ): T[] {
    return items ? items?.map((item) => new this(item)) : [];
  }
}
