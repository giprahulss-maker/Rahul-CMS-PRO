class BlockAPI {

  constructor(){
    this.registry = {};
  }

  register(type, config){
    this.registry[type] = {
      create: config.create,
      render: config.render,
      exportHTML: config.exportHTML,
      exportMarkdown: config.exportMarkdown,
      settings: config.settings || {}
    };
  }

  create(type, data){
    return this.registry[type].create(data);
  }

  render(block, index){
    return this.registry[block.type].render(block, index);
  }

  exportHTML(block){
    return this.registry[block.type].exportHTML(block);
  }

}
