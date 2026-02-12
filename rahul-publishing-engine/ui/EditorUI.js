import { DocumentModel } from "../core/DocumentModel.js";
import { Renderer } from "../core/Renderer.js";
import { StateManager } from "../core/StateManager.js";
import { HistoryManager } from "../core/HistoryManager.js";
import { Sidebar } from "./Sidebar.js";

class PublishingEngine {

  constructor() {
    this.doc = new DocumentModel();
    this.state = new StateManager(this.doc);
    this.history = new HistoryManager(this.doc);
    this.sidebar = new Sidebar(this);
    this.renderer = new Renderer(this);

    window.engine = this; // expose globally for buttons

    this.initialize();
  }

  initialize() {
    this.doc.data.children.push({
      type: "chapter",
      id: "ch-1",
      title: "Chapter 1",
      children: [
        {
          type: "paragraph",
          id: "p-1",
          content: "Start writing..."
        }
      ]
    });

    this.renderer.render();
  }

  addChapter() {
    this.history.save();
    this.doc.data.children.push({
      type: "chapter",
      id: "ch-" + Date.now(),
      title: "New Chapter",
      children: []
    });
    this.renderer.render();
  }

  addParagraph() {
    const chapter = this.doc.data.children[0];
    if (!chapter) return;

    this.history.save();
    chapter.children.push({
      type: "paragraph",
      id: "p-" + Date.now(),
      content: "New paragraph..."
    });

    this.renderer.render();
  }
}

new PublishingEngine();
