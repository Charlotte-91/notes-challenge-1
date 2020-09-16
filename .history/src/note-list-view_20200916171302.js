'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList;

  };
  
  printList() {
    console.log(this.noteView.notes)
    console.log(this.noteView.notes[0].newNote);
    var htmlView = []; 
    this.noteView.notes.forEach(({name: html }) => htmlView.push("<ul><li><div>" + html + "</div></li></ul>"))
    console.log(name)
    console.log(html)
    console.log(htmlView)
    return htmlView.join("")    

  };  

};