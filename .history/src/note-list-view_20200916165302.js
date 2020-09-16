'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList

  };
  
  printList() {
    console.log(this.noteView.notes)      
    var htmlnotes = this.noteView.notes.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")       
    return htmlnotes.join("")    

  };  

};