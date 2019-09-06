export class NoteManager {
  constructor({el, notes}) {
    this.el = el;
    this.notes = notes.map(note => new Note(note));

    this.renderNotes();
  }

  addNote(note) {
    this.notes.push(note);
  }

  removeNote(note) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

  renderNotes() {
    this.el.innerHTML = '';
    this.notes.forEach(note => this.renderNote(note));
  }

  renderNote(note) {
    this.el.appendChild(note.getNoteEl())
  }
}

export class Note {

  constructor({title, body}) {
    this.title = title;
    this.body = body;
  }

  static getNoteTpl() {
    return `
        <div class="tc-note">
            <div class="tc-note-header">
                <span>
                    <i class="fas fa-plus"></i>
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

  getNoteEl() {
    let tpl = Note.getNoteTpl();
    tpl = tpl
      .replace('{{title}}', this.title)
      .replace('{{body}}', this.body)
    ;
    const div = document.createElement('div');
    div.innerHTML = tpl;
    return div.children[0];
  }
}
