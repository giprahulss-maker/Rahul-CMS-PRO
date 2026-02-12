export class BlockAPI {
  constructor() {
    this.registry = {};
  }

  register(type, config) {
    this.registry[type] = config;
  }

  create(type, data = {}) {
    return this.registry[type].create(data);
  }

  render(node) {
    return this.registry[node.type].render(node);
  }
}
