import React from 'react'
import NoteContext from './NoteContext'
import { useState } from 'react';
import swal from 'sweetalert'

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesIntial = [];
  const [notes, setNotes] = useState(notesIntial)

  // get All notes
  const getNotes = async () => {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMWZkZDM5YWIyNmQ5M2IwMDdjYzI2In0sImlhdCI6MTY2MzUyNDA0NH0.5z2AU9S4KrRORXgtyBC3bckqmkDxt0VlBN6ahPrvLy4',
        },
      });

      const json= await response.json();
      setNotes(json);
  }
  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMWZkZDM5YWIyNmQ5M2IwMDdjYzI2In0sImlhdCI6MTY2MzUyNDA0NH0.5z2AU9S4KrRORXgtyBC3bckqmkDxt0VlBN6ahPrvLy4',
      },
      body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
    });
    const result = await swal({
      title: "Are you sure want to Add this Note ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (result) {
      const note = await response.json();
      setNotes(notes.concat(note));
      swal({
        title: "Note Added Successfully",
        icon: "success"
      })
    }

    return result;
  }

  // delete the note

  const deleteNote = async (id) => {
    // to API Call for deleting the note from the backend.

    const boolvalue = await swal({
      title: "Are you sure?",
      text: "Once deleted you will not be Able to recover this note",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (boolvalue) {
      const newNotes = notes.filter((note) => { return note._id != id });
      setNotes(newNotes);
      const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMWZkZDM5YWIyNmQ5M2IwMDdjYzI2In0sImlhdCI6MTY2MzUyNDA0NH0.5z2AU9S4KrRORXgtyBC3bckqmkDxt0VlBN6ahPrvLy4',
        },
        // body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
      });
      const json = response.json();
      swal({
        title: "Note Successfully Deleted",
        icon: "success"
      });
    }



  }

  // edit the note
  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMWZkZDM5YWIyNmQ5M2IwMDdjYzI2In0sImlhdCI6MTY2MzUyNDA0NH0.5z2AU9S4KrRORXgtyBC3bckqmkDxt0VlBN6ahPrvLy4',
      },
      body: JSON.stringify({title, description,tag}) // body data type must match "Content-Type" header
    });
    const json = response.json();
    // logic to edit the client.

    let NewNotes= JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = NewNotes[index];
      if (element._id === id) {
        NewNotes[index].title = title;
        NewNotes[index].description = description;
        NewNotes[index].tag = tag
        break;
      }



    }
    console.log(NewNotes,id);
    setNotes(NewNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children};
    </NoteContext.Provider>
  )


}

export default NoteState;