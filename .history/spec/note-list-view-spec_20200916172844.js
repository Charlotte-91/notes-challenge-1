(function() {
  
  noteListHTML()

  function noteListHTML() {
    var note = new Note()
    var noteadded = note.addNote('i am a note')
    var notelist = new Notelist
    notelist.addNote(noteadded)
    var view = new noteViewHTML()
    assert.isTrue(view.printList === "<ul><li><div>i am a note</div></li></ul>")
  }

})();