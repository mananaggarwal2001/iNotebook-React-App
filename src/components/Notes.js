import React from 'react'
import { useContext } from 'react';
import NoteContext from '../contexts/notes/NoteContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const fetchedNotes=  useContext(NoteContext);
    const {Notes ,setNotes}= fetchedNotes;
    return (
        <div className="row my-3">

            <h3>Your Notes</h3>
            {Notes.map((note) => {
                return <NoteItem key={note._id} note={note}/>;
            })}
        </div>
    )
}

export default Notes;
