(function() {

  returnANote()

  function returnANote() {
    var note = new Note()
    note.addNote('i am a note')
    assert.isTrue( note.returnNote() === 'i am a note')
  }
})();