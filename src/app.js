import './scss/style.scss';
import {Note, NoteManager} from './Note';

const noteManager = new NoteManager({
  el: document.getElementById('notesWrapper'),
  notes: [
    {
      title: 'This is a demo note',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
    {
      title: 'This is a demo note',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
    {
      title: 'This is a demo note',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
    {
      title: 'This is a demo note',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti officiis alias tenetur, tenetur iste maxime laudantium?'
    },
  ]
});
