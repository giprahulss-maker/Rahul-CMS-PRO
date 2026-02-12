export class Sidebar {
  constructor(engine) {
    this.engine = engine;
  }

  render() {
    return `
      <button onclick="window.engine.addChapter()">+ Chapter</button>
      <button onclick="window.engine.addParagraph()">+ Paragraph</button>
    `;
  }
}
