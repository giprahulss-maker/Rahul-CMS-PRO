export class Renderer {
  constructor(engine) {
    this.engine = engine;
  }

  render() {
    const container = document.getElementById("app");
    container.innerHTML = this.renderNode(this.engine.doc.data);
  }

  renderNode(node) {
if (node.type === "section") {
  return `
    <div class="node">
      <h${node.level}
          contenteditable="true"
          data-id="${node.id}">
          ${node.title}
      </h${node.level}>
      ${node.children.map(n => this.renderNode(n)).join("")}
    </div>
  `;
}
    if (node.type === "document") {
      return `
        <div class="topbar">
          <strong>${node.meta.title}</strong>
        </div>
        <div class="layout">
          <div class="sidebar">
            ${this.engine.sidebar.render()}
          </div>
          <div class="canvas">
            ${node.children.map(n => this.renderNode(n)).join("")}
          </div>
        </div>
      `;
    }

    if (node.type === "chapter") {
      return `
        <div class="node">
          <h1 contenteditable="true" data-id="${node.id}">
            ${node.title}
          </h1>
          ${node.children.map(n => this.renderNode(n)).join("")}
        </div>
      `;
    }

    if (node.type === "paragraph") {
      return `
        <p contenteditable="true" data-id="${node.id}">
          ${node.content}
        </p>
      `;
    }

    return "";
  }
}
