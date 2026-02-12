export class HistoryManager {
  constructor(doc) {
    this.doc = doc;
    this.history = [];
    this.future = [];
  }

  save() {
    this.history.push(JSON.stringify(this.doc.data));
    if (this.history.length > 100) this.history.shift();
    this.future = [];
  }

  undo() {
    if (!this.history.length) return;
    this.future.push(JSON.stringify(this.doc.data));
    this.doc.data = JSON.parse(this.history.pop());
  }

  redo() {
    if (!this.future.length) return;
    this.history.push(JSON.stringify(this.doc.data));
    this.doc.data = JSON.parse(this.future.pop());
  }
}
