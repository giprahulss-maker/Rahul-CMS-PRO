export class CrossRefEngine {
  constructor(engine) {
    this.engine = engine;
  }

  buildMap() {
    const map = {};
    let sectionCount = 1;

    this.engine.state.walk(this.engine.doc.data, node => {
      if (node.type === "section") {
        map[node.id] = sectionCount++;
      }
    });

    return map;
  }
}
