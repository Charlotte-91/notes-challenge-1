function runTests() {

  returnANote()

  function returnANote() {
    var text = 'i am a note'
    var note = new Note(text)
    console.log(note)
    assert.isTrue(note === 'i am a note')
  }
}