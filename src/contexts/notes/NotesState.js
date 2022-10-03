import React from 'react'
import NoteContext from './NoteContext'
import { useState } from 'react';
const NoteState = (props) => {
  const notesIntial = [{
    "_id": "63276ec25d9e7b26b6345797",
    "user": "6321fdd39ab26d93b007cc26",
    "title": "my title",
    "description": "my First testing note used for checking the request",
    "tag": "Manan is a good boy",
    "date": "2022-09-18T19:17:22.363Z",
    "__v": 0
  }
  ];

  const [notes, setNotes] = useState(notesIntial)

  // Add a note
  const addNote = (title, description, tag) =>
  {
    let note= {
      "_id": "632b56ffe2717ac966a13a8d400",
      "user": "6321fdd39ab26d93b007cc264",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-09-21T18:25:03.104Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  // delete the note
  const deleteNote = () => {

  }

  // edit the note
  const editNote = () => {

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children};
    </NoteContext.Provider>
  )


}

export default NoteState;