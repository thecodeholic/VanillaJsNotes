export class NoteManager {
  constructor({el, notes}) {
    this.el = el;
    this.notesEl = null;
    this.notes = notes.map(note => new Note(note, this));

    this.onNoteChange = () => {};
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

  createNotesWrapper(){
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

export class Note {

  constructor({title, body}, noteManager) {
    this.el = null;
    this.title = title;
    this.body = body;
    this.noteManager = noteManager;
  }

  static getNoteTpl() {
    return `
        <div class="tc-note">
            <div class="tc-note-header">
                <span class="tc-note-close">
                    <i class="fas fa-times"></i>
                </span>
            </div>
            <div class="tc-note-title" contenteditable="">
                {{title}}
            </div>
            <div class="tc-note-body" contenteditable="">
                {{body}}
            </div>
        </div>`;
  }

  createNoteEl() {
    let tpl = Note.getNoteTpl();
    tpl = tpl
      .replace('{{title}}', this.title)
      .replace('{{body}}', this.body)
    ;
    const div = document.createElement('div');
    div.innerHTML = tpl;
    this.el = div.children[0];
    this.attachEventListeners();
    return this.el;
  }

  attachEventListeners(){
    const btnClose = this.el.querySelector('.tc-note-close');
    btnClose.onclick = () => {
      this.noteManager.removeNote(this);
    };
    const title = this.el.querySelector('.tc-note-title');
    title.oninput = (ev) => {
      this.title = ev.target.innerText;
      this.noteManager.onNoteChange(this);
    };
    const body = this.el.querySelector('.tc-note-body');
    body.oninput = (ev) => {
      this.body = ev.target.innerText;
      this.noteManager.onNoteChange(this);
    }
  }
}
