(function() {
  
  noteListHTML()

  function noteListHTML() {
    var note = new Note('i am note')
    var notelist = new Notelist
    notelist.addNote(note)
    var view = new noteViewHTML()
    assert.isTrue(view.printList === "<ul><li><div>i am a note</div></li></ul>")
  }

})();