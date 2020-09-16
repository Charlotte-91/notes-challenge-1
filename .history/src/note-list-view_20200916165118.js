'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList

  };
  
  printList() {
    console.log(this.noteView)      
    var htmlnotes = this.noteView.map(note =>  "<ul><li><div>" + note + "</div></li></ul>")       
    return htmlnotes.join("")    

  };  

};