'use strict';

class noteViewHTML {
  
  constructor() {
    this.noteView;
    this.htmlView = this.noteView
  };

  addNoteList(notelist) {
    this.noteView = notelist
  }
  
  printList() {
    var htmlnotes = this.htmlView.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")
    console.log(htmlnotes)   
    return htmlnotes.join("")   
  };  

};