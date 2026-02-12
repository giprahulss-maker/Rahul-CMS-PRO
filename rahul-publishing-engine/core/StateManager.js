export class StateManager {
  constructor(doc) {
    this.doc = doc;
  }

  updateNode(id, field, value) {
    this.walk(this.doc.data, node => {
      if (node.id === id) {
        node[field] = value;
      }
    });
  }

  walk(node, callback) {
    callback(node);
    if (node.children) {
      node.children.forEach(child =>
        this.walk(child, callback)
      );
    }
  }
}
