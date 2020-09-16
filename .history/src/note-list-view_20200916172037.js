'use strict';

class noteViewHTML {
  
  constructor() {
    this.noteView = new Notelist;
    this.htmlView = this.noteView.notes
  };
  
  printList() {
    var htmlnotes = this.htmlView.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")
    console.log(htmlnotes)     
    return htmlnotes.join("")   
  };  

};