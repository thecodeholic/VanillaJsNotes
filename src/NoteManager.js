import Note from './Note';

export default class NoteManager {
  constructor({el, notes}) {
    this.el = el;
    this.notesEl = null;
    this.notes = notes.map(note => new Note(note, this));

    this.onNoteChange = () => {
    };
    this.createNotesWrapper();
    this.renderNotes();
  }

  addNote(note) {
    this.notes.push(new Note(note, this));
    this.renderNotes();
  }

  prependNote(note) {
    this.notes.unshift(new Note(note, this));
    this.renderNotes();
  }

  removeNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
    this.renderNotes();
  }

  createNotesWrapper() {
    this.notesEl = document.createElement('div');
    this.notesEl.className = 'tc-notes';
    this.el.appendChild(this.notesEl);
  }

  renderNotes() {
    this.notesEl.innerHTML = '';
    this.notes.forEach(note => this.renderNote(note));
  }

  renderNote(note) {
    this.notesEl.appendChild(note.createNoteEl())
  }
}
