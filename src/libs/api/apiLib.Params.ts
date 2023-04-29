export class Params {
  value: TObject<string> = {};

  add(params: object) {
    Object.entries(params).forEach(
      ([k, v]) => !(v === void 0 || v === null) && (this.value[k] = v)
    );

    return this;
  }
}
