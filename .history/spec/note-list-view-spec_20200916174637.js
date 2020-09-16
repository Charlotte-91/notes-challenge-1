(function() {
  
  noteListHTML()

  function noteListHTML() {
    var note = new Note()
    var notelist = new Notelist
    var view = new noteViewHTML()
    note.addNote('i am a note')
    notelist.addNote(note.newNote)
    view.addNoteList(notelist)
    console.log(view.printList())
    assert.isTrue(view.printList === "<ul><li><div>i am a note</div></li></ul>")
  }

})();