'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList
    this.htmlView = []

  };
  
  printList() {
    console.log(this.noteView.notes)  
    this.noteView.notes.forEach(({note, html }) => this.htmlView.push("<ul><li><div>" + note + "</div></li></ul>"))

    return htmlView.join("")    

  };  

};