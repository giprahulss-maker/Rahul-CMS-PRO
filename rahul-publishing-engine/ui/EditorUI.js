import { DocumentModel } from "../core/DocumentModel.js";
import { Renderer } from "../core/Renderer.js";

class PublishingEngine {

  constructor(){
    this.doc = new DocumentModel();
    this.renderer = new Renderer(this);

    this.initialize();
  }

  initialize(){
    this.doc.data.children.push({
      type:"chapter",
      id:"ch-1",
      title:"Chapter 1",
      children:[
        {
          type:"paragraph",
          id:"p-1",
          content:"Start writing..."
        }
      ]
    });

    this.renderer.render();
  }

}

new PublishingEngine();
