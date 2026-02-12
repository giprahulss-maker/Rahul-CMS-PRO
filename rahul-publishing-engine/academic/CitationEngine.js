export class CitationEngine {

  constructor(engine, db) {
    this.engine = engine;
    this.db = db;
  }

  generateCitationMap() {
    const map = {};
    let count = 1;

    this.engine.state.walk(this.engine.doc.data, node => {
      if (node.type === "citation-ref") {
        if (!map[node.refId]) {
          map[node.refId] = count++;
        }
      }
    });

    return map;
  }

  exportInText(node, map) {
    return `<sup>[${map[node.refId]}]</sup>`;
  }

  generateBibliography(map) {
    let html = "<h2>References</h2><ol>";

    Object.entries(map).forEach(([refId, number]) => {
      const c = this.db.get(refId);
      if (!c) return;

      html += `
        <li>
          ${c.author}. ${c.title}.
          <i>${c.journal}</i>.
          ${c.year};${c.volume}:${c.pages}.
        </li>
      `;
    });

    html += "</ol>";
    return html;
  }
}
