'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList

  };
  
  printList() {      
    var htmlnotes = this.myNotes.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")       
    return htmlnotes.join("")    

  };  

};