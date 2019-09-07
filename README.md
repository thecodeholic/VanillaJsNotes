# Notes app using plain javascript

### Install in your project
```
npm install @thecodeholic/plainjs-notes
```

### Usage
```javascript 1.8
const noteManager = new NoteManager({
  el: document.getElementById('your_wrapper_element_id'),
  notes: [
    {
      title: 'sunt aut facere repellat',
      body: 'uia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
    },
    // ...
  ]
});
```

### Methods

```javascript 1.8
// Add the note at the bottom
noteManager.addNote({
  title: '',
  body: ''
});

// Add the note at the top
noteManager.prependNote({
  title: '',
  body: ''
});

// Remove the first note
noteManager.removeNote(noteManager.notes[0]);

// Update all notes and rerender
noteManager.notes = [...];
noteManager.renderNotes();
```

### Events

```javascript 1.8
noteManager.onNoteAdd = (note) => {
  console.log("Note added ", note);
};
noteManager.onNoteChange = (note) => {
  console.log("Note changed ", note);
};
noteManager.onNoteRemove = (note) => {
  console.log("Note removed ", note);
};
```

-------------------------------------------------


### Installation and view demo
1. Clone the project
2. Go to the project root directory
3. Run `npm install`

### Running on development using [dev server](https://github.com/webpack/webpack-dev-server)

Run `npm run start` to start to webpack dev server with HMR ready

### Build For production 

Run `npm run build` to build project's all assets in `dist` folder.
