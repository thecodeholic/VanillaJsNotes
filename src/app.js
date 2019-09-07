import './scss/style.scss';
import NoteManager from './NoteManager';

const noteManager = new NoteManager({
  el: document.getElementById('notesWrapper'),
  notes: [
    {
      title: 'sunt aut facere repellat',
      body: 'uia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      title: 'qui est esse',
      body: 'est rerum tempore vitae<br>nsequi sint nihil reprehenderit dolor beatae ea dolores neque <br>fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis<br>qui aperiam non debitis possimus qui neque nisi nulla'
    },
    {
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est'
    },
    {
      title: 'This is a demo note',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
    {
      title: 'qui est esse',
      body: 'est rerum tempore vitae<br>nsequi sint nihil reprehenderit dolor beatae ea dolores neque <br>fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis<br>qui aperiam non debitis possimus qui neque nisi nulla'
    },
  ]
});

noteManager.onNoteAdd = (note) => {
  console.log("Note added", note);
};
noteManager.onNoteChange = (note) => {
  console.log("Note changed", note);
};
noteManager.onNoteRemove = (note) => {
  console.log("Note removed ", note);
};

const newNoteBtn = document.querySelector('.new-note-btn');
newNoteBtn.onclick = () => {
  noteManager.prependNote({
    title: '',
    body: ''
  })
};
