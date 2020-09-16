'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList
    this.htmlView = []

  };
  
  printList() {
    console.log(this.noteView.notes)  
    this.noteView.notes.forEach(({name, html }) => this.htmlView.push("<ul><li><div>" + note + "</div></li></ul>"))
    

    var htmlnotes =  
    return htmlView.join("")    

  };  

};