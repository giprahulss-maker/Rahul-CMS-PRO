export class PluginLoader {

  constructor(engine) {
    this.engine = engine;
    this.plugins = [];
  }

  register(plugin) {
    if (plugin.init) plugin.init(this.engine);
    this.plugins.push(plugin);
  }
}
