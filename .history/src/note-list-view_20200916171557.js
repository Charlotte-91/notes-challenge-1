'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList;
    this.htmlView = []
  };
  
  printList() {
    console.log(this.noteView.notes)
    console.log(this.noteView.notes[0].newNote);
    this.noteView.notes.forEach(({name: html }) => htmlView.push("<ul><li><div>" + html + "</div></li></ul>"))
    console.log(name)
    console.log(html)
    console.log(htmlView)
    return htmlView.join("")    

  };  

};