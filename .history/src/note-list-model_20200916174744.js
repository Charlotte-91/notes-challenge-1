class Notelist {

  constructor() {
    this.notes = []
  };

  addNote(note) {
    this.notes.push(note)
  };

  viewNotes() {
    return this.notes;
  };
};