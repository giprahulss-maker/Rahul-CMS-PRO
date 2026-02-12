export class EPUBExporter {

  constructor(engine) {
    this.engine = engine;
  }

  generateXHTML() {
    let body = "";

    this.engine.state.walk(this.engine.doc.data, node => {

      if (node.type === "chapter") {
        body += `<h1>${node.title}</h1>`;
      }

      if (node.type === "section") {
        body += `<h${node.level}>${node.title}</h${node.level}>`;
      }

      if (node.type === "paragraph") {
        body += `<p>${node.content}</p>`;
      }

    });

    return `
      <html xmlns="http://www.w3.org/1999/xhtml">
      <body>
      ${body}
      </body>
      </html>
    `;
  }

}
