(function() {
  
  noteListHTML()

  function noteListHTML() {
    var note = new Note()
    note.addNote('i am a note')
    var notelist = new Notelist
    notelist.addNote(note)
    var view = new noteViewHTML()
    console.log(view)
    assert.isTrue(view.printList === "<ul><li><div>i am a note</div></li></ul>")
  }

})();