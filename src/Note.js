export default class Note {

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
