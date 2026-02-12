export class MarkdownExporter {

  constructor(engine) {
    this.engine = engine;
  }

  export() {
    let md = "";

    this.engine.state.walk(this.engine.doc.data, node => {

      if (node.type === "chapter") {
        md += `# ${node.title}\n\n`;
      }

      if (node.type === "section") {
        md += `${"#".repeat(node.level)} ${node.title}\n\n`;
      }

      if (node.type === "paragraph") {
        md += `${node.content}\n\n`;
      }

      if (node.type === "figure") {
        md += `![${node.caption}](${node.src})\n\n`;
      }

    });

    return md;
  }
}
