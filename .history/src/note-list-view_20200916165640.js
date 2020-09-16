'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList
    this.htmlView = []

  };
  
  printList() {
    console.log(this.noteView.notes)  
    this.noteView.notes.forEach(({name, html }))
    

    var htmlnotes = this.noteView.notes.forEach(note =>  "<ul><li><div>" + note + "</div></li></ul>")       
    return htmlnotes.join("")    

  };  

};