'use strict';

class noteViewHTML {
  
  constructor(noteList) {
    this.noteView = noteList;

  };
  
  printList() {
    console.log(this.noteView[0].key1);
    console.log(this.noteView.notes)
    var htmlView = []; 
    this.noteView.notes.forEach(({name: html }) => console.log(arr[0].key1);) // htmlView.push("<ul><li><div>" + html + "</div></li></ul>"))
    console.log(name)
    console.log(html)
    console.log(htmlView)
    return htmlView.join("")    

  };  

};