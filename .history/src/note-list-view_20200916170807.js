'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList;

  };
  
  printList() {
    console.log(this.noteView.notes)
    var htmlView = []; 
    this.noteView.notes.map(({name: html }) => console.log(html)) // htmlView.push("<ul><li><div>" + html + "</div></li></ul>"))
    console.log(name)
    console.log(html)
    console.log(htmlView)
    return htmlView.join("")    

  };  

};