'use strict';

class noteViewHTML {
  
  constructor() {
    this.noteView;
  };

  addNoteList(notelist) {
    this.noteView = notelist
  }
  
  printList() {
    var htmlnotes = this.noteView.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")
    console.log(htmlnotes)   
    return htmlnotes.join("")
  };  

};