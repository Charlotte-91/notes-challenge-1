(function() {
  
  noteListHTML()

  function noteListHTML() {
    view = new noteViewHTML 
    var note = new Note('i am note')
    var notelist = new Notelist
    notelist.addNote(note)
    console.log(view.printList)
    console.log()
    assert.isTrue(view.printList === "<ul><li><div>i am a note</div></li></ul>")
  }

})();