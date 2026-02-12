export class TOCEngine {

  constructor(engine) {
    this.engine = engine;
  }

  generateTOC() {
    let html = "<h2>Table of Contents</h2><ul>";

    this.engine.state.walk(this.engine.doc.data, node => {
      if (node.type === "section") {
        html += `<li>${node.title}</li>`;
      }
    });

    html += "</ul>";
    return html;
  }
}
