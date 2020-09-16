(function() {
  
  noteListHTML()

  function noteListHTML() {
    view = new noteViewHTML 
    var note = new Note('i am note')
    var notelist = new Notelist
    notelist.addNote(note)
  }





})();