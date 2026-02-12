export class CitationDB {
  constructor() {
    this.citations = [];
  }

  add(citation) {
    citation.id = "cite-" + Date.now();
    this.citations.push(citation);
  }

  get(id) {
    return this.citations.find(c => c.id === id);
  }
}
