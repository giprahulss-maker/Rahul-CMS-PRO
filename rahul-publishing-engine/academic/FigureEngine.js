export class FigureEngine {

  constructor(engine) {
    this.engine = engine;
  }

  generateFigureMap() {
    const map = {};
    let count = 1;

    this.engine.state.walk(this.engine.doc.data, node => {
      if (node.type === "figure") {
        map[node.id] = count++;
      }
    });

    return map;
  }

  exportHTML(node, number) {
    return `
      <figure>
        <img src="${node.src}" />
        <figcaption>Figure ${number}: ${node.caption}</figcaption>
      </figure>
    `;
  }
}
