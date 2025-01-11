class Params {
  protected value: Obj<string> = {};

  set(params: object) {
    Object.entries(params).forEach(([name, value]) => {
      const existsData = !(value === undefined || value === null);

      if (existsData) {
        return (this.value[name] = value);
      }
    });

    return this;
  }

  get json() {
    return this.value;
  }
}

export class BodyParams extends Params {
  get formData() {
    const formData = new FormData();

    for (const name in this.value) {
      formData.append(name, this.value[name]);
    }

    return formData;
  }
}

export class RouteParams extends Params {}
