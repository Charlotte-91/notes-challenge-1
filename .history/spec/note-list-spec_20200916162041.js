(function() {

  pushingNoteToArray()


  function beforeEach() {
    var note = new Note('i am note')
    var notelist = new Notelist
    notelist.addNote(note)
  }

  function pushingNoteToArray() {
    beforeEach()
    assert.isTrue(notelist.notes.length === 1)
  }

  function returnNotesArray() {
    beforeEach()
    assert.isTrue(notelist.returnNotes === this.notes)
  }
  

})();