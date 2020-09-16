'use strict;';

class Note {

  constructor() {
    this.newNote;
  };
   
  addNote(text) {
    this.newNote = text;
  };

  returnNote() {
   return this.newNote
  }
};